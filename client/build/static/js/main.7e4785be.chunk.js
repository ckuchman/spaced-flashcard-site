(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{106:function(e,t,r){},107:function(e,t,r){},215:function(e,t,r){"use strict";r.r(t);var n=r(1),a=(r(102),r(0)),s=r.n(a),c=r(25),i=r.n(c),o=(r(106),r(107),r(219)),l=r(224),u=r(220);var d=function(){return Object(n.jsx)(n.Fragment,{children:Object(n.jsxs)(o.a,{className:"center",fluid:"md",style:{display:"flex",flexDirection:"column",justifyContent:"center",marginTop:"20%"},children:[Object(n.jsx)("head",{children:Object(n.jsx)("title",{children:"Spaced Flashcards Project - OSU Winter Hackathon 2020"})}),Object(n.jsx)("h1",{children:"Spaced Flashcards"}),Object(n.jsx)(l.a,{style:{width:"50%",flex:"1",marginLeft:"auto",marginRight:"auto"},children:Object(n.jsxs)(l.a.Body,{children:[Object(n.jsx)(l.a.Title,{children:"A Proven System"}),Object(n.jsx)(l.a.Text,{children:"Research shows that spaced repetition is an extremely effective strategy for memory retention and learning. What topic would you like to know more completely?"}),Object(n.jsx)(u.a,{style:{marginRight:"25px"},variant:"primary",href:"/login",children:"Login"}),Object(n.jsx)(u.a,{variant:"primary",href:"/login",children:"Register in Seconds"})]})})]})})},j=r(19),b=r(222),m=r(223),p=r(6),h=r(10),O=r.n(h),x=r(16),f=new(r(221).a)(JSON.parse(localStorage.getItem("currentUser"))),g={login:function(e){return v.apply(this,arguments)},logout:S,authHeader:function(){return w.apply(this,arguments)},newUser:function(e){if(!e.refresh||!e.access)return S();localStorage.setItem("currentUser",JSON.stringify(e)),f.next(e)},updateUserData:function(){return y.apply(this,arguments)},currentUser:f.asObservable(),get currentUserValue(){return f.value}};function v(){return(v=Object(x.a)(O.a.mark((function e(t){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:localStorage.setItem("currentUser",JSON.stringify(t)),f.next(t);case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function S(){localStorage.clear(),f.next(null)}function y(){return(y=Object(x.a)(O.a.mark((function e(){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return");case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function w(){return(w=Object(x.a)(O.a.mark((function e(){var t;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(t=g.currentUserValue)||!t.accessToken){e.next=5;break}return e.abrupt("return",{"Content-Type":"application/json",Authorization:"JWT ".concat(t.accessToken)});case 5:return e.abrupt("return",{});case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function T(){var e=Object(p.g)(),t=Object(a.useState)(null),r=Object(j.a)(t,2),s=r[0],c=r[1];Object(p.h)();return Object(a.useEffect)((function(){var e=g.currentUser.subscribe((function(e){return c(e)}));return function(){e.unsubscribe()}}),[s]),Object(n.jsx)(n.Fragment,{children:Object(n.jsxs)(b.a,{bg:"light",expand:"lg",children:[Object(n.jsx)(b.a.Brand,{href:"/",children:"Spaced Flashcards"}),Object(n.jsx)(b.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(n.jsxs)(b.a.Collapse,{id:"basic-navbar-nav",children:[Object(n.jsxs)(m.a,{variant:"pills",className:"mr-auto",children:[Object(n.jsx)(m.a.Link,{eventKey:"1",href:"/decks",children:"My Decks"}),Object(n.jsx)(m.a.Link,{eventKey:"2",href:"/search",children:"Search Decks"})]}),s?Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("p",{children:"welcome back, ".concat(s.userData.username)}),Object(n.jsx)(u.a,{onClick:function(){g.logout(),e.push("/")},children:"Logout!"})]}):Object(n.jsxs)(m.a,{variant:"pills",children:[Object(n.jsx)(m.a.Link,{eventKey:"3",href:"/login",children:"Login"}),Object(n.jsx)(m.a.Link,{eventKey:"4",href:"/register",children:"Register"})]})]})]})})}var _=r(30),N=r(8),E=r(14);function P(e){return k.apply(this,arguments)}function k(){return(k=Object(x.a)(O.a.mark((function e(t){var r;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.t0=fetch,e.t1=t.url,e.t2=t.method,!t.auth){e.next=9;break}return e.next=6,g.authHeader();case 6:e.t3=e.sent,e.next=10;break;case 9:e.t3={"Content-Type":"application/json"};case 10:return e.t4=e.t3,e.t5=JSON.stringify(t.body),e.t6={method:e.t2,headers:e.t4,body:e.t5},e.next=15,(0,e.t0)(e.t1,e.t6);case 15:if(!((r=e.sent).status>=400)){e.next=19;break}e.next=22;break;case 19:return e.next=21,r.json();case 21:return e.abrupt("return",e.sent);case 22:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function R(){var e=Object(p.g)(),t="This field is required!!";function r(){return(r=Object(x.a)(O.a.mark((function t(r){var n,a,s,c,i,o;return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log(r),alert("submit registration data to backend: ".concat(JSON.stringify(r))),n=r.email,a=r.username,s=r.password,c={url:Object({NODE_ENV:"production",PUBLIC_URL:".",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_BASE_URL+"auth/users/",method:"POST",auth:!1,body:{username:a,email:n,password:s}},t.next=6,P(c);case 6:return i=t.sent,console.log("response to register user call is: ".concat(JSON.stringify(i))),c.url=Object({NODE_ENV:"production",PUBLIC_URL:".",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_BASE_URL+"auth/jwt/create/",t.next=11,P(c);case 11:return(o=t.sent).userData={username:a,email:n},console.log("response to jwt call is: ".concat(JSON.stringify(o))),g.newUser(o),e.push("/profile"),t.abrupt("return");case 17:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return console.log("the base url is: ".concat(Object({NODE_ENV:"production",PUBLIC_URL:".",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_BASE_URL)),Object(n.jsx)(n.Fragment,{children:Object(n.jsx)(l.a,{className:"text-center",children:Object(n.jsxs)(l.a.Body,{children:[Object(n.jsx)(l.a.Header,{style:{fontSize:"32px"},children:"Register"}),Object(n.jsx)(l.a.Subtitle,{className:"mb-2 text-muted",style:{marginTop:"10px"},children:"Begin learning today by creating an account and joining the Spaced Flashcards community! Just give us some basic information..."}),Object(n.jsx)(N.d,{initialValues:{email:"",username:"",password:"",confirmPassword:""},validationSchema:E.a().shape({email:E.c().email("Email is invalid!!").required(t),username:E.c().required(t),password:E.c().min(6,"Password must be at least 6 characters!!").required(t),confirmPassword:E.c().oneOf([E.b("password"),null],"Passwords don't match!!").required(t)}),onSubmit:function(e){!function(e){r.apply(this,arguments)}(e)},render:function(e){var t=e.errors,r=e.touched;return Object(n.jsxs)(N.c,{children:[Object(n.jsxs)("div",{className:"form-group",children:[Object(n.jsx)("label",{htmlFor:"email",children:"Email"}),Object(n.jsx)(N.b,{name:"email",type:"text",className:"form-control"+(t.email&&r.email?" is-invalid":"")}),Object(n.jsx)(N.a,{name:"email",component:"div",className:"invalid-feedback"})]}),Object(n.jsxs)("div",{className:"form-group",children:[Object(n.jsx)("label",{htmlFor:"username",children:"Username (email)"}),Object(n.jsx)(N.b,{name:"username",type:"text",className:"form-control"+(t.username&&r.username?" is-invalid":"")}),Object(n.jsx)(N.a,{name:"username",component:"div",className:"invalid-feedback"})]}),Object(n.jsxs)("div",{className:"form-group",children:[Object(n.jsx)("label",{htmlFor:"password",children:"Password"}),Object(n.jsx)(N.b,{name:"password",type:"password",className:"form-control"+(t.password&&r.password?" is-invalid":"")}),Object(n.jsx)(N.a,{name:"password",component:"div",className:"invalid-feedback"})]}),Object(n.jsxs)("div",{className:"form-group",children:[Object(n.jsx)("label",{htmlFor:"confirmPassword",children:"Confirm Password"}),Object(n.jsx)(N.b,{name:"confirmPassword",type:"password",className:"form-control"+(t.confirmPassword&&r.confirmPassword?" is-invalid":"")}),Object(n.jsx)(N.a,{name:"confirmPassword",component:"div",className:"invalid-feedback"})]}),Object(n.jsxs)("div",{className:"form-group",children:[Object(n.jsx)("button",{type:"submit",className:"btn btn-primary mr-2",children:"Register"}),Object(n.jsx)("button",{type:"reset",className:"btn btn-secondary",children:"Reset"})]})]})}})]})})})}var C=r(45);r(214);function U(){var e=Object(p.g)(),t="This field is required!!";function r(){return(r=Object(x.a)(O.a.mark((function t(r){var n,a,s,c;return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log(r),alert("submit login data to backend: ".concat(JSON.stringify(r))),n=r.username,a=r.password,s={url:Object({NODE_ENV:"production",PUBLIC_URL:".",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_BASE_URL+"auth/jwt/create/",method:"POST",auth:!1,body:{username:n,password:a}},t.prev=4,t.next=7,P(s);case 7:return(c=t.sent).userData={username:n},console.log("response to login call is ".concat(JSON.stringify(c))),g.login(c),e.push("/profile"),t.abrupt("return");case 15:t.prev=15,t.t0=t.catch(4),console.error(t.t0);case 18:case"end":return t.stop()}}),t,null,[[4,15]])})))).apply(this,arguments)}return Object(n.jsx)(n.Fragment,{children:Object(n.jsx)(l.a,{className:"text-center",children:Object(n.jsxs)(l.a.Body,{children:[Object(n.jsx)(l.a.Header,{style:{fontSize:"32px"},children:"Login"}),Object(n.jsx)(l.a.Subtitle,{className:"mb-2 text-muted",style:{marginTop:"10px"},children:"Login to access your decks and reinfornce your knowledge"}),Object(n.jsx)(N.d,{initialValues:{username:"",password:""},validationSchema:E.a().shape({username:E.c().required(t),password:E.c().min(6,"Password must be at least 6 characters!!").required(t)}),onSubmit:function(e){!function(e){r.apply(this,arguments)}(e)},render:function(e){var t=e.errors,r=e.touched;return Object(n.jsxs)(N.c,{children:[Object(n.jsxs)("div",{className:"form-group",children:[Object(n.jsx)("label",{htmlFor:"username",children:"Username (email)"}),Object(n.jsx)(N.b,{name:"username",type:"text",className:"form-control"+(t.username&&r.username?" is-invalid":"")}),Object(n.jsx)(N.a,{name:"username",component:"div",className:"invalid-feedback"})]}),Object(n.jsxs)("div",{className:"form-group",children:[Object(n.jsx)("label",{htmlFor:"password",children:"Password"}),Object(n.jsx)(N.b,{name:"password",type:"password",className:"form-control"+(t.password&&r.password?" is-invalid":"")}),Object(n.jsx)(N.a,{name:"password",component:"div",className:"invalid-feedback"})]}),Object(n.jsxs)("div",{className:"form-group",children:[Object(n.jsx)("button",{type:"submit",className:"btn btn-primary mr-2",children:"Login"}),Object(n.jsx)("button",{type:"reset",className:"btn btn-secondary",children:"Reset"})]})]})}})]})})})}var F=r(99),D=r(97),A=function(e){var t=!(!localStorage.getItem("currentUser")||!g.currentUserValue)&&new Date(1e3*Object(D.a)(g.currentUserValue.refresh).exp)>new Date;return t?(P({url:Object({NODE_ENV:"production",PUBLIC_URL:".",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_BASE_URL+"auth/jwt/refresh/",method:"POST",auth:!1,body:{refresh:g.currentUserValue.refresh}}).then((function(e){var t=JSON.parse(localStorage.getItem("currentUser"));t.access=e.access,localStorage.setItem("currentUser",JSON.stringify(t))})),t?Object(n.jsx)(p.b,{path:e.path,exact:e.exact,children:Object(n.jsx)(e.component,Object(F.a)({},e))}):Object(n.jsx)(p.a,{to:"/login"})):(console.log("trying to log this guy out"),g.logout(),Object(n.jsx)(p.a,{to:"/login"}))};function L(){return Object(n.jsx)(n.Fragment,{children:Object(n.jsx)("h1",{children:"profile page... protected!"})})}var H=r(98),B=r.n(H);function K(e){var t=Object(a.useState)(!1),r=Object(j.a)(t,2),s=r[0],c=r[1];function i(e){e.preventDefault(),c(!s)}return Object(n.jsxs)(B.a,{isFlipped:s,flipDirection:"vertical",children:[Object(n.jsx)("a",{style:{cursor:"pointer"},onClick:i,children:Object(n.jsx)(l.a,{children:Object(n.jsx)(l.a.Body,{style:{display:"flex",alignItems:"center",height:"420px"},children:Object(n.jsx)(l.a.Text,{style:{flex:"1"},children:"Question!!!!!"})})})}),Object(n.jsx)("a",{style:{cursor:"pointer"},onClick:i,children:Object(n.jsx)(l.a,{children:Object(n.jsx)(l.a.Body,{style:{display:"flex",alignItems:"center",height:"420px"},children:Object(n.jsx)(l.a.Text,{style:{flex:"1"},children:"Answer!!!"})})})})]})}var W=function(){return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(C.a,{position:"top-center",autoClose:3e3,hideProgressBar:!0,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!1,draggable:!0,pauseOnHover:!0}),Object(n.jsxs)(_.a,{children:[Object(n.jsx)(T,{}),Object(n.jsx)(o.a,{className:"center",fluid:"md",style:{textAlign:"center",marginTop:"10%"},children:Object(n.jsxs)(p.d,{children:[Object(n.jsx)(p.b,{exact:!0,path:"/",component:d}),Object(n.jsx)(p.b,{exact:!0,path:"/register",component:R}),Object(n.jsx)(p.b,{exact:!0,path:"/login",component:U}),Object(n.jsx)(p.b,{exact:!0,path:"/card",component:K}),Object(n.jsx)(A,{exact:!0,path:"/profile",component:L})]})})]})]})},I=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,225)).then((function(t){var r=t.getCLS,n=t.getFID,a=t.getFCP,s=t.getLCP,c=t.getTTFB;r(e),n(e),a(e),s(e),c(e)}))};i.a.render(Object(n.jsx)(s.a.StrictMode,{children:Object(n.jsx)(W,{})}),document.getElementById("root")),I()}},[[215,1,2]]]);
//# sourceMappingURL=main.7e4785be.chunk.js.map