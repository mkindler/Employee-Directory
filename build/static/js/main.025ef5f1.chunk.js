(this["webpackJsonpemp-directory"]=this["webpackJsonpemp-directory"]||[]).push([[0],{20:function(e,t,a){},21:function(e,t,a){},23:function(e,t,a){},24:function(e,t,a){},25:function(e,t,a){},44:function(e,t,a){},45:function(e,t,a){},46:function(e,t,a){},47:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),s=a(13),c=a.n(s),i=(a(20),a(3)),l=a(15),d=(a(21),r.a.createContext({})),o=a(0),j=function(){var e=Object(n.useContext)(d);function t(e){var t=e.split("-"),a=t[0];return[t[1],t[2].split("T")[0],a].join("-")}return Object(o.jsx)("tbody",{children:void 0!==e.developerState.filteredUsers[0]&&void 0!==e.developerState.filteredUsers[0].name?e.developerState.filteredUsers.map((function(e){var a=e.login,n=e.name,r=e.picture,s=e.phone,c=e.email,i=e.dob;return Object(o.jsxs)("tr",{children:[Object(o.jsx)("td",{"data-th":"Image",className:"align-middle",children:Object(o.jsx)("img",{src:r.medium,alt:"profile image for "+n.first+" "+n.last,className:"img-responsive"})}),Object(o.jsxs)("td",{"data-th":"Name",className:"name-cell align-middle",children:[n.first," ",n.last]}),Object(o.jsx)("td",{"data-th":"Phone",className:"align-middle",children:s}),Object(o.jsx)("td",{"data-th":"Email",className:"align-middle",children:Object(o.jsx)("a",{href:"mailto:"+c,target:"__blank",children:c})}),Object(o.jsx)("td",{"data-th":"DOB",className:"align-middle",children:t(i.date)})]},a.uuid)})):Object(o.jsx)(o.Fragment,{})})},b=(a(23),function(){var e=Object(n.useContext)(d);return Object(o.jsx)("div",{className:"data-table mt-5",children:Object(o.jsxs)("table",{id:"table",className:"table table-striped table-hover table-condensed",children:[Object(o.jsx)("thead",{children:Object(o.jsx)("tr",{children:e.developerState.headings.map((function(t){var a=t.name,n=t.width;return Object(o.jsxs)("th",{className:"col",style:{width:n},onClick:function(){e.handleSort(a)},children:[a,Object(o.jsx)("span",{className:"pointer"})]},a)}))})}),Object(o.jsx)(j,{})]})})}),h=(a(24),function(){var e=Object(n.useContext)(d);return Object(o.jsx)("div",{className:"search-box",children:Object(o.jsxs)("form",{className:"form-inline",children:[Object(o.jsx)("input",{className:"form-control mr-sm-2",type:"search",placeholder:"Search by Name","aria-label":"Search",onChange:function(t){return e.handleSearchChange(t)}}),Object(o.jsx)("button",{className:"btn my-2 my-sm-0",type:"submit",children:"Search"})]})})});a(25);var u=function(){return Object(o.jsxs)("nav",{className:"navbar navbar-expand-lg navbar-light bg-light",children:[Object(o.jsx)("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":".navbar-collapse","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(o.jsx)("span",{className:"navbar-toggler-icon"})}),Object(o.jsx)("div",{className:"collapse navbar-collapse row",id:"navbarNav",children:Object(o.jsx)("div",{className:"search-area col-4",children:Object(o.jsx)(h,{})})})]})},m=a(14),f=a.n(m),O=function(){return f.a.get("https://randomuser.me/api/?results=25&nat=us")},p=(a(44),function(){var e=Object(n.useState)({users:[],order:"ascend",filteredUsers:[],headings:[{name:"headshot",width:"10%",order:"ascend"},{name:"name",width:"10%",order:"ascend"},{name:"phone",width:"20%",order:"ascend"},{name:"email",width:"20%",order:"ascend"},{name:"dob",width:"10%",order:"ascend"}]}),t=Object(l.a)(e,2),a=t[0],r=t[1];return Object(n.useEffect)((function(){O().then((function(e){console.log(e.data.results),r(Object(i.a)(Object(i.a)({},a),{},{users:e.data.results,filteredUsers:e.data.results}))}))}),[]),Object(o.jsxs)(d.Provider,{value:{developerState:a,handleSearchChange:function(e){var t=e.target.value,n=a.users.filter((function(e){if(-1!==(e.name.first.toLowerCase()+" "+e.name.last.toLowerCase()).indexOf(t.toLowerCase()))return e}));r(Object(i.a)(Object(i.a)({},a),{},{filteredUsers:n}))},handleSort:function(e){var t=a.headings.filter((function(t){return t.name===e})).map((function(e){return e.order})).toString();t="ascend"===t?"descend":"ascend";var n=a.filteredUsers.sort((function(a,n){return"descend"===t?void 0===a[e]?1:void 0===n[e]?-1:"name"===e?a[e].first.localeCompare(n[e].first):"dob"===e?a[e].age-n[e].age:a[e].localeCompare(n[e]):void 0===a[e]?1:void 0===n[e]?-1:"name"===e?n[e].first.localeCompare(a[e].first):"dob"===e?n[e].age-a[e].age:n[e].localeCompare(a[e])})),s=a.headings.map((function(a){return a.order=a.name===e?t:a.order,a}));r(Object(i.a)(Object(i.a)({},a),{},{filteredUsers:n,headings:s}))}},children:[Object(o.jsx)(u,{}),Object(o.jsx)("div",{className:"data-area",children:a.filteredUsers.length>0?Object(o.jsx)(b,{}):Object(o.jsx)("div",{})})]})});var v=function(){return Object(o.jsx)(o.Fragment,{children:Object(o.jsx)(p,{})})};var x=function(e){var t=e.children;return Object(o.jsx)("div",{className:"wrapper",children:t})};a(45);var g=function(){return Object(o.jsxs)("div",{className:"header",children:[Object(o.jsx)("h1",{class:"app-name",children:"Employee Directory"}),Object(o.jsxs)("p",{class:"app-description",children:["Hover your mouse next to the field that you are interested in sorting,",Object(o.jsx)("br",{}),"and click on the arrow to sort by name, email, phone number, or DOB."]}),Object(o.jsx)("p",{class:"app-description",children:"You can also use the search function to filter the directory by name."})]})};a(46);var N=function(){return Object(o.jsx)("div",{className:"App",children:Object(o.jsxs)(x,{children:[Object(o.jsx)(g,{}),Object(o.jsx)(v,{})]})})},y=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,48)).then((function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,s=t.getLCP,c=t.getTTFB;a(e),n(e),r(e),s(e),c(e)}))};c.a.render(Object(o.jsx)(r.a.StrictMode,{children:Object(o.jsx)(N,{})}),document.getElementById("root")),y()}},[[47,1,2]]]);
//# sourceMappingURL=main.025ef5f1.chunk.js.map