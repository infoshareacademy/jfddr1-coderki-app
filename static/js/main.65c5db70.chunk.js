(this["webpackJsonpcoderki-app"]=this["webpackJsonpcoderki-app"]||[]).push([[0],[,,,,,,,function(e,t,a){e.exports={header:"TaskSettings_header__2VE-L",subheader:"TaskSettings_subheader__1pHcx",form:"TaskSettings_form__3r12B",buttonContainer:"TaskSettings_buttonContainer__fdN8W"}},,,,,,,function(e,t,a){e.exports={menu:"Menu_menu__36kQ_",navItem:"Menu_navItem__1H0G3",addTaskBtn:"Menu_addTaskBtn__xaj4S"}},function(e,t,a){e.exports={mainContainer:"Task_mainContainer__SGyB6",textContainer:"Task_textContainer__2DoFu",smallerText:"Task_smallerText__2LF-D",titleText:"Task_titleText__2dHZY",iconContainer:"Task_iconContainer__2e1BH",seeMoreIcon:"Task_seeMoreIcon__1wqk6"}},,,,,function(e,t,a){e.exports={header:"AccountInfo_header__huoEH",subheader:"AccountInfo_subheader__2L-MQ",form:"AccountInfo_form__2-eCP",buttonContainer:"AccountInfo_buttonContainer__11YCg"}},,function(e,t,a){e.exports={footerContainer:"Footer_footerContainer__1PsLr",paragraph:"Footer_paragraph__2K_Bd",link:"Footer_link__3qRyE"}},function(e,t,a){e.exports={container:"AuthPage_container__qw6MI",authForm:"AuthPage_authForm__2XIbY",registerbtn:"AuthPage_registerbtn__3erp5",signin:"AuthPage_signin__3H8w8"}},,,,,,,function(e,t,a){e.exports={headerContainer:"Header_headerContainer__EgTH1",headerTitle:"Header_headerTitle__3CfsF"}},,,,,,function(e,t,a){e.exports=a.p+"static/media/home.261cde57.svg"},function(e,t,a){e.exports=a.p+"static/media/calendar.b4cb4ea7.svg"},function(e,t,a){e.exports=a.p+"static/media/plus.2de4ac5c.svg"},function(e,t,a){e.exports=a.p+"static/media/checkbox.d9b70962.svg"},function(e,t,a){e.exports=a.p+"static/media/settings.4551cf72.svg"},,function(e,t,a){e.exports=a.p+"static/media/horizontal-dots.335df8d7.svg"},function(e,t,a){e.exports={container:"SettingsPage_container__C7jKJ",title:"SettingsPage_title__20paz"}},function(e,t,a){e.exports=a.p+"static/media/logo.15a171fb.png"},,function(e,t,a){e.exports=a(67)},,,,,function(e,t,a){},function(e,t,a){},,,,,,,,,,,,,,,function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(35),o=a.n(l),c=(a(51),a(52),a(12)),i=a(3),s=a(8),m=a(22),u=a.n(m),d=function(){return r.a.createElement("div",{className:u.a.footerContainer},r.a.createElement("p",{className:u.a.paragraph},"Registration to our servise is equivalent with accepting our"," ",r.a.createElement("a",{href:"#",className:u.a.link},"Terms of service")," ","and"," ",r.a.createElement("a",{href:"#",className:u.a.link},"Privacy policy"),"."),r.a.createElement("p",{style:{padding:"0.5em",margin:5,textAlign:"center"}},"\xa9 Coderki App 2020. All rights reserved."))},p=a(23),E=a.n(p),g=function(){var e=Object(n.useState)(!0),t=Object(s.a)(e,2),a=t[0],l=t[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:E.a.container},r.a.createElement("form",{className:E.a.authForm},r.a.createElement("label",null,"Email "),r.a.createElement("input",{type:"email",name:"email",placeholder:"Enter Email"}),r.a.createElement("label",null,"Password "),r.a.createElement("input",{type:"password",name:"password",placeholder:"Enter Password"}),a&&r.a.createElement("div",null,r.a.createElement("label",null,"Confirm password "),r.a.createElement("input",{type:"password",name:"password-repeat",placeholder:"Repeat Password"})),r.a.createElement("button",{type:"submit",className:E.a.registerbtn},a?"Register":"Login")),r.a.createElement("div",{className:E.a.signin},r.a.createElement("p",null,a?"Already have an account? ":"Don't have an account yet? ",r.a.createElement("a",{href:"#",onClick:function(){return l(!a)}},a?"Sign in":"Register"),"."))),r.a.createElement(d,null))},h=a(14),f=a.n(h),v=a(36),b=a.n(v),y=a(37),k=a.n(y),C=a(38),_=a.n(C),N=a(39),T=a.n(N),x=a(40),S=a.n(x),w=function(){return r.a.createElement("nav",{className:f.a.menu},r.a.createElement(c.c,{to:"/auth"},"Auth"),r.a.createElement(c.c,{to:"/home"},r.a.createElement("img",{src:b.a,className:f.a.navItem,alt:"navigate to home page"})),r.a.createElement(c.c,{to:"/calendar"},r.a.createElement("img",{src:k.a,className:f.a.navItem,alt:"navigate to home page"})),r.a.createElement(c.c,{to:"/addTask"},r.a.createElement("img",{src:_.a,className:(f.a.navItem,f.a.addTaskBtn),alt:"navigate to add new task page"})),r.a.createElement(c.c,{to:"/tasks"},r.a.createElement("img",{src:T.a,className:f.a.navItem,alt:"navigate to home page"})),r.a.createElement(c.c,{to:"/settings"},r.a.createElement("img",{src:S.a,className:f.a.navItem,alt:"navigate to home page"})))},O=a(30),j=a.n(O),A=function(e){var t=e.children;return r.a.createElement("div",{className:j.a.headerContainer},r.a.createElement("h2",{className:j.a.headerTitle},t))},P=a(15),F=a.n(P),I=a(42),R=a.n(I),L=function(e){var t=e.tasks;return r.a.createElement("div",{style:{paddingTop:15}},t.map((function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:F.a.mainContainer},r.a.createElement("div",{className:F.a.textContainer},r.a.createElement("p",{className:F.a.smallerText},e.startTimeData,r.a.createElement("span",{style:{marginLeft:15}},e.startTimeTime)),r.a.createElement("p",{className:F.a.titleText},e.title),r.a.createElement("p",{className:F.a.smallerText},e.place)),r.a.createElement("div",{className:F.a.iconContainer},r.a.createElement("img",{src:R.a,className:F.a.seeMoreIcon,alt:"icon with 3 dots"}))))})))},B=a(26),M=(a(57),Object(n.createContext)()),D=function(e){var t=e.children,a=Object(n.useState)(null),l=Object(s.a)(a,2),o=l[0],c=l[1];Object(n.useEffect)((function(){B.firestore().collection("tasks").onSnapshot((function(e){var t=[];e.forEach((function(e){var a,n;t.push({id:e.id,title:e.get("title")||"",category:e.get("category")||"",status:e.get("status")||"",startTimeData:(null===(a=e.get("startTime"))||void 0===a?void 0:a.toDate().toDateString())||"",startTimeTime:(null===(n=e.get("startTime"))||void 0===n?void 0:n.toDate().toLocaleTimeString("en-US"))||"",place:e.get("place")||""})})),c(t)}))}),[]);var i={tasks:null===o?[]:o,setTasks:c,addTask:function(e){var t={title:e.title,id:B.firestore.FieldValue.serverTimestamp(),category:e.category,place:e.place};B.firestore().collection("tasks").add(t)}};return r.a.createElement(M.Provider,{value:i},t)},H=function(){var e=Object(n.useContext)(M).tasks;return r.a.createElement(r.a.Fragment,null,r.a.createElement(L,{tasks:e}))},z=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(H,null))},Y=function(){return r.a.createElement("div",null,"To jest Kalendarz")},K=a(18),Q=a(19),q={title:"",id:"",category:"",place:""},J=function(){var e=Object(n.useContext)(M).addTask,t=Object(n.useState)(q),a=Object(s.a)(t,2),l=a[0],o=a[1],c=function(e){o(Object(Q.a)(Object(Q.a)({},l),{},Object(K.a)({},e.target.name,e.target.value)))};return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",{style:{textAlign:"center"}},"Add new task to database"),r.a.createElement("form",{onSubmit:function(t){return t.preventDefault(),e(l),void o(q)}},r.a.createElement("input",{type:"text",name:"title",placeholder:"Task name",value:l.title,onChange:function(e){return c(e)}}),r.a.createElement("input",{type:"text",name:"place",placeholder:"Place",value:l.place,onChange:function(e){return c(e)}}),r.a.createElement("input",{type:"text",name:"category",placeholder:"Category",value:l.category,onChange:function(e){return c(e)}}),r.a.createElement("button",{type:"submit"},"CREATE TASK")))},W=function(){var e=Object(n.useState)([]),t=Object(s.a)(e,2),a=t[0],l=t[1];return console.log("tasksfilter",a),r.a.createElement("div",null,r.a.createElement(V,{setFiltered:l}),r.a.createElement(L,{tasks:a}))},V=function(e){var t=e.setFiltered,a=Object(n.useContext)(M).tasks,l=Object(n.useState)(""),o=Object(s.a)(l,2),c=o[0],i=o[1],m=Object(n.useState)(""),u=Object(s.a)(m,2),d=u[0],p=u[1],E=Object(n.useState)(""),g=Object(s.a)(E,2),h=g[0],f=g[1];return Object(n.useEffect)((function(){var e=function(e){return e.filter((function(e){return e.title.toLowerCase().includes(c.toLowerCase())}))},n=function(e){return e.filter((function(e){return e.category.toLowerCase().includes(d.toLowerCase())}))},r=function(e){return e.filter((function(e){return e.category.toLowerCase().includes(h.toLowerCase())}))},l=r(n(e(a)));console.log("allfilter",l),t(r(n(e(a))))}),[c,d,h,a]),r.a.createElement("div",{style:{background:"#FFE5D6"}},r.a.createElement("div",null,r.a.createElement("label",null,"Search task by phrase:"),r.a.createElement("div",{style:{display:"flex",height:40}},r.a.createElement("input",{name:"searchField",value:c,onChange:function(e){return i(e.target.value)},style:{width:"98%",height:20}}))),r.a.createElement("div",null,r.a.createElement("div",{style:{marginTop:10}},r.a.createElement("label",null,"Filter by categories: "),r.a.createElement("select",{name:"category",style:{fontFamily:"Quicksand"},value:d,onChange:function(e){return p(e.target.value)}},r.a.createElement("option",null),r.a.createElement("option",{value:"education"},"Education"),r.a.createElement("option",{value:"sport"},"Sport"),r.a.createElement("option",{value:"duties"},"House duties"),r.a.createElement("option",{value:"relax"},"Relax"),r.a.createElement("option",{value:"meeting"},"Meeting"),r.a.createElement("option",{value:"appointment"},"Appointment"),r.a.createElement("option",{value:"work"},"Work"))),r.a.createElement("div",{style:{marginTop:10}},r.a.createElement("label",null,"Filter by status: "),r.a.createElement("select",{name:"status",style:{fontFamily:"Quicksand"},value:h,onChange:function(e){return f(e.target.value)}},r.a.createElement("option",{value:"placeholder"}),r.a.createElement("option",{value:"all"},"All"),r.a.createElement("option",{value:"open"},"Open"),r.a.createElement("option",{value:"inProgress"},"In progress"),r.a.createElement("option",{value:"someday"},"Someday"),r.a.createElement("option",{value:"closed"},"Closed"))),r.a.createElement("h2",{style:{textAlign:"center",marginBottom:5,paddingBottom:3}},"All tasks")))},G=a(20),U=a.n(G),X=function(e){var t=e.userName,a=e.familyRole,n=e.setSettings;return r.a.createElement("div",{className:U.a.container},r.a.createElement("h1",{className:U.a.header},"Your account information: "),r.a.createElement("form",null,r.a.createElement("input",{name:"userName",onChange:function(e){return n("userName",e.target.value)},placeholder:"Enter your name",type:"text",value:t})),r.a.createElement("h2",{className:U.a.subheader},"Choose your family role"),r.a.createElement("div",{className:U.a.buttonContainer},r.a.createElement("button",{name:"familyRole",type:"submit",onClick:function(){return n("familyRole","parent")},value:a},"Parent"),r.a.createElement("button",{name:"familyRole",type:"submit",onClick:function(){return n("familyRole","child")},value:a},"Child")),r.a.createElement("h2",{className:U.a.subheader},"Add your photo"),r.a.createElement("button",null,"Click to choose photo"))},Z=a(7),$=a.n(Z),ee=function(e){var t=e.privateOrPublic,a=e.emailNotifications,n=e.setSettings;return r.a.createElement("div",null,r.a.createElement("h1",{className:$.a.header},"Main settings: "),r.a.createElement("h2",{className:$.a.subheader},"Set account by default as"),r.a.createElement("div",{className:$.a.buttonContainer},r.a.createElement("button",{name:"privateOrPublic",type:"submit",onClick:function(){return n("privateOrPublic","private")},value:t},"Private"),r.a.createElement("button",{name:"privateOrPublic",type:"submit",onClick:function(){return n("privateOrPublic","public")},value:t},"Public")),r.a.createElement("h2",{className:$.a.subheader},"Set e-mail notifications"),r.a.createElement("div",{className:$.a.buttonContainer},r.a.createElement("button",{name:"emailNotifications",type:"submit",onClick:function(){return n("emailNotifications","yes")},value:a},"Yes"),r.a.createElement("button",{name:"emailNotifications",type:"submit",onClick:function(){return n("emailNotifications","no")},value:a},"No")),r.a.createElement("h2",{className:$.a.subheader}," Set your local time zone"),r.a.createElement("button",null,"Click to choose your local time zone"),r.a.createElement("h2",{className:$.a.subheader},"Start your week on"),r.a.createElement("div",{className:$.a.buttonContainer},r.a.createElement("button",null,"Sunday"),r.a.createElement("button",null,"Monday")),r.a.createElement("h2",{className:$.a.subheader},"Change your password"),r.a.createElement("button",null,"Click to change password"),r.a.createElement("h2",{className:$.a.subheader},"Log out"),r.a.createElement("button",null,"Click to log out"),r.a.createElement("h2",{className:$.a.subheader},"About us"),r.a.createElement("h2",{className:$.a.subheader},"Privacy Policy"))},te=function(e){var t=e.taskCategory,a=(e.taskCategoryColour,e.setSettings);return r.a.createElement("div",null,r.a.createElement("h1",{className:$.a.header},"Task settings: "),r.a.createElement("div",null,r.a.createElement("input",{name:"taskCategory",type:"text",placeholder:"Add new category of tasks",value:t,onChange:function(e){return a("taskCategory",e.target.value)}}),r.a.createElement("input",{name:"taskCategoryColour",type:"color",onClick:function(e){return a("taskCategoryColour",e.target.value)}})))},ae=a(43),ne=a.n(ae),re={userName:"",familyRole:"",selectedFile:"",taskCategory:"",taskCategoryColour:"",privateOrPublic:"",emailNotifications:""},le=function(){var e=Object(n.useState)(re),t=Object(s.a)(e,2),a=t[0],l=t[1],o=function(e,t){l(Object(Q.a)(Object(Q.a)({},a),{},Object(K.a)({},e,t)))};return r.a.createElement("div",{className:ne.a.container},r.a.createElement(X,{userName:a.userName,setSettings:o,familyRole:a.familyRole,selectedFile:a.selectedFile}),r.a.createElement(te,{taskCategory:a.taskCategory,setSettings:o,taskCategoryColour:a.taskCategoryColour}),r.a.createElement(ee,{privateOrPublic:a.privateOrPublic,setSettings:o,emailNotifications:a.emailNotifications}),r.a.createElement("button",{onClick:function(){console.log("settings:",a)}},"Save"))},oe=a(44),ce=a.n(oe),ie=function(){return r.a.createElement(c.a,null,r.a.createElement("div",null,r.a.createElement(i.c,null,r.a.createElement(i.a,{path:"/auth"},r.a.createElement(c.b,{to:"/"},r.a.createElement("img",{src:ce.a,style:{width:"100%",borderRadius:10,paddingBottom:30},alt:"Logo"})),r.a.createElement(g,null)),r.a.createElement(i.a,{path:"/home"},r.a.createElement(A,{children:"Home"}),r.a.createElement(w,null),r.a.createElement(z,null)),r.a.createElement(i.a,{path:"/calendar"},r.a.createElement(A,{children:"Calendar"}),r.a.createElement(w,null),r.a.createElement(Y,null)),r.a.createElement(i.a,{path:"/addTask"},r.a.createElement(A,{children:"Create new task"}),r.a.createElement(J,null)),r.a.createElement(i.a,{path:"/tasks"},r.a.createElement(A,{children:"Tasks"}),r.a.createElement(w,null),r.a.createElement(W,null)),r.a.createElement(i.a,{path:"/settings"},r.a.createElement(A,{children:"Settings"}),r.a.createElement(w,null),r.a.createElement(le,null)),r.a.createElement(i.a,{path:"/"},r.a.createElement(w,null),r.a.createElement(z,null)))))};var se=function(){return r.a.createElement("div",{className:"App",style:{height:"100%"}},r.a.createElement("header",{className:"App-header"},r.a.createElement(ie,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var me=a(45);a.n(me).a.initializeApp({apiKey:"AIzaSyCmO0JAsTO83g3Io6kyvYVu3wEsiQ7oY98",authDomain:"coderki-app.firebaseapp.com",databaseURL:"https://coderki-app.firebaseio.com",projectId:"coderki-app",storageBucket:"coderki-app.appspot.com",messagingSenderId:"801523551576",appId:"1:801523551576:web:1fd3be0123da8430ef692d"});o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(D,null,r.a.createElement(se,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[46,1,2]]]);
//# sourceMappingURL=main.65c5db70.chunk.js.map