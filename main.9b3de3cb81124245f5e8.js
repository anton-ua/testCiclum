(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"1DEj":function(e,n,t){},"2FpI":function(e){e.exports=JSON.parse('[{"id":0,"time":10},{"id":1,"time":11},{"id":2,"time":12},{"id":3,"time":13},{"id":4,"time":14},{"id":5,"time":15},{"id":6,"time":16},{"id":7,"time":17},{"id":8,"time":18}]')},A631:function(e){e.exports=JSON.parse('[{"id":0,"name":"All members"},{"id":1,"name":"Alex"},{"id":2,"name":"Bob"},{"id":3,"name":"Maria"},{"id":4,"name":"Tom"}]')},FPK2:function(e,n,t){},FahF:function(e,n,t){},QfWi:function(e,n,t){"use strict";t.r(n);t("1DEj"),t("lAJ5"),t("JBxO"),t("Muwe"),t("9UJh"),t("w13K"),t("y89P"),t("X5mX");var a=function(){function e(e){var n,t,a,l=e.root,r=e.routes;a=function(e){return e.toString().replace(/\/$/,"").replace(/^\//,"")},(t="removeCornerSlashes")in(n=this)?Object.defineProperty(n,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):n[t]=a,this.root=l||"/",this.routes=r||[],this.listen()}var n=e.prototype;return n.getFragment=function(){var e=this.removeCornerSlashes(decodeURI(window.location.pathname+window.location.search));return e=e.replace(/\?(.*)$/,""),e="/"!==this.root?e.replace(this.root,""):e,this.removeCornerSlashes(e)},n.navigate=function(e){void 0===e&&(e=""),window.history.pushState(null,null,this.root+this.removeCornerSlashes(e))},n.listen=function(){clearInterval(this.interval),this.interval=setInterval(this.interval.bind(this),50)},n.interval=function(){var e=this;this.current!==this.getFragment()&&(this.current=this.getFragment(),this.routes.some((function(n){var t=e.current.match(n.path);return!!t&&(t.shift(),n.callback.apply({},t),t)})))},e}(),l=(t("lYjL"),t("IlJM"),t("RtS0"),t("IvQZ"),t("8cZI"),t("lmye"),t("4NM0"),t("3dw1"),function(e){return JSON.parse(window.localStorage.getItem(e))}),r=function(e,n){return window.localStorage.setItem(e,JSON.stringify(n))},o={root:document.querySelector("#root"),head:document.querySelector(".head"),main:document.querySelector(".main"),modal:document.querySelector(".modal-body"),confirmDeleteBtn:document.querySelector(".confirmDeleteBtn")},i=t("2FpI"),c=t("A631"),s=t("j1fU"),u=t.n(s),d=t("zf1d"),m=t.n(d),p=(t("FPK2"),"All"),f=function(){return l("events")||[]},v=u()(c),h=function(e){r("events",f().filter((function(n){var t=n.id;return e.target.id!==t}))),o.main.innerHTML=w(),document.querySelectorAll(".table-calendar__deleteBtn").forEach((function(e){return e.addEventListener("click",b)}))},b=function(e){o.confirmDeleteBtn.id=e.target.id;var n='Are you shure you want to delete "'+f().find((function(n){return n.id===e.target.id})).nameOfEvent+'" event?';o.modal.innerHTML=n,o.confirmDeleteBtn.addEventListener("click",h)},y=function(){return function(e,n,t){var a="All"!==t?n.filter((function(e){return e.participants.includes(t)})):n;return e.map((function(e){for(var n=e.time,t=a.filter((function(e){return+e.time===n})),l="",r=function(e){var n=t&&t.filter((function(n){return+n.day===e}));n.length>0?l+='<td class="table-calendar__data table-calendar__event">\n          <span class="event">'+n[0].nameOfEvent+"\n          </span>\n          <button id="+n[0].id+' data-bs-toggle="modal"\n          data-bs-target="#modal" class="table-calendar__deleteBtn">x\n          </button>\n          ':l+='<td class="table-calendar__data">',l+="</td>"},o=0;o<5;o++)r(o);return'\n        <tr class="table-calendar__raw">\n          <td class="table-calendar__data">'+n+":00</td>\n          "+l+"\n        </tr>"})).join("")}(i,f(),p)},w=function(){return m()({table:y})},g=function(){o.head.innerHTML=v,o.main.innerHTML=w(),document.querySelector(".createEvent").addEventListener("click",(function(e){e.preventDefault(),window.router.navigate("/create-event")})),document.querySelector(".participants").addEventListener("change",(function(e){var n;n=e.target.value,p=n,o.main.innerHTML=w()})),document.querySelectorAll(".table-calendar__deleteBtn").forEach((function(e){return e.addEventListener("click",b)}))},S=(t("WB5j"),t("hi3g"),t("wCa+"),t("rEml")),_=t.n(S);function E(e,n){var t;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(t=function(e,n){if(!e)return;if("string"==typeof e)return O(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return O(e,n)}(e))||n&&e&&"number"==typeof e.length){t&&(e=t);var a=0;return function(){return a>=e.length?{done:!0}:{done:!1,value:e[a++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}return(t=e[Symbol.iterator]()).next.bind(t)}function O(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,a=new Array(n);t<n;t++)a[t]=e[t];return a}var j=t("L7iC"),k=function(){return l("events")||""},x=function(e){e.preventDefault();var n=document.querySelector(".createEventForm"),t=function(e){for(var n,t={},a=E(e);!(n=a()).done;){var l,r=n.value;if("participants"===r[0])t=t.participants?Object.assign({},t,{participants:[].concat(t.participants,[r[1]])}):Object.assign({},t,{participants:[r[1]]});else t=Object.assign({},t,((l={})[r[0]]=r[1],l));t=Object.assign({},t,{id:j.generate()})}return t}(new FormData(n));!function(e,n){for(var t,a=E(e);!(t=a()).done;){var l=t.value;if(+l.time==+n.time&&+l.day==+n.day)return!1}return!0}(k(),t)?document.getElementById("alert").innerHTML=_()():function(e,n){r("events",e?[].concat(e,[n]):[n]),document.location.href="/"}(k(),t)},F=t("XsBP"),P=t.n(F),M=(t("FahF"),c.slice(1)),C=P()({schedule:i,participants:M}),A=function(){o.root.innerHTML=C,document.querySelector(".createEventForm").addEventListener("submit",x)};window.router=new a({root:"/",routes:[{path:/create-event/,callback:function(){A()}},{path:"",callback:function(){g()}}]})},XsBP:function(e,n,t){var a=t("mp5j");e.exports=(a.default||a).template({1:function(e,n,t,a,l){var r,o=null!=n?n:e.nullContext||{},i=e.hooks.helperMissing,c=e.escapeExpression,s=e.lookupProperty||function(e,n){if(Object.prototype.hasOwnProperty.call(e,n))return e[n]};return"            <option value="+c("function"==typeof(r=null!=(r=s(t,"name")||(null!=n?s(n,"name"):n))?r:i)?r.call(o,{name:"name",hash:{},data:l,loc:{start:{line:19,column:26},end:{line:19,column:34}}}):r)+">"+c("function"==typeof(r=null!=(r=s(t,"name")||(null!=n?s(n,"name"):n))?r:i)?r.call(o,{name:"name",hash:{},data:l,loc:{start:{line:19,column:35},end:{line:19,column:43}}}):r)+"</option>\n"},3:function(e,n,t,a,l){var r,o=null!=n?n:e.nullContext||{},i=e.hooks.helperMissing,c=e.escapeExpression,s=e.lookupProperty||function(e,n){if(Object.prototype.hasOwnProperty.call(e,n))return e[n]};return"            <option value="+c("function"==typeof(r=null!=(r=s(t,"time")||(null!=n?s(n,"time"):n))?r:i)?r.call(o,{name:"time",hash:{},data:l,loc:{start:{line:45,column:26},end:{line:45,column:34}}}):r)+">"+c("function"==typeof(r=null!=(r=s(t,"time")||(null!=n?s(n,"time"):n))?r:i)?r.call(o,{name:"time",hash:{},data:l,loc:{start:{line:45,column:35},end:{line:45,column:43}}}):r)+":00</option>\n"},compiler:[8,">= 4.3.0"],main:function(e,n,t,a,l){var r,o=null!=n?n:e.nullContext||{},i=e.lookupProperty||function(e,n){if(Object.prototype.hasOwnProperty.call(e,n))return e[n]};return'<main>\n  <div class="wrap">\n    <form class="createEventForm" id="createEventForm">\n      <div class="row align-items-center">\n        <div class="col-3">\n          <label for="nameOfEvent" class="col-form-label">Name of event:</label>\n        </div>\n        <div class="col-5">\n          <input type="text" id="nameOfEvent" name="nameOfEvent" class="form-control" required />\n        </div>\n      </div>\n      <div class="row align-items-center">\n        <div class="col-3">\n          <label for="participants" class="col-form-label">Participants:</label>\n        </div>\n        <div class="col-5">\n          <select class="form-select" size="3" multiple id="participants" name="participants" required>\n'+(null!=(r=i(t,"each").call(o,null!=n?i(n,"participants"):n,{name:"each",hash:{},fn:e.program(1,l,0),inverse:e.noop,data:l,loc:{start:{line:18,column:12},end:{line:20,column:21}}}))?r:"")+'          </select>\n        </div>\n      </div>\n      <div class="row align-items-center">\n        <div class="col-3">\n          <label for="day" class="col-form-label">Day:</label>\n        </div>\n        <div class="col-5">\n          <select class="form-select" id="day" name="day">\n            <option value="0">Monday</option>\n            <option value="1">Tuesday</option>\n            <option value="2">Wednesday</option>\n            <option value="3">Thursday</option>\n            <option value="4">Friday</option>\n          </select>\n        </div>\n      </div>\n      <div class="row align-items-center">\n        <div class="col-3">\n          <label for="time" class="col-form-label">Time:</label>\n        </div>\n        <div class="col-5">\n          <select class="form-select" id="time" name="time">\n'+(null!=(r=i(t,"each").call(o,null!=n?i(n,"schedule"):n,{name:"each",hash:{},fn:e.program(3,l,0),inverse:e.noop,data:l,loc:{start:{line:44,column:12},end:{line:46,column:21}}}))?r:"")+'          </select>\n        </div>\n      </div>\n      <div id="alert"></div>\n      <div class="row align-items-center">\n        <div class="col-2">\n          <a type="button" class="btn btn-danger" href="/">Cancel</a>\n        </div>\n        <div class="col-2">\n          <button type="submit" class="btn btn-primary createEventButton">Create</button>\n        </div>\n      </div>\n    </form>\n  </div>\n</main>'},useData:!0})},j1fU:function(e,n,t){var a=t("mp5j");e.exports=(a.default||a).template({1:function(e,n,t,a,l){var r,o=null!=n?n:e.nullContext||{},i=e.hooks.helperMissing,c=e.escapeExpression,s=e.lookupProperty||function(e,n){if(Object.prototype.hasOwnProperty.call(e,n))return e[n]};return"            <option value="+c("function"==typeof(r=null!=(r=s(t,"name")||(null!=n?s(n,"name"):n))?r:i)?r.call(o,{name:"name",hash:{},data:l,loc:{start:{line:11,column:26},end:{line:11,column:34}}}):r)+">"+c("function"==typeof(r=null!=(r=s(t,"name")||(null!=n?s(n,"name"):n))?r:i)?r.call(o,{name:"name",hash:{},data:l,loc:{start:{line:11,column:35},end:{line:11,column:43}}}):r)+"</option>\n"},compiler:[8,">= 4.3.0"],main:function(e,n,t,a,l){var r;return'<div class="wrap">\n  <div class="row justify-content-between">\n    <div class="col">\n      <h1>Calendar</h1>\n    </div>\n    <div class="col">\n      <div class="row justify-content-between">\n        <div class="col">\n          <select class="form-select participants">\n'+(null!=(r=(e.lookupProperty||function(e,n){if(Object.prototype.hasOwnProperty.call(e,n))return e[n]})(t,"each").call(null!=n?n:e.nullContext||{},n,{name:"each",hash:{},fn:e.program(1,l,0),inverse:e.noop,data:l,loc:{start:{line:10,column:12},end:{line:12,column:21}}}))?r:"")+'          </select>\n        </div>\n        <div class="col">\n          <button class="btn btn-primary createEvent">New event +</button>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>'},useData:!0})},rEml:function(e,n,t){var a=t("mp5j");e.exports=(a.default||a).template({compiler:[8,">= 4.3.0"],main:function(e,n,t,a,l){return'<div class="alert alert-danger alert-dismissible fade show" role="alert">\n  Failed to create an event. Time slot is already booked\n  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>\n</div>'},useData:!0})},zf1d:function(e,n,t){var a=t("mp5j");e.exports=(a.default||a).template({compiler:[8,">= 4.3.0"],main:function(e,n,t,a,l){var r,o,i=e.lookupProperty||function(e,n){if(Object.prototype.hasOwnProperty.call(e,n))return e[n]};return'<div class="wrap">\n  <table class="table table-bordered table-calendar">\n    <tr class="table-calendar__raw">\n      <th class="table-calendar__head">Name</th>\n      <th class="table-calendar__head">Mon</th>\n      <th class="table-calendar__head">Tue</th>\n      <th class="table-calendar__head">Wed</th>\n      <th class="table-calendar__head">Thu</th>\n      <th class="table-calendar__head">Fri</th>\n    </tr>\n    '+(null!=(r="function"==typeof(o=null!=(o=i(t,"table")||(null!=n?i(n,"table"):n))?o:e.hooks.helperMissing)?o.call(null!=n?n:e.nullContext||{},{name:"table",hash:{},data:l,loc:{start:{line:11,column:4},end:{line:11,column:15}}}):o)?r:"")+"\n  </table>\n</div>"},useData:!0})}},[["QfWi",1,2]]]);
//# sourceMappingURL=main.9b3de3cb81124245f5e8.js.map