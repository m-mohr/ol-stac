"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[118],{7809:function(e,t,s){var n=s(5654),a=s(3370),o=s(644),r=s(1688),c=s(2459),i=s(5501);(0,s(9160).kz)(i.A);const A=new o.A({url:"https://s3.us-west-2.amazonaws.com/sentinel-cogs/sentinel-s2-l2a-cogs/10/T/ES/2022/7/S2A_10TES_20220726_0_L2A/S2A_10TES_20220726_0_L2A.json"}),w=new r.A({source:new a.A}),l=new n.A({target:"map",layers:[w,A],view:new c.Ay({center:[0,0],zoom:0})});A.on("sourceready",(()=>{l.getView().fit(A.getExtent())})),A.on("assetsready",(()=>{for(const e of A.getLayersArray()){const t=e.get("stac");let s;s=t.isAsset()||t.isLink()?t.getMetadata("title")||t.getKey():"Footprint",e.set("title",s)}}))}},function(e){var t;t=7809,e(e.s=t)}]);
//# sourceMappingURL=stac-item.js.map