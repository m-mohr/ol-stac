!function(){"use strict";const e=new jugl.Template("template"),n=document.getElementById("examples");let t;function o(t){const o=function(e){if(0===(e=e.trim()).length)return info.examples;const n=e.toLowerCase().split(/\W+/),t={},o=function(e,n){for(let o in e){let r=t[o];r||(r={},t[o]=r),r[n]=(r[n]||0)+e[o]}};n.forEach((function(e){const n=info.wordIndex[e];if(n)o(n,e);else{const n=new RegExp(e);for(let t in info.wordIndex)n.test(t)&&o(info.wordIndex[t],e)}}));const r=[];for(let e in t){const n=info.examples[e];n.score=0,n.words=0;for(let o in t[e])n.score+=t[e][o],n.words++;r.push(n)}return r.sort((function(e,n){return n.score-e.score||n.words-e.words})),r}(t);!function(t){n.innerHTML="",e.process({context:{examples:t},clone:!0,parent:n}),document.getElementById("count").innerHTML=String(t.length)}(o),function(e){e=e.trim();const n=new URLSearchParams(window.location.search);0===e.length?n.delete("q"):n.set("q",e);let t=window.location.pathname;0!==n.toString().length&&(t+=`?${n.toString()}`);history.replaceState(null,"",t)}(t)}const r=new URLSearchParams(window.location.search).get("q")||"",i=document.getElementById("keywords");i.addEventListener("input",(function(){t&&window.clearTimeout(t);const e=this.value;t=window.setTimeout((function(){o(e)}),500)})),i.value=r,o(r)}();