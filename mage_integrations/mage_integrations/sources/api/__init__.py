from collections import Counter
from mage_integrations.sources.base import Source, main
from mage_integrations.sources.catalog import Catalog, CatalogEntry
from mage_integrations.sources.constants import (
    COLUMN_TYPE_ARRAY,
    COLUMN_TYPE_OBJECT,
    COLUMN_TYPE_STRING,
    REPLICATION_METHOD_FULL_TABLE,
    UNIQUE_CONFLICT_METHOD_UPDATE,
)
from mage_integrations.sources.utils import get_standard_metadata
from mage_integrations.transformers.utils import convert_data_type, infer_dtypes
from mage_integrations.utils.dictionary import dig
from singer.schema import Schema
from typing import Dict, Generator, List
from urllib.parse import parse_qs, urlencode, urlsplit
import pandas as pd
import magic
import polars
from io import BytesIO, StringIO
import types


class Api(Source):
    @property
    def http_method(self):
        return 'post' if self.config.get('method', 'GET').upper() == 'POST' else 'get'

    def discover(self, streams: List[str] = None) -> Catalog:
        streams = []

        if isinstance(type(self.load_data()), types.GeneratorType) is False:
            stream_id = 'api'

            df = self.load_data().to_pandas()

            properties = {}
            for col in df.columns:
                df_filtered = df[df[col].notnull()][[col]]

                for k, v in infer_dtypes(df_filtered).items():
                    if 'mixed' == v:
                        counter = Counter(map(type, df_filtered[col].values))
                        dtype, count = sorted(
                            [(k, v) for k, v in dict(counter).items()],
                            key=lambda t: t[1],
                            reverse=True,
                        )[0]

                        if dtype is list:
                            col_type = COLUMN_TYPE_ARRAY
                        elif dtype is dict:
                            col_type = COLUMN_TYPE_OBJECT
                        else:
                            col_type = COLUMN_TYPE_STRING
                    else:
                        col_type = convert_data_type(v)
                    properties[k] = dict(
                        type=[
                            'null',
                            col_type,
                        ],
                    )

            schema = Schema.from_dict(dict(
                properties=properties,
                type='object',
            ))

            metadata = get_standard_metadata(
                key_properties=[],
                replication_method=REPLICATION_METHOD_FULL_TABLE,
                schema=schema.to_dict(),
                stream_id=stream_id,
            )
            catalog_entry = CatalogEntry(
                key_properties=[],
                metadata=metadata,
                replication_method=REPLICATION_METHOD_FULL_TABLE,
                schema=schema,
                stream=stream_id,
                tap_stream_id=stream_id,
                unique_conflict_method=UNIQUE_CONFLICT_METHOD_UPDATE,
            )

            streams.append(catalog_entry)

            return Catalog(streams) 
        for rows in self.load_data():
            if len(rows) >= 1:
                stream_id = 'api'

                df = pd.DataFrame(rows)

                properties = {}
                for col in df.columns:
                    df_filtered = df[df[col].notnull()][[col]]

                    for k, v in infer_dtypes(df_filtered).items():
                        if 'mixed' == v:
                            counter = Counter(map(type, df_filtered[col].values))
                            dtype, count = sorted(
                                [(k, v) for k, v in dict(counter).items()],
                                key=lambda t: t[1],
                                reverse=True,
                            )[0]

                            if dtype is list:
                                col_type = COLUMN_TYPE_ARRAY
                            elif dtype is dict:
                                col_type = COLUMN_TYPE_OBJECT
                            else:
                                col_type = COLUMN_TYPE_STRING
                        else:
                            col_type = convert_data_type(v)
                        properties[k] = dict(
                            type=[
                                'null',
                                col_type,
                            ],
                        )

                schema = Schema.from_dict(dict(
                    properties=properties,
                    type='object',
                ))

                metadata = get_standard_metadata(
                    key_properties=[],
                    replication_method=REPLICATION_METHOD_FULL_TABLE,
                    schema=schema.to_dict(),
                    stream_id=stream_id,
                )
                catalog_entry = CatalogEntry(
                    key_properties=[],
                    metadata=metadata,
                    replication_method=REPLICATION_METHOD_FULL_TABLE,
                    schema=schema,
                    stream=stream_id,
                    tap_stream_id=stream_id,
                    unique_conflict_method=UNIQUE_CONFLICT_METHOD_UPDATE,
                )

                streams.append(catalog_entry)

        return Catalog(streams)

    def __deal_with_google_sheets(self, response, separator, header):
        url = self.config['url']

        if url.endswith('output=csv'):
            df = polars.read_csv(StringIO(response.content.decode()), separator=separator,
                                 has_header=header)
            return df
        elif url.endswith('output=tsv'):
            df = polars.read_csv(StringIO(response.content.decode()), separator='\t',
                                 has_header=header)
            return df
        elif url.endswith('output=xlsx'):
            df = polars.read_excel(BytesIO(response.content),
                                   read_csv_options={"separator": separator, "has_header": header})
            return df
        else:
            raise Exception('Extension not allowed, please use CSV,TSV or XLSX')

    def __check_response_type(self, response):
        """This function checks the type of response for:
        CSV,TSV,Excel file or JSON

        Args:
            response (Response): Response from given request
        """

        #TODO add google sheets support cuz probably the normal use case
        #TODO add separator config to distinguish between CSV or TSV or specific (default to ,)
        #TODO add has_header param

        url = self.config['url']

        separator = self.config.get('separator')
        if separator is None:
            separator = ','

        header = self.config.get('has_header')
        if header is None:
            header = False

        if url.startswith('https://docs.google'):
            df = self._deal_with_google_sheets(response, separator, header)
            return df

        data = response.content
        mime_type = magic.Magic(mime=True).from_buffer(data)
        if mime_type == 'text/plain':
            df = polars.read_csv(StringIO(data.decode()), separator=separator,
                                 has_header=header)
            return df

        elif mime_type == 'application/json':
            return 'json'
        else:
            try:
                df = polars.read_excel(BytesIO(data),
                                       read_csv_options={"separator": separator,
                                       "has_header": header})
                return df
            except Exception:
                raise Exception(f'Problems reading file {mime_type}. Check if extension is XLSX')

    def __build_response(self):
        url = self.config['url']
        query = self.config.get('query')
        payload = self.config.get('payload')
        headers = {
            'user-agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) \
             Chrome/86.0.4240.111 Safari/537.36',
        }
        headers.update(self.config.get('headers', {}))

        tags = dict(
            headers=headers,
            method=self.http_method,
            payload=payload,
            query=query,
            url=url,
        )

        if query:
            query_string = urlsplit(url).query
            query_existing = parse_qs(query_string) or {}
            query_existing.update(query)
            query_string_new = urlencode(query_existing)
            base = url.split('?')[0]
            url = f'{base}?{query_string_new}'

        self.logger.info(f'API request {self.http_method} {url} started.', tags=tags)

        import requests
        s = requests.Session()
        a = requests.adapters.HTTPAdapter(max_retries=100)
        b = requests.adapters.HTTPAdapter(max_retries=100)
        s.mount('http://', a)
        s.mount('https://', b)

        return getattr(s, self.http_method)(
            url,
            data=payload,
            headers=headers,
            timeout=12,
            verify=False,
        )

    def load_data(
        self,
        *args,
        **kwargs,
    ) -> Generator[List[Dict], None, None]:
        url = self.config['url']
        response_parser = self.config.get('response_parser')
        columns = self.config.get('columns')

        response = self.__build_response()

        checked_type = self._check_response_type(response)

        if type(checked_type) != str:
            return checked_type

        else:
            result = response.json()

            if response_parser:
                result = dig(result, response_parser)

            sample = None
            requires_columns = False
            if result and len(result) >= 1:
                sample = result[0]
                requires_columns = type(sample) is not dict

            rows = []

            if requires_columns:
                if not columns or len(columns) == 0:
                    col_length = 0
                    if type(sample) is list:
                        max_length = 0

                        for item in result:
                            if item:
                                length = len(item)
                                if length > max_length:
                                    max_length = length
                                    sample = item

                        col_length = len(sample)
                    else:
                        col_length = 1
                    columns = [f'col{i}' for i in range(col_length)]

                for item in result:
                    if type(item) is not list:
                        item = [item]
                    rows.append({col: item[idx] if len(item) > idx else None
                                for idx, col in enumerate(columns)})
            else:
                rows = result

            self.logger.info(f'API request {self.http_method} {url} completed.')

            yield rows

    def test_connection(self):
        response = self.__build_response()
        if response.status_code != 200:
            raise Exception(f'API response status code is {response.status_code}, must be 200.')


if __name__ == '__main__':
    main(Api)
