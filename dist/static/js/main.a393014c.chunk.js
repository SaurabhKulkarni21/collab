(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{214:function(e,t,a){e.exports=a(447)},219:function(e,t,a){},447:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(209),i=a.n(c),l=(a(219),a(17)),s=a(18),o=a(20),m=a(19),u=a(21),d=a(450),h=a(452),p=a(448),E=a(225),f=a(449),g=a(8),b={fontSize:"18px"},N=Object(g.b)(null,function(e){return{signOut:function(){return e(function(e,t,a){(0,a.getFirebase)().auth().signOut().then(function(){e({type:"SIGNOUT_SUCCESS"})})})}}})(function(e){var t=e.profile.initials;return r.a.createElement("ul",{className:"right"},r.a.createElement("li",null,r.a.createElement(f.a,{to:"/create"},"New Project")),r.a.createElement("li",null,r.a.createElement("a",{onClick:e.signOut},"Log Out")),r.a.createElement("li",null,r.a.createElement(f.a,{to:"/",className:"btn btn-floating grey darken-2",style:b},t)))}),v=function(){return r.a.createElement("ul",{className:"right"},r.a.createElement("li",null,r.a.createElement(f.a,{to:"/signup"},"Sign Up")),r.a.createElement("li",null,r.a.createElement(f.a,{to:"/signin"},"Login")))},j=Object(g.b)(function(e){return{auth:e.firebase.auth,profile:e.firebase.profile}})(function(e){var t=e.auth,a=e.profile;console.log(a);var n=t.uid?r.a.createElement(N,{profile:a}):r.a.createElement(v,null);return r.a.createElement("nav",{className:"nav-wrapper teal"},r.a.createElement("div",{className:"container"},r.a.createElement(E.a,{to:"/",className:"brand-logo"},"C O L L A B"),n))}),O=a(43),y=a.n(O),C=function(e){var t=e.notifications;return r.a.createElement("div",{className:"section"},r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-content"},r.a.createElement("span",{className:"card-title"},"Notifications"),r.a.createElement("ul",{className:"notifications"},t&&t.map(function(e){return r.a.createElement("li",{key:e.id},r.a.createElement("span",{className:"pink-text"},e.user),r.a.createElement("span",null,e.content),r.a.createElement("div",{className:"grey-text note-date"},y()(e.time.toDate()).fromNow()))})))))},S=function(e){var t=e.project;return r.a.createElement("div",{className:"card project-summary"},r.a.createElement("div",{className:"card-content grey-text"},r.a.createElement("span",{className:"card-title"},t.title),r.a.createElement("p",null,t.content),r.a.createElement("p",null,t.gitlink),r.a.createElement("p",null,"Posted by ",t.authorFirstName," ",t.authorLastName),r.a.createElement("p",{className:"grey-text"},y()(t.createdAt.toDate()).calendar())))},w=a(212),x=a.n(w),k=function(e){var t=e.projects;return r.a.createElement("div",{className:"project-list section"},t&&t.map(function(e){return r.a.createElement(x.a,{to:"/projects/"+e.id,key:e.id},r.a.createElement(S,{project:e}))}))},R=a(22),F=a(12),L=a(451),I=function(e){function t(){return Object(l.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props,t=e.projects,a=e.auth,n=e.notifications;return a.uid?r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col s12 m6"},r.a.createElement(k,{projects:t})),r.a.createElement("div",{className:"col s12 m5 offset-m1"},r.a.createElement(C,{notifications:n})))):r.a.createElement(L.a,{to:"/signin"})}}]),t}(n.Component),P=Object(F.d)(Object(g.b)(function(e){return{projects:e.firestore.ordered.projects,auth:e.firebase.auth,notifications:e.firestore.ordered.notifications}}),Object(R.firestoreConnect)([{collection:"projects",orderBy:["createdAt","desc"]},{collection:"notifications",limit:3,orderBy:["time","desc"]}]))(I),A=Object(F.d)(Object(g.b)(function(e,t){var a=t.match.params.id,n=e.firestore.data.projects;return{project:n?n[a]:null,auth:e.firebase.auth}}),Object(R.firestoreConnect)([{collection:"projects"}]))(function(e){var t=e.project;return e.auth.uid?t?r.a.createElement("div",{className:"container section project-details"},r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-content"},r.a.createElement("span",{className:"card-title"},t.title),r.a.createElement("p",null,t.content),r.a.createElement("p",null,t.gitlink)),r.a.createElement("div",{className:"card-action grey lighten-4 grey-text"},r.a.createElement("div",null,"Posted By ",t.authorFirstName," ",t.authorLastName),r.a.createElement("div",null,r.a.createElement("p",{className:"grey-text"},y()(t.createdAt.toDate()).calendar()))))):r.a.createElement("div",{className:"container center"},"Loading project ......."):r.a.createElement(L.a,{to:"/"})}),T=a(29),U=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(o.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={email:"",password:""},a.handleSubmit=function(e){e.preventDefault(),a.props.signIn(a.state)},a.handleChange=function(e){a.setState(Object(T.a)({},e.target.id,e.target.value))},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props,t=e.authError;return e.auth.uid?r.a.createElement(L.a,{to:"/"}):r.a.createElement("div",{className:"container",style:{height:"992px"}},r.a.createElement("div",{className:"card",style:{marginTop:"20px"}},r.a.createElement("div",{className:"card-content"},r.a.createElement("form",{className:"white",onSubmit:this.handleSubmit},r.a.createElement("h5",{className:"grey-text text-darken-3"},"Sign In"),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"email"},"Email"),r.a.createElement("input",{type:"email",id:"email",onChange:this.handleChange})),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"password"},"Password"),r.a.createElement("input",{type:"password",id:"password",onChange:this.handleChange})),r.a.createElement("div",{className:"input-field"},r.a.createElement("button",{className:"btn grey darken-2"},"Login")),r.a.createElement("div",{className:"red-text center"},t?r.a.createElement("p",null,t):null)))))}}]),t}(n.Component),_=Object(g.b)(function(e){return{authError:e.auth.authError,auth:e.firebase.auth}},function(e){return{signIn:function(t){return e((a=t,function(e,t,n){(0,n.getFirebase)().auth().signInWithEmailAndPassword(a.email,a.password).then(function(){e({type:"LOGIN_SUCCESS"})}).catch(function(t){e({type:"LOGIN_ERROR",err:t})})}));var a}}})(U),G=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(o.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={firstName:"",lastName:"",email:"",password:""},a.handleSubmit=function(e){e.preventDefault(),a.props.signUp(a.state)},a.handleChange=function(e){a.setState(Object(T.a)({},e.target.id,e.target.value))},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return this.props.auth.uid?r.a.createElement(L.a,{to:"/"}):r.a.createElement("div",{className:"container",style:{height:"992px"}},r.a.createElement("div",{className:"card",style:{marginTop:"20px"}},r.a.createElement("div",{className:"card-content"},r.a.createElement("form",{className:"white",onSubmit:this.handleSubmit},r.a.createElement("h5",{className:"grey-text text-darken-3"},"Sign Up"),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"firstName"},"First Name"),r.a.createElement("input",{type:"text",id:"firstName",onChange:this.handleChange})),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"lastName"},"Last Name"),r.a.createElement("input",{type:"text",id:"lastName",onChange:this.handleChange})),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"email"},"Email"),r.a.createElement("input",{type:"email",id:"email",onChange:this.handleChange})),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"password"},"Password"),r.a.createElement("input",{type:"password",id:"password",onChange:this.handleChange})),r.a.createElement("div",{className:"input-field"},r.a.createElement("button",{className:"btn grey darken-2"},"Login"))))))}}]),t}(n.Component),D=Object(g.b)(function(e){return{auth:e.firebase.auth}},function(e){return{signUp:function(t){return e(function(e){return function(t,a,n){var r=n.getFirebase,c=n.getFirestore,i=r(),l=c();i.auth().createUserWithEmailAndPassword(e.email,e.password).then(function(t){return l.collection("users").doc(t.user.uid).set({firstName:e.firstName,lastName:e.lastName,initials:e.firstName[0]+e.lastName[0]})}).then(function(){t({type:"SIGNUP_SUCCESS"})}).catch(function(e){t({type:"SIGNUP_ERROR",err:e})})}}(t))}}})(G),B=a(36),J=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(o.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={title:"",content:"",gitlink:""},a.handleSubmit=function(e){console.log("This is e",e),e.preventDefault(),a.props.createProject(a.state),a.props.history.push("/")},a.handleChange=function(e){a.setState(Object(T.a)({},e.target.id,e.target.value))},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return this.props.auth.uid?r.a.createElement("div",{className:"container",style:{height:"992px"}},r.a.createElement("div",{className:"card",style:{marginTop:"20px"}},r.a.createElement("div",{className:"card-content"},r.a.createElement("form",{className:"white",onSubmit:this.handleSubmit},r.a.createElement("h5",{className:"grey-text text-darken-3"},"Create New Project"),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"title"},"Title"),r.a.createElement("input",{type:"text",id:"title",onChange:this.handleChange})),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"content"},"Project Content"),r.a.createElement("textarea",{id:"content",className:"materialize-textarea",onChange:this.handleChange})),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"gitlink"},"Github Link"),r.a.createElement("input",{type:"text",id:"gitlink",onChange:this.handleChange})),r.a.createElement("div",{className:"input-field"},r.a.createElement("button",{className:"btn grey darken-2"},"Create Project")))))):r.a.createElement(L.a,{to:"/signin"})}}]),t}(n.Component),M=Object(g.b)(function(e){return{auth:e.firebase.auth}},function(e){return{createProject:function(t){return e(function(e){return console.log("This is the project",e),function(t,a,n){var r=n.getFirestore,c=(n.getFirebase,r()),i=a().firebase.profile,l=a().firebase.auth.uid;c.collection("projects").add(Object(B.a)({},e,{authorFirstName:i.firstName,authorLastName:i.lastName,authorId:l,createdAt:new Date})).then(function(){t({type:"CREATE_PROJECT",project:e})}).catch(function(a){console.log("This is the error",a),t({type:"CREATE_PROJECT_ERROR",project:e})})}}(t))}}})(J),W=a(135),z={opacity:"0.3",marginLeft:"30px",marginRight:"30px"},K=function(){return r.a.createElement("div",{className:"row"},r.a.createElement("hr",{style:z}),r.a.createElement("div",{className:"col",style:{marginLeft:"47%",marginTop:"7px"}},r.a.createElement(W.SocialIcon,{style:{height:35,width:35},url:"https://github.com/SaurabhKulkarni21/collab"}),r.a.createElement(W.SocialIcon,{style:{height:35,width:35,marginLeft:"12px"},url:"https://linkedin.com"})))},q=function(e){function t(){return Object(l.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(d.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(j,null),r.a.createElement(h.a,null,r.a.createElement(p.a,{exact:!0,path:"/",component:P}),r.a.createElement(p.a,{path:"/projects/:id",component:A}),r.a.createElement(p.a,{path:"/signin",component:_}),r.a.createElement(p.a,{path:"/signup",component:D}),r.a.createElement(p.a,{path:"/create",component:M})),r.a.createElement(K,null)))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var H={authError:null},Q=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:H,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOGIN_ERROR":return console.log("Login failed"),Object(B.a)({},e,{authError:"login failed"});case"LOGIN_SUCCESS":return console.log("Login successful"),Object(B.a)({},e,{authError:null});case"SIGNOUT_SUCCESS":return console.log("Signout successful"),e;case"SIGNUP_SUCCESS":return console.log("signup success"),Object(B.a)({},e,{authError:null});case"SIGNUP_ERROR":return console.log("success failed"),Object(B.a)({},e,{authError:t.err.message});default:return e}},V={projects:[{id:"1",title:"ML Project",content:"More ML Code",gitlink:"www.github.com/SaurabhKulkarni21"},{id:"2",title:"DS Project",content:"More DS Code",gitlink:"www.github.com/VivekShetye27"}]},Z=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:V,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CREATE_PROJECT":return console.log("This is the created project",t.project),e;case"CREATE_PROJECT_ERROR":return console.log("Error while creating project",t.err),e;default:return e}},$=a(58),X=Object(F.c)({auth:Q,project:Z,firestore:$.firestoreReducer,firebase:R.firebaseReducer}),Y=a(213),ee=a(85),te=a.n(ee);a(440),a(445);te.a.initializeApp({apiKey:"AIzaSyC7vQ4OHwbF7WLqMTo5xqMSZSF10nns5H0",authDomain:"collab-cf12c.firebaseapp.com",databaseURL:"https://collab-cf12c.firebaseio.com",projectId:"collab-cf12c",storageBucket:"",messagingSenderId:"933984282053"}),te.a.firestore().settings({timestampsInSnapshots:!0});var ae=te.a,ne=Object(F.e)(X,Object(F.d)(Object(F.a)(Y.a.withExtraArgument({getFirestore:$.getFirestore,getFirebase:R.getFirebase})),Object($.reduxFirestore)(ae),Object(R.reactReduxFirebase)(ae,{useFirestoreForProfile:!0,userProfile:"users",attachAuthIsReady:!0})));ne.firebaseAuthIsReady.then(function(){i.a.render(r.a.createElement(g.a,{store:ne},r.a.createElement(q,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})})}},[[214,2,1]]]);
//# sourceMappingURL=main.a393014c.chunk.js.map