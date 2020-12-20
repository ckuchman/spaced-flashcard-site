(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{106:function(e,t,n){},107:function(e,t,n){},215:function(e,t,n){"use strict";n.r(t);var r=n(1),a=(n(102),n(0)),s=n.n(a),c=n(27),i=n.n(c),o=(n(106),n(107),n(219)),l=n(7),d=n(226),u=n(220);var j=function(){var e=Object(l.g)();return Object(r.jsx)(r.Fragment,{children:Object(r.jsxs)(o.a,{className:"center",fluid:"md",style:{display:"flex",flexDirection:"column",justifyContent:"center",marginTop:"20%"},children:[Object(r.jsx)("head",{children:Object(r.jsx)("title",{children:"Spaced Flashcards Project - OSU Winter Hackathon 2020"})}),Object(r.jsx)("h1",{children:"Spaced Flashcards"}),Object(r.jsx)(d.a,{style:{width:"50%",flex:"1",marginLeft:"auto",marginRight:"auto"},children:Object(r.jsxs)(d.a.Body,{children:[Object(r.jsx)(d.a.Title,{children:"A Proven System"}),Object(r.jsx)(d.a.Text,{children:"Research shows that spaced repetition is an extremely effective strategy for memory retention and learning. What topic would you like to know more completely?"}),Object(r.jsx)(u.a,{onClick:function(){e.push("/login")},style:{marginRight:"25px"},variant:"primary",children:"Login"}),Object(r.jsx)(u.a,{onClick:function(){e.push("/register")},variant:"primary",children:"Register in Seconds"})]})})]})})},b=n(12),m=n(224),h=n(225),p=n(11),x=n.n(p),O=n(17),f=new(n(223).a)(JSON.parse(localStorage.getItem("currentUser"))),g={login:function(e){return v.apply(this,arguments)},logout:y,authHeader:function(){return k.apply(this,arguments)},newUser:function(e){if(!e.refresh||!e.access)return y();localStorage.setItem("currentUser",JSON.stringify(e)),f.next(e)},updateUserData:function(){return w.apply(this,arguments)},currentUser:f.asObservable(),get currentUserValue(){return f.value}};function v(){return(v=Object(O.a)(x.a.mark((function e(t){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:localStorage.setItem("currentUser",JSON.stringify(t)),f.next(t);case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function y(){localStorage.clear(),f.next(null)}function w(){return(w=Object(O.a)(x.a.mark((function e(){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return");case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function k(){return(k=Object(O.a)(x.a.mark((function e(){var t;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(t=g.currentUserValue)||!t.access){e.next=5;break}return e.abrupt("return",{"Content-Type":"application/json",Authorization:"JWT ".concat(t.access)});case 5:return e.abrupt("return",{});case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function N(){var e=Object(l.g)(),t=Object(a.useState)(null),n=Object(b.a)(t,2),s=n[0],c=n[1];Object(l.h)();return Object(a.useEffect)((function(){var e=g.currentUser.subscribe((function(e){return c(e)}));return function(){e.unsubscribe()}}),[s]),Object(r.jsx)(r.Fragment,{children:Object(r.jsxs)(m.a,{bg:"light",expand:"lg",children:[Object(r.jsx)(m.a.Brand,{href:"/",children:"Spaced Flashcards"}),Object(r.jsx)(m.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(r.jsxs)(m.a.Collapse,{id:"basic-navbar-nav",children:[Object(r.jsxs)(h.a,{variant:"pills",className:"mr-auto",children:[Object(r.jsx)(h.a.Link,{eventKey:"1",href:"/decks",children:"My Decks"}),Object(r.jsx)(h.a.Link,{eventKey:"2",href:"/search",children:"Search Decks"})]}),s?Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("p",{children:"welcome back, ".concat(s.userData.username)}),Object(r.jsx)(u.a,{onClick:function(){g.logout(),e.push("/")},children:"Logout!"})]}):Object(r.jsxs)(h.a,{variant:"pills",children:[Object(r.jsx)(h.a.Link,{eventKey:"3",href:"/login",children:"Login"}),Object(r.jsx)(h.a.Link,{eventKey:"4",href:"/register",children:"Register"})]})]})]})})}var S=n(24),F=n(5),q=n(9);function C(e){return T.apply(this,arguments)}function T(){return(T=Object(O.a)(x.a.mark((function e(t){var n;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.t0=fetch,e.t1=t.url,e.t2=t.method,!t.auth){e.next=9;break}return e.next=6,g.authHeader();case 6:e.t3=e.sent,e.next=10;break;case 9:e.t3={"Content-Type":"application/json"};case 10:return e.t4=e.t3,e.t5=JSON.stringify(t.body),e.t6={method:e.t2,headers:e.t4,body:e.t5},e.next=15,(0,e.t0)(e.t1,e.t6);case 15:if(!((n=e.sent).status>=400)){e.next=19;break}e.next=22;break;case 19:return e.next=21,n.json();case 21:return e.abrupt("return",e.sent);case 22:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function P(){var e=Object(l.g)(),t="This field is required!!";function n(){return(n=Object(O.a)(x.a.mark((function t(n){var r,a,s,c,i,o;return x.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log(n),alert("submit registration data to backend: ".concat(JSON.stringify(n))),r=n.email,a=n.username,s=n.password,c={url:"/auth/users/",method:"POST",auth:!1,body:{username:a,email:r,password:s}},t.next=6,C(c);case 6:return i=t.sent,console.log("response to register user call is: ".concat(JSON.stringify(i))),c.url="/auth/jwt/create/",t.next=11,C(c);case 11:return(o=t.sent).userData={username:a,email:r},console.log("response to jwt call is: ".concat(JSON.stringify(o))),g.newUser(o),e.push({pathname:"/profile",state:i}),t.abrupt("return");case 17:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return console.log("the base url is: ".concat("/")),Object(r.jsx)(r.Fragment,{children:Object(r.jsx)(d.a,{className:"text-center",children:Object(r.jsxs)(d.a.Body,{children:[Object(r.jsx)(d.a.Header,{style:{fontSize:"32px"},children:"Register"}),Object(r.jsx)(d.a.Subtitle,{className:"mb-2 text-muted",style:{marginTop:"10px"},children:"Begin learning today by creating an account and joining the Spaced Flashcards community! Just give us some basic information..."}),Object(r.jsx)(F.d,{initialValues:{email:"",username:"",password:"",confirmPassword:""},validationSchema:q.a().shape({email:q.c().email("Email is invalid!!").required(t),username:q.c().required(t),password:q.c().min(6,"Password must be at least 6 characters!!").required(t),confirmPassword:q.c().oneOf([q.b("password"),null],"Passwords don't match!!").required(t)}),onSubmit:function(e){!function(e){n.apply(this,arguments)}(e)},render:function(e){var t=e.errors,n=e.touched;return Object(r.jsxs)(F.c,{children:[Object(r.jsxs)("div",{className:"form-group",children:[Object(r.jsx)("label",{htmlFor:"email",children:"Email"}),Object(r.jsx)(F.b,{name:"email",type:"text",className:"form-control"+(t.email&&n.email?" is-invalid":"")}),Object(r.jsx)(F.a,{name:"email",component:"div",className:"invalid-feedback"})]}),Object(r.jsxs)("div",{className:"form-group",children:[Object(r.jsx)("label",{htmlFor:"username",children:"Username (email)"}),Object(r.jsx)(F.b,{name:"username",type:"text",className:"form-control"+(t.username&&n.username?" is-invalid":"")}),Object(r.jsx)(F.a,{name:"username",component:"div",className:"invalid-feedback"})]}),Object(r.jsxs)("div",{className:"form-group",children:[Object(r.jsx)("label",{htmlFor:"password",children:"Password"}),Object(r.jsx)(F.b,{name:"password",type:"password",className:"form-control"+(t.password&&n.password?" is-invalid":"")}),Object(r.jsx)(F.a,{name:"password",component:"div",className:"invalid-feedback"})]}),Object(r.jsxs)("div",{className:"form-group",children:[Object(r.jsx)("label",{htmlFor:"confirmPassword",children:"Confirm Password"}),Object(r.jsx)(F.b,{name:"confirmPassword",type:"password",className:"form-control"+(t.confirmPassword&&n.confirmPassword?" is-invalid":"")}),Object(r.jsx)(F.a,{name:"confirmPassword",component:"div",className:"invalid-feedback"})]}),Object(r.jsxs)("div",{className:"form-group",children:[Object(r.jsx)("button",{type:"submit",className:"btn btn-primary mr-2",children:"Register"}),Object(r.jsx)("button",{type:"reset",className:"btn btn-secondary",children:"Reset"})]})]})}})]})})})}var U=n(37);n(214);function D(){var e=Object(l.g)(),t="This field is required!!";function n(){return(n=Object(O.a)(x.a.mark((function t(n){var r,a,s,c,i,o;return x.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log(n),r=n.username,a=n.password,s={url:"/auth/jwt/create/",method:"POST",auth:!1,body:{username:r,password:a}},t.prev=3,t.next=6,C(s);case 6:return(c=t.sent).userData={username:r},console.log("response to login call is ".concat(JSON.stringify(c))),g.login(c),console.log(g.currentUserValue),i={url:"/auth/users/",method:"GET",auth:!0},t.next=14,C(i);case 14:return o=t.sent,console.log("the response from getting id is: ".concat(JSON.stringify(o))),e.push({pathname:"/profile",state:o[0]}),t.abrupt("return");case 20:return t.prev=20,t.t0=t.catch(3),console.error(t.t0),U.b.error("Invalid login info, please retry!"),e.push("/temp"),e.goBack(),t.abrupt("return");case 27:case"end":return t.stop()}}),t,null,[[3,20]])})))).apply(this,arguments)}return Object(r.jsx)(r.Fragment,{children:Object(r.jsx)(d.a,{className:"text-center",children:Object(r.jsxs)(d.a.Body,{children:[Object(r.jsx)(d.a.Header,{style:{fontSize:"32px"},children:"Login"}),Object(r.jsx)(d.a.Subtitle,{className:"mb-2 text-muted",style:{marginTop:"10px"},children:"Login to access your decks and reinfornce your knowledge"}),Object(r.jsx)(F.d,{initialValues:{username:"",password:""},validationSchema:q.a().shape({username:q.c().required(t),password:q.c().min(6,"Password must be at least 6 characters!!").required(t)}),onSubmit:function(e){!function(e){n.apply(this,arguments)}(e)},render:function(e){var t=e.errors,n=e.touched;return Object(r.jsxs)(F.c,{children:[Object(r.jsxs)("div",{className:"form-group",children:[Object(r.jsx)("label",{htmlFor:"username",children:"Username (email)"}),Object(r.jsx)(F.b,{name:"username",type:"text",className:"form-control"+(t.username&&n.username?" is-invalid":"")}),Object(r.jsx)(F.a,{name:"username",component:"div",className:"invalid-feedback"})]}),Object(r.jsxs)("div",{className:"form-group",children:[Object(r.jsx)("label",{htmlFor:"password",children:"Password"}),Object(r.jsx)(F.b,{name:"password",type:"password",className:"form-control"+(t.password&&n.password?" is-invalid":"")}),Object(r.jsx)(F.a,{name:"password",component:"div",className:"invalid-feedback"})]}),Object(r.jsxs)("div",{className:"form-group",children:[Object(r.jsx)("button",{type:"submit",className:"btn btn-primary mr-2",children:"Login"}),Object(r.jsx)("button",{type:"reset",className:"btn btn-secondary",children:"Reset"})]})]})}})]})})})}var J=n(99),_=n(97),B=function(e){var t=!(!localStorage.getItem("currentUser")||!g.currentUserValue)&&new Date(1e3*Object(_.a)(g.currentUserValue.refresh).exp)>new Date;return t?(C({url:"/auth/jwt/refresh/",method:"POST",auth:!1,body:{refresh:g.currentUserValue.refresh}}).then((function(e){var t=JSON.parse(localStorage.getItem("currentUser"));t.access=e.access,localStorage.setItem("currentUser",JSON.stringify(t))})),t?Object(r.jsx)(l.b,{path:e.path,exact:e.exact,children:Object(r.jsx)(e.component,Object(J.a)({},e))}):Object(r.jsx)(l.a,{to:"/login"})):(console.log("trying to log this guy out"),g.logout(),Object(r.jsx)(l.a,{to:"/login"}))};function L(){var e=Object(a.useState)([]),t=Object(b.a)(e,2);t[0],t[1];return Object(a.useEffect)((function(){alert("fetch user's decks")}),[]),Object(r.jsx)(r.Fragment,{children:Object(r.jsx)("h1",{children:"profile page... protected!"})})}var I=n(98),R=n.n(I),H=n(221),V=n(222);function E(e){function t(t){e.handleRate(t)}return Object(r.jsx)(r.Fragment,{children:Object(r.jsx)(o.a,{children:Object(r.jsxs)(H.a,{children:[Object(r.jsx)(V.a,{children:Object(r.jsx)(u.a,{variant:"success",onClick:function(){t("easy")},children:"Easy - 7 Days"})}),Object(r.jsx)(V.a,{children:Object(r.jsx)(u.a,{variant:"warning",onClick:function(){t("medium")},children:"Medium - 7 Hours"})}),Object(r.jsx)(V.a,{children:Object(r.jsx)(u.a,{variant:"danger",onClick:function(){t("hard")},children:"Hard -  7 Minutes"})})]})})})}function z(e){var t=Object(a.useState)(!1),n=Object(b.a)(t,2),s=n[0],c=n[1],i=Object(a.useState)(""),o=Object(b.a)(i,2),l=(o[0],o[1]);function u(e){e.preventDefault(),c(!s)}return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsxs)(R.a,{isFlipped:s,flipDirection:"vertical",children:[Object(r.jsx)("a",{style:{cursor:"pointer"},onClick:function(e){u(e)},children:Object(r.jsx)(d.a,{children:Object(r.jsx)(d.a.Body,{style:{display:"flex",alignItems:"center",height:"420px"},children:Object(r.jsx)(d.a.Text,{style:{flex:"1"},children:e.question})})})}),Object(r.jsx)("a",{style:{cursor:"pointer"},onClick:function(e){u(e)},children:Object(r.jsx)(d.a,{children:Object(r.jsx)(d.a.Body,{style:{display:"flex",alignItems:"center",height:"420px"},children:Object(r.jsx)(d.a.Text,{style:{flex:"1"},children:e.answer})})})})]}),s&&Object(r.jsx)(E,{handleRate:function(t){l(t),c(!1),e.nextCard()}})]})}function M(e){var t=e.numCards,n=e.cardIndex;return Object(r.jsx)("h5",{children:"Flashcard ".concat(n+1," of ").concat(t)})}var A=[{question:"2+2=",answer:"4"},{question:"2+3=",answer:"5"},{question:"2+4=",answer:"6"},{question:"2+5=",answer:"7"},{question:"2+6=",answer:"8"},{question:"2+7=",answer:"9"},{question:"2+8=",answer:"10"}];function K(){var e=Object(l.g)(),t=Object(a.useState)(0),n=Object(b.a)(t,2),s=n[0],c=n[1];return Object(r.jsx)(r.Fragment,{children:-1!==s?Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(M,{numCards:A.length,cardIndex:s}),Object(r.jsx)(z,{index:s,question:A[s].question,answer:A[s].answer,nextCard:function(){console.log("i'm calling nextcard"),c(s!==A.length-1?s+1:-1)}})]}):Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("h5",{children:"Nice work!"}),Object(r.jsx)(u.a,{onClick:function(){e.push("/profile")},children:"Back to My Decks"})]})})}function W(e){var t="This field is required!!";return Object(r.jsx)(r.Fragment,{children:Object(r.jsx)(d.a,{className:"text-center",children:Object(r.jsxs)(d.a.Body,{children:[Object(r.jsx)(d.a.Header,{style:{fontSize:"32px"},children:"Create Flashcard"}),Object(r.jsx)(d.a.Subtitle,{className:"mb-2 text-muted",style:{marginTop:"10px"},children:"Give us a question and an answer"}),Object(r.jsx)(F.d,{initialValues:{question:"",answer:""},validationSchema:q.a().shape({question:q.c().required(t),answer:q.c().required(t)}),onSubmit:function(e){!function(e){console.log("create card handle submit: props i was passed are: ".concat(JSON.stringify(e)))}(e)},render:function(e){var t=e.errors,n=e.touched;return Object(r.jsxs)(F.c,{children:[Object(r.jsxs)("div",{className:"form-group",children:[Object(r.jsx)("label",{htmlFor:"question",children:"Question"}),Object(r.jsx)(F.b,{as:"textarea",name:"question",type:"text",className:"form-control"+(t.question&&n.question?" is-invalid":"")}),Object(r.jsx)(F.a,{name:"question",component:"div",className:"invalid-feedback"})]}),Object(r.jsxs)("div",{className:"form-group",children:[Object(r.jsx)("label",{htmlFor:"answer",children:"Answer"}),Object(r.jsx)(F.b,{as:"textarea",name:"answer",type:"text",className:"form-control"+(t.answer&&n.answer?" is-invalid":"")}),Object(r.jsx)(F.a,{name:"answer",component:"div",className:"invalid-feedback"})]}),Object(r.jsxs)("div",{className:"form-group",children:[Object(r.jsx)("button",{type:"submit",className:"btn btn-primary mr-2",children:"Create Card!"}),Object(r.jsx)("button",{type:"reset",className:"btn btn-secondary",children:"Reset"})]})]})}})]})})})}function G(e){var t="This field is required!!";return Object(r.jsx)(r.Fragment,{children:Object(r.jsx)(d.a,{className:"text-center",children:Object(r.jsxs)(d.a.Body,{children:[Object(r.jsx)(d.a.Header,{style:{fontSize:"32px"},children:"Create New Deck"}),Object(r.jsx)(d.a.Subtitle,{className:"mb-2 text-muted",style:{marginTop:"10px"},children:"Name your new deck and give a description!"}),Object(r.jsx)(F.d,{initialValues:{deck_name:"",deck_description:""},validationSchema:q.a().shape({deck_name:q.c().required(t),deck_description:q.c().required(t)}),onSubmit:function(e){!function(e){console.log("create deck handle submit: props i was passed are: ".concat(JSON.stringify(e))),e.deck_name,e.deck_description}(e)},render:function(e){var t=e.errors,n=e.touched;return Object(r.jsxs)(F.c,{children:[Object(r.jsxs)("div",{className:"form-group",children:[Object(r.jsx)("label",{htmlFor:"deck_name",children:"Deck Name"}),Object(r.jsx)(F.b,{name:"deck_name",type:"text",className:"form-control"+(t.deck_name&&n.deck_name?" is-invalid":"")}),Object(r.jsx)(F.a,{name:"deck_name",component:"div",className:"invalid-feedback"})]}),Object(r.jsxs)("div",{className:"form-group",children:[Object(r.jsx)("label",{htmlFor:"deck_description",children:"Deck Description"}),Object(r.jsx)(F.b,{name:"deck_description",type:"text",className:"form-control"+(t.deck_description&&n.deck_description?" is-invalid":"")}),Object(r.jsx)(F.a,{name:"deck_description",component:"div",className:"invalid-feedback"})]}),Object(r.jsxs)("div",{className:"form-group",children:[Object(r.jsx)("button",{type:"submit",className:"btn btn-primary mr-2",children:"Create Deck!"}),Object(r.jsx)("button",{type:"reset",className:"btn btn-secondary",children:"Reset"})]})]})}})]})})})}var Q=function(){return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(U.a,{position:"top-center",autoClose:3e3,hideProgressBar:!0,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!1,draggable:!0,pauseOnHover:!0}),Object(r.jsxs)(S.a,{children:[Object(r.jsx)(N,{}),Object(r.jsx)(o.a,{className:"center",fluid:"md",style:{textAlign:"center",marginTop:"10%"},children:Object(r.jsxs)(l.d,{children:[Object(r.jsx)(l.b,{exact:!0,path:"/",component:j}),Object(r.jsx)(l.b,{exact:!0,path:"/register",component:P}),Object(r.jsx)(l.b,{exact:!0,path:"/login",component:D}),Object(r.jsx)(B,{exact:!0,path:"/rundeck",component:K}),Object(r.jsx)(B,{exact:!0,path:"/profile",component:L}),Object(r.jsx)(B,{exact:!0,path:"/createcard",component:W}),Object(r.jsx)(B,{exact:!0,path:"/createdeck",component:G})]})})]})]})},X=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,227)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,s=t.getLCP,c=t.getTTFB;n(e),r(e),a(e),s(e),c(e)}))};i.a.render(Object(r.jsx)(s.a.StrictMode,{children:Object(r.jsx)(Q,{})}),document.getElementById("root")),X()}},[[215,1,2]]]);
//# sourceMappingURL=main.942295fd.chunk.js.map