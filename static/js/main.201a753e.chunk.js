(this["webpackJsonp@kyc-app/frontend"]=this["webpackJsonp@kyc-app/frontend"]||[]).push([[0],{255:function(e,t,n){"use strict";(function(e){var r=n(0),a=n.n(r),c=n(28),o=n(26),s=n(12),u=n(256),i=n(165),l=n(61),f=(n(371),n(258)),p=n(170),d=n(265),b=n(47);u.a.isMetaMaskInstalled;t.a=function(){var t=Object(s.useState)(""),n=Object(o.a)(t,2),r=n[0],u=n[1],h=Object(d.a)(),x=Object(s.useState)(),v=Object(o.a)(x,2),j=v[0],m=v[1],g=Object(p.d)(j),O=Object(p.c)(g.signer,h,4);Object(s.useEffect)((function(){var e=new l.a.providers.Web3Provider(window.ethereum);m(e)}),[]);var w=function(){var e=Object(c.a)(a.a.mark((function e(t){var n,r,c;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,window.ethereum.request({method:"eth_accounts"});case 2:return n=e.sent,e.next=5,window.ethereum.request({method:"eth_getEncryptionPublicKey",params:[n[0]]});case 5:return r=e.sent,c=y(Object(i.encrypt)(r,{data:t},"x25519-xsalsa20-poly1305")),e.abrupt("return",c);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),k=function(){var e=Object(c.a)(a.a.mark((function e(t){var n,r;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,window.ethereum.request({method:"eth_accounts"});case 2:return n=e.sent,e.next=5,window.ethereum.request({method:"eth_decrypt",params:[t,n[0]]});case 5:return r=e.sent,e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),y=function(t){return l.a.utils.hexlify(e.from(JSON.stringify(t)))},N=function(){var e=Object(c.a)(a.a.mark((function e(t){var n,r,c;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=JSON.stringify({data:t,version:"v1"}),r=Object(f.create)(new URL("https://ipfs.infura.io:5001/api/v0")),e.next=4,r.add(n);case 4:return c=e.sent,console.log("[uploadToIPFS] cid",c.path),e.abrupt("return",c.path);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),F=function(){var e=Object(c.a)(a.a.mark((function e(){var t,n;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(console.log("createPIN"),""!=r){e.next=4;break}return alert("Empty!"),e.abrupt("return");case 4:return e.prev=4,console.log("Encrypting..."),e.next=8,w(r);case 8:return t=e.sent,console.log("Uploading..."),e.next=12,N(t);case 12:return n=e.sent,console.log("Minting..."),e.next=16,O.NFTManager.create(n);case 16:console.log("...OK"),u("Token created with data:"+r),e.next=25;break;case 20:e.prev=20,e.t0=e.catch(4),console.log("...FAIL"),console.error(e.t0),alert("Error occurred");case 25:case"end":return e.stop()}}),e,null,[[4,20]])})));return function(){return e.apply(this,arguments)}}(),T=function(){var e=Object(c.a)(a.a.mark((function e(){var t,n,r,c,o;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,O.NFTManager.get();case 3:return t=e.sent,e.next=6,O.NFTManager.tokenURI(t);case 6:return n=e.sent,e.next=9,fetch("https://ipfs.io/ipfs/".concat(n));case 9:return r=e.sent,e.next=12,r.json();case 12:return c=e.sent,e.next=15,k(c.data);case 15:o=e.sent,u("Token was read and contains data: "+o),e.next=24;break;case 19:e.prev=19,e.t0=e.catch(0),console.log("...FAIL"),console.error(e.t0),alert("Error occurred");case 24:case"end":return e.stop()}}),e,null,[[0,19]])})));return function(){return e.apply(this,arguments)}}(),I=function(){var e=Object(c.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,console.log("Deleting..."),e.next=4,O.NFTManager.remove();case 4:console.log("...OK"),u("Token was deleted"),e.next=13;break;case 8:e.prev=8,e.t0=e.catch(0),console.log("...FAIL"),console.error(e.t0),alert("Error!");case 13:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();return Object(b.jsx)("div",{className:"text-center",children:Object(b.jsxs)("span",{className:"form-signin",children:[Object(b.jsx)("h1",{className:"h3 mb-3 font-weight-normal",children:"KYC data to encrypt"}),Object(b.jsx)("textarea",{className:"form-control",onChange:function(e){return u(e.target.value)},value:r,required:!0,children:"Email address"}),Object(b.jsx)("br",{}),Object(b.jsx)("button",{className:"btn btn-lg btn-primary btn-block",onClick:function(){return F()},children:"Create Personal Identity NFT"}),Object(b.jsx)("button",{className:"btn btn-lg btn-success btn-block",onClick:function(){return T()},children:"Read Personal Identity NFT"}),Object(b.jsx)("button",{className:"btn btn-lg btn-danger btn-block",onClick:function(){return I()},children:"Delete Personal Identity NFT"}),Object(b.jsx)("p",{className:"mt-5 mb-3 text-muted",children:"Personal Identity Token"})]})})}}).call(this,n(16).Buffer)},265:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var r=n(0),a=n.n(r),c=n(28),o=n(26),s=n(12),u=n.e(4).then(n.t.bind(null,618,3)),i=function(){var e=Object(c.a)(a.a.mark((function e(){var t,n;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={},e.next=3,u;case 3:if(e.t1=t=e.sent.default,e.t0=null!==e.t1,!e.t0){e.next=7;break}e.t0=void 0!==t;case 7:if(!e.t0){e.next=11;break}e.t2=t,e.next=12;break;case 11:e.t2={};case 12:return n.deployedContracts=e.t2,e.abrupt("return",n);case 14:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),l=function(){var e=Object(s.useState)({}),t=Object(o.a)(e,2),n=t[0],r=t[1];return Object(s.useEffect)((function(){(function(){var e=Object(c.a)(a.a.mark((function e(){var t;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i();case 2:t=e.sent,r(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),n}},274:function(e,t,n){},288:function(e,t){},290:function(e,t){},302:function(e,t){},303:function(e,t){},324:function(e,t){},330:function(e,t){},333:function(e,t){},335:function(e,t){},348:function(e,t){},350:function(e,t){},362:function(e,t){},369:function(e,t){},372:function(e,t){},428:function(e,t){},589:function(e,t){},612:function(e,t,n){"use strict";n.r(t);var r=n(12),a=n.n(r),c=n(254),o=n.n(c),s=(n(274),n(255)),u=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,619)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,c=t.getLCP,o=t.getTTFB;n(e),r(e),a(e),c(e),o(e)}))},i=n(47);o.a.render(Object(i.jsx)(a.a.StrictMode,{children:Object(i.jsx)(s.a,{})}),document.getElementById("root")),u()}},[[612,1,2]]]);
//# sourceMappingURL=main.201a753e.chunk.js.map