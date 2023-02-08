(window.webpackJsonp=window.webpackJsonp||[]).push([[310],{381:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return c})),a.d(t,"toc",(function(){return p})),a.d(t,"default",(function(){return u}));var n=a(3),r=a(7),l=(a(0),a(548)),i=["components"],o={id:"overlay",title:"Overlay",sidebar_label:"Overlay"},c={unversionedId:"api/overlay",id:"api/overlay",isDocsHomePage:!1,title:"Overlay",description:"showOverlay()",source:"@site/docs/api/api-overlay.mdx",slug:"/api/overlay",permalink:"/react-native-navigation/next/api/overlay",editUrl:"https://github.com/wix/react-native-navigation/edit/master/website/docs/api/api-overlay.mdx",version:"current",sidebar_label:"Overlay",sidebar:"api",previous:{title:"Modal",permalink:"/react-native-navigation/next/api/modal"},next:{title:"Layout",permalink:"/react-native-navigation/next/api/layout-layout"}},p=[{value:"<code>showOverlay()</code>",id:"showoverlay",children:[]},{value:"<code>dismissOverlay()</code>",id:"dismissoverlay",children:[]},{value:"<code>dismissAllOverlays()</code>",id:"dismissalloverlays",children:[]}],b={toc:p},s="wrapper";function u(e){var t=e.components,a=Object(r.a)(e,i);return Object(l.b)(s,Object(n.a)({},b,a,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h2",{id:"showoverlay"},Object(l.b)("inlineCode",{parentName:"h2"},"showOverlay()")),Object(l.b)("p",null,"Shows a component as an overlay."),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Name"),Object(l.b)("th",{parentName:"tr",align:null},"Required"),Object(l.b)("th",{parentName:"tr",align:null},"Type"),Object(l.b)("th",{parentName:"tr",align:null},"Description"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"layout"),Object(l.b)("td",{parentName:"tr",align:null},"Yes"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("a",{parentName:"td",href:"/react-native-navigation/next/api/layout-layout"},"Layout")),Object(l.b)("td",{parentName:"tr",align:null},"Any type of layout. Typically, Component layout is used in Overlays but it's possible to load any other layout (",Object(l.b)("a",{parentName:"td",href:"/react-native-navigation/next/api/layout-bottomTabs"},"BottomTabs"),", ",Object(l.b)("a",{parentName:"td",href:"/react-native-navigation/next/api/layout-stack"},"Stack"),", ",Object(l.b)("a",{parentName:"td",href:"/react-native-navigation/next/api/layout-sideMenu"},"SideMenu"),", ",Object(l.b)("a",{parentName:"td",href:"/react-native-navigation/next/api/layout-component"},"Component"),")")))),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-js"},"Navigation.showOverlay({\n  component: {\n    name: 'example.Overlay',\n    options: {\n      layout: {\n            componentBackgroundColor: 'transparent',\n          },\n      overlay: {\n        interceptTouchOutside: true\n      }\n    }\n  }\n});\n")),Object(l.b)("h2",{id:"dismissoverlay"},Object(l.b)("inlineCode",{parentName:"h2"},"dismissOverlay()")),Object(l.b)("p",null,"Dismisses an overlay matching the given overlay componentId."),Object(l.b)("h4",{id:"parameters"},"Parameters"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Name"),Object(l.b)("th",{parentName:"tr",align:null},"Required"),Object(l.b)("th",{parentName:"tr",align:null},"Type"),Object(l.b)("th",{parentName:"tr",align:null},"Description"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"componentId"),Object(l.b)("td",{parentName:"tr",align:null},"Yes"),Object(l.b)("td",{parentName:"tr",align:null},"string"),Object(l.b)("td",{parentName:"tr",align:null},"The component id presented in Overlay")))),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-js"},"Navigation.dismissOverlay(this.props.componentId);\n")),Object(l.b)("h2",{id:"dismissalloverlays"},Object(l.b)("inlineCode",{parentName:"h2"},"dismissAllOverlays()")),Object(l.b)("p",null,"Dismisses all overlays."),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-js"},"Navigation.dismissAllOverlays();\n")))}u.isMDXComponent=!0},548:function(e,t,a){"use strict";a.d(t,"a",(function(){return s})),a.d(t,"b",(function(){return y}));var n=a(0),r=a.n(n);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=r.a.createContext({}),b=function(e){var t=r.a.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},s=function(e){var t=b(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),s=b(a),u=n,d=s["".concat(i,".").concat(u)]||s[u]||m[u]||l;return a?r.a.createElement(d,o(o({ref:t},p),{},{components:a})):r.a.createElement(d,o({ref:t},p))}));function y(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,i=new Array(l);i[0]=d;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[u]="string"==typeof e?e:n,i[1]=o;for(var p=2;p<l;p++)i[p]=a[p];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"}}]);