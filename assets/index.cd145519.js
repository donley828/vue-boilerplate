var e=Object.defineProperty,t=Object.prototype.hasOwnProperty,a=Object.getOwnPropertySymbols,n=Object.prototype.propertyIsEnumerable,o=(t,a,n)=>a in t?e(t,a,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[a]=n,s=(e,s)=>{for(var r in s||(s={}))t.call(s,r)&&o(e,r,s[r]);if(a)for(var r of a(s))n.call(s,r)&&o(e,r,s[r]);return e};import{d as r,z as l,c,w as u,r as i,o as m,a as d,b as p,t as h,e as f,f as y,g as _,u as v,h as g,i as b,l as S,j as k,m as E,k as T,n as w,S as L,C as O,p as I,q as C,F as x,s as $,v as R,x as U,y as j,A,B as M,D as P,E as D,G as N,H as F,I as K,M as V,J as H,K as B,L as G,N as q,O as z,P as Q,Q as J,R as Y,T as W,U as X,V as Z,W as ee,X as te,Y as ae,Z as ne,_ as oe,$ as se,a0 as re,a1 as le,a2 as ce,a3 as ue}from"./vendor.12c20374.js";!function(e=".",t="__import__"){try{self[t]=new Function("u","return import(u)")}catch(a){const n=new URL(e,location),o=e=>{URL.revokeObjectURL(e.src),e.remove()};self[t]=e=>new Promise(((a,s)=>{const r=new URL(e,n);if(self[t].moduleMap[r])return a(self[t].moduleMap[r]);const l=new Blob([`import * as m from '${r}';`,`${t}.moduleMap['${r}']=m;`],{type:"text/javascript"}),c=Object.assign(document.createElement("script"),{type:"module",src:URL.createObjectURL(l),onerror(){s(new Error(`Failed to import: ${e}`)),o(c)},onload(){a(self[t].moduleMap[r]),o(c)}});document.head.appendChild(c)})),self[t].moduleMap={}}}("/vue-boilerplate/assets/");var ie=r({setup:()=>({locale:l}),created(){}});let me;ie.render=function(e,t,a,n,o,s){const r=i("router-view"),l=i("a-config-provider");return m(),c(l,{locale:e.locale},{default:u((()=>[d(r)])),_:1},8,["locale"])};const de={},pe=function(e,t){if(!t)return e();if(void 0===me){const e=document.createElement("link").relList;me=e&&e.supports&&e.supports("modulepreload")?"modulepreload":"preload"}return Promise.all(t.map((e=>{if(e in de)return;de[e]=!0;const t=e.endsWith(".css"),a=t?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${e}"]${a}`))return;const n=document.createElement("link");return n.rel=t?"stylesheet":me,t||(n.as="script",n.crossOrigin=""),n.href=e,document.head.appendChild(n),t?new Promise(((e,t)=>{n.addEventListener("load",e),n.addEventListener("error",t)})):void 0}))).then((()=>e()))},he={namespaced:!0,state:{theme:"light",layout:"header"},mutations:{SET_THEME:(e,t)=>{e.theme=t},SET_LAYOUT:(e,t)=>{e.layout=t}},actions:{SetTheme({commit:e},t){e("SET_THEME",t)},SetLayout({commit:e},t){e("SET_LAYOUT",t)}}};let fe;class ye{constructor(e){const{namespace:t}=e;this.namespace=t}set(e,t,a=null){localStorage.setItem(`${this.namespace}${e}`,JSON.stringify({value:t,expire:a}))}get(e,t=null){const a=localStorage.getItem(`${this.namespace}${e}`);if(null!==a)try{const{value:t,expire:n}=JSON.parse(a);if(null===n)return t;if(n>=(new Date).getTime())return t;this.remove(`${this.namespace}${e}`)}catch(n){return t}return t}remove(e){localStorage.removeItem(`${this.namespace}${e}`)}}const _e={install:(e,t)=>{const{name:a="ls"}=t;fe=new ye(t),e.config.globalProperties[a]={set:fe.set,get:fe.get}}},ve=p.create({baseURL:"/api",url:"http://rap2api.taobao.org/app/mock/286147/api",timeout:1e3});ve.interceptors.request.use((e=>{const t=fe.get("Access-Token");return t&&(e.headers.Authorization=`Bearer ${t}`),e}));const ge=({url:e,params:t,data:a,method:n,headers:o,auto:r=!0})=>{const l=f({data:{},error:!1,loading:!1}),c=async()=>{l.error=!1,l.loading=!0;const r={data:a,params:t};try{const t=await ve(s(s({url:e,method:n},r),o));l.data=t.data}catch(c){l.error=!0}l.loading=!1};return y((()=>{r&&c()})),s({fetch:c},h(l))};function be(e){return ge({url:"/login",method:"GET",params:e,auto:!1})}const Se={namespaced:!0,state:{token:"",roles:[],info:{},name:"",routes:null},mutations:{SET_TOKEN:(e,t)=>{e.token=t,fe.set("Access-Token",t)},SET_ROLES:(e,t)=>{e.roles=t},SET_INFO:(e,t)=>{e.info=t},SET_NAME:(e,t)=>{e.name=t},SET_ROUTES:(e,t)=>{e.routes=t}},actions:{GetInfo:({commit:e})=>new Promise((async(t,a)=>{const{fetch:n,data:o}=ge({url:"/getInfo",method:"GET",auto:!1});n().then((()=>{const{roles:a,user:n}=o.value;e("SET_ROLES",a),e("SET_INFO",s({},n)),e("SET_NAME",n.userName),t(o)})).catch((e=>{a(e)}))})),Logout:({commit:e})=>new Promise((async t=>{const{fetch:a}=ge({url:"/logout",method:"POST",auto:!1});a().then((()=>{t()})).catch((()=>{t()})).finally((()=>{e("SET_TOKEN",""),e("SET_ROLES",[]),e("SET_INFO",{}),fe.remove("Access-Token")}))}))}},ke=Symbol(),Ee=_({state:{name:"vueb"},modules:{app:he,user:Se}});function Te(){return v(ke)}function we(e){return g(e,{theme:"default"})}function Le(e){const t=we(e||"#1890ff"),a=we(t[5]);return[...t,...a]}async function Oe(e="light"){const t=document.querySelector("#htmlRoot");"dark"===e?(k||await S(),null==t||t.setAttribute("data-theme","dark")):null==t||t.setAttribute("data-theme","light")}async function Ie(e){const t=function({color:e="#1890ff",mixLighten:t,mixDarken:a,tinyColor:n}){const o=new Array(19).fill(0),s=o.map(((a,n)=>t(e,n/5))),r=o.map(((t,n)=>a(e,n/5))),l=o.map(((t,a)=>n(e).setAlpha(a/20).toRgbString())),c=o.map(((t,a)=>n(e).lighten(5*a).toHexString())).filter((e=>"#ffffff"!==e));return[...s,...r,...l,...o.map(((t,a)=>n(e).darken(5*a).toHexString())).filter((e=>"#000000"!==e)),...c]}({mixLighten:E,mixDarken:T,tinyColor:w,color:e});return await b({colorVariables:[...Le(e),...t]})}var Ce=r({name:"SettingDrawer",components:{SettingOutlined:L,CheckOutlined:O},setup(){const e=I(!1),t=Te(),a=C((()=>"dark"===t.state.app.theme)),n=C((()=>t.state.app.layout));return{visible:e,showDrawer:()=>e.value=!0,theme:a,selectTheme:e=>{const a=e?"dark":"light";t.dispatch("app/SetTheme",a),Oe(a)},layout:n,selectLayout:e=>{e!==n.value&&t.dispatch("app/SetLayout",e)},colorList:[{key:"极客蓝",color:"#2F54EB"},{key:"酱紫",color:"#722ED1"},{key:"庆化蓝",color:"#008CC9"}],selectThemeColor:e=>{Ie(e)}}}});const xe=U();j("data-v-27df0d32");const $e=A("主题"),Re=A("布局"),Ue={class:"picker"},je=A("主题色"),Ae=A("顶栏颜色"),Me=A("侧边栏颜色");M();const Pe=xe(((e,t,a,n,o,s)=>{const r=i("SettingOutlined"),l=i("a-button"),u=i("a-divider"),p=i("a-switch");i("CheckOutlined"),i("a-tag"),i("a-tooltip");const h=i("a-drawer");return m(),c(x,null,[d(l,{type:"primary",class:"btn",onClick:e.showDrawer},{icon:xe((()=>[d(r)])),_:1},8,["onClick"]),d(h,{visible:e.visible,"onUpdate:visible":t[1]||(t[1]=t=>e.visible=t),placement:"right",closable:!1},{default:xe((()=>[d(u,{orientation:"left"},{default:xe((()=>[$e])),_:1}),d(p,{checked:e.theme,onClick:e.selectTheme},null,8,["checked","onClick"]),d(u,{orientation:"left"},{default:xe((()=>[Re])),_:1}),d("div",Ue,[(m(),c(x,null,$(["header","sider"],((t,a)=>d("div",{key:`layout-${a}`,class:["picker-item",`picker-item-${t}`,{active:t===e.layout}],onClick:()=>e.selectLayout(t)},null,10,["onClick"]))),64))]),d(u,{orientation:"left"},{default:xe((()=>[je])),_:1}),R("",!0),d(u,{orientation:"left"},{default:xe((()=>[Ae])),_:1}),d(u,{orientation:"left"},{default:xe((()=>[Me])),_:1})])),_:1},8,["visible"])],64)}));Ce.render=Pe,Ce.__scopeId="data-v-27df0d32";var De=r({name:"Logo"});const Ne=U();j("data-v-0156b4f7");const Fe={class:"logo"},Ke=d("div",null,null,-1);M();const Ve=Ne(((e,t,a,n,o,s)=>(m(),c("div",Fe,[Ke]))));De.render=Ve,De.__scopeId="data-v-0156b4f7";const He=P({scriptUrl:"//at.alicdn.com/t/font_2545026_jgpj0u7dxv.js"});var Be=r({name:"SubMenu",components:{IconFont:He},props:{menuInfo:{type:Object,default:()=>({})}}});Be.render=function(e,t,a,n,o,s){const r=i("icon-font"),l=i("a-menu-item"),p=i("sub-menu",!0),h=i("a-sub-menu");return m(),c(h,D({key:e.menuInfo.name},e.$attrs),{title:u((()=>[d(r,{type:e.menuInfo.meta.icon},null,8,["type"]),d("span",null,N(e.menuInfo.meta.title),1)])),default:u((()=>[(m(!0),c(x,null,$(e.menuInfo.children,(t=>(m(),c(x,{key:t.name},[t.children?(m(),c(p,{key:t.name,"menu-info":t},null,8,["menu-info"])):(m(),c(l,{key:t.name},{default:u((()=>[d(r,{type:e.menuInfo.meta.icon},null,8,["type"]),A(" "+N(t.meta.title),1)])),_:2},1024))],64)))),128))])),_:1},16)};var Ge=r({name:"Menu",components:{SubMenu:Be,IconFont:He},setup(){const e=Te(),t=C((()=>"header"===e.state.app.layout?"horizontal":"vertical")),a=C((()=>e.state.app.theme)),n=F();return{mode:t,theme:a,selectedKeys:I([n.currentRoute.value.name]),routes:C((()=>e.state.user.routes)),handleSelect:e=>{n.push({name:e.key})}}}});Ge.render=function(e,t,a,n,o,s){const r=i("icon-font"),l=i("a-menu-item"),p=i("sub-menu"),h=i("a-menu");return m(),c(h,{selectedKeys:e.selectedKeys,"onUpdate:selectedKeys":t[1]||(t[1]=t=>e.selectedKeys=t),mode:e.mode,theme:e.theme,style:{lineHeight:"56px"},onSelect:e.handleSelect},{default:u((()=>[(m(!0),c(x,null,$(e.routes,(e=>(m(),c(x,{key:e.name},[e.children?(m(),c(p,{key:e.name,"menu-info":e},null,8,["menu-info"])):(m(),c(l,{key:e.name},{default:u((()=>[d(r,{type:e.meta.icon},null,8,["type"]),d("span",null,N(e.meta.title),1)])),_:2},1024))],64)))),128))])),_:1},8,["selectedKeys","mode","theme","onSelect"])};const qe=r({name:"UserMenu",components:{DownOutlined:K},setup(){const e=Te(),t=C((()=>e.state.user.name));return console.log(t),{username:t,showQuit:()=>{V.confirm({title:"你想要退出吗？",icon:d(H),onOk:()=>e.dispatch("user/Logout").then((()=>{setTimeout((()=>{window.location.reload()}),16)})),onCancel(){console.log("cancel")}})}}}}),ze=U();j("data-v-5f430064");const Qe={class:"avatar"};M();const Je=ze(((e,t,a,n,o,s)=>{const r=i("DownOutlined"),l=i("a-menu-item"),u=i("a-menu"),p=i("a-dropdown");return m(),c(p,{trigger:["click"]},{overlay:ze((()=>[d(u,null,{default:ze((()=>[d(l,null,{default:ze((()=>[d("a",{href:"javascript:;",onClick:t[1]||(t[1]=(...t)=>e.showQuit&&e.showQuit(...t))},"退出")])),_:1})])),_:1})])),default:ze((()=>[d("div",Qe,[d("span",null,N(e.username),1),d(r)])])),_:1})}));qe.render=Je,qe.__scopeId="data-v-5f430064";var Ye=r({name:"BasicLayout",components:{SettingDrawer:Ce,SLogo:De,SMenu:Ge,UserMenu:qe},setup(){const e=I(!1),t=Te();return{collapsed:e,theme:C((()=>t.state.app.theme)),layout:C((()=>t.state.app.layout))}}});const We=A(" vue-boilerplate ");Ye.render=function(e,t,a,n,o,s){const r=i("s-logo"),l=i("s-menu"),p=i("a-layout-sider"),h=i("user-menu"),f=i("a-layout-header"),y=i("router-view"),_=i("a-layout-content"),v=i("a-layout-footer"),g=i("a-layout"),b=i("setting-drawer");return m(),c(x,null,[d(g,{class:"layout"},{default:u((()=>["sider"===e.layout?(m(),c(p,{key:0,collapsed:e.collapsed,"onUpdate:collapsed":t[1]||(t[1]=t=>e.collapsed=t),class:"sider",theme:e.theme,collapsible:""},{default:u((()=>[d(r),d(l)])),_:1},8,["collapsed","theme"])):R("",!0),d(g,null,{default:u((()=>[d(f,{class:"header",theme:e.theme},{default:u((()=>["header"===e.layout?(m(),c(r,{key:0})):R("",!0),"header"===e.layout?(m(),c(l,{key:1})):R("",!0),d(h)])),_:1},8,["theme"]),d(_,{class:"content"},{default:u((()=>[d(y)])),_:1}),d(v,{class:"footer",style:{"text-align":"center"}},{default:u((()=>[We])),_:1})])),_:1})])),_:1}),d(b)],64)};function Xe(e){return{prefixCls:`vueb-${e}`,prefixVar:"vueb"}}var Ze=r({name:"UserLayout",setup(){const{prefixCls:e}=Xe("user-layout");return{layoutPrefixCls:e}}});const et=U();j("data-v-6c069a82");const tt=d("h2",null,"欢迎",-1),at=A("如果你没有账户请"),nt=A("联系管理员"),ot=d("p",null,"Made by ©️",-1);M();const st=et(((e,t,a,n,o,s)=>{const r=i("router-view"),l=i("a-button");return m(),c("div",{class:e.layoutPrefixCls},[d("div",{class:`${e.layoutPrefixCls}__right`},[tt,d(r),d("p",null,[at,d(l,{type:"link"},{default:et((()=>[nt])),_:1})]),ot],2)],2)}));Ze.render=st,Ze.__scopeId="data-v-6c069a82";const rt={name:"RouteView"};rt.render=function(e,t,a,n,o,s){const r=i("router-view");return m(),c(r)};const lt=[{path:"/user",component:Ze,redirect:"/user/login",children:[{name:"Login",path:"login",component:()=>pe((()=>__import__("./Login.7e1e2fb4.js")),["/vue-boilerplate/assets/Login.7e1e2fb4.js","/vue-boilerplate/assets/Login.0672d786.css","/vue-boilerplate/assets/vendor.12c20374.js","/vue-boilerplate/assets/vendor.ef8b2f5e.css"])}]}],ct={path:"/",component:Ye,children:[{name:"Dashboard",path:"dashboard",component:()=>pe((()=>__import__("./index.98269963.js")),["/vue-boilerplate/assets/index.98269963.js","/vue-boilerplate/assets/vendor.12c20374.js","/vue-boilerplate/assets/vendor.ef8b2f5e.css"]),meta:{icon:"icon-home",title:"首页"}},{name:"List",path:"list",component:rt,children:[{name:"ListSearch",path:"search",component:()=>pe((()=>__import__("./index.6bacd39a.js")),void 0),meta:{icon:"icon-search",title:"列表搜索"}}],meta:{title:"列表",icon:"icon-unorderedlist"}}]};var ut=B({history:G(),routes:lt});const it=["Login"],mt=e=>{Oe(),ce.locale("zh-cn"),e.use(_e,{namespace:"vue-boilerplate_",name:"$ls"}),ut.beforeEach(((e,t,a)=>{fe.get("Access-Token")?"/user/login"===e.path?a({path:"/"}):0===Ee.state.user.roles.length?Ee.dispatch("user/GetInfo").then((t=>{let n=ct;n=s(s({},ct),{redirect:ct.children?"/"+ct.children[0].path:"/"}),ut.addRoute(n),Ee.commit("user/SET_ROUTES",n.children),a(s(s({},e),{replace:!0}))})):a():it.includes(e.name)?a():a({path:"/user/login"})})),console.info("core: completed")};const dt=ue(ie);dt.use(Ee,ke),dt.use(ut),(({app:e})=>{e.use(q),e.use(z),e.use(Q),e.use(J),e.use(Y),e.use(W),e.use(X),e.use(Z),e.use(ee),e.use(te),e.use(ae),e.use(ne),e.use(oe),e.use(se),e.use(re),e.use(le),mt(e)})({app:dt}),dt.mount("#app");export{Te as a,be as l,Xe as u};
