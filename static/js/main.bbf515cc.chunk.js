(this["webpackJsonpsign-up-or-in"]=this["webpackJsonpsign-up-or-in"]||[]).push([[0],{28:function(e,r,a){},32:function(e,r,a){},33:function(e,r,a){"use strict";a.r(r);var n=a(1),t=a(0),s=a.n(t),c=a(9),i=a.n(c),l=(a(27),a(28),a(11)),o=a(42),d=a(35),j=a(10),b=a(7),u=a(40),m=a(20),O=a(41);var h=function(e){return Object(n.jsx)("span",{className:"form-text text-danger",children:e.errors.map((function(e,r){return Object(n.jsx)("div",{children:e},r)}))})},x=function(e,r){var a=e.name,n=e.value,t=[];if(r.field[a].required)if(n)switch(a){case"username":/^((?!(\blala\b|\bwawa\b|\bdada\b)).)*$/i.test(n)||t.push("".concat(a," should be not be this word."));break;case"fullName":/^(\w.+\s).+/i.test(n)||t.push("".concat(a," should be two words."));break;case"email":/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/i.test(n)||t.push("invalid e-mail address");break;case"password":/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{6,}$/.test(n)||t.push("".concat(a," must be at least 6 characters long, contain uppercase & lowercase letters, and a number."));break;case"passwordVerify":n!==r.field.password.value&&t.push("passwords do not match!")}else t.push("".concat(a," is required"));return t},f=a(39);var p=function(e){return Object(n.jsxs)(f.a,{show:e.isBannerShown,onHide:e.onHideBanner,children:[Object(n.jsx)(f.a.Body,{children:e.txt}),Object(n.jsx)(O.a,{className:"m-2",variant:"primary",onClick:e.onHideBanner,children:"Okay"})]})};var w=function(e){var r=Object(t.useState)({field:{username:{value:"",required:!0,errors:[]},fullName:{value:"",required:!0,errors:[]},email:{value:"",required:!0,errors:[]},password:{value:"",required:!0,errors:[]},passwordVerify:{value:"",required:!0,errors:[]},rememberMe:{value:!1,required:!1}},bannerIsShown:!1,msg:""}),a=Object(l.a)(r,2),s=a[0],c=a[1],i=function(e){var r=x(e.target,s);c(Object(b.a)(Object(b.a)({},s),{},{field:Object(b.a)(Object(b.a)({},s.field),{},Object(j.a)({},e.target.name,Object(b.a)(Object(b.a)({},s.field[e.target.name]),{},{value:e.target.value,errors:r})))}))};return Object(n.jsxs)("div",{children:[Object(n.jsxs)(u.a,{className:"form",onSubmit:function(e){e.preventDefault(),Object.keys(s.field).every((function(e){return 0===s.field[e].errors.length}))?(c((function(e){return Object(b.a)(Object(b.a)({},e),{},{msg:"Thanks for signing up, ".concat(e.field.fullName.value.split(" ").shift()),bannerIsShown:!0})})),console.log(s)):c((function(e){return Object(b.a)(Object(b.a)({},e),{},{msg:"Some of the fields have issues.",bannerIsShown:!0})}))},children:[Object(n.jsx)(u.a.Row,{children:Object(n.jsxs)(m.a,{children:[Object(n.jsx)(u.a.Control,{className:"mb-2",type:"text",placeholder:"Enter Username",name:"username",id:"usernameSU",onBlur:i}),s.field.username.errors.length>0&&Object(n.jsx)(h,{errors:s.field.username.errors})]})}),Object(n.jsx)(u.a.Row,{children:Object(n.jsxs)(m.a,{children:[Object(n.jsx)(u.a.Control,{className:"mb-2",type:"text",placeholder:"Enter Your Full Name",name:"fullName",id:"fullName",onBlur:i}),s.field.fullName.errors.length>0&&Object(n.jsx)(h,{errors:s.field.fullName.errors})]})}),Object(n.jsx)(u.a.Row,{children:Object(n.jsxs)(m.a,{children:[Object(n.jsx)(u.a.Control,{className:"mb-2",type:"text",placeholder:"Enter Email",name:"email",id:"email",onBlur:i}),s.field.email.errors.length>0&&Object(n.jsx)(h,{errors:s.field.email.errors})]})}),Object(n.jsx)(u.a.Row,{children:Object(n.jsxs)(m.a,{children:[Object(n.jsx)(u.a.Control,{className:"mb-2",type:"password",placeholder:"Enter Password",name:"password",id:"passwordSU",onBlur:i}),s.field.password.errors.length>0&&Object(n.jsx)(h,{errors:s.field.password.errors})]})}),Object(n.jsx)(u.a.Row,{children:Object(n.jsxs)(m.a,{children:[Object(n.jsx)(u.a.Control,{className:"mb-2",type:"password",placeholder:"Re-enter Password",name:"passwordVerify",id:"passwordVerify",onBlur:i}),s.field.passwordVerify.errors.length>0&&Object(n.jsx)(h,{errors:s.field.passwordVerify.errors})]})}),Object(n.jsxs)(u.a.Row,{className:"mb-2 align-items-end",children:[Object(n.jsx)(m.a,{md:{span:8,offset:1},children:Object(n.jsx)("div",{className:"txt green mb-2",children:"Remember me?"})}),Object(n.jsx)(m.a,{md:{span:3},children:Object(n.jsx)(u.a.Control,{type:"checkbox",className:"check-box",name:"rememberMe",id:"rememberMe",onBlur:i})})]}),Object(n.jsx)(u.a.Row,{children:Object(n.jsx)(m.a,{children:Object(n.jsx)(O.a,{block:!0,type:"submit",children:"Sign Up"})})})]}),Object(n.jsx)(p,{isBannerShown:s.bannerIsShown,onShowBanner:function(){return c((function(e){return Object(b.a)(Object(b.a)({},e),{},{bannerIsShown:!0})}))},onHideBanner:function(){return c((function(e){return Object(b.a)(Object(b.a)({},e),{},{bannerIsShown:!1})}))},txt:s.msg})]})};var g=function(e){return Object(n.jsxs)(o.a,{className:"front text-center",children:[Object(n.jsx)(o.a.Header,{children:"Sign Up"}),Object(n.jsxs)(o.a.Body,{children:[Object(n.jsx)(o.a.Title,{children:"Fill in your Details"}),Object(n.jsx)(o.a.Text,{children:Object(n.jsx)(w,{type:"signup"})})]}),Object(n.jsxs)(o.a.Footer,{className:"text-muted",children:[Object(n.jsx)("div",{children:"Already Have an Account?"}),Object(n.jsx)(d.a,{variant:"primary",onClick:e.onFlipCard,children:"Sign In"})]})]})};var v=function(e){var r=Object(t.useState)({field:{username:{value:"",required:!0,errors:[]},password:{value:"",required:!0,errors:[]}},bannerIsShown:!1,msg:""}),a=Object(l.a)(r,2),s=a[0],c=a[1],i=function(e){c(Object(b.a)(Object(b.a)({},s),{},{field:Object(b.a)(Object(b.a)({},s.field),{},Object(j.a)({},e.target.name,Object(b.a)(Object(b.a)({},s.field[e.target.name]),{},{value:e.target.value})))}))};return Object(n.jsxs)("div",{children:[Object(n.jsxs)(o.a,{className:"back text-center",children:[Object(n.jsx)(o.a.Header,{children:"Sign In"}),Object(n.jsxs)(o.a.Body,{children:[Object(n.jsx)(o.a.Title,{children:"Enter Your Credentials"}),Object(n.jsx)(o.a.Text,{children:Object(n.jsxs)(u.a,{className:"form",onSubmit:function(e){e.preventDefault(),c((function(e){return Object(b.a)(Object(b.a)({},e),{},{msg:"Sorry, can't authenticate.",bannerIsShown:!0})}))},children:[Object(n.jsx)(u.a.Row,{children:Object(n.jsxs)(m.a,{children:[Object(n.jsx)(u.a.Control,{className:"mb-2",type:"text",placeholder:"Enter Username",name:"username",id:"usernameSI",onBlur:i}),s.field.username.errors.length>0&&Object(n.jsx)(h,{errors:s.field.username.errors})]})}),Object(n.jsx)(u.a.Row,{children:Object(n.jsxs)(m.a,{children:[Object(n.jsx)(u.a.Control,{className:"mb-2",type:"password",placeholder:"Enter Password",name:"password",id:"passwordSI",onBlur:i}),s.field.username.errors.length>0&&Object(n.jsx)(h,{errors:s.field.password.errors})]})}),Object(n.jsx)(u.a.Row,{children:Object(n.jsx)(m.a,{children:Object(n.jsx)(O.a,{className:"btn-sign-in",block:!0,type:"submit",children:"Sign In"})})})]})})]}),Object(n.jsxs)(o.a.Footer,{className:"text-muted",children:[Object(n.jsx)("div",{children:"Don't Have an Account?"}),Object(n.jsx)(d.a,{className:"btn-sign-in",variant:"primary",onClick:e.onFlipCard,children:"Sign Up"})]})]}),Object(n.jsx)(p,{isBannerShown:s.bannerIsShown,onShowBanner:function(){return c((function(e){return Object(b.a)(Object(b.a)({},e),{},{bannerIsShown:!0})}))},onHideBanner:function(){return c((function(e){return Object(b.a)(Object(b.a)({},e),{},{bannerIsShown:!1})}))},txt:s.msg})]})},S=(a(32),a(36)),N=a(37),y=a(38),B=a(21),k=a.n(B);var C=function(){var e=Object(t.useState)({cardFlipped:!1}),r=Object(l.a)(e,2),a=r[0],s=r[1],c=function(){s({cardFlipped:!a.cardFlipped})};return Object(n.jsxs)("div",{children:[Object(n.jsx)(S.a,{className:"background-img",src:"./img/background.png",fluid:!0}),Object(n.jsx)(N.a,{className:"App d-flex",fluid:!0,children:Object(n.jsx)(y.a,{className:"cust-row my-auto",children:Object(n.jsx)("div",{className:"mx-auto",children:Object(n.jsxs)(k.a,{isFlipped:a.cardFlipped,flipDirection:"horizontal",children:[Object(n.jsx)(g,{onFlipCard:c}),Object(n.jsx)(v,{onFlipCard:c})]})})})})]})},I=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,43)).then((function(r){var a=r.getCLS,n=r.getFID,t=r.getFCP,s=r.getLCP,c=r.getTTFB;a(e),n(e),t(e),s(e),c(e)}))};i.a.render(Object(n.jsx)(s.a.StrictMode,{children:Object(n.jsx)(C,{})}),document.getElementById("root")),I()}},[[33,1,2]]]);
//# sourceMappingURL=main.bbf515cc.chunk.js.map