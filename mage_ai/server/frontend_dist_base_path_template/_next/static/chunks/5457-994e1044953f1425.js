"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5457],{94629:function(e,n,r){r.d(n,{Z:function(){return j}});var t=r(82394),i=r(21831),o=r(82684),u=r(50724),s=r(82555),l=r(97618),c=r(70613),a=r(59696),d=r(68899),f=r(28598);function p(e,n){var r=e.children,t=e.noPadding;return(0,f.jsx)(d.HS,{noPadding:t,ref:n,children:r})}var h=o.forwardRef(p),b=r(62547),g=r(82571),O=r(35686),v=r(98464),S=r(46684),I=r(70515),P=r(53808),m=r(19183);function E(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function T(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?E(Object(r),!0).forEach((function(n){(0,t.Z)(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):E(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function N(e,n){var r,t=e.addProjectBreadcrumbToCustomBreadcrumbs,p=e.after,E=e.afterHidden,N=e.afterWidth,j=e.afterWidthOverride,k=e.before,y=e.beforeWidth,M=e.breadcrumbs,R=e.children,_=e.errors,A=e.headerMenuItems,Z=e.headerOffset,x=e.mainContainerHeader,C=e.navigationItems,w=e.setErrors,G=e.subheaderChildren,L=e.subheaderNoPadding,B=e.title,D=e.uuid,H=(0,m.i)().width,Y="dashboard_after_width_".concat(D),U="dashboard_before_width_".concat(D),W=(0,o.useRef)(null),K=(0,o.useState)(j?N:(0,P.U2)(Y,N)),F=K[0],q=K[1],z=(0,o.useState)(!1),V=z[0],Q=z[1],$=(0,o.useState)(k?Math.max((0,P.U2)(U,y),13*I.iI):null),J=$[0],X=$[1],ee=(0,o.useState)(!1),ne=ee[0],re=ee[1],te=(0,o.useState)(null)[1],ie=O.ZP.projects.list({},{revalidateOnFocus:!1}).data,oe=null===ie||void 0===ie?void 0:ie.projects,ue={label:function(){var e;return null===oe||void 0===oe||null===(e=oe[0])||void 0===e?void 0:e.name},linkProps:{href:"/"}},se=[];M?(t&&se.push(ue),se.push.apply(se,(0,i.Z)(M))):(null===oe||void 0===oe?void 0:oe.length)>=1&&se.push.apply(se,[ue,{bold:!0,label:function(){return B}}]),(0,o.useEffect)((function(){null===W||void 0===W||!W.current||V||ne||null===te||void 0===te||te(W.current.getBoundingClientRect().width)}),[V,F,ne,J,W,te,H]),(0,o.useEffect)((function(){V||(0,P.t8)(Y,F)}),[E,V,F,Y]),(0,o.useEffect)((function(){ne||(0,P.t8)(U,J)}),[ne,J,U]);var le=(0,v.Z)(N);return(0,o.useEffect)((function(){j&&le!==N&&q(N)}),[j,N,le]),(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(c.Z,{title:B}),(0,f.jsx)(a.Z,{breadcrumbs:se,menuItems:A,project:null===oe||void 0===oe?void 0:oe[0],version:null===oe||void 0===oe||null===(r=oe[0])||void 0===r?void 0:r.version}),(0,f.jsxs)(d.Nk,{ref:n,children:[0!==(null===C||void 0===C?void 0:C.length)&&(0,f.jsx)(d.lm,{showMore:!0,children:(0,f.jsx)(g.Z,{navigationItems:C,showMore:!0})}),(0,f.jsx)(l.Z,{flex:1,flexDirection:"column",children:(0,f.jsxs)(b.Z,{after:p,afterHeightOffset:S.Mz,afterHidden:E,afterMousedownActive:V,afterWidth:F,before:k,beforeHeightOffset:S.Mz,beforeMousedownActive:ne,beforeWidth:d.k1+(k?J:0),headerOffset:Z,hideAfterCompletely:!0,leftOffset:k?d.k1:null,mainContainerHeader:x,mainContainerRef:W,setAfterMousedownActive:Q,setAfterWidth:q,setBeforeMousedownActive:re,setBeforeWidth:X,children:[G&&(0,f.jsx)(h,{noPadding:L,children:G}),R]})})]}),_&&(0,f.jsx)(u.Z,{disableClickOutside:!0,isOpen:!0,onClickOutside:function(){return null===w||void 0===w?void 0:w(null)},children:(0,f.jsx)(s.Z,T(T({},_),{},{onClose:function(){return null===w||void 0===w?void 0:w(null)}}))})]})}var j=o.forwardRef(N)},28795:function(e,n,r){var t;r.d(n,{B:function(){return i},M:function(){return t}}),function(e){e.BACKFILLS="backfills",e.BLOCK_RUNS="block_runs",e.DASHBOARD="dashboard",e.EDIT="edit",e.MONITOR="monitor",e.PIPELINE_LOGS="pipeline_logs",e.PIPELINE_RUNS="pipeline_runs",e.RUNS="runs",e.SETTINGS="settings",e.SYNCS="syncs",e.TRIGGERS="triggers"}(t||(t={}));var i="cancel_all_running_pipeline_runs"},75457:function(e,n,r){r.d(n,{Z:function(){return y}});var t=r(82394),i=r(21831),o=r(82684),u=r(34376),s=r(50724),l=r(94629),c=r(15338),a=r(82555),d=r(55485),f=r(85854),p=r(38276),h=r(35686),b=r(38626),g=r(44897),O=r(42631),v=r(70515),S=b.default.div.withConfig({displayName:"indexstyle__BannerStyle",componentId:"sc-1te3pmf-0"})(["border-radius:","px;padding:","px;"," "," ",""],O.n_,3*v.iI,(function(e){return"\n    box-shadow: ".concat((e.theme.shadow||g.Z.shadow).small,";\n  ")}),(function(e){return e.background&&"\n    background: ".concat(e.background,";\n  ")}),(function(e){return e.backgroundImage&&'\n    background-image: url("'.concat(e.backgroundImage,'");\n    background-position: center;\n    background-repeat: no-repeat;\n    background-size: cover;\n  ')})),I=r(46684),P=r(85010),m=r(72619),E=r(19183),T=r(28598);function N(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function j(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?N(Object(r),!0).forEach((function(n){(0,t.Z)(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):N(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function k(e,n){var r=e.after,t=e.afterHidden,b=e.afterWidth,g=e.before,O=e.beforeWidth,N=e.breadcrumbs,k=e.buildSidekick,y=e.children,M=e.errors,R=e.headline,_=e.pageName,A=e.pipeline,Z=e.setErrors,x=e.subheader,C=e.subheaderBackground,w=e.subheaderBackgroundImage,G=e.subheaderButton,L=e.subheaderNoPadding,B=e.subheaderText,D=e.title,H=e.uuid,Y=(0,E.i)().height,U=(0,u.useRouter)().query.pipeline,W=null===A||void 0===A?void 0:A.uuid,K=h.ZP.pipelines.detail(W,{includes_outputs:!1},{revalidateOnFocus:!1}).data,F=null===K||void 0===K?void 0:K.pipeline;(0,o.useEffect)((function(){(0,m.bB)(K,Z)}),[K,Z]);var q=(0,o.useMemo)((function(){return r||(k?k({height:Y,heightOffset:I.Mz,pipeline:F}):null)}),[r,k,Y,F]),z=b||(q?50*v.iI:null),V=(0,o.useMemo)((function(){var e=[];return F?(e.push.apply(e,[{label:function(){return"Pipelines"},linkProps:{href:"/pipelines"}}]),N?(e.push({label:function(){return F.uuid},linkProps:{as:"/pipelines/".concat(W,"/triggers"),href:"/pipelines/[pipeline]/triggers"}}),e.push.apply(e,(0,i.Z)(N)),e[e.length-1].bold=!0):e.push({bold:!0,label:function(){return F.name}})):null!==K&&void 0!==K&&K.error&&e.push({bold:!0,danger:!0,label:function(){return"Error loading pipeline"}}),e}),[N,null===K||void 0===K?void 0:K.error,F,W]);return(0,T.jsxs)(T.Fragment,{children:[(0,T.jsxs)(l.Z,{after:q,afterHidden:t,afterWidth:z,before:g,beforeWidth:O,breadcrumbs:V,navigationItems:(0,P.H)(_,F,U),ref:n,subheaderChildren:"undefined"!==typeof x&&x,subheaderNoPadding:L,title:F?D?D(F):F.name:null,uuid:H,children:[(G||B)&&(0,T.jsx)(p.Z,{mb:v.Mq,mt:v.cd,mx:v.cd,children:(0,T.jsx)(S,{background:C,backgroundImage:w,children:(0,T.jsxs)(d.ZP,{alignItems:"center",children:[G,B&&(0,T.jsx)(p.Z,{ml:3}),B]})})}),R&&(0,T.jsx)(p.Z,{p:v.cd,children:(0,T.jsxs)(p.Z,{mt:v.cd,px:v.cd,children:[(0,T.jsx)(f.Z,{level:5,children:R}),(0,T.jsx)(c.Z,{light:!0,mt:v.cd,short:!0})]})}),y]}),M&&(0,T.jsx)(s.Z,{disableClickOutside:!0,isOpen:!0,onClickOutside:function(){return null===Z||void 0===Z?void 0:Z(null)},children:(0,T.jsx)(a.Z,j(j({},M),{},{onClose:function(){return null===Z||void 0===Z?void 0:Z(null)}}))})]})}var y=o.forwardRef(k)},85010:function(e,n,r){r.d(n,{H:function(){return s}});var t=r(57653),i=r(72473),o=r(28795),u=r(50178);function s(e,n,r){var s=(n||{}).uuid||r,l=[{Icon:i.Bf,id:o.M.TRIGGERS,isSelected:function(){return o.M.TRIGGERS===e},label:function(){return"Triggers"},linkProps:{as:"/pipelines/".concat(s,"/triggers"),href:"/pipelines/[pipeline]/triggers"}},{Icon:i.Pf,id:o.M.RUNS,isSelected:function(){return o.M.RUNS===e},label:function(){return"Runs"},linkProps:{as:"/pipelines/".concat(s,"/runs"),href:"/pipelines/[pipeline]/runs"}},{Icon:i.dE,id:o.M.BACKFILLS,isSelected:function(){return o.M.BACKFILLS===e},label:function(){return"Backfills"},linkProps:{as:"/pipelines/".concat(s,"/backfills"),href:"/pipelines/[pipeline]/backfills"}},{Icon:i.UL,id:o.M.PIPELINE_LOGS,isSelected:function(){return o.M.PIPELINE_LOGS===e},label:function(){return"Logs"},linkProps:{as:"/pipelines/".concat(s,"/logs"),href:"/pipelines/[pipeline]/logs"}},{Icon:i.ug,id:o.M.MONITOR,isSelected:function(){return o.M.MONITOR===e},label:function(){return"Monitor"},linkProps:{as:"/pipelines/".concat(s,"/monitors"),href:"/pipelines/[pipeline]/monitors"}}];return t.qL.INTEGRATION===(null===n||void 0===n?void 0:n.type)&&l.unshift({Icon:i.Nt,id:o.M.SYNCS,isSelected:function(){return o.M.SYNCS===e},label:function(){return"Syncs"},linkProps:{as:"/pipelines/".concat(s,"/syncs"),href:"/pipelines/[pipeline]/syncs"}}),(0,u.Ct)()||(l.unshift({Icon:i.EK,disabled:!s,id:o.M.EDIT,isSelected:function(){return o.M.EDIT===e},label:function(){return"Edit pipeline"},linkProps:{as:"/pipelines/".concat(s,"/edit"),href:"/pipelines/[pipeline]/edit"}}),l.push({Icon:i.Zr,id:o.M.SETTINGS,isSelected:function(){return o.M.SETTINGS===e},label:function(){return"Pipeline settings"},linkProps:{as:"/pipelines/".concat(s,"/settings"),href:"/pipelines/[pipeline]/settings"}})),l.unshift({Icon:i.G6,id:o.M.DASHBOARD,isSelected:function(){return o.M.DASHBOARD===e},label:function(){return"Dashboard"},linkProps:{as:"/pipelines/".concat(s,"/dashboard"),href:"/pipelines/[pipeline]/dashboard"}}),l}},57653:function(e,n,r){r.d(n,{$1:function(){return a},G7:function(){return f},LM:function(){return p},Mj:function(){return h},QK:function(){return c},a_:function(){return g},kA:function(){return b},qL:function(){return u},r0:function(){return d}});var t,i,o,u,s=r(82394),l=r(72473);!function(e){e.INTEGRATION="integration",e.PYTHON="python",e.PYSPARK="pyspark",e.STREAMING="streaming"}(u||(u={}));var c,a,d,f=(t={},(0,s.Z)(t,u.INTEGRATION,"Integration"),(0,s.Z)(t,u.PYTHON,"Standard"),(0,s.Z)(t,u.PYSPARK,"PySpark"),(0,s.Z)(t,u.STREAMING,"Streaming"),t),p="all",h=(u.PYTHON,u.INTEGRATION,u.STREAMING,i={},(0,s.Z)(i,p,l.ie),(0,s.Z)(i,u.INTEGRATION,l.YC),(0,s.Z)(i,u.PYTHON,l.El),(0,s.Z)(i,u.STREAMING,l.dB),i);!function(e){e.ACTIVE="active",e.INACTIVE="inactive",e.NO_SCHEDULES="no_schedules",e.RETRY="retry",e.RETRY_INCOMPLETE_BLOCK_RUNS="retry_incomplete_block_runs"}(c||(c={})),function(e){e.GROUP="group_by",e.HISTORY_DAYS="from_history_days",e.STATUS="status[]",e.TAG="tag[]",e.TYPE="type[]"}(a||(a={})),function(e){e.STATUS="status",e.TAG="tag",e.TYPE="type"}(d||(d={}));var b=[c.ACTIVE,c.INACTIVE,c.NO_SCHEDULES],g=(o={},(0,s.Z)(o,u.PYTHON,"python3"),(0,s.Z)(o,u.PYSPARK,"pysparkkernel"),o)}}]);