"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[295],{3834:function(e,t,s){var n=s(9078),a=s(4818),r=s(5183),o=s(134),c=s(6300),i=s(1831),u=s(1840);async function f(e){const t=new URLSearchParams({href:e}),s=await fetch(`https://planetarycomputer.microsoft.com/api/sas/v1/sign?${t}`);return(await s.json()).href}(0,s(6224).z2)(u.Z);const l=new r.Z({url:"https://planetarycomputer.microsoft.com/api/stac/v1/collections/sentinel-2-l2a/items/S2B_MSIL2A_20220909T185929_R013_T10TES_20220910T222807",assets:["visual"],async getSourceOptions(e,t){if(e===o.Z.GeoTIFF)for(const e of t.sources)e.url=await f(e.url);return t}}),p=new c.Z({source:new a.Z}),w=new n.Z({target:"map",layers:[p,l],view:new i.ZP({center:[0,0],zoom:0})});l.on("sourceready",(()=>{w.getView().fit(l.getExtent())}))}},function(e){var t;t=3834,e(e.s=t)}]);
//# sourceMappingURL=planetary-computer.js.map