(this["webpackJsonprate-board"]=this["webpackJsonprate-board"]||[]).push([[0],{232:function(e,t,n){},283:function(e,t){},285:function(e,t){},415:function(e,t,n){"use strict";n.r(t);var a,r,c,i,o,l,s,u,j,d,b,h,O,m,f,x,g,p,y,v,C,k,w,S=n(0),I=n.n(S),R=n(13),F=n.n(R),M=(n(232),n(59)),W=n(17),E=n(11),A=n(453),L=n(458),P=n(452),T=n(459),B=n(460),N=n(461),z=n(462),D=n(463),H=n(464),K=n(203),_=n.n(K),U=n(12),G=n(39),J=n.n(G),V=n(66),Y=n(67),q=n.n(Y),Q=n(2),X=U.a.h3(a||(a=Object(E.a)(["\n  margin: 0;\n"]))),Z=U.a.h3(r||(r=Object(E.a)(["\n  margin: 0;\n"]))),$=U.a.h5(c||(c=Object(E.a)(["\n  margin: 0.5rem 0;\n"]))),ee=function(e,t,n){navigator.geolocation.getCurrentPosition(function(){var a=Object(V.a)(J.a.mark((function a(r){var c,i,o,l,s,u,j,d;return J.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return c=r.coords.latitude,i=r.coords.longitude,a.next=4,q.a.get("".concat("https://api.openweathermap.org/data/2.5/weather","?units=").concat(e,"&lat=").concat(c,"&lon=").concat(i,"&appid=").concat(t));case 4:o=a.sent,l="",o.data.weather&&o.data.weather[0]&&(s=o.data.weather[0].icon,l="https://openweathermap.org/img/wn/".concat(s,"@2x.png")),u=o.data,j=u.main,d=u.name,n({iconSrc:l,name:d,temp:Math.round(j.temp),tempMin:Math.round(j.temp_min),tempMax:Math.round(j.temp_max)});case 9:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}())},te=function(e){var t=e.apiKey,n=e.units,a=e.interval,r=Object(S.useState)({}),c=Object(W.a)(r,2),i=c[0],o=c[1],l={metric:"\xb0C",imperial:"\xb0F",standard:"K"}[n];return Object(S.useEffect)((function(){ee(n,t,o);var e=setInterval((function(){ee(n,t,o)}),1e3*(a||900));return function(){return clearInterval(e)}}),[t,n,a]),Object(Q.jsxs)(P.a,{container:!0,direction:"column",justify:"center",alignItems:"center",children:[i.iconSrc&&Object(Q.jsx)(P.a,{item:!0,children:Object(Q.jsx)("img",{src:i.iconSrc,alt:"Weather Icon"})}),Object(Q.jsx)(P.a,{item:!0,children:Object(Q.jsx)(X,{children:i.name})}),Object(Q.jsx)(P.a,{item:!0,children:Object(Q.jsxs)(Z,{children:[i.temp,l]})}),Object(Q.jsx)(P.a,{item:!0,children:Object(Q.jsxs)($,{children:[i.tempMin,l," - ",i.tempMax,l]})})]})},ne=n(473),ae=n(154),re=n(202),ce=n(457),ie=Object(U.a)(ne.a)(i||(i=Object(E.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"]))),oe=Object(U.a)(ae.a)(o||(o=Object(E.a)(["\n  :focus-visible {\n    outline: none;\n  }\n"]))),le=Object(U.a)(A.a)(l||(l=Object(E.a)(["\n  padding: 1rem;\n"]))),se=function(e){var t=e.open,n=e.onSubmit,a=Object(S.useState)(""),r=Object(W.a)(a,2),c=r[0],i=r[1];return Object(Q.jsx)(ie,{open:t,closeAfterTransition:!0,children:Object(Q.jsx)(oe,{in:t,children:Object(Q.jsx)(le,{elevation:3,children:Object(Q.jsx)("form",{onSubmit:function(e){e.preventDefault(),n(c)},children:Object(Q.jsxs)(P.a,{container:!0,direction:"column",justify:"center",alignItems:"center",spacing:2,children:[Object(Q.jsx)(P.a,{item:!0,children:Object(Q.jsx)(re.a,{variant:"outlined",label:"Token",value:c,onChange:function(e){return i(e.target.value)}})}),Object(Q.jsx)(P.a,{item:!0,children:Object(Q.jsx)(ce.a,{type:"submit",children:"Submit"})})]})})})})})},ue=function(e){var t=Object(S.useState)({}),n=Object(W.a)(t,2),a=n[0],r=n[1],c=function(){var t=Object(V.a)(J.a.mark((function t(){var n,a;return J.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log(Object({NODE_ENV:"production",PUBLIC_URL:".",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0})),n="https://www.clearviewsys.com/rates/".concat(e,"/config.json"),t.next=5,q.a.get(n,{headers:{"Cache-Control":"no-cache"}});case 5:a=t.sent,r(a.data);case 7:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(S.useEffect)((function(){c()}),[e]),a},je=n(211),de=function(){var e=Object(V.a)(J.a.mark((function e(t){var n,a;return J.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,q.a.get("rateswithcss.xml",{headers:{"Cache-Control":"no-cache"}});case 2:return n=e.sent,e.next=5,Object(je.parseStringPromise)(n.data);case 5:a=e.sent,t({timestamp:(r=a.CATALOG).TIMESTAMP[0],rates:r.RATE.map((function(e){return{isFlagged:"**"===e.ISFLAGGED[0],flagURL:e.FLAGURL[0],flag:e.FLAGURL[0],iso:e.ISO[0],name:e.NAME[0],country:e.COUNTRY[0],id:e.ID?e.ID[0]:"",weBuy:e.WEBUY[0],weSell:e.WESELL[0],invBuy:e.INVBUY[0],invSell:e.INVSELL[0]}}))});case 7:case"end":return e.stop()}var r}),e)})));return function(t){return e.apply(this,arguments)}}(),be=function(){var e=Object(S.useState)({}),t=Object(W.a)(e,2),n=t[0],a=t[1];return Object(S.useEffect)((function(){de(a);var e=setInterval((function(){return de(a)}),5e3);return function(){return clearInterval(e)}}),[]),n},he=function(){var e=Object(S.useState)(null),t=Object(W.a)(e,2),n=t[0],a=t[1];Object(S.useEffect)((function(){a(localStorage.getItem("token"))}),[]);return[n,function(e){localStorage.setItem("token",e),a(e)}]},Oe=U.a.div(s||(s=Object(E.a)(["\n  background-color: ",";\n  min-height: 100vh;\n  padding: 1rem;\n"])),(function(e){return e.colour})),me=U.a.img(u||(u=Object(E.a)(["\n  display: block;\n  margin: auto;\n  max-height: 10rem;\n"]))),fe=U.a.img(j||(j=Object(E.a)(["\n  display: block;\n  margin: 0.5rem auto;\n  height: 30rem;\n"]))),xe=U.a.img(d||(d=Object(E.a)(["\n  box-shadow: 0px 0px 3px 1px #a2a2a2;\n  width: ",";\n"])),(function(e){switch(e.size){case"small":return"2.5rem";case"medium":return"5rem";case"large":return"7.5rem";default:return"5rem"}})),ge=U.a.div(b||(b=Object(E.a)(["\n  font-size: ",";\n"])),(function(e){switch(e.size){case"small":return"large";case"medium":return"x-large";case"large":return"xx-large";default:return"x-large"}})),pe=Object(U.a)(A.a)(h||(h=Object(E.a)(["\n  overflow: auto;\n  height: 100%;\n\n  th {\n    font-weight: bold;\n  }\n"]))),ye=Object(U.a)(L.a)(O||(O=Object(E.a)(["\n  color: "," !important;\n  background-color: ",";\n  border-bottom-color: "," !important;\n"])),(function(e){return e.fontColour}),(function(e){return e.colour}),(function(e){return e.borderColour})),ve=function(e,t){switch(e.key){case"flag":return Object(Q.jsx)(xe,{size:e.size,src:t[e.key],alt:t[e.key]});default:return Object(Q.jsx)(ge,{size:e.size,children:t[e.key]})}},Ce=function(e){var t=e.items,n=e.interval;return Object(Q.jsx)(_.a,{stopAutoPlayOnHover:!1,swipe:!1,indicators:!1,navButtonsAlwaysInvisible:!0,interval:1e3*Number(n),children:t.map((function(e){return Object(Q.jsx)(fe,{src:e.src})}))})},ke=function(e){var t,n=e.config,a=he(),r=Object(W.a)(a,2),c=r[0],i=r[1],o=ue(c),l=be(),s=Object(S.useState)([]),u=Object(W.a)(s,2),j=u[0],d=u[1];n=n||o,Object(S.useEffect)((function(){n.isAllRates?d(l.rates||[]):d((l.rates||[]).filter((function(e){return e.isFlagged})))}),[null===(t=l.rates)||void 0===t?void 0:t.length]),Object(S.useEffect)((function(){setTimeout((function(){var e=Object(M.a)(j);if(e.length>0){var t=e.shift();d([].concat(Object(M.a)(e),[t]))}}),1e3*Number(n.rowsInterval))}),[j,n.rowsInterval]);var b=j.slice(0,Number(n.maxRows)),h=n.tableHead||[],O=n.colour||{},m=n.carousel||{},f=n.weather||{},x=Object(Q.jsx)(ge,{children:l.timestamp})||"";return Object(Q.jsxs)(Q.Fragment,{children:[Object(Q.jsx)(se,{open:!c,onSubmit:function(e){return i(e)}}),c&&Object(Q.jsxs)(Oe,{colour:O.background,children:[Object(Q.jsx)(me,{src:n.logo,alt:"logo"}),"top"===m.position&&Object(Q.jsx)(Ce,{items:m.images,interval:Number(m.interval)}),Object(Q.jsxs)(P.a,{container:!0,spacing:2,children:["left"===f.position&&Object(Q.jsx)(P.a,{item:!0,xs:2,children:Object(Q.jsx)(pe,{style:{backgroundColor:O.weatherBackground,color:O.weatherFont},children:Object(Q.jsx)(te,{apiKey:f.apiKey,units:f.units,interval:f.interval})})}),Object(Q.jsx)(P.a,{item:!0,xs:"none"===f.position?12:10,children:Object(Q.jsx)(pe,{elevation:3,children:Object(Q.jsx)(T.a,{children:Object(Q.jsxs)(B.a,{children:[Object(Q.jsxs)(N.a,{children:[n.datePosition&&n.datePosition.includes("top")&&Object(Q.jsx)(z.a,{children:Object(Q.jsx)(ye,{align:n.datePosition.split("-")[1],colSpan:h.length,colour:O.header,borderColour:O.divider,fontColour:"rgba(0, 0, 0, 0.54)",children:x})}),Object(Q.jsx)(z.a,{children:h.map((function(e,t){return Object(Q.jsx)(ye,{align:e.align,colour:O.header,borderColour:O.divider,fontColour:O.font,style:{width:e.width},children:Object(Q.jsx)(ge,{children:e.title})},e.key)}))})]}),Object(Q.jsx)(D.a,{children:b.map((function(e,t){return Object(Q.jsx)(z.a,{children:h.map((function(n){return Object(Q.jsx)(ye,{align:n.align,colour:t%2?O.odd:O.even,borderColour:O.divider,fontColour:O.font,children:ve(n,e)},"".concat(e.iso,"-").concat(n.key))}))},e.iso)}))}),n.datePosition&&n.datePosition.includes("bottom")&&Object(Q.jsx)(H.a,{children:Object(Q.jsx)(z.a,{children:Object(Q.jsx)(ye,{align:n.datePosition.split("-")[1],colSpan:h.length,colour:O.footer,borderColour:O.footer,fontColour:O.font,children:x})})})]})})})}),"right"===f.position&&Object(Q.jsx)(P.a,{item:!0,xs:2,children:Object(Q.jsx)(pe,{style:{backgroundColor:O.weatherBackground,color:O.weatherFont},children:Object(Q.jsx)(te,{apiKey:f.apiKey,units:f.units,interval:f.interval})})})]}),"bottom"===m.position&&Object(Q.jsx)(Ce,{items:m.images,interval:m.interval})]})]})},we=n(212),Se=n.n(we),Ie=n(472),Re=n(468),Fe=n(456),Me=n(476),We=n(471),Ee=n(477),Ae=n(469),Le=n(470),Pe=n(465),Te=n(466),Be=n(467),Ne=n(213),ze=n.n(Ne),De=U.a.div(m||(m=Object(E.a)(["\n  width: 2rem;\n  display: flex;\n  justify-content: center;\n\n  svg {\n    ","\n    :hover {\n      cursor: pointer;\n    }\n  }\n"])),(function(e){return e.display?"":"display: none;"})),He=function(e){var t=e.onColumnShift,n=e.onColumnRemove,a=e.onColumnChange,r=e.isFirst,c=e.isLast,i=e.column;return Object(Q.jsxs)(P.a,{container:!0,spacing:1,direction:"column",justify:"",alignItems:"stretch",children:[Object(Q.jsx)(P.a,{item:!0,children:Object(Q.jsxs)(P.a,{container:!0,direction:"row",justify:"space-between",children:[Object(Q.jsx)(P.a,{item:!0,children:Object(Q.jsx)(De,{display:!r,children:Object(Q.jsx)(Pe.a,{onClick:function(){return t(-1)}})})}),Object(Q.jsx)(P.a,{item:!0,children:Object(Q.jsx)(De,{display:!0,children:Object(Q.jsx)(Te.a,{onClick:n})})}),Object(Q.jsx)(P.a,{item:!0,children:Object(Q.jsx)(De,{display:!c,children:Object(Q.jsx)(Be.a,{onClick:function(){return t(1)}})})})]})}),Object(Q.jsx)(P.a,{item:!0,children:Object(Q.jsxs)(Fe.a,{fullWidth:!0,children:[Object(Q.jsx)(Me.a,{id:"field-select-label",children:"Field"}),Object(Q.jsxs)(We.a,{labelId:"field-select-label",id:"field-select",value:i.key,onChange:function(e){return a(e,"key")},children:[Object(Q.jsx)(Ee.a,{value:"flag",children:"Flag"}),Object(Q.jsx)(Ee.a,{value:"iso",children:"ISO"}),Object(Q.jsx)(Ee.a,{value:"name",children:"Name"}),Object(Q.jsx)(Ee.a,{value:"country",children:"Country"}),Object(Q.jsx)(Ee.a,{value:"weBuy",children:"We Buy"}),Object(Q.jsx)(Ee.a,{value:"weSell",children:"We Sell"}),Object(Q.jsx)(Ee.a,{value:"invBuy",children:"Inv Buy"}),Object(Q.jsx)(Ee.a,{value:"invSell",children:"Inv Sell"})]})]})}),Object(Q.jsx)(P.a,{item:!0,children:Object(Q.jsx)(re.a,{label:"Field Name",value:i.title,onChange:function(e){return a(e,"title")}})}),Object(Q.jsx)(P.a,{item:!0,children:Object(Q.jsxs)(Fe.a,{fullWidth:!0,children:[Object(Q.jsx)(Me.a,{id:"align-select-label",children:"Align"}),Object(Q.jsxs)(We.a,{labelId:"align-select-label",id:"align-select",value:i.align||"left",onChange:function(e){return a(e,"align")},children:[Object(Q.jsx)(Ee.a,{value:"center",children:"Center"}),Object(Q.jsx)(Ee.a,{value:"left",children:"Left"}),Object(Q.jsx)(Ee.a,{value:"right",children:"Right"})]})]})}),Object(Q.jsx)(P.a,{item:!0,children:Object(Q.jsxs)(Fe.a,{fullWidth:!0,children:[Object(Q.jsx)(Me.a,{id:"size-select-label",children:"Size"}),Object(Q.jsxs)(We.a,{labelId:"size-select-label",id:"size-select",value:i.size||"medium",onChange:function(e){return a(e,"size")},children:[Object(Q.jsx)(Ee.a,{value:"small",children:"Small"}),Object(Q.jsx)(Ee.a,{value:"medium",children:"Medium"}),Object(Q.jsx)(Ee.a,{value:"large",children:"Large"})]})]})}),Object(Q.jsx)(P.a,{item:!0,children:Object(Q.jsx)(re.a,{label:"Width",value:i.width||"",onChange:function(e){return a(e,"width")}})})]})},Ke=n(77),_e=n(60),Ue=function(e,t){var n=t.event,a=t.index,r=t.key,c=Object(M.a)(e);return c.splice(a,1,Object(_e.a)(Object(_e.a)({},c[a]),{},Object(Ke.a)({},r,n.target.value))),c},Ge=function(e,t){var n=t.index,a=t.shift,r=Object(M.a)(e),c=r.splice(n,1);return r.splice(n+a,0,c[0]),r},Je=function(e,t){var n=t.index,a=Object(M.a)(e);return a.splice(n,1),a},Ve=function(e,t){var n=JSON.parse(JSON.stringify(e));switch(t.type){case"setDefault":var a=JSON.parse(JSON.stringify(t.payload));return Object(_e.a)(Object(_e.a)({},n),{},{default:a,current:a});case"onColumnChange":return n.current.tableHead=Ue(n.current.tableHead,t.payload),n;case"onColumnShift":return n.current.tableHead=Ge(n.current.tableHead,t.payload),n;case"onColumnAdd":return n.current.tableHead.push({title:"",key:"",fontSize:"medium",align:"left"}),n;case"onColumnRemove":return n.current.tableHead=Je(n.current.tableHead,t.payload),n;case"onChangeColour":return n.current.colour=function(e,t){var n=t.key,a=t.value;return a?Object(_e.a)(Object(_e.a)({},e),{},Object(Ke.a)({},n,a)):e}(n.current.colour,t.payload),n;case"onResetColour":return n.current.colour[t.payload.key]=n.default.colour[t.payload.key],n;case"onChangeMisc":return n.current[t.payload.key]=t.payload.event.target.value,n;case"onResetMisc":return n.current[t.payload.key]=n.default[t.payload.key],n;case"onChangeCarouselMisc":return n.current.carousel[t.payload.key]=t.payload.event.target.value,n;case"onChangeCarouselImage":return n.current.carousel.images=Ue(n.current.carousel.images,t.payload),n;case"onAddCarouselImage":return n.current.carousel.images.push({src:""}),n;case"onShiftCarouselImage":return n.current.carousel.images=Ge(n.current.carousel.images,t.payload),n;case"onRemoveCarouselImage":return n.current.carousel.images=Je(n.current.carousel.images,t.payload),n;case"onChangeWeather":return n.current.weather[t.payload.key]=t.payload.event.target.value,n;case"onResetWeather":return n.current.weather[t.payload.key]=n.default.weather[t.payload.key],n;default:return n}},Ye=function(){var e=Object(S.useReducer)(Ve,{default:{},current:{}}),t=Object(W.a)(e,2),n=t[0],a=t[1],r={setDefault:function(e){return a({type:"setDefault",payload:e})},onColumnChange:function(e,t,n){return a({type:"onColumnChange",payload:{event:e,index:t,key:n}})},onColumnShift:function(e,t){return a({type:"onColumnShift",payload:{index:e,shift:t}})},onColumnAdd:function(){return a({type:"onColumnAdd"})},onColumnRemove:function(e){return a({type:"onColumnRemove",payload:{index:e}})},onChangeColour:function(e,t){return a({type:"onChangeColour",payload:{key:e,value:t}})},onResetColour:function(e){return a({type:"onResetColour",payload:{key:e}})},onChangeMisc:function(e,t){return a({type:"onChangeMisc",payload:{event:e,key:t}})},onResetMisc:function(e){return a({type:"onResetMisc",payload:{key:e}})},onChangeCarouselMisc:function(e,t){return a({type:"onChangeCarouselMisc",payload:{event:e,key:t}})},onChangeCarouselImage:function(e,t,n){return a({type:"onChangeCarouselImage",payload:{event:e,index:t,key:n}})},onAddCarouselImage:function(){return a({type:"onAddCarouselImage"})},onShiftCarouselImage:function(e,t){return a({type:"onShiftCarouselImage",payload:{index:e,shift:t}})},onRemoveCarouselImage:function(e){return a({type:"onRemoveCarouselImage",payload:{index:e}})},onChangeWeather:function(e,t){return a({type:"onChangeWeather",payload:{event:e,key:t}})},onResetWeather:function(e){return a({type:"onResetWeather",payload:{key:e}})}};return[n.current,r]},qe=U.a.div(f||(f=Object(E.a)(["\n  h1 {\n    text-align: center;\n  }\n"]))),Qe=Object(U.a)(A.a)(x||(x=Object(E.a)(["\n  margin: 0.5rem;\n  padding: 1rem;\n"]))),Xe=U.a.h2(g||(g=Object(E.a)(["\n  text-align: center;\n  margin: 0;\n  margin-bottom: 1rem;\n"]))),Ze=Object(U.a)(A.a)(p||(p=Object(E.a)(["\n  padding: 0.5rem;\n  width: 10rem;\n"]))),$e=Object(U.a)(A.a)(y||(y=Object(E.a)(["\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  :hover {\n    cursor: pointer;\n    background-color: #f9f9f9;\n  }\n"]))),et=Object(U.a)($e)(v||(v=Object(E.a)(["\n  width: calc(10rem + 16px);\n  min-height: 12rem;\n"]))),tt=Object(U.a)($e)(C||(C=Object(E.a)(["\n  width: calc(10rem + 16px);\n  min-height: 6rem;\n"]))),nt=U.a.div(k||(k=Object(E.a)(["\n  padding: 1rem;\n  display: flex;\n  justify-content: center;\n"]))),at=U.a.div(w||(w=Object(E.a)(["\n  width: 7rem;\n"]))),rt=[{label:"Background",key:"background"},{label:"Header",key:"header"},{label:"Even Row",key:"even"},{label:"Odd Row",key:"odd"},{label:"Divider",key:"divider"},{label:"Font",key:"font"},{label:"Footer",key:"footer"},{label:"Weather Background",key:"weatherBackground"},{label:"Weather Font",key:"weatherFont"}],ct=[{label:"Logo",key:"logo"},{label:"Max Rows",key:"maxRows",type:"number"},{label:"Rows Interval",key:"rowsInterval",type:"number"},{label:"Date Position",key:"datePosition",options:[{label:"None",key:"none"},{label:"Top Left",key:"top-left"},{label:"Top Right",key:"top-right"},{label:"Bottom Left",key:"bottom-left"},{label:"Bottom Right",key:"bottom-right"}]}],it=[{label:"API Key",key:"apiKey"},{label:"Refresh Rate",key:"interval",type:"number"},{label:"Position",key:"position",options:[{label:"None",key:"none"},{label:"Left",key:"left"},{label:"Right",key:"right"}]},{label:"Units",key:"units",options:[{label:"Metric",key:"metric"},{label:"Imperial",key:"imperial"},{label:"Kelvin",key:"standard"}]}],ot=function(){var e=ue(),t=Ye(),n=Object(W.a)(t,2),a=n[0],r=n[1],c=Object(S.useState)(!1),i=Object(W.a)(c,2),o=i[0],l=i[1],s=Object(S.useState)("columns"),u=Object(W.a)(s,2),j=u[0],d=u[1],b=a.tableHead||[],h=a.colour||{},O=a.carousel||{},m=a.weather||{};return Object(S.useEffect)((function(){r.setDefault(e)}),[e]),Object(Q.jsxs)(qe,{children:[Object(Q.jsx)("h1",{children:"Rate Board Configuration"}),Object(Q.jsx)(Qe,{elevation:3,style:{padding:0},children:Object(Q.jsxs)(Ie.a,{value:j,onChange:function(e,t){return d(t)},indicatorColor:"primary",textColor:"primary",centered:!0,children:[Object(Q.jsx)(Re.a,{value:"columns",label:"Columns"}),Object(Q.jsx)(Re.a,{value:"colours",label:"Colours"}),Object(Q.jsx)(Re.a,{value:"misc",label:"Misc"}),Object(Q.jsx)(Re.a,{value:"carousel",label:"Carousel"}),Object(Q.jsx)(Re.a,{value:"weather",label:"Weather"})]})}),Object(Q.jsxs)(Qe,{elevation:3,children:["columns"===j&&Object(Q.jsxs)(Q.Fragment,{children:[Object(Q.jsx)(Xe,{children:"Columns"}),Object(Q.jsxs)(P.a,{container:!0,direction:"row",spacing:2,children:[b.map((function(e,t){return Object(Q.jsx)(P.a,{item:!0,children:Object(Q.jsx)(Ze,{elevation:1,children:Object(Q.jsx)(He,{isFirst:0===t,isLast:t===b.length-1,column:e,onColumnShift:function(e){return r.onColumnShift(t,e)},onColumnRemove:function(){return r.onColumnRemove(t)},onColumnChange:function(e,n){return r.onColumnChange(e,t,n)}})})})})),Object(Q.jsx)(P.a,{item:!0,children:Object(Q.jsx)(et,{onClick:r.onColumnAdd,children:Object(Q.jsx)(Ae.a,{fontSize:"large"})})})]})]}),"colours"===j&&Object(Q.jsxs)(Q.Fragment,{children:[Object(Q.jsx)(Xe,{children:"Colours"}),Object(Q.jsx)(P.a,{container:!0,direction:"row",justify:"center",spacing:2,children:rt.map((function(e){return Object(Q.jsx)(P.a,{item:!0,children:Object(Q.jsx)(Ze,{elevation:1,children:Object(Q.jsxs)(P.a,{container:!0,direction:"row",justify:"space-between",alignItems:"center",children:[Object(Q.jsx)(P.a,{item:!0,children:Object(Q.jsx)(at,{children:Object(Q.jsx)(ze.a,{label:e.label,defaultValue:"#000",value:h[e.key],TextFieldProps:{value:h[e.key]},onChange:function(t){return r.onChangeColour(e.key,t)}})})}),Object(Q.jsx)(P.a,{item:!0,children:Object(Q.jsx)(De,{display:!0,children:Object(Q.jsx)(Le.a,{onClick:function(){return r.onResetColour(e.key)}})})})]})})})}))})]}),"misc"===j&&Object(Q.jsxs)(Q.Fragment,{children:[Object(Q.jsx)(Xe,{children:"Miscellaneous"}),Object(Q.jsx)(P.a,{container:!0,direction:"row",justify:"center",spacing:2,children:ct.map((function(e){return Object(Q.jsx)(P.a,{item:!0,children:Object(Q.jsx)(Ze,{elevation:1,children:Object(Q.jsxs)(P.a,{container:!0,direction:"row",justify:"space-between",alignItems:"center",wrap:"nowrap",children:[Object(Q.jsx)(P.a,{item:!0,style:{flexGrow:"1",marginRight:"1rem"},children:e.options&&e.options.length?Object(Q.jsxs)(Fe.a,{fullWidth:!0,children:[Object(Q.jsx)(Me.a,{id:"".concat(e.key,"-select-label"),children:e.label}),Object(Q.jsx)(We.a,{labelId:"".concat(e.key,"-select-label"),id:"".concat(e.key,"-select"),value:a[e.key],defaultValue:e.options[0].key,onChange:function(t){return r.onChangeMisc(t,e.key)},children:e.options.map((function(e){return Object(Q.jsx)(Ee.a,{value:e.key,children:e.label})}))})]}):Object(Q.jsx)(at,{children:Object(Q.jsx)(re.a,{label:e.label,value:a[e.key],type:e.type||"text",onChange:function(t){return r.onChangeMisc(t,e.key)}})})}),Object(Q.jsx)(P.a,{item:!0,children:Object(Q.jsx)(De,{display:!0,children:Object(Q.jsx)(Le.a,{onClick:function(){return r.onResetMisc(e.key)}})})})]})})})}))})]}),"carousel"===j&&Object(Q.jsxs)(Q.Fragment,{children:[Object(Q.jsx)(Xe,{children:"Carousel"}),Object(Q.jsxs)(P.a,{container:!0,direction:"column",spacing:2,children:[Object(Q.jsx)(P.a,{item:!0,children:Object(Q.jsxs)(P.a,{container:!0,direction:"row",justify:"center",spacing:2,children:[Object(Q.jsx)(P.a,{item:!0,children:Object(Q.jsx)(Ze,{elevation:1,children:Object(Q.jsxs)(Fe.a,{fullWidth:!0,children:[Object(Q.jsx)(Me.a,{id:"position-select-label",children:"Position"}),Object(Q.jsxs)(We.a,{labelId:"position-select-label",id:"position-select",value:O.position,defaultValue:"none",onChange:function(e){return r.onChangeCarouselMisc(e,"position")},children:[Object(Q.jsx)(Ee.a,{value:"none",children:"None"}),Object(Q.jsx)(Ee.a,{value:"top",children:"Top"}),Object(Q.jsx)(Ee.a,{value:"bottom",children:"Bottom"})]})]})})}),Object(Q.jsx)(P.a,{item:!0,children:Object(Q.jsx)(Ze,{elevation:1,children:Object(Q.jsx)(re.a,{label:"Interval (ms)",type:"number",value:O.interval||4e3,onChange:function(e){return r.onChangeCarouselMisc(e,"interval")}})})})]})}),Object(Q.jsx)(P.a,{item:!0,children:Object(Q.jsxs)(P.a,{container:!0,direction:"row",justify:"center",spacing:2,children:[O.images.map((function(e,t){return Object(Q.jsx)(P.a,{item:!0,children:Object(Q.jsx)(Ze,{elevation:1,children:Object(Q.jsxs)(P.a,{container:!0,spacing:1,direction:"column",justify:"",alignItems:"stretch",children:[Object(Q.jsx)(P.a,{item:!0,children:Object(Q.jsxs)(P.a,{container:!0,direction:"row",justify:"space-between",children:[Object(Q.jsx)(P.a,{item:!0,children:Object(Q.jsx)(De,{display:0!==t,children:Object(Q.jsx)(Pe.a,{onClick:function(){return r.onShiftCarouselImage(t,-1)}})})}),Object(Q.jsx)(P.a,{item:!0,children:Object(Q.jsx)(De,{display:!0,children:Object(Q.jsx)(Te.a,{onClick:function(){return r.onRemoveCarouselImage(t)}})})}),Object(Q.jsx)(P.a,{item:!0,children:Object(Q.jsx)(De,{display:t!==O.images.length-1,children:Object(Q.jsx)(Be.a,{onClick:function(){return r.onShiftCarouselImage(t,1)}})})})]})}),Object(Q.jsx)(P.a,{item:!0,children:Object(Q.jsx)(re.a,{label:"Image Src",value:e.src,onChange:function(e){return r.onChangeCarouselImage(e,t,"src")}})})]})})})})),Object(Q.jsx)(P.a,{item:!0,children:Object(Q.jsx)(tt,{onClick:r.onAddCarouselImage,children:Object(Q.jsx)(Ae.a,{fontSize:"large"})})})]})})]})]}),"weather"===j&&Object(Q.jsxs)(Q.Fragment,{children:[Object(Q.jsx)(Xe,{children:"Weather"}),Object(Q.jsx)(P.a,{container:!0,direction:"row",justify:"center",spacing:2,children:it.map((function(e){return Object(Q.jsx)(P.a,{item:!0,children:Object(Q.jsx)(Ze,{elevation:1,children:Object(Q.jsxs)(P.a,{container:!0,direction:"row",justify:"space-between",alignItems:"center",wrap:"nowrap",children:[Object(Q.jsx)(P.a,{item:!0,style:{flexGrow:"1",marginRight:"1rem"},children:e.options&&e.options.length?Object(Q.jsxs)(Fe.a,{fullWidth:!0,children:[Object(Q.jsx)(Me.a,{id:"".concat(e.key,"-select-label"),children:e.label}),Object(Q.jsx)(We.a,{labelId:"".concat(e.key,"-select-label"),id:"".concat(e.key,"-select"),value:m[e.key],defaultValue:e.options[0].key,onChange:function(t){return r.onChangeWeather(t,e.key)},children:e.options.map((function(e){return Object(Q.jsx)(Ee.a,{value:e.key,children:e.label})}))})]}):Object(Q.jsx)(at,{children:Object(Q.jsx)(re.a,{label:e.label,value:m[e.key],type:e.type||"text",onChange:function(t){return r.onChangeWeather(t,e.key)}})})}),Object(Q.jsx)(P.a,{item:!0,children:Object(Q.jsx)(De,{display:!0,children:Object(Q.jsx)(Le.a,{onClick:function(){return r.onResetWeather(e.key)}})})})]})})})}))})]})]}),Object(Q.jsx)(nt,{children:Object(Q.jsx)(ce.a,{color:"primary",onClick:function(){return l((function(e){return!e}))},children:"Toggle Preview"})}),o&&Object(Q.jsx)(ke,{config:a}),Object(Q.jsx)(nt,{children:Object(Q.jsx)(ce.a,{variant:"contained",color:"primary",onClick:function(){return Se()(JSON.stringify(a),"config.json")},children:"Download"})})]})},lt=function(){var e=Object(S.useState)(window.location.hash),t=Object(W.a)(e,2),n=t[0],a=t[1];return Object(S.useEffect)((function(){window.onhashchange=function(e){a(e.target.location.hash)}}),[]),n};var st=function(){switch(lt()){case"#config":return Object(Q.jsx)(ot,{});default:return Object(Q.jsx)(ke,{})}},ut=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,478)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),a(e),r(e),c(e),i(e)}))};F.a.render(Object(Q.jsx)(I.a.StrictMode,{children:Object(Q.jsx)(st,{})}),document.getElementById("root")),ut()}},[[415,1,2]]]);
//# sourceMappingURL=main.0e3c7ccb.chunk.js.map