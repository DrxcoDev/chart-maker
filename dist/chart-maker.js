!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("Chart"),require("Hammer")):"function"==typeof define&&define.amd?define(["Chart","Hammer"],t):"object"==typeof exports?exports.ChartMaker=t(require("Chart"),require("Hammer")):e.ChartMaker=t(e.Chart,e.Hammer)}(this,((e,t)=>(()=>{"use strict";var o={914:(e,t,o)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.ChartMaker=void 0;var r=o(24),n=function(){function e(){}return e.createChart=function(e,t){new r.Chart(e,{type:t.type,data:t.data,options:t.options,plugins:t.plugins||[]})},e.exportChartToImage=function(e,t,o){if(void 0===o&&(o=1),"image/png"!==t&&"image/jpeg"!==t&&"image/svg"!==t&&"pdf"!==t)throw new Error('Formato no soportado. Use "image/png" o "image/jpeg".');if("image/jpeg"===t&&(o<0||o>1))throw new Error("La calidad debe estar entre 0 y 1.");return e.toDataURL(t,o)},e}();t.ChartMaker=n},10:function(e,t,o){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.ZoomPlugin=void 0;var n=r(o(394));t.ZoomPlugin={id:"zoomPlugin",beforeInit:function(e){var t=new n.default(e.canvas);t.get("pinch").set({enable:!0}),t.get("pan").set({direction:n.default.DIRECTION_ALL}),t.on("pinch",(function(t){var o=t.scale,r=e.scales.x,n=e.scales.y;r&&n&&(r.options.min=r.options.min*o,r.options.max=r.options.max*o,n.options.min=n.options.min*o,n.options.max=n.options.max*o,e.update())})),t.on("pan",(function(t){var o=t.deltaX,r=t.deltaY,n=e.scales.x,a=e.scales.y;n&&a&&(n.options.min=n.options.min-o,n.options.max=n.options.max-o,a.options.min=a.options.min+r,a.options.max=a.options.max+r,e.update())}))}}},24:t=>{t.exports=e},394:e=>{e.exports=t}},r={};function n(e){var t=r[e];if(void 0!==t)return t.exports;var a=r[e]={exports:{}};return o[e].call(a.exports,a,a.exports,n),a.exports}var a={};return(()=>{var e=a;Object.defineProperty(e,"__esModule",{value:!0}),e.ZoomPlugin=e.ChartMaker=void 0;var t=n(914);Object.defineProperty(e,"ChartMaker",{enumerable:!0,get:function(){return t.ChartMaker}});var o=n(10);Object.defineProperty(e,"ZoomPlugin",{enumerable:!0,get:function(){return o.ZoomPlugin}})})(),a})()));