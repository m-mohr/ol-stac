"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[270],{5825:function(e,n,t){var s=t(5654),i=t(3370),c=t(2179),o=t(1688),a=t(2459),r=t(5501),p=t(7759);(0,t(9160).kz)(r.A);const l=new c.A({url:"https://tamn.snapplanet.io/search?bbox=125.727770,-29.514858,133.412707,-23.673395&collections=S2",displayPreview:!0}),u=new o.A({source:new i.A}),w=new s.A({target:"map",layers:[u,l],view:new a.Ay({center:[0,0],zoom:0})});w.on("singleclick",(async e=>{const n=await(0,p.pQ)(e);if(n.length>0){const e=n.map((e=>e.properties.productIdentifier));document.getElementById("ids").innerText=e.join(", ")}})),l.on("sourceready",(()=>{w.getView().fit(l.getExtent())}))}},function(e){var n;n=5825,e(e.s=n)}]);
//# sourceMappingURL=stac-itemcollection.js.map