"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[386],{389:function(e,t,n){var a=n(5654),c=n(3370),i=n(644),u=n(1688),l=n(2459),o=n(5501);(0,n(9160).kz)(o.A);const d=new u.A({source:new c.A}),r=new a.A({target:"map",layers:[d],view:new l.Ay({center:[0,0],zoom:0})});let s;function y(){document.getElementById("url-input").value="",f()}function f(){s&&r.removeLayer(s);const e=document.getElementById("url-input").value;if(e)try{s=new i.A({url:e,displayPreview:!0,displayGeoTiffByDefault:!0,displayWebMapLink:!0}),s.on("sourceready",(()=>{r.getView().fit(s.getExtent())})),r.addLayer(s)}catch(e){alert(e.message)}}window.onload=function(){document.getElementById("load-btn").addEventListener("click",f),document.getElementById("reset-btn").addEventListener("click",y),f()}}},function(e){var t;t=389,e(e.s=t)}]);
//# sourceMappingURL=custom.js.map