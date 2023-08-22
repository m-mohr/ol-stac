"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[690],{6075:function(e,t,n){function r(e,t){let n=e.length-t,r=0;do{for(let n=t;n>0;n--)e[r+t]+=e[r],r++;n-=t}while(n>0)}function o(e,t,n){let r=0,o=e.length;const i=o/n;for(;o>t;){for(let n=t;n>0;--n)e[r+t]+=e[r],++r;o-=t}const c=e.slice();for(let t=0;t<i;++t)for(let r=0;r<n;++r)e[n*t+r]=c[(n-r-1)*i+t]}n.d(t,{Z:function(){return i}});class i{async decode(e,t){const n=await this.decodeBlock(t),i=e.Predictor||1;if(1!==i){const t=!e.StripOffsets;return function(e,t,n,i,c,l){if(!t||1===t)return e;for(let e=0;e<c.length;++e){if(c[e]%8!=0)throw new Error("When decoding with predictor, only multiple of 8 bits are supported.");if(c[e]!==c[0])throw new Error("When decoding with predictor, all samples must have the same size.")}const f=c[0]/8,s=2===l?1:c.length;for(let l=0;l<i&&!(l*s*n*f>=e.byteLength);++l){let i;if(2===t){switch(c[0]){case 8:i=new Uint8Array(e,l*s*n*f,s*n*f);break;case 16:i=new Uint16Array(e,l*s*n*f,s*n*f/2);break;case 32:i=new Uint32Array(e,l*s*n*f,s*n*f/4);break;default:throw new Error(`Predictor 2 not allowed with ${c[0]} bits per sample.`)}r(i,s)}else 3===t&&(i=new Uint8Array(e,l*s*n*f,s*n*f),o(i,s,f))}return e}(n,i,t?e.TileWidth:e.ImageWidth,t?e.TileLength:e.RowsPerStrip||e.ImageLength,e.BitsPerSample,e.PlanarConfiguration)}return n}}},5690:function(e,t,n){n.r(t),n.d(t,{default:function(){return l}});var r=n(6075);const o=257;function i(e,t){for(let n=t.length-1;n>=0;n--)e.push(t[n]);return e}function c(e){const t=new Uint16Array(4093),n=new Uint8Array(4093);for(let e=0;e<=257;e++)t[e]=4096,n[e]=e;let r=258,c=9,l=0;function f(){r=258,c=9}function s(e){const t=function(e,t,n){const r=t%8,i=Math.floor(t/8),c=8-r,l=t+n-8*(i+1);let f=8*(i+2)-(t+n);const s=8*(i+2)-t;if(f=Math.max(0,f),i>=e.length)return console.warn("ran off the end of the buffer before finding EOI_CODE (end on input code)"),o;let a=e[i]&2**(8-r)-1;a<<=n-c;let u=a;if(i+1<e.length){let t=e[i+1]>>>f;t<<=Math.max(0,n-s),u+=t}if(l>8&&i+2<e.length){const r=8*(i+3)-(t+n);u+=e[i+2]>>>r}return u}(e,l,c);return l+=c,t}function a(e,o){return n[r]=o,t[r]=e,r++,r-1}function u(e){const r=[];for(let o=e;4096!==o;o=t[o])r.push(n[o]);return r}const h=[];f();const d=new Uint8Array(e);let w,g=s(d);for(;g!==o;){if(256===g){for(f(),g=s(d);256===g;)g=s(d);if(g===o)break;if(g>256)throw new Error(`corrupted code at scanline ${g}`);i(h,u(g)),w=g}else if(g<r){const e=u(g);i(h,e),a(w,e[e.length-1]),w=g}else{const e=u(w);if(!e)throw new Error(`Bogus entry. Not in dictionary, ${w} / ${r}, position: ${l}`);i(h,e),h.push(e[e.length-1]),a(w,e[e.length-1]),w=g}r+1>=2**c&&(12===c?w=void 0:c++),g=s(d)}return new Uint8Array(h)}class l extends r.Z{decodeBlock(e){return c(e).buffer}}}}]);
//# sourceMappingURL=690.js.map