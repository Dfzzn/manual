"use strict";(self.webpackChunkmanual=self.webpackChunkmanual||[]).push([[1666],{3905:function(e,r,t){t.d(r,{Zo:function(){return c},kt:function(){return d}});var n=t(7294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function p(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=n.createContext({}),l=function(e){var r=n.useContext(u),t=r;return e&&(t="function"==typeof e?e(r):p(p({},r),e)),t},c=function(e){var r=l(e.components);return n.createElement(u.Provider,{value:r},e.children)},s={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),f=l(t),d=o,m=f["".concat(u,".").concat(d)]||f[d]||s[d]||a;return t?n.createElement(m,p(p({ref:r},c),{},{components:t})):n.createElement(m,p({ref:r},c))}));function d(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,p=new Array(a);p[0]=f;var i={};for(var u in r)hasOwnProperty.call(r,u)&&(i[u]=r[u]);i.originalType=e,i.mdxType="string"==typeof e?e:o,p[1]=i;for(var l=2;l<a;l++)p[l]=t[l];return n.createElement.apply(null,p)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},4480:function(e,r,t){t.r(r),t.d(r,{assets:function(){return u},contentTitle:function(){return p},default:function(){return s},frontMatter:function(){return a},metadata:function(){return i},toc:function(){return l}});var n=t(3117),o=(t(7294),t(3905));const a={sidebar_position:8},p="udp-policy-not-supported-behaviour",i={unversionedId:"profile-format/general/udp_policy_not_supported_behaviour",id:"profile-format/general/udp_policy_not_supported_behaviour",title:"udp-policy-not-supported-behaviour",description:"If proxy not support udp relay, use DIRECT or REJECT instead",source:"@site/docs/profile-format/general/udp_policy_not_supported_behaviour.md",sourceDirName:"profile-format/general",slug:"/profile-format/general/udp_policy_not_supported_behaviour",permalink:"/docs/profile-format/general/udp_policy_not_supported_behaviour",draft:!1,editUrl:"https://github.com/getsurfboard/manual/edit/main/docs/profile-format/general/udp_policy_not_supported_behaviour.md",tags:[],version:"current",sidebarPosition:8,frontMatter:{sidebar_position:8},sidebar:"tutorialSidebar",previous:{title:"socks5-listen",permalink:"/docs/profile-format/general/socks5_listen"},next:{title:"[Host]",permalink:"/docs/profile-format/host/"}},u={},l=[{value:"Sample",id:"sample",level:3},{value:"Format",id:"format",level:3}],c={toc:l};function s(e){let{components:r,...t}=e;return(0,o.kt)("wrapper",(0,n.Z)({},c,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"udp-policy-not-supported-behaviour"},(0,o.kt)("inlineCode",{parentName:"h1"},"udp-policy-not-supported-behaviour")),(0,o.kt)("p",null,"If proxy not support udp relay, use ",(0,o.kt)("a",{parentName:"p",href:"/docs/profile-format/proxy/built-in-proxy/direct"},"DIRECT")," or ",(0,o.kt)("a",{parentName:"p",href:"/docs/profile-format/proxy/built-in-proxy/reject"},"REJECT")," instead"),(0,o.kt)("h3",{id:"sample"},"Sample"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ini"},"udp-policy-not-supported-behaviour = DIRECT\n")),(0,o.kt)("h3",{id:"format"},"Format"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ini"},"udp-policy-not-supported-behaviour = {DIRECT|REJECT}\n")),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"Only DIRECT or REJECT is supported")))}s.isMDXComponent=!0}}]);