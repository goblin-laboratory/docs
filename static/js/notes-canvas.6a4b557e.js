(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"./docs/notes/canvas.mdx":function(e,n,a){"use strict";a.r(n);var t=a("./node_modules/react/index.js"),m=a.n(t),o=a("./node_modules/@mdx-js/tag/dist/index.js");function r(e,n){if(null==e)return{};var a,t,m=function(e,n){if(null==e)return{};var a,t,m={},o=Object.keys(e);for(t=0;t<o.length;t++)a=o[t],n.indexOf(a)>=0||(m[a]=e[a]);return m}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)a=o[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(m[a]=e[a])}return m}n.default=function(e){var n=e.components;r(e,["components"]);return m.a.createElement(o.MDXTag,{name:"wrapper",components:n},m.a.createElement(o.MDXTag,{name:"h1",components:n,props:{id:"canvas"}},m.a.createElement(o.MDXTag,{name:"a",components:n,parentName:"h1",props:{"aria-hidden":!0,href:"#canvas"}},m.a.createElement(o.MDXTag,{name:"span",components:n,parentName:"a",props:{className:"icon-link"}},"#")),"Canvas"),m.a.createElement(o.MDXTag,{name:"h2",components:n,props:{id:"canvas-is-not-origin-clean"}},m.a.createElement(o.MDXTag,{name:"a",components:n,parentName:"h2",props:{"aria-hidden":!0,href:"#canvas-is-not-origin-clean"}},m.a.createElement(o.MDXTag,{name:"span",components:n,parentName:"a",props:{className:"icon-link"}},"#")),"canvas is not origin-clean"),m.a.createElement(o.MDXTag,{name:"p",components:n},m.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"canvas")," \u52a0\u8f7d\u4e86\u8fdc\u7a0b\u56fe\u7247\u540e\u8c03\u7528 ",m.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"captureStream")," \u51fa\u9519\uff0c\u63d0\u793a ",m.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"canvas is not origin-clean")),m.a.createElement(o.MDXTag,{name:"p",components:n},"\u5177\u4f53\u539f\u56e0\uff1a",m.a.createElement(o.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"https://www.w3.org/TR/2011/WD-html5-20110405/the-canvas-element.html"}},"https://www.w3.org/TR/2011/WD-html5-20110405/the-canvas-element.html")),m.a.createElement(o.MDXTag,{name:"p",components:n},"\u89e3\u51b3\u65b9\u6cd5\uff1a\n1. \u5c06\u56fe\u7247\u6570\u636e\u83b7\u53d6\u5230\u672c\u5730\u7136\u540e\u901a\u8fc7 ",m.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"URL.createObjectURL"),"\n2. \u8bbe\u7f6e Image crossOrigin \u5c5e\u6027"),m.a.createElement(o.MDXTag,{name:"h3",components:n,props:{id:"1-urlcreateobjecturl"}},m.a.createElement(o.MDXTag,{name:"a",components:n,parentName:"h3",props:{"aria-hidden":!0,href:"#1-urlcreateobjecturl"}},m.a.createElement(o.MDXTag,{name:"span",components:n,parentName:"a",props:{className:"icon-link"}},"#")),"1. URL.createObjectURL"),m.a.createElement(o.MDXTag,{name:"pre",components:n},m.a.createElement(o.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-js"}},"const loadImg = (src) => {\n  return new Promise((resolve) => {\n    fetch(src).then((response) => {\n    const img = new Image();\n    img.onload = () => {\n      resolve(img);\n    };\n    img.src = URL.createObjectURL(response.blob());\n    window.setTimeout(() => {\n      resolve(null);\n    }, 30 * 1000);\n  }).catch(() => resolve(null)));\n};\n")),m.a.createElement(o.MDXTag,{name:"h3",components:n,props:{id:"2-\u8bbe\u7f6e-image-crossorigin-\u5c5e\u6027"}},m.a.createElement(o.MDXTag,{name:"a",components:n,parentName:"h3",props:{"aria-hidden":!0,href:"#2-\u8bbe\u7f6e-image-crossorigin-\u5c5e\u6027"}},m.a.createElement(o.MDXTag,{name:"span",components:n,parentName:"a",props:{className:"icon-link"}},"#")),"2. \u8bbe\u7f6e Image crossOrigin \u5c5e\u6027"),m.a.createElement(o.MDXTag,{name:"pre",components:n},m.a.createElement(o.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-js"}},"const loadImg = (blob) => {\n  return new Promise((resolve) => {\n    const img = new Image();\n    img.crossOrigin = 'anonymous';\n    img.onload = () => {\n      resolve(img);\n    };\n    img.src = src;\n    window.setTimeout(() => {\n      resolve(null);\n    }, 30 * 1000);\n  });\n};\n")),m.a.createElement(o.MDXTag,{name:"p",components:n},"\u53c2\u8003\u8d44\u6599\uff1a",m.a.createElement(o.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"https://juejin.im/post/5aefc0456fb9a07abc29d36d"}},"\u57fa\u4e8ecanvas\u751f\u6210\u56fe\u7247")),m.a.createElement(o.MDXTag,{name:"h2",components:n,props:{id:"capturestream-\u81ea\u52a8\u64ad\u653e"}},m.a.createElement(o.MDXTag,{name:"a",components:n,parentName:"h2",props:{"aria-hidden":!0,href:"#capturestream-\u81ea\u52a8\u64ad\u653e"}},m.a.createElement(o.MDXTag,{name:"span",components:n,parentName:"a",props:{className:"icon-link"}},"#")),"captureStream \u81ea\u52a8\u64ad\u653e"),m.a.createElement(o.MDXTag,{name:"p",components:n},m.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"captureStream")," \u751f\u6210\u7684 ",m.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"stream")," \u65e0\u6cd5\u81ea\u52a8\u64ad\u653e\u3002"),m.a.createElement(o.MDXTag,{name:"p",components:n},m.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"captureStream")," \u63a5\u53e3\u8c03\u7528\u65f6\u5165\u53c2\u662f\u6700\u5927\u5e27\u7387\uff0c",m.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"canvas")," \u5728\u53d8\u5316\u7684\u65f6\u5019\u624d\u4f1a\u4ea7\u751f\u65b0\u7684\u5e27\uff0c\u6240\u4ee5\u4e00\u4e2a\u9759\u6b62\u7684 ",m.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"canvas")," \u53ea\u4f1a\u4ea7\u751f\u4e00\u5e27\uff0c\u5bfc\u81f4 ",m.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"stream")," \u65e0\u6cd5\u81ea\u52a8\u64ad\u653e\u3002"),m.a.createElement(o.MDXTag,{name:"p",components:n},"\u542f\u52a8\u4e00\u4e2a\u5b9a\u65f6\u5668\uff0c\u5237\u65b0 ",m.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"canvas")," \u7684\u5de6\u4e0a\u89d2\u53ef\u4ee5\u89e3\u51b3\u8fd9\u4e2a\u95ee\u9898\u3002"),m.a.createElement(o.MDXTag,{name:"pre",components:n},m.a.createElement(o.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-js"}},"const ctx = document.getElementById('canvas').getContext('2d');\n\nwindow.setInterval(()=>{\n  ctx.fillStyle = '#fff';\n  ctx.fillRect(0, 0, 1, 1);\n}, 100);\n")),m.a.createElement(o.MDXTag,{name:"h2",components:n,props:{id:""}},m.a.createElement(o.MDXTag,{name:"a",components:n,parentName:"h2",props:{"aria-hidden":!0,href:"#"}},m.a.createElement(o.MDXTag,{name:"span",components:n,parentName:"a",props:{className:"icon-link"}},"#"))))}}}]);