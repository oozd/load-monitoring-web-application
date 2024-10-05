(function(){"use strict";var e={9483:function(e,t,n){var r=n(3751),o=n(641),a=n(6756),u=n(3813),i=n(5526);function c(e,t,n,r,c,l){const d=(0,o.g2)("cpu-snackbar"),s=(0,o.g2)("cpu-chart"),f=(0,o.g2)("CurrentCpuCard"),p=(0,o.g2)("CpuTresholdCard");return(0,o.uX)(),(0,o.CE)(o.FK,null,[(0,o.bF)(d),(0,o.bF)(a.L,null,{default:(0,o.k6)((()=>[(0,o.bF)(s)])),_:1}),(0,o.bF)(u.I,null,{default:(0,o.k6)((()=>[(0,o.bF)(a.L,{"no-gutters":""},{default:(0,o.k6)((()=>[(0,o.bF)(i.B,{cols:"12",class:"d-flex"},{default:(0,o.k6)((()=>[(0,o.bF)(i.B,{cols:"4"},{default:(0,o.k6)((()=>[(0,o.bF)(f)])),_:1}),(0,o.bF)(i.B),(0,o.bF)(i.B,{cols:"5"},{default:(0,o.k6)((()=>[(0,o.bF)(p)])),_:1})])),_:1})])),_:1})])),_:1})],64)}function l(e,t,n,r,a,i){const c=(0,o.g2)("Line");return(0,o.uX)(),(0,o.Wv)(u.I,null,{default:(0,o.k6)((()=>[(0,o.bF)(c,{data:r.graphData,options:r.CHART_OPTIONS},null,8,["data","options"])])),_:1})}var d=n(2022),s=n(4527),f=(n(4114),n(953));async function p(){try{const e=(new Date).toLocaleString("en-US",{hour:"2-digit",minute:"2-digit",second:"2-digit",hour12:!1}),t=Math.floor(251*Math.random());return{load:t,date:e}}catch(e){throw console.error("Error fetching CPU load average:",e),e}}const v=1e3,h=6e5,b=h/v,g=3e4,m=g/v+1,k=100,C={borderWidth:2,borderColor:"green"},y={responsive:!0,plugins:{title:{display:!0,text:"CPU Load Average Over Time",color:"black",font:{size:26},padding:{top:30,bottom:30}},legend:{display:!1},tooltip:{callbacks:{label:function(e){return" "+e.raw+" %"}}}},scales:{y:{beginAtZero:!0,ticks:{callback:function(e){return e+"%"}}}}},_=(0,f.KR)(0),L=(0,f.KR)([]),O=(0,f.KR)([]),T=(0,f.KR)([]),F=(0,f.KR)(!1);let w=0,x=0;async function H(){try{const{load:e,date:t}=await p();_.value=e,P(e,t),j(e,t)}catch(e){console.error("Error fetching CPU average load:",e)}}function P(e,t){L.value.length>=b&&(L.value.shift(),O.value.shift()),L.value.push(e),O.value.push(t)}function j(e){if(e>k){if(w++,x=0,w===m&&!F.value){const e=O.value.at(-m);T.value.push({start:e,end:""}),F.value=!0}}else if(x++,w=0,x===m){const e=O.value.at(-1);T.value.at(-1).end=e,F.value=!1}}const E=()=>{H(),setInterval(H,v)};function A(){w=0,x=0}const N=()=>({currentCpuLoad:_,underHighLoad:F,cpuLoadValueHistory:L,cpuLoadDateHistory:O,cpuTresholdHistory:T,startFetchingCpuLoad:E,resetThresholdCounters:A});var R=n(2543);d.t1.register(d.No,d.FN,d.kc,d.PP,d.hE,d.m_,d.s$);var S={name:"CpuChart",components:{Line:s.N1},setup(){const{cpuLoadValueHistory:e,cpuLoadDateHistory:t}=N(),n=(0,o.EW)((()=>({labels:(0,R.cloneDeep)(t.value),datasets:[{data:(0,R.cloneDeep)(e.value),...C,pointBackgroundColor:e.value.map((e=>e>100?"red":"green")),pointBorderColor:e.value.map((e=>e>100?"red":"green"))}]})));return{graphData:n,CHART_OPTIONS:y}}},K=n(6262);const V=(0,K.A)(S,[["render",l]]);var W=V,I=n(33),B=n(8374),U=n(1606),D=n(697),M=n(2508);const X={class:"table-wrapper"};function J(e,t,n,r,a,u){return(0,o.uX)(),(0,o.Wv)(B.J,{variant:"outlined","max-height":"250px","min-height":"250px"},{default:(0,o.k6)((()=>[(0,o.bF)(U.r,{class:"text-center"},{default:(0,o.k6)((()=>t[0]||(t[0]=[(0,o.Lk)("span",null,"High Load History",-1)]))),_:1}),(0,o.bF)(D.O,null,{default:(0,o.k6)((()=>[(0,o.Lk)("div",X,[(0,o.bF)(M.Py,{items:r.cpuTresholdHistory,"fixed-header":"","hide-default-footer":"",dense:"","items-per-page":"-1"},{["item.start"]:(0,o.k6)((({item:e})=>[(0,o.eW)((0,I.v_)(e.start),1)])),["item.end"]:(0,o.k6)((({item:e})=>[(0,o.eW)((0,I.v_)(e.end||"In Progress"),1)])),_:2},1032,["items"])])])),_:1})])),_:1})}var Y={name:"CpuTresholdCard",setup(){const{cpuTresholdHistory:e}=N();return{cpuTresholdHistory:e}}};const $=(0,K.A)(Y,[["render",J],["__scopeId","data-v-7c0cb64b"]]);var q=$;const z={class:"text-h4"};function Z(e,t,n,r,a,u){return(0,o.uX)(),(0,o.Wv)(B.J,{height:"250px",variant:"outlined"},{default:(0,o.k6)((()=>[(0,o.bF)(U.r,{class:"text-center"},{default:(0,o.k6)((()=>t[0]||(t[0]=[(0,o.Lk)("span",null,"Current CPU Load",-1)]))),_:1}),(0,o.bF)(D.O,{class:"text-center mt-3"},{default:(0,o.k6)((()=>[(0,o.Lk)("div",z,(0,I.v_)(r.currentCpuLoad)+" %",1)])),_:1}),(0,o.bF)(D.O,{class:"text-center"},{default:(0,o.k6)((()=>[(0,o.Lk)("div",{class:"text-h6",style:(0,I.Tr)({color:r.underHighLoad?"red":"green"})},(0,I.v_)(r.highLoadText),5)])),_:1})])),_:1})}var G={name:"CurrentCpuCard",setup(){const{currentCpuLoad:e,underHighLoad:t}=N(),n=(0,o.EW)((()=>t.value?"Under High Load":"Not Under High Load"));return{currentCpuLoad:e,underHighLoad:t,highLoadText:n}}};const Q=(0,K.A)(G,[["render",Z]]);var ee=Q,te=n(7467);function ne(e,t,n,r,a,u){return(0,o.uX)(),(0,o.Wv)(te.K,{modelValue:r.snackbar,"onUpdate:modelValue":t[0]||(t[0]=e=>r.snackbar=e),timeout:r.FETCH_INVERVAL_MS,color:r.snackbarColor,top:""},{default:(0,o.k6)((()=>[(0,o.eW)((0,I.v_)(r.snackbarText),1)])),_:1},8,["modelValue","timeout","color"])}var re={name:"CpuSnackbar",setup(){const{underHighLoad:e}=N(),t=(0,f.KR)(!1),n=(0,f.KR)(""),r=(0,f.KR)("");return(0,o.wB)(e,(e=>{e?(n.value="Your computer is under high load!",r.value="red"):(n.value="Your computer has recovered from high load!",r.value="green"),window.alert(n.value),t.value=!0})),{snackbar:t,snackbarText:n,snackbarColor:r,FETCH_INVERVAL_MS:v}}};const oe=(0,K.A)(re,[["render",ne]]);var ae=oe,ue={name:"App",components:{CpuSnackbar:ae,CpuChart:W,CpuTresholdCard:q,CurrentCpuCard:ee},setup(){const{startFetchingCpuLoad:e}=N();(0,o.sV)((()=>{e()}))}};const ie=(0,K.A)(ue,[["render",c]]);var ce=ie,le=(n(5524),n(5790)),de=(0,le.$N)();async function se(){const e=await n.e(53).then(n.t.bind(n,5371,23));e.load({google:{families:["Roboto:100,300,400,500,700,900&display=swap"]}})}se(),(0,r.Ef)({render:()=>(0,o.h)(ce)}).use(de).mount("#app")}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var a=t[r]={id:r,loaded:!1,exports:{}};return e[r].call(a.exports,a,a.exports,n),a.loaded=!0,a.exports}n.m=e,function(){var e=[];n.O=function(t,r,o,a){if(!r){var u=1/0;for(d=0;d<e.length;d++){r=e[d][0],o=e[d][1],a=e[d][2];for(var i=!0,c=0;c<r.length;c++)(!1&a||u>=a)&&Object.keys(n.O).every((function(e){return n.O[e](r[c])}))?r.splice(c--,1):(i=!1,a<u&&(u=a));if(i){e.splice(d--,1);var l=o();void 0!==l&&(t=l)}}return t}a=a||0;for(var d=e.length;d>0&&e[d-1][2]>a;d--)e[d]=e[d-1];e[d]=[r,o,a]}}(),function(){var e,t=Object.getPrototypeOf?function(e){return Object.getPrototypeOf(e)}:function(e){return e.__proto__};n.t=function(r,o){if(1&o&&(r=this(r)),8&o)return r;if("object"===typeof r&&r){if(4&o&&r.__esModule)return r;if(16&o&&"function"===typeof r.then)return r}var a=Object.create(null);n.r(a);var u={};e=e||[null,t({}),t([]),t(t)];for(var i=2&o&&r;"object"==typeof i&&!~e.indexOf(i);i=t(i))Object.getOwnPropertyNames(i).forEach((function(e){u[e]=function(){return r[e]}}));return u["default"]=function(){return r},n.d(a,u),a}}(),function(){n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,r){return n.f[r](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/webfontloader.4c4eabcc.js"}}(),function(){n.miniCssF=function(e){}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="frontend:";n.l=function(r,o,a,u){if(e[r])e[r].push(o);else{var i,c;if(void 0!==a)for(var l=document.getElementsByTagName("script"),d=0;d<l.length;d++){var s=l[d];if(s.getAttribute("src")==r||s.getAttribute("data-webpack")==t+a){i=s;break}}i||(c=!0,i=document.createElement("script"),i.charset="utf-8",i.timeout=120,n.nc&&i.setAttribute("nonce",n.nc),i.setAttribute("data-webpack",t+a),i.src=r),e[r]=[o];var f=function(t,n){i.onerror=i.onload=null,clearTimeout(p);var o=e[r];if(delete e[r],i.parentNode&&i.parentNode.removeChild(i),o&&o.forEach((function(e){return e(n)})),t)return t(n)},p=setTimeout(f.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=f.bind(null,i.onerror),i.onload=f.bind(null,i.onload),c&&document.head.appendChild(i)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.nmd=function(e){return e.paths=[],e.children||(e.children=[]),e}}(),function(){n.p="/load-monitoring/"}(),function(){var e={524:0};n.f.j=function(t,r){var o=n.o(e,t)?e[t]:void 0;if(0!==o)if(o)r.push(o[2]);else{var a=new Promise((function(n,r){o=e[t]=[n,r]}));r.push(o[2]=a);var u=n.p+n.u(t),i=new Error,c=function(r){if(n.o(e,t)&&(o=e[t],0!==o&&(e[t]=void 0),o)){var a=r&&("load"===r.type?"missing":r.type),u=r&&r.target&&r.target.src;i.message="Loading chunk "+t+" failed.\n("+a+": "+u+")",i.name="ChunkLoadError",i.type=a,i.request=u,o[1](i)}};n.l(u,c,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,r){var o,a,u=r[0],i=r[1],c=r[2],l=0;if(u.some((function(t){return 0!==e[t]}))){for(o in i)n.o(i,o)&&(n.m[o]=i[o]);if(c)var d=c(n)}for(t&&t(r);l<u.length;l++)a=u[l],n.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return n.O(d)},r=self["webpackChunkfrontend"]=self["webpackChunkfrontend"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=n.O(void 0,[504],(function(){return n(9483)}));r=n.O(r)})();
//# sourceMappingURL=app.80147c27.js.map