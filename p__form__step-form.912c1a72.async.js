(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[8442],{31199:function(T,m,e){"use strict";var s=e(28991),l=e(81253),p=e(85893),a=e(67294),E=e(97519),P=["fieldProps","min","proFieldProps","max"],o=function(n,d){var x=n.fieldProps,t=n.min,D=n.proFieldProps,_=n.max,r=(0,l.Z)(n,P);return(0,p.jsx)(E.Z,(0,s.Z)({mode:"edit",valueType:"digit",fieldProps:(0,s.Z)({min:t,max:_},x),ref:d,filedConfig:{defaultProps:{width:"100%"}},proFieldProps:D},r))};m.Z=a.forwardRef(o)},64317:function(T,m,e){"use strict";var s=e(28991),l=e(81253),p=e(85893),a=e(96202),E=e(67294),P=e(66758),o=e(97519),F=["fieldProps","children","params","proFieldProps","mode","valueEnum","request","showSearch","options"],n=["fieldProps","children","params","proFieldProps","mode","valueEnum","request","options"],d=E.forwardRef(function(r,i){var j=r.fieldProps,c=r.children,h=r.params,R=r.proFieldProps,C=r.mode,f=r.valueEnum,g=r.request,M=r.showSearch,L=r.options,Z=(0,l.Z)(r,F),O=(0,E.useContext)(P.Z);return(0,p.jsx)(o.Z,(0,s.Z)((0,s.Z)({mode:"edit",valueEnum:(0,a.h)(f),request:g,params:h,valueType:"select",filedConfig:{customLightMode:!0},fieldProps:(0,s.Z)({options:L,mode:C,showSearch:M,getPopupContainer:O.getPopupContainer},j),ref:i,proFieldProps:R},Z),{},{children:c}))}),x=E.forwardRef(function(r,i){var j=r.fieldProps,c=r.children,h=r.params,R=r.proFieldProps,C=r.mode,f=r.valueEnum,g=r.request,M=r.options,L=(0,l.Z)(r,n),Z=(0,s.Z)({options:M,mode:C||"multiple",labelInValue:!0,showSearch:!0,showArrow:!1,autoClearSearchValue:!0,optionLabelProp:"label"},j),O=(0,E.useContext)(P.Z);return(0,p.jsx)(o.Z,(0,s.Z)((0,s.Z)({mode:"edit",valueEnum:(0,a.h)(f),request:g,params:h,valueType:"select",filedConfig:{customLightMode:!0},fieldProps:(0,s.Z)({getPopupContainer:O.getPopupContainer},Z),ref:i,proFieldProps:R},L),{},{children:c}))}),t=d,D=x,_=t;_.SearchSelect=D,_.displayName="ProFormComponent",m.Z=_},5966:function(T,m,e){"use strict";var s=e(28991),l=e(81253),p=e(85893),a=e(97519),E=["fieldProps","proFieldProps"],P=["fieldProps","proFieldProps"],o="text",F=function(t){var D=t.fieldProps,_=t.proFieldProps,r=(0,l.Z)(t,E);return(0,p.jsx)(a.Z,(0,s.Z)({mode:"edit",valueType:o,fieldProps:D,filedConfig:{valueType:o},proFieldProps:_},r))},n=function(t){var D=t.fieldProps,_=t.proFieldProps,r=(0,l.Z)(t,P);return(0,p.jsx)(a.Z,(0,s.Z)({mode:"edit",valueType:"password",fieldProps:D,proFieldProps:_,filedConfig:{valueType:o}},r))},d=F;d.Password=n,d.displayName="ProFormComponent",m.Z=d},88227:function(T){T.exports={card:"card___2gwEq",result:"result___OtC7Q"}},33208:function(T,m,e){"use strict";e.r(m);var s=e(58024),l=e(91894),p=e(48736),a=e(27049),E=e(17462),P=e(76772),o=e(3182),F=e(2824),n=e(57106),d=e(99683),x=e(57663),t=e(71577),D=e(95300),_=e(7277),r=e(98858),i=e(4914),j=e(94043),c=e.n(j),h=e(67294),R=e(75362),C=e(65554),f=e(64317),g=e(952),M=e(5966),L=e(31199),Z=e(88227),O=e.n(Z),u=e(85893),V=function(B){var A=B.stepData,I=B.bordered,b=A.payAccount,N=A.receiverAccount,W=A.receiverName,$=A.amount;return(0,u.jsxs)(i.Z,{column:1,bordered:I,children:[(0,u.jsxs)(i.Z.Item,{label:"\u4ED8\u6B3E\u8D26\u6237",children:[" ",b]}),(0,u.jsxs)(i.Z.Item,{label:"\u6536\u6B3E\u8D26\u6237",children:[" ",N]}),(0,u.jsxs)(i.Z.Item,{label:"\u6536\u6B3E\u4EBA\u59D3\u540D",children:[" ",W]}),(0,u.jsx)(i.Z.Item,{label:"\u8F6C\u8D26\u91D1\u989D",children:(0,u.jsx)(_.Z,{value:$,suffix:(0,u.jsx)("span",{style:{fontSize:14},children:"\u5143"}),precision:2})})]})},H=function(B){return(0,u.jsx)(d.ZP,{status:"success",title:"\u64CD\u4F5C\u6210\u529F",subTitle:"\u9884\u8BA1\u4E24\u5C0F\u65F6\u5185\u5230\u8D26",extra:(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(t.Z,{type:"primary",onClick:B.onFinish,children:"\u518D\u8F6C\u4E00\u7B14"}),(0,u.jsx)(t.Z,{children:"\u67E5\u770B\u8D26\u5355"})]}),className:O().result,children:B.children})},J=function(){var B=(0,h.useState)({payAccount:"ant-design@alipay.com",receiverAccount:"test@example.com",receiverName:"Alex",amount:"500",receiverMode:"alipay"}),A=(0,F.Z)(B,2),I=A[0],b=A[1],N=(0,h.useState)(0),W=(0,F.Z)(N,2),$=W[0],G=W[1],Q=(0,h.useRef)();return(0,u.jsx)(R.ZP,{content:"\u5C06\u4E00\u4E2A\u5197\u957F\u6216\u7528\u6237\u4E0D\u719F\u6089\u7684\u8868\u5355\u4EFB\u52A1\u5206\u6210\u591A\u4E2A\u6B65\u9AA4\uFF0C\u6307\u5BFC\u7528\u6237\u5B8C\u6210\u3002",children:(0,u.jsxs)(l.Z,{bordered:!1,children:[(0,u.jsxs)(C.L,{current:$,onCurrentChange:G,submitter:{render:function(v,U){return v.step===2?null:U}},children:[(0,u.jsxs)(C.L.StepForm,{formRef:Q,title:"\u586B\u5199\u8F6C\u8D26\u4FE1\u606F",initialValues:I,onFinish:function(){var K=(0,o.Z)(c().mark(function v(U){return c().wrap(function(S){for(;;)switch(S.prev=S.next){case 0:return b(U),S.abrupt("return",!0);case 2:case"end":return S.stop()}},v)}));return function(v){return K.apply(this,arguments)}}(),children:[(0,u.jsx)(f.Z,{label:"\u4ED8\u6B3E\u8D26\u6237",width:"md",name:"payAccount",rules:[{required:!0,message:"\u8BF7\u9009\u62E9\u4ED8\u6B3E\u8D26\u6237"}],valueEnum:{"ant-design@alipay.com":"ant-design@alipay.com"}}),(0,u.jsxs)(g.ZP.Group,{title:"\u6536\u6B3E\u8D26\u6237",size:8,children:[(0,u.jsx)(f.Z,{name:"receiverMode",rules:[{required:!0,message:"\u8BF7\u9009\u62E9\u4ED8\u6B3E\u8D26\u6237"}],valueEnum:{alipay:"\u652F\u4ED8\u5B9D",bank:"\u94F6\u884C\u8D26\u6237"}}),(0,u.jsx)(M.Z,{name:"receiverAccount",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u6536\u6B3E\u4EBA\u8D26\u6237"},{type:"email",message:"\u8D26\u6237\u540D\u5E94\u4E3A\u90AE\u7BB1\u683C\u5F0F"}],placeholder:"test@example.com"})]}),(0,u.jsx)(M.Z,{label:"\u6536\u6B3E\u4EBA\u59D3\u540D",width:"md",name:"receiverName",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u6536\u6B3E\u4EBA\u59D3\u540D"}],placeholder:"\u8BF7\u8F93\u5165\u6536\u6B3E\u4EBA\u59D3\u540D"}),(0,u.jsx)(L.Z,{label:"\u8F6C\u8D26\u91D1\u989D",name:"amount",width:"md",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u8F6C\u8D26\u91D1\u989D"},{pattern:/^(\d+)((?:\.\d+)?)$/,message:"\u8BF7\u8F93\u5165\u5408\u6CD5\u91D1\u989D\u6570\u5B57"}],placeholder:"\u8BF7\u8F93\u5165\u91D1\u989D",fieldProps:{prefix:"\uFFE5"}})]}),(0,u.jsx)(C.L.StepForm,{title:"\u786E\u8BA4\u8F6C\u8D26\u4FE1\u606F",children:(0,u.jsxs)("div",{className:O().result,children:[(0,u.jsx)(P.Z,{closable:!0,showIcon:!0,message:"\u786E\u8BA4\u8F6C\u8D26\u540E\uFF0C\u8D44\u91D1\u5C06\u76F4\u63A5\u6253\u5165\u5BF9\u65B9\u8D26\u6237\uFF0C\u65E0\u6CD5\u9000\u56DE\u3002",style:{marginBottom:24}}),(0,u.jsx)(V,{stepData:I,bordered:!0}),(0,u.jsx)(a.Z,{style:{margin:"24px 0"}}),(0,u.jsx)(M.Z.Password,{label:"\u652F\u4ED8\u5BC6\u7801",width:"md",name:"password",required:!1,rules:[{required:!0,message:"\u9700\u8981\u652F\u4ED8\u5BC6\u7801\u624D\u80FD\u8FDB\u884C\u652F\u4ED8"}]})]})}),(0,u.jsx)(C.L.StepForm,{title:"\u5B8C\u6210",children:(0,u.jsx)(H,{onFinish:(0,o.Z)(c().mark(function K(){var v;return c().wrap(function(y){for(;;)switch(y.prev=y.next){case 0:G(0),(v=Q.current)===null||v===void 0||v.resetFields();case 2:case"end":return y.stop()}},K)})),children:(0,u.jsx)(V,{stepData:I})})})]}),(0,u.jsx)(a.Z,{style:{margin:"40px 0 24px"}}),(0,u.jsxs)("div",{className:O().desc,children:[(0,u.jsx)("h3",{children:"\u8BF4\u660E"}),(0,u.jsx)("h4",{children:"\u8F6C\u8D26\u5230\u652F\u4ED8\u5B9D\u8D26\u6237"}),(0,u.jsx)("p",{children:"\u5982\u679C\u9700\u8981\uFF0C\u8FD9\u91CC\u53EF\u4EE5\u653E\u4E00\u4E9B\u5173\u4E8E\u4EA7\u54C1\u7684\u5E38\u89C1\u95EE\u9898\u8BF4\u660E\u3002\u5982\u679C\u9700\u8981\uFF0C\u8FD9\u91CC\u53EF\u4EE5\u653E\u4E00\u4E9B\u5173\u4E8E\u4EA7\u54C1\u7684\u5E38\u89C1\u95EE\u9898\u8BF4\u660E\u3002\u5982\u679C\u9700\u8981\uFF0C\u8FD9\u91CC\u53EF\u4EE5\u653E\u4E00\u4E9B\u5173\u4E8E\u4EA7\u54C1\u7684\u5E38\u89C1\u95EE\u9898\u8BF4\u660E\u3002"}),(0,u.jsx)("h4",{children:"\u8F6C\u8D26\u5230\u94F6\u884C\u5361"}),(0,u.jsx)("p",{children:"\u5982\u679C\u9700\u8981\uFF0C\u8FD9\u91CC\u53EF\u4EE5\u653E\u4E00\u4E9B\u5173\u4E8E\u4EA7\u54C1\u7684\u5E38\u89C1\u95EE\u9898\u8BF4\u660E\u3002\u5982\u679C\u9700\u8981\uFF0C\u8FD9\u91CC\u53EF\u4EE5\u653E\u4E00\u4E9B\u5173\u4E8E\u4EA7\u54C1\u7684\u5E38\u89C1\u95EE\u9898\u8BF4\u660E\u3002\u5982\u679C\u9700\u8981\uFF0C\u8FD9\u91CC\u53EF\u4EE5\u653E\u4E00\u4E9B\u5173\u4E8E\u4EA7\u54C1\u7684\u5E38\u89C1\u95EE\u9898\u8BF4\u660E\u3002"})]})]})})};m.default=J}}]);
