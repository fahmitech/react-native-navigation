(window.webpackJsonp=window.webpackJsonp||[]).push([[374],{448:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return p}));var a=n(3),r=n(7),o=(n(0),n(470)),i=["components"],s={id:"style-statusBar",title:"StatusBar",sidebar_label:"StatusBar"},c={unversionedId:"docs/style-statusBar",id:"version-7.25.3/docs/style-statusBar",isDocsHomePage:!1,title:"StatusBar",description:"The StatusBar appearance is controlled through options.",source:"@site/versioned_docs/version-7.25.3/docs/style-statusbar.mdx",slug:"/docs/style-statusBar",permalink:"/react-native-navigation/docs/style-statusBar",editUrl:"https://github.com/wix/react-native-navigation/edit/master/website/versioned_docs/version-7.25.3/docs/style-statusbar.mdx",version:"7.25.3",sidebar_label:"StatusBar",sidebar:"version-7.25.3/docs",previous:{title:"Themes",permalink:"/react-native-navigation/docs/style-theme"},next:{title:"Orientation",permalink:"/react-native-navigation/docs/style-orientation"}},l=[{value:"Changing StatusBar style dynamically",id:"changing-statusbar-style-dynamically",children:[]},{value:"How to keep current StatusBar color when displaying screens",id:"how-to-keep-current-statusbar-color-when-displaying-screens",children:[]}],u={toc:l};function p(e){var t=e.components,n=Object(r.a)(e,i);return Object(o.b)("wrapper",Object(a.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"The StatusBar appearance is controlled through options."),Object(o.b)("p",null,"For example, the following options will change the StatusBar background color to white will use dark colors for the StatusBar content (time, battery information, notification icons etc)"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"options: {\n  statusBar: {\n    backgroundColor: 'white',\n    style: 'dark'\n  }\n}\n")),Object(o.b)("div",{className:"admonition admonition-warning alert alert--danger"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"Compatibility with StatusBar component")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"React native's ",Object(o.b)("a",{parentName:"p",href:"https://reactnative.dev/docs/statusbar#__docusaurus"},"StatusBar")," component is incompatible with React Native Navigation and you should avoid using it."))),Object(o.b)("h2",{id:"changing-statusbar-style-dynamically"},"Changing StatusBar style dynamically"),Object(o.b)("p",null,"As the StatusBar is controlled through options, it can be configured dynamically by calling ",Object(o.b)("inlineCode",{parentName:"p"},"Navigation.mergeOptions")," with the desired StatusBar options."),Object(o.b)("p",null,"For example, here's how you would hide the StatusBar dynamically"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"Navigation.mergeOptions(this.props.componentId, {\n  statusBar: {\n    visible: false\n  }\n});\n")),Object(o.b)("h2",{id:"how-to-keep-current-statusbar-color-when-displaying-screens"},"How to keep current StatusBar color when displaying screens"),Object(o.b)("p",null,"When screens are displayed, the StatusBar color always changes to the color associated with the current screen. If a color isn't specified for a given screen (and thus for the StatusBar), the default (System default or from defaultOptions) color is used. Sometimes you might want to keep the current StatusBar color, for example when displaying an alert or a toast. To keep StatusBar color unchanged when displaying a screen, use ",Object(o.b)("inlineCode",{parentName:"p"},"null")," as a StatusBar color."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"options: {\n  statusBar: {\n    backgroundColor: null\n  }\n}\n")))}p.isMDXComponent=!0},470:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),u=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=u(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=u(n),b=a,m=p["".concat(i,".").concat(b)]||p[b]||d[b]||o;return n?r.a.createElement(m,s(s({ref:t},l),{},{components:n})):r.a.createElement(m,s({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=b;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);