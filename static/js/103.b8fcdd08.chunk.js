"use strict";(self.webpackChunkreact_01=self.webpackChunkreact_01||[]).push([[103],{7103:function(e,s,a){a.r(s),a.d(s,{default:function(){return D}});var n=a(364),t=a(7781),i=a(1413),r=a(5987),d=(a(2791),a(819)),o=a(184),c=["isAuth"],u=function(e){return{isAuth:e.auth.isAuth}};var g=a(8281),l=a(704),m=a(6139),_=a(3079),f=a(1999),h="dialogs_container__yido9",x="dialogs_dialogs__MqD3N",j="dialogs_dialogItem__Q6EwB",v="dialogs_messages__eqczW",M="dialogs_messageItem__d51bV",N="dialogs_newMessage__Rcx9t",w="dialogs_sendMessage__3GU1M",b=a(3504),p=function(e){return(0,o.jsx)(b.OL,{className:j,to:"/dialogs/".concat(e.id),children:e.name})},Z=function(e){return(0,o.jsx)("div",{children:(0,o.jsx)("div",{className:M,children:e.text})})},A=(0,_.D)(400),k=(0,l.Z)({form:"dialogAddMessageForm"})((function(e){return(0,o.jsxs)("form",{onSubmit:e.handleSubmit,children:[(0,o.jsx)(m.Z,{component:f.g,validate:[_.C,A],name:"newMessage",className:N,placeholder:"write your message...",rows:"5"}),(0,o.jsx)("button",{className:w,children:"Send"})]})})),C=function(e){var s=e.messagesPage.dialogData.map((function(e){return(0,o.jsx)(p,{name:e.name,id:e.id},e.id)})),a=e.messagesPage.messageData.map((function(e,s){return(0,o.jsx)(Z,{text:e.text},s)}));return(0,o.jsxs)("div",{className:h,children:[(0,o.jsx)("div",{className:x,children:s}),(0,o.jsxs)("div",{className:v,children:[a,(0,o.jsx)(k,(0,i.Z)((0,i.Z)({},e),{},{onSubmit:function(s){e.sendMessage(s.newMessage)}}))]})]})},D=(0,t.qC)((0,n.$j)((function(e){return{messagesPage:e.messagesPage}}),{sendMessage:g.N.sendMessage}),(function(e){return(0,n.$j)(u,{})((function(s){var a=s.isAuth,n=(0,r.Z)(s,c);return a?(0,o.jsx)(e,(0,i.Z)({},n)):(0,o.jsx)(d.Fg,{to:"/login"})}))}))(C)}}]);
//# sourceMappingURL=103.b8fcdd08.chunk.js.map