(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[3012],{22452:function(A,F,e){"use strict";var u=e(28991),p=e(81253),E=e(85893),d=e(67294),m=e(66758),x=e(97519),h=["fieldProps","proFieldProps"],C="dateTime",j=d.forwardRef(function(c,g){var l=c.fieldProps,Z=c.proFieldProps,P=(0,p.Z)(c,h),s=(0,d.useContext)(m.Z);return(0,E.jsx)(x.Z,(0,u.Z)({ref:g,mode:"edit",fieldProps:(0,u.Z)({getPopupContainer:s.getPopupContainer},l),valueType:C,proFieldProps:Z,filedConfig:{valueType:C,customLightMode:!0}},P))});F.Z=j},64317:function(A,F,e){"use strict";var u=e(28991),p=e(81253),E=e(85893),d=e(96202),m=e(67294),x=e(66758),h=e(97519),C=["fieldProps","children","params","proFieldProps","mode","valueEnum","request","showSearch","options"],j=["fieldProps","children","params","proFieldProps","mode","valueEnum","request","options"],c=m.forwardRef(function(s,y){var G=s.fieldProps,Y=s.children,O=s.params,X=s.proFieldProps,$=s.mode,H=s.valueEnum,Q=s.request,J=s.showSearch,L=s.options,B=(0,p.Z)(s,C),V=(0,m.useContext)(x.Z);return(0,E.jsx)(h.Z,(0,u.Z)((0,u.Z)({mode:"edit",valueEnum:(0,d.h)(H),request:Q,params:O,valueType:"select",filedConfig:{customLightMode:!0},fieldProps:(0,u.Z)({options:L,mode:$,showSearch:J,getPopupContainer:V.getPopupContainer},G),ref:y,proFieldProps:X},B),{},{children:Y}))}),g=m.forwardRef(function(s,y){var G=s.fieldProps,Y=s.children,O=s.params,X=s.proFieldProps,$=s.mode,H=s.valueEnum,Q=s.request,J=s.options,L=(0,p.Z)(s,j),B=(0,u.Z)({options:J,mode:$||"multiple",labelInValue:!0,showSearch:!0,showArrow:!1,autoClearSearchValue:!0,optionLabelProp:"label"},G),V=(0,m.useContext)(x.Z);return(0,E.jsx)(h.Z,(0,u.Z)((0,u.Z)({mode:"edit",valueEnum:(0,d.h)(H),request:Q,params:O,valueType:"select",filedConfig:{customLightMode:!0},fieldProps:(0,u.Z)({getPopupContainer:V.getPopupContainer},B),ref:y,proFieldProps:X},L),{},{children:Y}))}),l=c,Z=g,P=l;P.SearchSelect=Z,P.displayName="ProFormComponent",F.Z=P},5966:function(A,F,e){"use strict";var u=e(28991),p=e(81253),E=e(85893),d=e(97519),m=["fieldProps","proFieldProps"],x=["fieldProps","proFieldProps"],h="text",C=function(l){var Z=l.fieldProps,P=l.proFieldProps,s=(0,p.Z)(l,m);return(0,E.jsx)(d.Z,(0,u.Z)({mode:"edit",valueType:h,fieldProps:Z,filedConfig:{valueType:h},proFieldProps:P},s))},j=function(l){var Z=l.fieldProps,P=l.proFieldProps,s=(0,p.Z)(l,x);return(0,E.jsx)(d.Z,(0,u.Z)({mode:"edit",valueType:"password",fieldProps:Z,proFieldProps:P,filedConfig:{valueType:h}},s))},c=C;c.Password=j,c.displayName="ProFormComponent",F.Z=c},90672:function(A,F,e){"use strict";var u=e(28991),p=e(81253),E=e(85893),d=e(67294),m=e(97519),x=["fieldProps","proFieldProps"],h=function(j,c){var g=j.fieldProps,l=j.proFieldProps,Z=(0,p.Z)(j,x);return(0,E.jsx)(m.Z,(0,u.Z)({ref:c,mode:"edit",valueType:"textarea",fieldProps:g,proFieldProps:l},Z))};F.Z=d.forwardRef(h)},7763:function(A){A.exports={standardList:"standardList___pRhsd",headerInfo:"headerInfo___3KrKX",listContent:"listContent___weIUQ",listContentItem:"listContentItem___S_LBX",extraContentSearch:"extraContentSearch___1lMSQ",listCard:"listCard___1aWw-",standardListForm:"standardListForm___1KJ6f",formResult:"formResult___1XdZP"}},68348:function(A,F,e){"use strict";e.r(F),e.d(F,{BasicList:function(){return oe},default:function(){return Ae}});var u=e(57663),p=e(71577),E=e(54421),d=e(38272),m=e(94233),x=e(51890),h=e(58024),C=e(91894),j=e(13062),c=e(71230),g=e(89032),l=e(15746),Z=e(59250),P=e(13013),s=e(30887),y=e(28682),G=e(71194),Y=e(50146),O=e(2824),X=e(34669),$=e(54458),H=e(47673),Q=e(4107),J=e(88983),L=e(47933),B=e(67294),V=e(57254),ce=e(49101),pe=e(75362),I=e(56502),ve=e(30381),me=e.n(ve),ze=e(57106),he=e(99683),b=e(3182),Pe=e(94043),D=e.n(Pe),fe=e(37476),Fe=e(5966),Ee=e(22452),xe=e(64317),Ce=e(90672),je=e(7763),f=e.n(je),t=e(85893),Ze=function(a){var o=a.done,r=a.visible,M=a.current,W=a.onDone,K=a.onSubmit,re=a.children;return r?(0,t.jsx)(fe.Y,{visible:r,title:o?null:"\u4EFB\u52A1".concat(M?"\u7F16\u8F91":"\u6DFB\u52A0"),className:f().standardListForm,width:640,onFinish:function(){var S=(0,b.Z)(D().mark(function z(U){return D().wrap(function(N){for(;;)switch(N.prev=N.next){case 0:K(U);case 1:case"end":return N.stop()}},z)}));return function(z){return S.apply(this,arguments)}}(),initialValues:M,submitter:{render:function(z,U){return o?null:U}},trigger:(0,t.jsx)(t.Fragment,{children:re}),modalProps:{onCancel:function(){return W()},destroyOnClose:!0,bodyStyle:o?{padding:"72px 0"}:{}},children:o?(0,t.jsx)(he.ZP,{status:"success",title:"\u64CD\u4F5C\u6210\u529F",subTitle:"\u4E00\u7CFB\u5217\u7684\u4FE1\u606F\u63CF\u8FF0\uFF0C\u5F88\u77ED\u540C\u6837\u4E5F\u53EF\u4EE5\u5E26\u6807\u70B9\u3002",extra:(0,t.jsx)(p.Z,{type:"primary",onClick:W,children:"\u77E5\u9053\u4E86"}),className:f().formResult}):(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(Fe.Z,{name:"title",label:"\u4EFB\u52A1\u540D\u79F0",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u4EFB\u52A1\u540D\u79F0"}],placeholder:"\u8BF7\u8F93\u5165"}),(0,t.jsx)(Ee.Z,{name:"createdAt",label:"\u5F00\u59CB\u65F6\u95F4",rules:[{required:!0,message:"\u8BF7\u9009\u62E9\u5F00\u59CB\u65F6\u95F4"}],fieldProps:{style:{width:"100%"}},placeholder:"\u8BF7\u9009\u62E9"}),(0,t.jsx)(xe.Z,{name:"owner",label:"\u4EFB\u52A1\u8D1F\u8D23\u4EBA",rules:[{required:!0,message:"\u8BF7\u9009\u62E9\u4EFB\u52A1\u8D1F\u8D23\u4EBA"}],options:[{label:"\u4ED8\u6653\u6653",value:"xiao"},{label:"\u5468\u6BDB\u6BDB",value:"mao"}],placeholder:"\u8BF7\u9009\u62E9\u7BA1\u7406\u5458"}),(0,t.jsx)(Ce.Z,{name:"subDescription",label:"\u4EA7\u54C1\u63CF\u8FF0",rules:[{message:"\u8BF7\u8F93\u5165\u81F3\u5C11\u4E94\u4E2A\u5B57\u7B26\u7684\u4EA7\u54C1\u63CF\u8FF0\uFF01",min:5}],placeholder:"\u8BF7\u8F93\u5165\u81F3\u5C11\u4E94\u4E2A\u5B57\u7B26"})]})}):null},De=Ze,R=e(11849);function Me(i){return w.apply(this,arguments)}function w(){return w=(0,b.Z)(D().mark(function i(a){return D().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",(0,I.WY)("/api/get_list",{params:a}));case 1:case"end":return r.stop()}},i)})),w.apply(this,arguments)}function ge(i){return k.apply(this,arguments)}function k(){return k=(0,b.Z)(D().mark(function i(a){return D().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",(0,I.WY)("/api/post_fake_list",{method:"POST",data:(0,R.Z)((0,R.Z)({},a),{},{method:"delete"})}));case 1:case"end":return r.stop()}},i)})),k.apply(this,arguments)}function ye(i){return _.apply(this,arguments)}function _(){return _=(0,b.Z)(D().mark(function i(a){return D().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",(0,I.WY)("/api/post_fake_list",{method:"POST",data:(0,R.Z)((0,R.Z)({},a),{},{method:"post"})}));case 1:case"end":return r.stop()}},i)})),_.apply(this,arguments)}function Oe(i){return q.apply(this,arguments)}function q(){return q=(0,b.Z)(D().mark(function i(a){return D().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",(0,I.WY)("/api/post_fake_list",{method:"POST",data:(0,R.Z)((0,R.Z)({},a),{},{method:"update"})}));case 1:case"end":return r.stop()}},i)})),q.apply(this,arguments)}var ee=L.ZP.Button,Be=L.ZP.Group,Se=Q.Z.Search,te=function(a){var o=a.title,r=a.value,M=a.bordered;return(0,t.jsxs)("div",{className:f().headerInfo,children:[(0,t.jsx)("span",{children:o}),(0,t.jsx)("p",{children:r}),M&&(0,t.jsx)("em",{})]})},Te=function(a){var o=a.data,r=o.owner,M=o.createdAt,W=o.percent,K=o.status;return(0,t.jsxs)("div",{className:f().listContent,children:[(0,t.jsxs)("div",{className:f().listContentItem,children:[(0,t.jsx)("span",{children:"Owner"}),(0,t.jsx)("p",{children:r})]}),(0,t.jsxs)("div",{className:f().listContentItem,children:[(0,t.jsx)("span",{children:"\u5F00\u59CB\u65F6\u95F4"}),(0,t.jsx)("p",{children:me()(M).format("YYYY-MM-DD HH:mm")})]}),(0,t.jsx)("div",{className:f().listContentItem,children:(0,t.jsx)($.Z,{percent:W,status:K,strokeWidth:6,style:{width:180}})})]})},oe=function(){var a=(0,B.useState)(!1),o=(0,O.Z)(a,2),r=o[0],M=o[1],W=(0,B.useState)(!1),K=(0,O.Z)(W,2),re=K[0],S=K[1],z=(0,B.useState)(void 0),U=(0,O.Z)(z,2),le=U[0],N=U[1],se=(0,I.QT)(function(){return Me({count:50})}),ne=se.data,Le=se.loading,Ie=se.mutate,Re=(0,I.QT)(function(v,n){return v==="remove"?ge(n):v==="update"?Oe(n):ye(n)},{manual:!0,onSuccess:function(n){Ie(n)}}),ue=Re.run,ie=(ne==null?void 0:ne.list)||[],We={showSizeChanger:!0,showQuickJumper:!0,pageSize:5,total:ie.length},de=function(n){S(!0),N(n)},Ke=function(n){ue("remove",{id:n})},Ue=function(n,T){n==="edit"?de(T):n==="delete"&&Y.Z.confirm({title:"\u5220\u9664\u4EFB\u52A1",content:"\u786E\u5B9A\u5220\u9664\u8BE5\u4EFB\u52A1\u5417\uFF1F",okText:"\u786E\u8BA4",cancelText:"\u53D6\u6D88",onOk:function(){return Ke(T.id)}})},Ne=(0,t.jsxs)("div",{className:f().extraContent,children:[(0,t.jsxs)(Be,{defaultValue:"all",children:[(0,t.jsx)(ee,{value:"all",children:"\u5168\u90E8"}),(0,t.jsx)(ee,{value:"progress",children:"\u8FDB\u884C\u4E2D"}),(0,t.jsx)(ee,{value:"waiting",children:"\u7B49\u5F85\u4E2D"})]}),(0,t.jsx)(Se,{className:f().extraContentSearch,placeholder:"\u8BF7\u8F93\u5165",onSearch:function(){return{}}})]}),Ye=function(n){var T=n.item;return(0,t.jsx)(P.Z,{overlay:(0,t.jsxs)(y.Z,{onClick:function(Ve){var be=Ve.key;return Ue(be,T)},children:[(0,t.jsx)(y.Z.Item,{children:"\u7F16\u8F91"},"edit"),(0,t.jsx)(y.Z.Item,{children:"\u5220\u9664"},"delete")]}),children:(0,t.jsxs)("a",{children:["\u66F4\u591A ",(0,t.jsx)(V.Z,{})]})})},$e=function(){M(!1),S(!1),N({})},Qe=function(n){M(!0);var T=n!=null&&n.id?"update":"add";ue(T,n)};return(0,t.jsxs)("div",{children:[(0,t.jsx)(pe.ZP,{children:(0,t.jsxs)("div",{className:f().standardList,children:[(0,t.jsx)(C.Z,{bordered:!1,children:(0,t.jsxs)(c.Z,{children:[(0,t.jsx)(l.Z,{sm:8,xs:24,children:(0,t.jsx)(te,{title:"\u6211\u7684\u5F85\u529E",value:"8\u4E2A\u4EFB\u52A1",bordered:!0})}),(0,t.jsx)(l.Z,{sm:8,xs:24,children:(0,t.jsx)(te,{title:"\u672C\u5468\u4EFB\u52A1\u5E73\u5747\u5904\u7406\u65F6\u95F4",value:"32\u5206\u949F",bordered:!0})}),(0,t.jsx)(l.Z,{sm:8,xs:24,children:(0,t.jsx)(te,{title:"\u672C\u5468\u5B8C\u6210\u4EFB\u52A1\u6570",value:"24\u4E2A\u4EFB\u52A1"})})]})}),(0,t.jsx)(C.Z,{className:f().listCard,bordered:!1,title:"\u57FA\u672C\u5217\u8868",style:{marginTop:24},bodyStyle:{padding:"0 32px 40px 32px"},extra:Ne,children:(0,t.jsx)(d.ZP,{size:"large",rowKey:"id",loading:Le,pagination:We,dataSource:ie,renderItem:function(n){return(0,t.jsxs)(d.ZP.Item,{actions:[(0,t.jsx)("a",{onClick:function(ae){ae.preventDefault(),de(n)},children:"\u7F16\u8F91"},"edit"),(0,t.jsx)(Ye,{item:n},"more")],children:[(0,t.jsx)(d.ZP.Item.Meta,{avatar:(0,t.jsx)(x.C,{src:n.logo,shape:"square",size:"large"}),title:(0,t.jsx)("a",{href:n.href,children:n.title}),description:n.subDescription}),(0,t.jsx)(Te,{data:n})]})}})})]})}),(0,t.jsxs)(p.Z,{type:"dashed",onClick:function(){S(!0)},style:{width:"100%",marginBottom:8},children:[(0,t.jsx)(ce.Z,{}),"\u6DFB\u52A0"]}),(0,t.jsx)(De,{done:r,visible:re,current:le,onDone:$e,onSubmit:Qe})]})},Ae=oe}}]);
