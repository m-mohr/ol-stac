"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[977],{9420:function(e,t,s){var n=s(5654),a=s(3370),r=s(8935),o=s(2533),c=s(2308),i=s(2459),u=s(5501);async function f(e){const t=new URLSearchParams({href:e}),s=await fetch(`https://planetarycomputer.microsoft.com/api/sas/v1/sign?${t}`);return(await s.json()).href}(0,s(9160).kz)(u.A);const l=new r.A({url:"https://planetarycomputer.microsoft.com/api/stac/v1/collections/sentinel-2-l2a/items/S2B_MSIL2A_20220909T185929_R013_T10TES_20220910T222807",assets:["visual"],async getSourceOptions(e,t){if(e===o.A.GeoTIFF)for(const e of t.sources)e.url=await f(e.url);return t}}),p=new c.A({source:new a.A}),w=new n.A({target:"map",layers:[p,l],view:new i.Ay({center:[0,0],zoom:0})});l.on("sourceready",(()=>{w.getView().fit(l.getExtent())}))}},function(e){var t;t=9420,e(e.s=t)}]);
//# sourceMappingURL=planetary-computer.js.map