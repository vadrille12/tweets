"use strict";(self.webpackChunkgoit_tweets=self.webpackChunkgoit_tweets||[]).push([[187],{9187:function(e,n,t){t.r(n),t.d(n,{default:function(){return B}});var o=t(2791),s=t(9434),r=t(8500),i=t(8683),l=t(4925),c=t(9439),a=t(3853),u=(0,t(6916).P1)([function(e){return e.filter},function(e){return e.tweets.users}],(function(e,n){switch(e){case"follow":return n.filter((function(e){return!e.isFollowing}));case"following":return n.filter((function(e){return e.isFollowing}));default:return n}})),d="TweetCard_wrapper__uEvo0",w="TweetCard_image__FwYDE",_="TweetCard_info__O1FYI",f="TweetCard_stats__PKEcP",h="TweetCard_btn__8oMm-",j="TweetCard_active__QXCJ3 TweetCard_btn__8oMm-",m=t(184),x=function(e){var n=e.id,t=e.user,o=e.avatar,i=e.tweets,l=e.followers,c=e.isFollowing,a=(0,s.I0)();return(0,m.jsxs)("div",{className:d,children:[(0,m.jsx)("img",{className:w,src:o,alt:t}),(0,m.jsxs)("div",{className:_,children:[(0,m.jsxs)("p",{className:f,children:[i.toLocaleString("en-US")," Tweets"]}),(0,m.jsxs)("p",{className:f,children:[l.toLocaleString("en-US")," Followers"]})]}),(0,m.jsx)("button",{className:c?j:h,type:"button",onClick:function(){a((0,r.P)(c?{id:n,followers:l-1,isFollowing:!1}:{id:n,followers:l+1,isFollowing:!0}))},children:c?"Following":"Follow"})]})},p="TweetsList_list__puywo",v="TweetsList_item__QvzDj",g="TweetsList_btn__hq9B0",C=["id"],N=function(){var e=(0,s.v9)(u),n=(0,o.useState)(1),t=(0,c.Z)(n,2),r=t[0],d=t[1],w=e.slice(0,6*r),_=6*r>=e.length;return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)("ul",{className:p,children:w.map((function(e){var n=e.id,t=(0,l.Z)(e,C);return(0,m.jsx)("li",{className:v,children:(0,m.jsx)(x,(0,i.Z)({id:n},t))},n)}))}),_?null:(0,m.jsxs)("button",{className:g,type:"button",onClick:function(){d((function(e){return e+1}))},children:["Load More",(0,m.jsx)(a._hL,{})]})]})},F=t(1087),k=t(9126),b="GoBackBtn_link__QcSaa",T=function(e){var n=e.to,t=e.children;return(0,m.jsxs)(F.rU,{className:b,to:n,children:[(0,m.jsx)(k.hPB,{}),t]})},L=t(5880),S=t(1273),D="Dropdown_dropdown__QEFz6",E="Dropdown_trigger__5u3gj",y="Dropdown_active__z+dyi Dropdown_dropdownMenu__dfinC",I="Dropdown_inactive__LAinl Dropdown_dropdownMenu__dfinC",P=function(){var e=(0,o.useState)(!1),n=(0,c.Z)(e,2),t=n[0],r=n[1],i=(0,o.useRef)();(0,o.useEffect)((function(){var e=function(e){i.current.contains(e.target)||r(!1)};return document.addEventListener("mousedown",e),function(){document.removeEventListener("mousedown",e)}}));var l=(0,s.I0)(),a=function(e){l((0,S.x)(e)),r(!1)};return(0,m.jsxs)("div",{ref:i,className:D,children:[(0,m.jsxs)("button",{className:E,onClick:function(){r((function(e){return!e}))},children:["Filter",(0,m.jsx)(L.b6S,{})]}),(0,m.jsx)("div",{className:t?y:I,children:(0,m.jsxs)("ul",{children:[(0,m.jsx)("li",{className:"dropdownItem",onClick:function(){return a("all")},children:(0,m.jsx)("p",{children:"Show All"})}),(0,m.jsx)("li",{className:"dropdownItem",onClick:function(){return a("follow")},children:(0,m.jsx)("p",{children:"Follow"})}),(0,m.jsx)("li",{className:"dropdownItem",onClick:function(){return a("following")},children:(0,m.jsx)("p",{children:"Following"})})]})})]})},B=function(){var e=(0,s.I0)();return(0,o.useEffect)((function(){e((0,r.u)())}),[e]),(0,m.jsxs)("main",{children:[(0,m.jsxs)("div",{style:{display:"flex",justifyContent:"space-between"},children:[(0,m.jsx)(T,{to:"/",children:"Back to Home Page"}),(0,m.jsx)(P,{})]}),(0,m.jsx)(N,{})]})}}}]);
//# sourceMappingURL=187.e10af9b2.chunk.js.map