"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[283],{1362:function(e,t,n){var s=n(9078),o=n(4818),l=n(629),r=n(6300),a=n(1831),c=n(1840);(0,n(6224).z2)(c.Z);const i=new l.Z({url:"https://s3.us-west-2.amazonaws.com/sentinel-cogs/sentinel-s2-l2a-cogs/10/T/ES/2022/7/S2A_10TES_20220726_0_L2A/S2A_10TES_20220726_0_L2A.json",buildTileUrlTemplate:e=>"https://tiles.rdnt.io/tiles/{z}/{x}/{y}@2x?url="+encodeURIComponent(e.getAbsoluteUrl())}),u=new r.Z({source:new o.Z}),w=new s.Z({target:"map",layers:[u,i],view:new a.ZP({center:[0,0],zoom:0})});i.on("sourceready",(()=>{w.getView().fit(i.getExtent())}))}},function(e){var t;t=1362,e(e.s=t)}]);
//# sourceMappingURL=stac-item-tileserver.js.map