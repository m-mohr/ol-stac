"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[918],{4346:function(e,t,s){var n=s(9078),a=s(4818),o=s(3725),r=s(6300),c=s(1831),i=s(1840);(0,s(6224).z2)(i.Z);const w=new o.Z({url:"https://s3.us-west-2.amazonaws.com/sentinel-cogs/sentinel-s2-l2a-cogs/10/T/ES/2022/7/S2A_10TES_20220726_0_L2A/S2A_10TES_20220726_0_L2A.json"}),l=new r.Z({source:new a.Z}),u=new n.Z({target:"map",layers:[l,w],view:new c.ZP({center:[0,0],zoom:0})});w.on("sourceready",(()=>{u.getView().fit(w.getExtent())})),w.on("assetsready",(()=>{for(const e of w.getLayersArray()){const t=e.get("stac");let s;s=t.isAsset()||t.isLink()?t.getMetadata("title")||t.getKey():"Footprint",e.set("title",s)}}))}},function(e){var t;t=4346,e(e.s=t)}]);
//# sourceMappingURL=stac-item.js.map