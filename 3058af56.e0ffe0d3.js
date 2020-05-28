(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{116:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var r=n(0),i=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=i.a.createContext({}),p=function(e){var t=i.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},d=function(e){var t=p(e.components);return i.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},b=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),d=p(n),b=r,m=d["".concat(s,".").concat(b)]||d[b]||u[b]||a;return n?i.a.createElement(m,c({ref:t},l,{components:n})):i.a.createElement(m,c({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,s=new Array(a);s[0]=b;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c.mdxType="string"==typeof e?e:r,s[1]=c;for(var l=2;l<a;l++)s[l]=n[l];return i.a.createElement.apply(null,s)}return i.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},98:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return o})),n.d(t,"default",(function(){return p}));var r=n(1),i=n(6),a=(n(0),n(116)),s={id:"licenses",title:"License Implementation",sidebar_label:"licenses"},c={id:"licenses",title:"License Implementation",description:"This document details the License implementation for the system.",source:"@site/docs/licenses.md",permalink:"/barista/docs/licenses",sidebar_label:"licenses",sidebar:"someSidebar",previous:{title:"License Scanners",permalink:"/barista/docs/license-scanners"},next:{title:"How To Develop a Web Feature",permalink:"/barista/docs/develop-web-feature"}},o=[{value:"SPDX Licenses",id:"spdx-licenses",children:[]},{value:"Updating Licenses",id:"updating-licenses",children:[]}],l={rightToc:o};function p(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"This document details the License implementation for the system."),Object(a.b)("h2",{id:"spdx-licenses"},"SPDX Licenses"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"The system uses SPDX Licenses for a common way to identify licenses.\nMore information can be found here: ",Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"https://spdx.org/licenses/"}),"https://spdx.org/licenses/"))),Object(a.b)("h2",{id:"updating-licenses"},"Updating Licenses"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"From time to time licenses may need to be updated. Current machine readable SPDX licenses can be found here: ",Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/spdx/license-list-data/blob/master/json/licenses.json"}),"https://github.com/spdx/license-list-data/blob/master/json/licenses.json")),Object(a.b)("li",{parentName:"ul"},"The latest license .json can be downloaded using the ",Object(a.b)("inlineCode",{parentName:"li"},"yarn spdx:update")," command.",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"This command stores the downloaded file at ",Object(a.b)("inlineCode",{parentName:"li"},"barista-api/src/services/license/spdx-licenses.json")))),Object(a.b)("li",{parentName:"ul"},"The specific version of the license file is persisted in the ",Object(a.b)("inlineCode",{parentName:"li"},"SystemConfiguration")," object of the application after the latest spdx license.json file is loaded on api application startup."),Object(a.b)("li",{parentName:"ul"},"On subsequent api application starts the license file version is compared with that stored in ",Object(a.b)("inlineCode",{parentName:"li"},"SystemConfiguration"),". If they are different the new ",Object(a.b)("inlineCode",{parentName:"li"},"spdx-licenses.json")," is loaded. Licenses are updated or added but never deleted.")))}p.isMDXComponent=!0}}]);