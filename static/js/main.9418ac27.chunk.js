(this["webpackJsonppersonal-website"]=this["webpackJsonppersonal-website"]||[]).push([[0],{54:function(e,s,t){},56:function(e,s,t){},57:function(e,s,t){},68:function(e,s,t){},72:function(e,s,t){},90:function(e,s,t){},96:function(e,s,t){},97:function(e,s,t){},98:function(e,s,t){},99:function(e,s,t){"use strict";t.r(s);var c=t(0),a=t(1),n=t.n(a),i=t(11),r=t.n(i),l=(t(54),t(55),t(56),t(57),t(15)),o=t.n(l),d=t(17),j=t(18),b=t(16),h=(t(68),function(){return Object(c.jsx)(d.a,{className:"my-navbar",fixed:"top",collapseOnSelect:!0,expand:"lg",variant:"light",children:Object(c.jsxs)("div",{className:"container",children:[Object(c.jsx)(d.a.Brand,{children:Object(c.jsx)(b.Link,{className:"lead",activeClass:"my-active",to:"home",spy:!0,smooth:!0,offset:0,duration:500,children:Object(c.jsx)("a",{href:"#home",className:"navbar-title",children:"musa"})})}),Object(c.jsx)(d.a.Toggle,{className:"navbar-toggle","aria-controls":"responsive-navbar-nav"}),Object(c.jsx)(d.a.Collapse,{id:"responsive-navbar-nav",children:Object(c.jsxs)(j.a,{className:"ml-auto",children:[Object(c.jsx)(b.Link,{className:"lead",activeClass:"my-active",to:"about",spy:!0,smooth:!0,offset:-50,duration:500,children:Object(c.jsx)(j.a.Link,{className:"lead navbar-option",eventKey:1,children:"about"})}),Object(c.jsx)(b.Link,{className:"lead",activeClass:"my-active",to:"experience",spy:!0,smooth:!0,offset:-50,duration:500,children:Object(c.jsx)(j.a.Link,{className:"lead navbar-option",eventKey:2,children:"experience"})}),Object(c.jsx)(b.Link,{className:"lead",activeClass:"my-active",to:"projects",spy:!0,smooth:!0,offset:-50,duration:500,children:Object(c.jsx)(j.a.Link,{className:"lead navbar-option",eventKey:3,children:"projects"})})]})})]})})}),m=function(){return Object(c.jsxs)("div",{children:[Object(c.jsx)(h,{}),Object(c.jsx)("header",{id:"home",className:"App-header",children:Object(c.jsxs)("div",{className:"container",children:[Object(c.jsx)("div",{className:"row justify-content-center",children:Object(c.jsxs)("div",{className:"col-md-6",children:[Object(c.jsx)("h1",{class:"name",children:"musa ali"}),Object(c.jsx)(o.a,{avgTypingDelay:75,cursor:{show:!0,blink:!0,element:"",hideWhenDone:!1,hideWhenDoneDelay:1e3},children:Object(c.jsx)("div",{class:"school",children:Object(c.jsxs)("p",{children:["computer science @",Object(c.jsx)("a",{href:"https://carleton.ca/",style:{color:"red"},children:" carleton university"})]})})}),Object(c.jsxs)("div",{class:"links",children:[Object(c.jsx)("a",{href:"https://www.linkedin.com/in/musa-ali-cu/",children:"\ud83d\udc65 linkedin "}),Object(c.jsx)("a",{href:"https://github.com/hellomusa",children:"\ud83d\udc68\u200d\ud83d\udcbb github "}),Object(c.jsx)("a",{href:"mailto:musa6ali@gmail.com",children:"\ud83d\udce7 email "})]})]})}),Object(c.jsx)("div",{className:"scroll",children:"scroll down!"})]})})]})},p=(t(72),t(47)),u=t.p+"static/media/musa.ba7eb935.png",x=t(6),O=t(43),g=t.n(O),v=t(48),f=(t(90),new v.a),y=function(){var e=Object(a.useState)({}),s=Object(x.a)(e,2),t=s[0],n=s[1],i=Object(a.useState)(!0),r=Object(x.a)(i,2),l=r[0],d=r[1],j=Object(a.useState)(!1),b=Object(x.a)(j,2),h=b[0],m=b[1],p=Object(a.useState)({}),u=Object(x.a)(p,2),O=u[0],v=u[1],y=Object(a.useState)(!0),N=Object(x.a)(y,2),k=N[0],w=N[1],S=Object(a.useState)(!1),C=Object(x.a)(S,2),A=C[0],D=C[1];return Object(a.useEffect)((function(){g.a.get("https://ws.audioscrobbler.com/2.0/",{params:{method:"user.getrecenttracks",user:"musa6ali",api_key:"a3d14e9a7ce5f6d568fbf3415b944382",format:"json",limit:1}}).then((function(e){var s=e.data.recenttracks.track[0],t={artist:s.artist["#text"],title:s.name,link:s.url};n(t),d(!1)})).catch((function(e){m(!0)})),f.repos.listForUser({username:"hellomusa",sort:"pushed",per_page:1}).then((function(e){var s=e.data[0],t={name:s.name,link:s.html_url};v(t),w(!1)})).catch((function(e){D(!0)}))}),[]),Object(c.jsxs)("div",{children:[Object(c.jsx)("h4",{children:"Stalk me: (APIs are fun)"}),Object(c.jsxs)("ul",{children:[Object(c.jsxs)("li",{children:[h&&"Error getting most recently played song.",!h&&l&&Object(c.jsx)(o.a,{children:"Loading recent song..."}),!l&&Object(c.jsxs)(c.Fragment,{children:["I probably just finished listening to"," ",Object(c.jsxs)("a",{href:t.link,children:[t.title," by ",t.artist]}),"."]})]}),Object(c.jsxs)("li",{children:[A&&"Error getting most recently updated repo.",!A&&k&&Object(c.jsx)(o.a,{children:"Loading recent repo..."}),!k&&Object(c.jsxs)(c.Fragment,{children:["I probably just pushed some changes to ",Object(c.jsx)("a",{href:O.link,children:O.name}),"."]})]})]})]})},N=function(){return Object(c.jsx)("div",{id:"about",className:"above-particals jumbotron jumbotron-fluid bg-light text-black m-0",children:Object(c.jsx)("div",{className:"container",children:Object(c.jsxs)("div",{className:"row",children:[Object(c.jsxs)("div",{className:"col-md-6",children:[Object(c.jsxs)("h1",{className:"title display-4 mb-4",children:["\ud83d\udc4b hey, i'm musa ",Object(c.jsx)("span",{style:{fontSize:"2rem"},children:"(he/him)"})]}),Object(c.jsxs)("p",{className:"description",children:[Object(c.jsx)("hr",{}),"I'm a computer science student at ",Object(c.jsx)("strong",{children:" Carleton University "}),"primarily interested in web development.",Object(c.jsx)("br",{}),Object(c.jsx)("br",{}),"Currently, I'm volunteering at ",Object(c.jsx)("a",{href:"https://cublueprint.org/",children:"CU Blueprint "}),"as a backend developer, helping develop pro-bono apps for nonprofits.",Object(c.jsx)("br",{}),Object(c.jsx)("br",{}),Object(c.jsx)("hr",{}),Object(c.jsx)(y,{})]})]}),Object(c.jsxs)("div",{className:"col-md-6 align-self-center",children:[Object(c.jsx)(p.a,{className:"image",src:u,roundedCircle:!0}),Object(c.jsx)("p",{children:"Varadero, Cuba"})]})]})})})},k=(t(96),t.p+"static/media/blueprint.d35b3e3c.svg"),w=t.p+"static/media/carleton.0ed6b149.png",S=function(){return Object(c.jsx)("div",{id:"experience",className:"above-particles jumbotron jumbotron-fluid m-0",children:Object(c.jsxs)("div",{className:"container",children:[Object(c.jsx)("h1",{className:"experience-title display-3",children:"Work Experience"}),Object(c.jsxs)("div",{className:"pt-2 pb-5 row",children:[Object(c.jsx)("div",{className:"col-md-3 order-md-1 align-self-center",children:Object(c.jsx)("img",{className:"blueprint-logo",src:k,alt:"blueprint"})}),Object(c.jsxs)("div",{className:"job-description col-md-9 order-md-2",children:[Object(c.jsx)("h3",{className:"job-heading display-4 pt-3",children:"Carleton Blueprint"}),Object(c.jsx)("h4",{className:"text-muted job-subheading display-4",children:"Backend Developer"}),Object(c.jsx)("h4",{className:"text-muted job-subheading display-4",children:"January 2021 - Present"}),Object(c.jsx)("p",{})]})]}),Object(c.jsxs)("div",{className:"row",children:[Object(c.jsx)("div",{className:"col-md-3 order-md-1 align-self-center",children:Object(c.jsx)("img",{className:"carleton-logo",src:w,alt:"carleton"})}),Object(c.jsxs)("div",{className:"job-description col-md-9 order-md-2",children:[Object(c.jsx)("h3",{className:"job-heading display-4 pt-3",children:"Carleton University"}),Object(c.jsx)("h4",{className:"text-muted job-subheading display-4",children:"Teaching Assistant, School of Computer Science"}),Object(c.jsx)("h4",{className:"text-muted job-subheading display-4",children:"September - December 2020"}),Object(c.jsx)("p",{children:"Assisted students in a one-on-one setting during weekly office hours, answering questions related to Python and making sure the course material is understood."}),Object(c.jsx)("h4",{className:"text-muted job-subheading display-4",children:"Web Developer, Department of Biology"}),Object(c.jsx)("h4",{className:"text-muted job-subheading display-4",children:"May - September 2020"}),Object(c.jsxs)("p",{children:["Worked with lab coordinator"," ",Object(c.jsx)("a",{href:"https://carleton.ca/biology/people/shannon-newlands/",children:"Shannon Newlands"})," ","as part of the"," ",Object(c.jsx)("a",{href:"https://carleton.ca/discoverycentre/funding-opportunities/students-as-partners-program-sapp/",children:"Students as Partners Program (SaPP)."}),Object(c.jsx)("br",{}),"Refactored existing lab simulations and built new ones using Typescript and Angular, allowing students to safely complete course work from home."]})]})]})]})})},C=(t(97),function(){return Object(c.jsx)("div",{id:"projects",className:"above-particles jumbotron jumbotron-fluid m-0",children:Object(c.jsxs)("div",{className:"container",children:[Object(c.jsx)("h1",{className:"experience-title display-3",children:"Projects"}),Object(c.jsx)("div",{className:"pt-2 pb-5 row",children:Object(c.jsxs)("div",{className:"job-description col-md-9 order-md-2",children:[Object(c.jsx)("h3",{className:"job-heading display-4 pt-3",children:"Invoice Manager"}),Object(c.jsx)("h4",{className:"text-muted job-subheading display-4",children:"Web Application"}),Object(c.jsx)("h4",{className:"text-muted job-subheading display-4",children:"January 2021 - Present"}),Object(c.jsx)("strong",{style:{color:"purple"},children:"Flask, React, PostgreSQL, Docker"}),Object(c.jsx)("p",{children:"Building a dockerized platform to create and manage company invoices."}),Object(c.jsx)("a",{href:"https://github.com/hellomusa/Invoice-Generator",children:"View GitHub Repo"})]})}),Object(c.jsx)("div",{className:"pt-2 pb-5 row",children:Object(c.jsxs)("div",{className:"job-description col-md-9 order-md-2",children:[Object(c.jsx)("h3",{className:"job-heading display-4 pt-3",children:"Stock Broker"}),Object(c.jsx)("h4",{className:"text-muted job-subheading display-4",children:"Web Application"}),Object(c.jsx)("h4",{className:"text-muted job-subheading display-4",children:"September - December 2020"}),Object(c.jsx)("strong",{style:{color:"purple"},children:"Node.js, Express.js, MongoDB"}),Object(c.jsxs)("p",{children:["COMP 2406 Project (Fundamentals of Web Applications).",Object(c.jsx)("br",{}),"Allows users to trade stocks and manage watchlists."]})]})}),Object(c.jsx)("div",{className:"pt-2 pb-5 row",children:Object(c.jsxs)("div",{className:"job-description col-md-9 order-md-2",children:[Object(c.jsx)("h3",{className:"job-heading display-4 pt-3",children:"cuHacking 2020"}),Object(c.jsx)("h4",{className:"text-muted job-subheading display-4",children:"Web Application"}),Object(c.jsx)("h4",{className:"text-muted job-subheading display-4",children:"September - December 2020"}),Object(c.jsx)("strong",{style:{color:"purple"},children:"Flask, NLTK, MySQL"}),Object(c.jsxs)("p",{children:["RBC Analytics Challenge.",Object(c.jsx)("br",{}),"Created a Flask application to scan and analyze customer feedback.",Object(c.jsx)("br",{}),"Used Tweepy to access Twitter API."]}),Object(c.jsx)("a",{href:"https://github.com/hellomusa/feedback_analyzer",children:"View GitHub Repo"})]})})]})})}),A=(t(98),function(){var e=(new Date).getFullYear();return Object(c.jsx)("div",{id:"contact",className:"jumbotron jumbotron-fluid m-0",children:Object(c.jsxs)("div",{className:"container mb-4",children:[Object(c.jsx)("h1",{className:"display-3 contact-title",children:"Contact me"}),Object(c.jsxs)("div",{className:"social-networks",children:[Object(c.jsx)("a",{href:"https://www.linkedin.com/in/musa-ali-cu/",target:"_blank",rel:"noopener noreferrer",children:"linkedin"})," / ",Object(c.jsx)("a",{href:"https://github.com/hellomusa",target:"_blank",rel:"noopener noreferrer",children:"github"})," / ",Object(c.jsx)("a",{href:"mailto:musa6ali@gmail.com",children:"email"})]}),Object(c.jsxs)("p",{className:"copyright lead mt-2",children:["\xa9 Musa Ali ",e]})]})})});var D=function(){return Object(c.jsxs)("div",{className:"App",children:[Object(c.jsx)(m,{}),Object(c.jsx)(N,{}),Object(c.jsx)(S,{}),Object(c.jsx)(C,{}),Object(c.jsx)(A,{})]})};r.a.render(Object(c.jsx)(n.a.StrictMode,{children:Object(c.jsx)(D,{})}),document.getElementById("root"))}},[[99,1,2]]]);
//# sourceMappingURL=main.9418ac27.chunk.js.map