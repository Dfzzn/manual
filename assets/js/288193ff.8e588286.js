"use strict";(self.webpackChunkmanual=self.webpackChunkmanual||[]).push([[2398],{3905:function(t,e,r){r.d(e,{Zo:function(){return s},kt:function(){return c}});var a=r(7294);function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function l(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?l(Object(r),!0).forEach((function(e){n(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function o(t,e){if(null==t)return{};var r,a,n=function(t,e){if(null==t)return{};var r,a,n={},l=Object.keys(t);for(a=0;a<l.length;a++)r=l[a],e.indexOf(r)>=0||(n[r]=t[r]);return n}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)r=l[a],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}var p=a.createContext({}),u=function(t){var e=a.useContext(p),r=e;return t&&(r="function"==typeof t?t(e):i(i({},e),t)),r},s=function(t){var e=u(t.components);return a.createElement(p.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},d=a.forwardRef((function(t,e){var r=t.components,n=t.mdxType,l=t.originalType,p=t.parentName,s=o(t,["components","mdxType","originalType","parentName"]),d=u(r),c=n,k=d["".concat(p,".").concat(c)]||d[c]||m[c]||l;return r?a.createElement(k,i(i({ref:e},s),{},{components:r})):a.createElement(k,i({ref:e},s))}));function c(t,e){var r=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var l=r.length,i=new Array(l);i[0]=d;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o.mdxType="string"==typeof t?t:n,i[1]=o;for(var u=2;u<l;u++)i[u]=r[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},6945:function(t,e,r){r.r(e),r.d(e,{assets:function(){return s},contentTitle:function(){return p},default:function(){return c},frontMatter:function(){return o},metadata:function(){return u},toc:function(){return m}});var a=r(7462),n=r(3366),l=(r(7294),r(3905)),i=["components"],o={sidebar_position:0},p="HTTP/HTTPS",u={unversionedId:"profile-format/proxy/external-proxy/http",id:"profile-format/proxy/external-proxy/http",title:"HTTP/HTTPS",description:"Protocol standard",source:"@site/docs/profile-format/proxy/external-proxy/http.md",sourceDirName:"profile-format/proxy/external-proxy",slug:"/profile-format/proxy/external-proxy/http",permalink:"/docs/profile-format/proxy/external-proxy/http",draft:!1,editUrl:"https://github.com/getsurfboard/manual/edit/main/docs/profile-format/proxy/external-proxy/http.md",tags:[],version:"current",sidebarPosition:0,frontMatter:{sidebar_position:0},sidebar:"tutorialSidebar",previous:{title:"Reject",permalink:"/docs/profile-format/proxy/built-in-proxy/reject"},next:{title:"SOCKS5/SOCKS5-TLS",permalink:"/docs/profile-format/proxy/external-proxy/socks5"}},s={},m=[{value:"Protocol standard",id:"protocol-standard",level:2},{value:"Sample",id:"sample",level:2},{value:"Format",id:"format",level:2},{value:"Params",id:"params",level:2}],d={toc:m};function c(t){var e=t.components,r=(0,n.Z)(t,i);return(0,l.kt)("wrapper",(0,a.Z)({},d,r,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"httphttps"},"HTTP/HTTPS"),(0,l.kt)("h2",{id:"protocol-standard"},"Protocol standard"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/HTTP_tunnel"},"https://en.wikipedia.org/wiki/HTTP_tunnel")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/CONNECT"},"https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/CONNECT")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Proxy_server#Web_proxy_servers"},"https://en.wikipedia.org/wiki/Proxy_server#Web_proxy_servers")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Transport_Layer_Security"},"https://en.wikipedia.org/wiki/Transport_Layer_Security")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/HTTPS"},"https://en.wikipedia.org/wiki/HTTPS")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Server_Name_Indication"},"https://en.wikipedia.org/wiki/Server_Name_Indication"))),(0,l.kt)("h2",{id:"sample"},"Sample"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ini"},"ProxyHTTP = http, 1.2.3.4, 443, username, password\nProxyHTTPS = https, 1.2.3.4, 443, username, password, skip-cert-verify=true, sni=www.google.com\n")),(0,l.kt)("h2",{id:"format"},"Format"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ini"},"{proxy name} = {protocol}, {host}, {port}, {username}, {password}, {skip-cert-verify}, {sni}\n")),(0,l.kt)("h2",{id:"params"},"Params"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Value"),(0,l.kt)("th",{parentName:"tr",align:null},"Mandatory"),(0,l.kt)("th",{parentName:"tr",align:null},"Note"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"proxy name"),(0,l.kt)("td",{parentName:"tr",align:null},"-"),(0,l.kt)("td",{parentName:"tr",align:null},"true"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"protocol"),(0,l.kt)("td",{parentName:"tr",align:null},"http",(0,l.kt)("br",null),"https"),(0,l.kt)("td",{parentName:"tr",align:null},"true"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"host"),(0,l.kt)("td",{parentName:"tr",align:null},"-"),(0,l.kt)("td",{parentName:"tr",align:null},"true"),(0,l.kt)("td",{parentName:"tr",align:null},"Support domain and ip format")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"port"),(0,l.kt)("td",{parentName:"tr",align:null},"0-65535"),(0,l.kt)("td",{parentName:"tr",align:null},"true"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"username"),(0,l.kt)("td",{parentName:"tr",align:null},"-"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"password"),(0,l.kt)("td",{parentName:"tr",align:null},"-"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"skip-cert-verify"),(0,l.kt)("td",{parentName:"tr",align:null},"true",(0,l.kt)("br",null),"false"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"Usable if protocol is https",(0,l.kt)("br",null),"set to true if proxy doesn't have a valid TLS certificate")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"sni"),(0,l.kt)("td",{parentName:"tr",align:null},"-"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"Usable if protocol is https",(0,l.kt)("br",null),"definition is unnecessary when the SNI value is the same as the host value")))))}c.isMDXComponent=!0}}]);