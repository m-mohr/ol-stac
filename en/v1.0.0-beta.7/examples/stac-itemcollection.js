"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[350],{8171:function(e,n,t){var s=t(9078),c=t(4818),i=t(3725),o=t(7189),a=t(1831),r=t(1840),l=t(6524);(0,t(6224).z2)(r.Z);const p=new i.Z({url:"https://tamn.snapplanet.io/search?bbox=125.727770,-29.514858,133.412707,-23.673395&collections=S2",displayPreview:!0}),u=new o.Z({source:new c.Z}),w=new s.Z({target:"map",layers:[u,p],view:new a.ZP({center:[0,0],zoom:0})});w.on("singleclick",(async e=>{const n=await(0,l.oc)(e);if(n.length>0){const e=n.map((e=>e.properties.productIdentifier));document.getElementById("ids").innerText=e.join(", ")}})),p.on("sourceready",(()=>{w.getView().fit(p.getExtent())}))}},function(e){var n;n=8171,e(e.s=n)}]);
//# sourceMappingURL=stac-itemcollection.js.map