{% extends "data_loaders/default.jinja" %}
{% block imports %}
from mage_ai.data_preparation.repo_manager import get_repo_path
from mage_ai.io.minio_loader import MINIO
from os import path
{{ super() -}}
{% endblock %}


{% block content %}
@data_loader
def load_from_Minio_bucket(*args, **kwargs):
    """
    Template for loading data from a Minio bucket.
    Specify your configuration settings in 'io_config.yaml'.

    Docs: https://docs.mage.ai/design/data-loading#s3
    """
    endpoint =  'your_endpoint'

    bucket_name = 'your_bucket_name'
    object_key = 'your_object_key'

    return MINIO(endpoint=endpoint,access_key='',secret_key='').load(
        bucket_name,
        object_key,
    )
{% endblock %}
