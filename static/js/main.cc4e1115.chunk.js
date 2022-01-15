(this["webpackJsonpgoit-react-hw-06-phonebook"]=this["webpackJsonpgoit-react-hw-06-phonebook"]||[]).push([[0],{21:function(n){n.exports=JSON.parse('[{"name":"Annie Copeland","id":"","number":""},{"name":"Rosie Simpson","id":"","number":""},{"name":"Cherish Bautista","id":"","number":""},{"name":"Ezequiel Hayden","id":"","number":""},{"name":"Ada Garcia","id":"","number":""},{"name":"Everett Smith","id":"","number":""},{"name":"Izayah Carey","id":"","number":""},{"name":"Giselle Alvarez","id":"","number":""},{"name":"Rayne Duffy","id":"","number":""},{"name":"Davin Archer","id":"","number":""},{"name":"Dorian Sosa","id":"","number":""},{"name":"Willow Olson","id":"","number":""}]')},30:function(n,e,t){},38:function(n,e,t){"use strict";t.r(e);var r,a=t(0),c=t.n(a),i=t(10),o=t.n(i),l=(t(30),t(2)),s=t(3),d=t(1);function u(n){var e=n.children,t=n.className;return Object(d.jsx)(m,{className:t,children:e})}var b,m=s.a.section(r||(r=Object(l.a)(["\n  padding: 0 20px;\n  margin: 0;\n"])));function p(n){var e=n.children,t=n.className;return Object(d.jsx)(f,{className:t,children:e})}var j,f=s.a.div(b||(b=Object(l.a)(["\n  padding: 0 10px;\n  margin: 0 auto;\n"])));function h(n){var e=n.title,t=n.className;return Object(d.jsx)(O,{className:t,children:e})}h.defaultProps={title:"Section title"};var x,O=s.a.h2(j||(j=Object(l.a)(["\n  color: var(--yellow);\n  font-size: 32px;\n  font-family: var(--big);\n  text-align: center;\n"]))),v=t(15),g=t(5),y=t(25),w=t(7),C=t(21),k=t(13),z={contacts:{items:function(n){return n.map((function(n){return n.id=Object(k.a)(),n.number=Math.floor(899*Math.random()+100)+"-"+Math.floor(89*Math.random()+10)+"-"+Math.floor(89*Math.random()+10),n}))}(C),filter:""}},S=Object(w.b)({name:"items",initialState:z.contacts.items,reducers:{addContact:{reducer:function(n,e){return[e.payload].concat(Object(y.a)(n))},prepare:function(n,e){return{payload:{id:Object(k.a)(),name:n,number:e}}}},deleteContact:function(n,e){var t=e.payload;return n.filter((function(n){return n.id!==t}))}}}),A=S.reducer,N=S.actions,M=N.addContact,D=N.deleteContact,E=function(n){return n.contacts.items},F=function(n){return n.contacts.filter},L=function(n){var e=E(n),t=F(n);return function(n){var e=t.toLowerCase();return n.filter((function(n){return n.name.toLowerCase().includes(e)}))}(e)};function J(n){var e=n.content,t=n.type,r=n.handleClick,a=n.disabled;return Object(d.jsx)(T,{type:t,onClick:r,disabled:a,children:e})}J.defaultPtops={type:"button",disabled:!0};var P,q,B,T=s.a.button(x||(x=Object(l.a)(["\n  border: 1px solid rgb(255, 252, 252);\n  border-radius: 10px;\n  box-shadow: 0.7px 0.7px 0.75px rgb(173, 172, 172);\n  background-color: rgb(245, 250, 245);\n  font-size: 14px;\n  font-weight: 600;\n  transition: all 250ms ease-in;\n  font-family: var(--font);\n  :hover {\n    cursor: pointer;\n    color: var(--white);\n  }\n"])));function Z(){var n=Object(g.c)(E),e=Object(g.b)(),t=Object(a.useState)(""),r=Object(v.a)(t,2),c=r[0],i=r[1],o=Object(a.useState)(""),l=Object(v.a)(o,2),s=l[0],b=l[1],m=function(n){var e=n.currentTarget,t=e.name,r=e.value;"name"===t&&i(r),"number"===t&&b(r)},j=function(){i(""),b("")};return Object(d.jsx)(u,{children:Object(d.jsxs)(p,{children:[Object(d.jsx)(h,{title:"Phonebook"}),Object(d.jsxs)(W,{autoComplete:"off",onSubmit:function(t){t.preventDefault();var r=function(n,e,t){return t.some((function(e){return e.name===n}))?(alert('"'.concat(n,'" is already in contacts!')),!1):!t.some((function(n){return n.number===e}))||(alert('"'.concat(e,'" is already in contacts!')),!1)}(c,s,n);r&&(!function(n,t){e(M(n,t))}(c,s),j())},children:[Object(d.jsxs)($,{children:["Name",Object(d.jsx)(K,{type:"text",name:"name",value:c,placeholder:"Enter fullname",onChange:m,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})]}),Object(d.jsxs)($,{children:["Number",Object(d.jsx)(K,{type:"tel",name:"number",value:s,placeholder:"Enter phone number",onChange:m,minLength:"7",maxLength:"17",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0})]}),Object(d.jsx)(J,{content:"Add contact",type:"submit",disabled:""===c||""===s})]})]})})}var G,I,R,H,W=s.a.form(P||(P=Object(l.a)(["\n  padding: 5px;\n  margin: 0 auto;\n  width: 250px;\n  font-family: var(--font);\n  button {\n    margin: 0;\n    width: 100%;\n    padding: 5px 20px;\n    :hover {\n      background-color: var(--green);\n      border: 1px solid var(--blue);\n    }\n    :disabled:hover {\n      cursor: not-allowed;\n      color: var(--red);\n      background-color: var(--white);\n      border: 1px solid var(--red);\n    }\n  }\n"]))),$=s.a.label(q||(q=Object(l.a)(["\n  margin: 0 0 2px 0;\n  font-family: var(--font);\n  font-size: 18px;\n  font-weight: 600;\n"]))),K=s.a.input(B||(B=Object(l.a)(["\n  padding: 5px 20px;\n  margin-bottom: 20px;\n  width: 100%;\n  border-radius: 10px;\n"]))),Q=Object(w.b)({name:"filter",initialState:z.contacts.filter,reducers:{addFilter:function(n,e){return e.payload}}}),U=Q.reducer,V=Q.actions.addFilter;function X(){var n=Object(g.b)(),e=Object(g.c)(F);return Object(d.jsxs)(_,{children:[Object(d.jsxs)(nn,{children:["Find contacts by ",Object(d.jsx)(en,{children:"name"})]}),Object(d.jsx)(tn,{type:"search",name:"search",value:e,onChange:function(e){return n(V(e.currentTarget.value))}})]})}var Y,_=s.a.label(G||(G=Object(l.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"]))),nn=s.a.p(I||(I=Object(l.a)(["\n  margin: 5px 0;\n  color: var(--white);\n  font-family: var(--font);\n  font-size: 18px;\n  line-height: 1.5;\n"]))),en=s.a.span(R||(R=Object(l.a)(["\n  color: var(--yellow);\n"]))),tn=s.a.input(H||(H=Object(l.a)(["\n  color: var(--blue);\n"])));function rn(){var n=Object(g.b)(),e=Object(g.c)(L);return Object(d.jsx)("ul",{children:e.map((function(e){return Object(d.jsxs)(an,{children:[e.name," : ",e.number,Object(d.jsx)(J,{content:"Delete",handleClick:function(){return n(D(e.id))}})]},e.id)}))})}var an=s.a.li(Y||(Y=Object(l.a)(["\n  position: relative;\n  display: flex;\n  justify-content: space-between;\n  list-style: circle;\n  align-items: baseline;\n  width: 350px;\n  padding: 5px;\n  font-family: var(--font);\n  font-size: 18px;\n  line-height: 1.5;\n  ::before {\n    content: '';\n    display: block;\n    height: 7px;\n    width: 7px;\n    background-color: var(--yellow);\n    border-radius: 50%;\n  }\n  button {\n    margin: 5px 0 5px 10px;\n    padding: 3px 10px 3px 10px;\n    :hover {\n      background-color: var(--blue);\n      border: 1px solid var(--dark);\n    }\n  }\n"])));function cn(){return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(Z,{}),Object(d.jsx)(u,{children:Object(d.jsxs)(p,{children:[Object(d.jsx)(h,{title:"Contacts"}),Object(d.jsx)(X,{}),Object(d.jsx)(rn,{})]})})]})}var on=t(22),ln=t(6),sn=t(4),dn=t(23),un=t.n(dn),bn=Object(sn.b)({items:A,filter:U}),mn=t(24),pn={key:"contacts",storage:un.a,blacklist:["filter"]},jn={serializableCheck:{ignoredActions:[ln.a,ln.f,ln.b,ln.c,ln.d,ln.e]}},fn=Object(mn.createLogger)({predicate:function(){return!1},colors:{title:function(n){return"orange"},prevState:function(n){return"cyan"},action:function(n){return"violet"},nextState:function(n){return"lawngreen"},error:function(n,e){return"red"}}}),hn=Object(sn.b)({contacts:Object(ln.g)(pn,bn)}),xn=Object(w.a)({reducer:hn,devTools:!1,middleware:function(n){return n(jn).concat(fn)}}),On=Object(ln.h)(xn);o.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(g.a,{store:xn,children:Object(d.jsx)(on.a,{loading:null,persistor:On,children:Object(d.jsx)(cn,{})})})}),document.getElementById("root"))}},[[38,1,2]]]);
//# sourceMappingURL=main.cc4e1115.chunk.js.map