"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[634],{6573:function(e,t,n){var s=n(5654),o=n(3370),l=n(644),r=n(1688),a=n(2459),c=n(5501);(0,n(9160).kz)(c.A);const i=new l.A({url:"https://s3.us-west-2.amazonaws.com/sentinel-cogs/sentinel-s2-l2a-cogs/10/T/ES/2022/7/S2A_10TES_20220726_0_L2A/S2A_10TES_20220726_0_L2A.json",buildTileUrlTemplate:e=>"https://tiles.rdnt.io/tiles/{z}/{x}/{y}@2x?url="+encodeURIComponent(e.getAbsoluteUrl())}),u=new r.A({source:new o.A}),w=new s.A({target:"map",layers:[u,i],view:new a.Ay({center:[0,0],zoom:0})});i.on("sourceready",(()=>{w.getView().fit(i.getExtent())}))}},function(e){var t;t=6573,e(e.s=t)}]);
//# sourceMappingURL=stac-item-tileserver.js.map