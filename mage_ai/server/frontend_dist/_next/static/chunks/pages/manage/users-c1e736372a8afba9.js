(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1911],{94629:function(e,r,t){"use strict";t.d(r,{Z:function(){return S}});var n=t(82394),i=t(21831),o=t(82684),u=t(50724),s=t(82555),c=t(97618),a=t(70613),l=t(59696),d=t(68899),f=t(28598);function p(e,r){var t=e.children;return(0,f.jsx)(d.HS,{ref:r,children:t})}var v=o.forwardRef(p),b=t(62547),h=t(82571),O=t(35686),m=t(98464),_=t(46684),j=t(70515),w=t(53808),P=t(19183);function g(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function y(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?g(Object(t),!0).forEach((function(r){(0,n.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):g(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var S=function(e){var r,t=e.addProjectBreadcrumbToCustomBreadcrumbs,n=e.after,p=e.afterHidden,g=e.afterWidth,S=e.afterWidthOverride,E=e.before,Z=e.beforeWidth,x=e.breadcrumbs,k=e.children,I=e.errors,N=e.headerMenuItems,A=e.headerOffset,C=e.mainContainerHeader,R=e.navigationItems,T=e.setErrors,M=e.subheaderChildren,W=e.title,D=e.uuid,H=(0,P.i)().width,U="dashboard_after_width_".concat(D),B="dashboard_before_width_".concat(D),F=(0,o.useRef)(null),L=(0,o.useState)(S?g:(0,w.U2)(U,g)),z=L[0],G=L[1],K=(0,o.useState)(!1),V=K[0],X=K[1],Y=(0,o.useState)(E?Math.max((0,w.U2)(B,Z),13*j.iI):null),q=Y[0],J=Y[1],Q=(0,o.useState)(!1),$=Q[0],ee=Q[1],re=(0,o.useState)(null)[1],te=O.ZP.projects.list({},{revalidateOnFocus:!1}).data,ne=null===te||void 0===te?void 0:te.projects,ie={label:function(){var e;return null===ne||void 0===ne||null===(e=ne[0])||void 0===e?void 0:e.name},linkProps:{href:"/"}},oe=[];x?(t&&oe.push(ie),oe.push.apply(oe,(0,i.Z)(x))):(null===ne||void 0===ne?void 0:ne.length)>=1&&oe.push.apply(oe,[ie,{bold:!0,label:function(){return W}}]),(0,o.useEffect)((function(){null===F||void 0===F||!F.current||V||$||null===re||void 0===re||re(F.current.getBoundingClientRect().width)}),[V,z,$,q,F,re,H]),(0,o.useEffect)((function(){V||(0,w.t8)(U,z)}),[p,V,z,U]),(0,o.useEffect)((function(){$||(0,w.t8)(B,q)}),[$,q,B]);var ue=(0,m.Z)(g);return(0,o.useEffect)((function(){S&&ue!==g&&G(g)}),[S,g,ue]),(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(a.Z,{title:W}),(0,f.jsx)(l.Z,{breadcrumbs:oe,menuItems:N,project:null===ne||void 0===ne?void 0:ne[0],version:null===ne||void 0===ne||null===(r=ne[0])||void 0===r?void 0:r.version}),(0,f.jsxs)(d.Nk,{children:[0!==(null===R||void 0===R?void 0:R.length)&&(0,f.jsx)(d.lm,{showMore:!0,children:(0,f.jsx)(h.Z,{navigationItems:R,showMore:!0})}),(0,f.jsx)(c.Z,{flex:1,flexDirection:"column",children:(0,f.jsxs)(b.Z,{after:n,afterHeightOffset:_.Mz,afterHidden:p,afterMousedownActive:V,afterWidth:z,before:E,beforeHeightOffset:_.Mz,beforeMousedownActive:$,beforeWidth:d.k1+(E?q:0),headerOffset:A,hideAfterCompletely:!0,leftOffset:E?d.k1:null,mainContainerHeader:C,mainContainerRef:F,setAfterMousedownActive:X,setAfterWidth:G,setBeforeMousedownActive:ee,setBeforeWidth:J,children:[M&&(0,f.jsx)(v,{children:M}),k]})})]}),I&&(0,f.jsx)(u.Z,{disableClickOutside:!0,isOpen:!0,onClickOutside:function(){return null===T||void 0===T?void 0:T(null)},children:(0,f.jsx)(s.Z,y(y({},I),{},{onClose:function(){return null===T||void 0===T?void 0:T(null)}}))})]})}},75083:function(e,r,t){"use strict";t.d(r,{HF:function(){return u},L6:function(){return n}});var n,i=t(82359),o=t(72473);function u(e,r,t){var u=e.owner,s=(e.roles,[{Icon:o.Vz,id:n.WORKSPACES,isSelected:function(){return n.WORKSPACES===t},label:function(){return"Workspaces"},linkProps:{href:"/manage"}}]);return u&&s.push({Icon:o.NO,id:n.USERS,isSelected:function(){return n.USERS===t},label:function(){return"Users"},linkProps:{href:"/manage/users"}}),r==i.k.MAIN&&s.push({Icon:o.Zr,id:n.SETTINGS,isSelected:function(){return n.SETTINGS===t},label:function(){return"Settings"},linkProps:{href:"/manage/settings"}}),s}!function(e){e.WORKSPACES="workspaces",e.USERS="users",e.SETTINGS="settings"}(n||(n={}))},59533:function(e,r,t){"use strict";var n=t(82684),i=t(94629),o=t(35686),u=t(70515),s=t(75083),c=t(50178),a=t(28598);r.Z=function(e){var r=e.before,t=e.breadcrumbs,l=void 0===t?[]:t,d=e.children,f=e.errors,p=e.pageName,v=e.subheaderChildren,b=o.ZP.statuses.list().data,h=(0,n.useMemo)((function(){var e,r;return null===b||void 0===b||null===(e=b.statuses)||void 0===e||null===(r=e[0])||void 0===r?void 0:r.project_type}),[b]),O=(0,c.PR)()||{};return(0,a.jsx)(i.Z,{before:r,beforeWidth:r?50*u.iI:0,breadcrumbs:l,errors:f,navigationItems:(0,s.HF)(O,h,p),subheaderChildren:v,title:"Workspaces",uuid:"workspaces/index",children:d})}},82359:function(e,r,t){"use strict";var n,i;t.d(r,{d:function(){return n},k:function(){return i}}),function(e){e.ADD_NEW_BLOCK_V2="add_new_block_v2",e.DATA_INTEGRATION_IN_BATCH_PIPELINE="data_integration_in_batch_pipeline",e.INTERACTIONS="interactions",e.LOCAL_TIMEZONE="display_local_timezone",e.OPERATION_HISTORY="operation_history"}(n||(n={})),function(e){e.MAIN="main",e.STANDALONE="standalone",e.SUB="sub"}(i||(i={}))},12222:function(e,r,t){"use strict";t.r(r);var n=t(77837),i=t(82394),o=t(38860),u=t.n(o),s=t(82684),c=t(34376),a=t(71180),l=t(85854),d=t(93808),f=t(38276),p=t(75499),v=t(30160),b=t(59533),h=t(35686),O=t(98464),m=t(72473),_=t(70515),j=t(75083),w=t(72619),P=t(50178),g=t(42122),y=t(69419),S=t(28598);function E(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function Z(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?E(Object(t),!0).forEach((function(r){(0,i.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):E(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function x(){var e=(0,c.useRouter)(),r=(0,s.useState)(null),t=r[0],n=r[1],i=((0,P.PR)()||{}).owner,o=(0,s.useState)(null),u=o[0],d=o[1],E=h.ZP.users.list({},{revalidateOnFocus:!1}),x=E.data;E.mutate;(0,s.useEffect)((function(){(0,w.bB)(x,n)}),[x]);var k=(0,s.useMemo)((function(){return(null===x||void 0===x?void 0:x.users)||[]}),[null===x||void 0===x?void 0:x.users]),I=h.ZP.users.detail(null===u||void 0===u?void 0:u.user_id,{},{revalidateOnFocus:!1}),N=I.data;I.mutate;(0,s.useEffect)((function(){(0,w.bB)(N,n)}),[N]);var A=null===N||void 0===N?void 0:N.user,C=(0,y.iV)(),R=(0,O.Z)(C);return(0,s.useEffect)((function(){var e=C.add_new_user,r=C.user_id;if(!(0,g.Xy)(C,R)){var t=Z(Z({},R),C);r?t.user_id=r:delete t.user_id,e?t.add_new_user=e:delete t.add_new_user,d(t)}}),[C,R]),(0,S.jsxs)(b.Z,{breadcrumbs:[{label:function(){return"Workspaces"},linkProps:{as:"/manage",href:"/manage"}},{bold:!0,label:function(){return"Users"}}],errors:t,pageName:j.L6.USERS,children:[i&&(0,S.jsx)(f.Z,{p:_.cd,children:(0,S.jsx)(a.Z,{beforeIcon:(0,S.jsx)(m.mm,{}),onClick:function(){return e.push("/manage/users/new")},primary:!0,children:"Add new user"})}),(0,S.jsx)(f.Z,{p:_.cd,children:(0,S.jsx)(l.Z,{children:"Users"})}),(0,S.jsx)(p.Z,{columnFlex:[1,1,1],columns:[{uuid:"Username"},{uuid:"Email"},{uuid:"Role"}],isSelectedRow:function(e){var r;return(null===(r=k[e])||void 0===r?void 0:r.id)===(null===A||void 0===A?void 0:A.id)},onClickRow:function(r){var t,n=null===(t=k[r])||void 0===t?void 0:t.id;e.push("/manage/users/[user]","/manage/users/".concat(n))},rows:k.map((function(e){var r=e.email,t=e.roles_display,n=e.roles_new,i=e.username;return[(0,S.jsx)(v.ZP,{bold:!0,children:i},"username"),(0,S.jsx)(v.ZP,{default:!0,children:r},"email"),(0,S.jsx)(v.ZP,{default:!0,children:n&&n[0]?n[0].name:t},"roles")]})),uuid:"pipeline-runs"})]})}x.getInitialProps=(0,n.Z)(u().mark((function e(){return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",{});case 1:case"end":return e.stop()}}),e)}))),r.default=(0,d.Z)(x)},72695:function(e,r,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/manage/users",function(){return t(12222)}])},80022:function(e,r,t){"use strict";function n(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}t.d(r,{Z:function(){return n}})},15544:function(e,r,t){"use strict";function n(e){return n=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},n(e)}t.d(r,{Z:function(){return n}})},99177:function(e,r,t){"use strict";function n(e,r){return n=Object.setPrototypeOf||function(e,r){return e.__proto__=r,e},n(e,r)}function i(e,r){if("function"!==typeof r&&null!==r)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(r&&r.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),r&&n(e,r)}t.d(r,{Z:function(){return i}})},93189:function(e,r,t){"use strict";t.d(r,{Z:function(){return o}});var n=t(12539),i=t(80022);function o(e,r){if(r&&("object"===n(r)||"function"===typeof r))return r;if(void 0!==r)throw new TypeError("Derived constructors may only return object or undefined");return(0,i.Z)(e)}}},function(e){e.O(0,[844,2083,8013,600,9696,8264,7858,5499,9774,2888,179],(function(){return r=72695,e(e.s=r);var r}));var r=e.O();_N_E=r}]);