(this["webpackJsonprate-board"]=this["webpackJsonprate-board"]||[]).push([[0],{232:function(e,t,n){},265:function(e,t){},267:function(e,t){},415:function(e,t,n){"use strict";n.r(t);var r,a,c,i,o,l,s,u,j,b,d,h,O,f,x,m,g,p,y,v,C,w,k,I=n(0),S=n.n(I),A=n(13),R=n.n(A),P=(n(232),n(15)),F=function(){var e=Object(I.useState)(window.location.hash),t=Object(P.a)(e,2),n=t[0],r=t[1];return Object(I.useEffect)((function(){window.onhashchange=function(e){r(e.target.location.hash)}}),[]),n},L=function(){var e=Object(I.useState)(null),t=Object(P.a)(e,2),n=t[0],r=t[1];Object(I.useEffect)((function(){r(localStorage.getItem("token"))}),[]);return[n,function(e){if(""===e&&!window.confirm("Are you sure you want to remove your token?"))return null;localStorage.setItem("token",e),r(e)}]},B=n(23),T=n.n(B),E=n(39),N=n(45),z=n.n(N),M=function(e){var t=Object(I.useState)({}),n=Object(P.a)(t,2),r=n[0],a=n[1],c=function(){var t=Object(E.a)(T.a.mark((function t(){var n,r;return T.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e){t.next=2;break}return t.abrupt("return");case 2:return n="https://www.clearviewsys.com/rates/".concat(e,"/config.json"),t.next=6,z.a.get(n,{headers:{"Cache-Control":"no-cache"}});case 6:r=t.sent,a(r.data);case 8:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(I.useEffect)((function(){c()}),[e]),r},W=n(203),D=function(e){return{timestamp:e.TIMESTAMP[0],rates:e.RATE.map((function(e){return{isFlagged:"**"===e.ISFLAGGED[0],flagURL:e.FLAGURL[0],flag:e.FLAGURL[0],iso:e.ISO[0],name:e.NAME[0],country:e.COUNTRY[0],id:e.ID?e.ID[0]:"",weBuy:e.WEBUY[0],weSell:e.WESELL[0],invBuy:e.INVBUY[0],invSell:e.INVSELL[0]}}))}},U=function(e){var t=Object(I.useState)({}),n=Object(P.a)(t,2),r=n[0],a=n[1],c=function(){var t=Object(E.a)(T.a.mark((function t(){var n,r,c;return T.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e){t.next=2;break}return t.abrupt("return");case 2:return n="https://www.clearviewsys.com/rates/".concat(e,"/rateswithcss.xml"),t.next=6,z.a.get(n,{headers:{"Cache-Control":"no-cache"}});case 6:return r=t.sent,t.next=9,Object(W.parseStringPromise)(r.data);case 9:c=t.sent,a(D(c.CATALOG));case 11:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(I.useEffect)((function(){c();var e=setInterval((function(){return c()}),5e3);return function(){return clearInterval(e)}}),[e]),r},K=n(11),G=n(474),J=n(175),V=n(450),Y=n(453),H=n(202),_=n(457),q=n(458),Q=n(12),X=n(2),Z=Object(Q.a)(G.a)(r||(r=Object(K.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"]))),$=Object(Q.a)(J.a)(a||(a=Object(K.a)(["\n  :focus-visible {\n    outline: none;\n  }\n"]))),ee=Object(Q.a)(V.a)(c||(c=Object(K.a)(["\n  padding: 1rem;\n"]))),te=function(e){var t=e.open,n=e.onSuccess,r=Object(I.useState)(""),a=Object(P.a)(r,2),c=a[0],i=a[1],o=Object(I.useState)(!1),l=Object(P.a)(o,2),s=l[0],u=l[1],j=Object(I.useState)(""),b=Object(P.a)(j,2),d=b[0],h=b[1],O=function(){var e=Object(E.a)(T.a.mark((function e(){var t;return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="https://www.clearviewsys.com/rates/".concat(c,"/config.json"),e.prev=2,e.next=5,z.a.get(t,{headers:{"Cache-Control":"no-cache"}});case 5:return e.abrupt("return",!0);case 8:return e.prev=8,e.t0=e.catch(2),e.abrupt("return",!1);case 11:case"end":return e.stop()}}),e,null,[[2,8]])})));return function(){return e.apply(this,arguments)}}(),f=function(){var e=Object(E.a)(T.a.mark((function e(t){var r;return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),u(!0),e.next=4,O();case 4:r=e.sent,u(!1),r?n(c):h("Invalid Token");case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(X.jsx)(Z,{open:t,closeAfterTransition:!0,children:Object(X.jsx)($,{in:t,children:Object(X.jsx)(ee,{elevation:3,children:Object(X.jsx)("form",{onSubmit:f,children:Object(X.jsxs)(Y.a,{container:!0,direction:"column",justify:"center",alignItems:"center",spacing:2,children:[Object(X.jsx)(Y.a,{item:!0,children:Object(X.jsx)(H.a,{variant:"outlined",label:"Token",value:c,onChange:function(e){return i(e.target.value)},error:!!d,helperText:d})}),Object(X.jsx)(Y.a,{item:!0,children:s?Object(X.jsx)(_.a,{}):Object(X.jsx)(q.a,{type:"submit",children:"Submit"})})]})})})})})},ne=n(51),re=n(459),ae=n(460),ce=n(461),ie=n(462),oe=n(463),le=n(464),se=n(465),ue=n(211),je=n.n(ue),be=Q.a.h3(i||(i=Object(K.a)(["\n  margin: 0;\n"]))),de=Q.a.h3(o||(o=Object(K.a)(["\n  margin: 0;\n"]))),he=Q.a.h5(l||(l=Object(K.a)(["\n  margin: 0.5rem 0;\n"]))),Oe=function(e,t,n){navigator.geolocation.getCurrentPosition(function(){var r=Object(E.a)(T.a.mark((function r(a){var c,i,o,l,s,u,j,b;return T.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return c=a.coords.latitude,i=a.coords.longitude,r.next=4,z.a.get("".concat("https://api.openweathermap.org/data/2.5/weather","?units=").concat(e,"&lat=").concat(c,"&lon=").concat(i,"&appid=").concat(t));case 4:o=r.sent,l="",o.data.weather&&o.data.weather[0]&&(s=o.data.weather[0].icon,l="https://openweathermap.org/img/wn/".concat(s,"@2x.png")),u=o.data,j=u.main,b=u.name,n({iconSrc:l,name:b,temp:Math.round(j.temp),tempMin:Math.round(j.temp_min),tempMax:Math.round(j.temp_max)});case 9:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}())},fe=function(e){var t=e.apiKey,n=e.units,r=e.interval,a=Object(I.useState)({}),c=Object(P.a)(a,2),i=c[0],o=c[1],l={metric:"\xb0C",imperial:"\xb0F",standard:"K"}[n];return Object(I.useEffect)((function(){Oe(n,t,o);var e=setInterval((function(){Oe(n,t,o)}),1e3*(r||900));return function(){return clearInterval(e)}}),[t,n,r]),Object(X.jsxs)(Y.a,{container:!0,direction:"column",justify:"center",alignItems:"center",children:[i.iconSrc&&Object(X.jsx)(Y.a,{item:!0,children:Object(X.jsx)("img",{src:i.iconSrc,alt:"Weather Icon"})}),Object(X.jsx)(Y.a,{item:!0,children:Object(X.jsx)(be,{children:i.name})}),Object(X.jsx)(Y.a,{item:!0,children:Object(X.jsxs)(de,{children:[i.temp,l]})}),Object(X.jsx)(Y.a,{item:!0,children:Object(X.jsxs)(he,{children:[i.tempMin,l," - ",i.tempMax,l]})})]})},xe=Q.a.div(s||(s=Object(K.a)(["\n  background-color: ",";\n  min-height: 100vh;\n  padding: 1rem;\n"])),(function(e){return e.colour})),me=Q.a.img(u||(u=Object(K.a)(["\n  display: block;\n  margin: auto;\n  max-height: 10rem;\n"]))),ge=Q.a.img(j||(j=Object(K.a)(["\n  display: block;\n  margin: 0.5rem auto;\n  height: 30rem;\n"]))),pe=Q.a.img(b||(b=Object(K.a)(["\n  box-shadow: 0px 0px 3px 1px #a2a2a2;\n  width: ",";\n"])),(function(e){switch(e.size){case"small":return"2.5rem";case"medium":return"5rem";case"large":return"7.5rem";default:return"5rem"}})),ye=Q.a.div(d||(d=Object(K.a)(["\n  font-size: ",";\n"])),(function(e){switch(e.size){case"small":return"large";case"medium":return"x-large";case"large":return"xx-large";default:return"x-large"}})),ve=Object(Q.a)(V.a)(h||(h=Object(K.a)(["\n  overflow: auto;\n  height: 100%;\n\n  th {\n    font-weight: bold;\n  }\n"]))),Ce=Object(Q.a)(re.a)(O||(O=Object(K.a)(["\n  color: "," !important;\n  background-color: ",";\n  border-bottom-color: "," !important;\n"])),(function(e){return e.fontColour}),(function(e){return e.colour}),(function(e){return e.borderColour})),we=function(e,t){switch(e.key){case"flag":return Object(X.jsx)(pe,{size:e.size,src:t[e.key],alt:t[e.key]});default:return Object(X.jsx)(ye,{size:e.size,children:t[e.key]})}},ke=function(e){var t=e.items,n=e.interval;return Object(X.jsx)(je.a,{stopAutoPlayOnHover:!1,swipe:!1,indicators:!1,navButtonsAlwaysInvisible:!0,interval:1e3*Number(n),children:t.map((function(e,t){return Object(X.jsx)(ge,{src:e.src},t)}))})},Ie=function(e){var t,n=e.config,r=e.catalog,a=e.removeToken,c=Object(I.useState)([]),i=Object(P.a)(c,2),o=i[0],l=i[1];Object(I.useEffect)((function(){n.isAllRates?l(r.rates||[]):l((r.rates||[]).filter((function(e){return e.isFlagged})))}),[null===(t=r.rates)||void 0===t?void 0:t.length]),Object(I.useEffect)((function(){setTimeout((function(){var e=Object(ne.a)(o);if(e.length>0){var t=e.shift();l([].concat(Object(ne.a)(e),[t]))}}),1e3*Number(n.rowsInterval))}),[o,n.rowsInterval]);var s=o.slice(0,Number(n.maxRows)),u=n.tableColumns||[],j=Object(X.jsx)(ye,{children:r.timestamp})||"";return Object(X.jsxs)(xe,{colour:n.backgroundColour,children:[Object(X.jsx)(me,{src:n.logo,alt:"logo"}),"top"===n.carouselPosition&&Object(X.jsx)(ke,{items:n.carouselImages,interval:Number(n.carouselInterval)}),Object(X.jsxs)(Y.a,{container:!0,spacing:2,children:["left"===n.weatherPosition&&Object(X.jsx)(Y.a,{item:!0,xs:2,children:Object(X.jsx)(ve,{style:{backgroundColor:n.weatherBackgroundColour,color:n.weatherFontColour},children:Object(X.jsx)(fe,{apiKey:n.weatherApiKey,units:n.weatherUnits,interval:n.weatherInterval})})}),Object(X.jsx)(Y.a,{item:!0,xs:"none"===n.weatherPosition?12:10,children:Object(X.jsx)(ve,{elevation:3,children:Object(X.jsx)(ae.a,{children:Object(X.jsxs)(ce.a,{children:[Object(X.jsxs)(ie.a,{children:[n.datePosition&&n.datePosition.includes("top")&&Object(X.jsx)(oe.a,{children:Object(X.jsx)(Ce,{align:n.datePosition.split("-")[1],colSpan:u.length,colour:n.headerColour,borderColour:n.dividerColour,fontColour:"rgba(0, 0, 0, 0.54)",children:j})}),Object(X.jsx)(oe.a,{onClick:a,children:u.map((function(e,t){return Object(X.jsx)(Ce,{align:e.align,colour:n.headerColour,borderColour:n.dividerColour,fontColour:n.fontColour,style:{width:e.width},children:Object(X.jsx)(ye,{children:e.title})},e.key)}))})]}),Object(X.jsx)(le.a,{children:s.map((function(e,t){return Object(X.jsx)(oe.a,{children:u.map((function(r){return Object(X.jsx)(Ce,{align:r.align,colour:t%2?n.oddColour:n.evenColour,borderColour:n.dividerColour,fontColour:n.fontColour,children:we(r,e)},"".concat(e.iso,"-").concat(r.key))}))},e.iso)}))}),n.datePosition&&n.datePosition.includes("bottom")&&Object(X.jsx)(se.a,{children:Object(X.jsx)(oe.a,{children:Object(X.jsx)(Ce,{align:n.datePosition.split("-")[1],colSpan:u.length,colour:n.footerColour,borderColour:n.footerColour,fontColour:n.font,children:j})})})]})})})}),"right"===n.weatherPosition&&Object(X.jsx)(Y.a,{item:!0,xs:2,children:Object(X.jsx)(ve,{style:{backgroundColor:n.weatherBackgroundColour,color:n.weatherFontColour},children:Object(X.jsx)(fe,{apiKey:n.weatherApiKey,units:n.weatherUnits,interval:n.weatherInterval})})})]}),"bottom"===n.carouselPosition&&Object(X.jsx)(ke,{items:n.carouselImages,interval:n.carouselInterval})]})},Se=n(212),Ae=n.n(Se),Re=n(473),Pe=n(469),Fe=n(456),Le=n(477),Be=n(472),Te=n(478),Ee=n(470),Ne=n(471),ze=n(466),Me=n(467),We=n(468),De=n(213),Ue=n.n(De),Ke=Q.a.div(f||(f=Object(K.a)(["\n  width: 2rem;\n  display: flex;\n  justify-content: center;\n\n  svg {\n    ","\n    :hover {\n      cursor: pointer;\n    }\n  }\n"])),(function(e){return e.display?"":"display: none;"})),Ge=function(e){var t=e.onColumnShift,n=e.onColumnRemove,r=e.onColumnChange,a=e.isFirst,c=e.isLast,i=e.column;return Object(X.jsxs)(Y.a,{container:!0,spacing:1,direction:"column",justify:"",alignItems:"stretch",children:[Object(X.jsx)(Y.a,{item:!0,children:Object(X.jsxs)(Y.a,{container:!0,direction:"row",justify:"space-between",children:[Object(X.jsx)(Y.a,{item:!0,children:Object(X.jsx)(Ke,{display:!a,children:Object(X.jsx)(ze.a,{onClick:function(){return t(-1)}})})}),Object(X.jsx)(Y.a,{item:!0,children:Object(X.jsx)(Ke,{display:!0,children:Object(X.jsx)(Me.a,{onClick:n})})}),Object(X.jsx)(Y.a,{item:!0,children:Object(X.jsx)(Ke,{display:!c,children:Object(X.jsx)(We.a,{onClick:function(){return t(1)}})})})]})}),Object(X.jsx)(Y.a,{item:!0,children:Object(X.jsxs)(Fe.a,{fullWidth:!0,children:[Object(X.jsx)(Le.a,{id:"field-select-label",children:"Field"}),Object(X.jsxs)(Be.a,{labelId:"field-select-label",id:"field-select",value:i.key,onChange:function(e){return r(e,"key")},children:[Object(X.jsx)(Te.a,{value:"flag",children:"Flag"}),Object(X.jsx)(Te.a,{value:"iso",children:"ISO"}),Object(X.jsx)(Te.a,{value:"name",children:"Name"}),Object(X.jsx)(Te.a,{value:"country",children:"Country"}),Object(X.jsx)(Te.a,{value:"weBuy",children:"We Buy"}),Object(X.jsx)(Te.a,{value:"weSell",children:"We Sell"}),Object(X.jsx)(Te.a,{value:"invBuy",children:"Inv Buy"}),Object(X.jsx)(Te.a,{value:"invSell",children:"Inv Sell"})]})]})}),Object(X.jsx)(Y.a,{item:!0,children:Object(X.jsx)(H.a,{label:"Field Name",value:i.title,onChange:function(e){return r(e,"title")}})}),Object(X.jsx)(Y.a,{item:!0,children:Object(X.jsxs)(Fe.a,{fullWidth:!0,children:[Object(X.jsx)(Le.a,{id:"align-select-label",children:"Align"}),Object(X.jsxs)(Be.a,{labelId:"align-select-label",id:"align-select",value:i.align||"left",onChange:function(e){return r(e,"align")},children:[Object(X.jsx)(Te.a,{value:"center",children:"Center"}),Object(X.jsx)(Te.a,{value:"left",children:"Left"}),Object(X.jsx)(Te.a,{value:"right",children:"Right"})]})]})}),Object(X.jsx)(Y.a,{item:!0,children:Object(X.jsxs)(Fe.a,{fullWidth:!0,children:[Object(X.jsx)(Le.a,{id:"size-select-label",children:"Size"}),Object(X.jsxs)(Be.a,{labelId:"size-select-label",id:"size-select",value:i.size||"medium",onChange:function(e){return r(e,"size")},children:[Object(X.jsx)(Te.a,{value:"small",children:"Small"}),Object(X.jsx)(Te.a,{value:"medium",children:"Medium"}),Object(X.jsx)(Te.a,{value:"large",children:"Large"})]})]})}),Object(X.jsx)(Y.a,{item:!0,children:Object(X.jsx)(H.a,{label:"Width",value:i.width||"",onChange:function(e){return r(e,"width")}})})]})},Je=n(105),Ve=n(77),Ye=function(e,t){var n=JSON.parse(JSON.stringify(e)),r=t.key;switch(t.type){case"setDefault":var a=JSON.parse(JSON.stringify(t.payload));return Object(Ve.a)(Object(Ve.a)({},n),{},{default:a,current:a});case"onChange":return n.current[r]=t.payload.value,n;case"onPushArray":return n.current[r]=[].concat(Object(ne.a)(n.current[r]),[t.payload]),n;case"onChangeArrayObject":return n.current[r]=function(e,t){var n=t.value,r=t.index,a=t.key,c=Object(ne.a)(e);return c.splice(r,1,Object(Ve.a)(Object(Ve.a)({},c[r]),{},Object(Je.a)({},a,n))),c}(n.current[r],t.payload),n;case"onShiftArray":return n.current[r]=function(e,t){var n=t.index,r=t.shift,a=Object(ne.a)(e),c=a.splice(n,1);return a.splice(n+r,0,c[0]),a}(n.current[r],t.payload),n;case"onRemoveArrayObject":return n.current[r]=function(e,t){var n=t.index,r=Object(ne.a)(e);return r.splice(n,1),r}(n.current[r],t.payload),n;case"onReset":return n.current[r]=n.default[r],n;default:return n}},He=function(){var e=Object(I.useReducer)(Ye,{default:{},current:{}}),t=Object(P.a)(e,2),n=t[0],r=t[1],a={setDefault:function(e){return r({type:"setDefault",payload:e})},onChange:function(e,t){return r({key:e,type:"onChange",payload:{value:t.target?t.target.value:t}})},onPushArray:function(e,t){return r({key:e,type:"onPushArray",payload:t})},onChangeArrayObject:function(e,t,n,a){return r({key:e,type:"onChangeArrayObject",payload:{value:t.target.value,index:n,key:a}})},onShiftArray:function(e,t,n){return r({key:e,type:"onShiftArray",payload:{index:t,shift:n}})},onRemoveArrayObject:function(e,t){return r({key:e,type:"onRemoveArrayObject",payload:{index:t}})},onReset:function(e){return r({key:e,type:"onReset"})}};return[n.current,a]},_e=Q.a.div(x||(x=Object(K.a)(["\n  h1 {\n    text-align: center;\n  }\n"]))),qe=Object(Q.a)(V.a)(m||(m=Object(K.a)(["\n  margin: 0.5rem;\n  padding: 1rem;\n"]))),Qe=Q.a.h2(g||(g=Object(K.a)(["\n  text-align: center;\n  margin: 0;\n  margin-bottom: 1rem;\n"]))),Xe=Object(Q.a)(V.a)(p||(p=Object(K.a)(["\n  padding: 0.5rem;\n  width: 10rem;\n"]))),Ze=Object(Q.a)(V.a)(y||(y=Object(K.a)(["\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  :hover {\n    cursor: pointer;\n    background-color: #f9f9f9;\n  }\n"]))),$e=Object(Q.a)(Ze)(v||(v=Object(K.a)(["\n  width: calc(10rem + 16px);\n  min-height: 12rem;\n"]))),et=Object(Q.a)(Ze)(C||(C=Object(K.a)(["\n  width: calc(10rem + 16px);\n  min-height: 6rem;\n"]))),tt=Q.a.div(w||(w=Object(K.a)(["\n  padding: 1rem;\n  display: flex;\n  justify-content: center;\n"]))),nt=Q.a.div(k||(k=Object(K.a)(["\n  width: 7rem;\n"]))),rt=[{label:"Background",key:"backgroundColour"},{label:"Header",key:"headerColour"},{label:"Even Row",key:"evenColour"},{label:"Odd Row",key:"oddColour"},{label:"Divider",key:"dividerColour"},{label:"Font",key:"fontColour"},{label:"Footer",key:"footerColour"},{label:"Weather Background",key:"weatherBackgroundColour"},{label:"Weather Font",key:"weatherFontColour"}],at=[{label:"Logo",key:"logo"},{label:"Max Rows",key:"maxRows",type:"number"},{label:"Rows Interval",key:"rowsInterval",type:"number"},{label:"Date Position",key:"datePosition",options:[{label:"None",key:"none"},{label:"Top Left",key:"top-left"},{label:"Top Right",key:"top-right"},{label:"Bottom Left",key:"bottom-left"},{label:"Bottom Right",key:"bottom-right"}]}],ct=[{label:"API Key",key:"weatherApiKey"},{label:"Refresh Rate",key:"weatherInterval",type:"number"},{label:"Position",key:"weatherPosition",options:[{label:"None",key:"none"},{label:"Left",key:"left"},{label:"Right",key:"right"}]},{label:"Units",key:"weatherUnits",options:[{label:"Metric",key:"metric"},{label:"Imperial",key:"imperial"},{label:"Kelvin",key:"standard"}]}],it=function(e){var t,n=e.defaultConfig,r=e.catalog,a=He(),c=Object(P.a)(a,2),i=c[0],o=c[1],l=Object(I.useState)(!1),s=Object(P.a)(l,2),u=s[0],j=s[1],b=Object(I.useState)("columns"),d=Object(P.a)(b,2),h=d[0],O=d[1];Object(I.useEffect)((function(){o.setDefault(n)}),[n]);return Object(X.jsxs)(_e,{children:[Object(X.jsx)("h1",{children:"Rate Board Configuration"}),Object(X.jsx)(qe,{elevation:3,style:{padding:0},children:Object(X.jsxs)(Re.a,{value:h,onChange:function(e,t){return O(t)},indicatorColor:"primary",textColor:"primary",centered:!0,children:[Object(X.jsx)(Pe.a,{value:"columns",label:"Columns"}),Object(X.jsx)(Pe.a,{value:"colours",label:"Colours"}),Object(X.jsx)(Pe.a,{value:"misc",label:"Misc"}),Object(X.jsx)(Pe.a,{value:"carousel",label:"Carousel"}),Object(X.jsx)(Pe.a,{value:"weather",label:"Weather"})]})}),Object(X.jsxs)(qe,{elevation:3,children:["columns"===h&&Object(X.jsxs)(X.Fragment,{children:[Object(X.jsx)(Qe,{children:"Columns"}),Object(X.jsxs)(Y.a,{container:!0,direction:"row",spacing:2,children:[null===(t=i.tableColumns)||void 0===t?void 0:t.map((function(e,t){return Object(X.jsx)(Y.a,{item:!0,children:Object(X.jsx)(Xe,{elevation:1,children:Object(X.jsx)(Ge,{isFirst:0===t,isLast:t===i.tableColumns.length-1,column:e,onColumnShift:function(e){return o.onShiftArray("tableColumns",t,e)},onColumnRemove:function(){return o.onRemoveArrayObject("tableColumns",t)},onColumnChange:function(e,n){return o.onChangeArrayObject("tableColumns",e,t,n)}})})})})),Object(X.jsx)(Y.a,{item:!0,children:Object(X.jsx)($e,{onClick:function(){o.onPushArray("tableColumns",{title:"",key:"",fontSize:"medium",align:"left"})},children:Object(X.jsx)(Ee.a,{fontSize:"large"})})})]})]}),"colours"===h&&Object(X.jsxs)(X.Fragment,{children:[Object(X.jsx)(Qe,{children:"Colours"}),Object(X.jsx)(Y.a,{container:!0,direction:"row",justify:"center",spacing:2,children:rt.map((function(e){return Object(X.jsx)(Y.a,{item:!0,children:Object(X.jsx)(Xe,{elevation:1,children:Object(X.jsxs)(Y.a,{container:!0,direction:"row",justify:"space-between",alignItems:"center",children:[Object(X.jsx)(Y.a,{item:!0,children:Object(X.jsx)(nt,{children:Object(X.jsx)(Ue.a,{label:e.label,defaultValue:"#000",value:i[e.key],TextFieldProps:{value:i[e.key]},onChange:function(t){return o.onChange(e.key,t)}})})}),Object(X.jsx)(Y.a,{item:!0,children:Object(X.jsx)(Ke,{display:!0,children:Object(X.jsx)(Ne.a,{onClick:function(){return o.onReset(e.key)}})})})]})})})}))})]}),"misc"===h&&Object(X.jsxs)(X.Fragment,{children:[Object(X.jsx)(Qe,{children:"Miscellaneous"}),Object(X.jsx)(Y.a,{container:!0,direction:"row",justify:"center",spacing:2,children:at.map((function(e){return Object(X.jsx)(Y.a,{item:!0,children:Object(X.jsx)(Xe,{elevation:1,children:Object(X.jsxs)(Y.a,{container:!0,direction:"row",justify:"space-between",alignItems:"center",wrap:"nowrap",children:[Object(X.jsx)(Y.a,{item:!0,style:{flexGrow:"1",marginRight:"1rem"},children:e.options&&e.options.length?Object(X.jsxs)(Fe.a,{fullWidth:!0,children:[Object(X.jsx)(Le.a,{id:"".concat(e.key,"-select-label"),children:e.label}),Object(X.jsx)(Be.a,{labelId:"".concat(e.key,"-select-label"),id:"".concat(e.key,"-select"),value:i[e.key],defaultValue:e.options[0].key,onChange:function(t){return o.onChange(e.key,t)},children:e.options.map((function(e){return Object(X.jsx)(Te.a,{value:e.key,children:e.label})}))})]}):Object(X.jsx)(nt,{children:Object(X.jsx)(H.a,{label:e.label,value:i[e.key],type:e.type||"text",onChange:function(t){return o.onChange(e.key,t)}})})}),Object(X.jsx)(Y.a,{item:!0,children:Object(X.jsx)(Ke,{display:!0,children:Object(X.jsx)(Ne.a,{onClick:function(){return o.onReset(e.key)}})})})]})})})}))})]}),"carousel"===h&&Object(X.jsxs)(X.Fragment,{children:[Object(X.jsx)(Qe,{children:"Carousel"}),Object(X.jsxs)(Y.a,{container:!0,direction:"column",spacing:2,children:[Object(X.jsx)(Y.a,{item:!0,children:Object(X.jsxs)(Y.a,{container:!0,direction:"row",justify:"center",spacing:2,children:[Object(X.jsx)(Y.a,{item:!0,children:Object(X.jsx)(Xe,{elevation:1,children:Object(X.jsxs)(Fe.a,{fullWidth:!0,children:[Object(X.jsx)(Le.a,{id:"position-select-label",children:"Position"}),Object(X.jsxs)(Be.a,{labelId:"position-select-label",id:"position-select",value:i.carouselPosition,defaultValue:"none",onChange:function(e){return o.onChange("carouselPosition",e)},children:[Object(X.jsx)(Te.a,{value:"none",children:"None"}),Object(X.jsx)(Te.a,{value:"top",children:"Top"}),Object(X.jsx)(Te.a,{value:"bottom",children:"Bottom"})]})]})})}),Object(X.jsx)(Y.a,{item:!0,children:Object(X.jsx)(Xe,{elevation:1,children:Object(X.jsx)(H.a,{label:"Interval (ms)",type:"number",value:i.carouselInterval||4e3,onChange:function(e){return o.onChange("carouselInterval",e)}})})})]})}),Object(X.jsx)(Y.a,{item:!0,children:Object(X.jsxs)(Y.a,{container:!0,direction:"row",justify:"center",spacing:2,children:[i.carouselImages.map((function(e,t){return Object(X.jsx)(Y.a,{item:!0,children:Object(X.jsx)(Xe,{elevation:1,children:Object(X.jsxs)(Y.a,{container:!0,spacing:1,direction:"column",justify:"",alignItems:"stretch",children:[Object(X.jsx)(Y.a,{item:!0,children:Object(X.jsxs)(Y.a,{container:!0,direction:"row",justify:"space-between",children:[Object(X.jsx)(Y.a,{item:!0,children:Object(X.jsx)(Ke,{display:0!==t,children:Object(X.jsx)(ze.a,{onClick:function(){return o.onShiftArray("carouselImages",t,-1)}})})}),Object(X.jsx)(Y.a,{item:!0,children:Object(X.jsx)(Ke,{display:!0,children:Object(X.jsx)(Me.a,{onClick:function(){return o.onRemoveArrayObject("carouselImages",t)}})})}),Object(X.jsx)(Y.a,{item:!0,children:Object(X.jsx)(Ke,{display:t!==i.carouselImages.length-1,children:Object(X.jsx)(We.a,{onClick:function(){return o.onShiftArray("carouselImages",t,1)}})})})]})}),Object(X.jsx)(Y.a,{item:!0,children:Object(X.jsx)(H.a,{label:"Image Src",value:e.src,onChange:function(e){return o.onChangeArrayObject("carouselImages",e,t,"src")}})})]})})})})),Object(X.jsx)(Y.a,{item:!0,children:Object(X.jsx)(et,{onClick:function(){o.onPushArray("carouselImages",{src:""})},children:Object(X.jsx)(Ee.a,{fontSize:"large"})})})]})})]})]}),"weather"===h&&Object(X.jsxs)(X.Fragment,{children:[Object(X.jsx)(Qe,{children:"Weather"}),Object(X.jsx)(Y.a,{container:!0,direction:"row",justify:"center",spacing:2,children:ct.map((function(e){return Object(X.jsx)(Y.a,{item:!0,children:Object(X.jsx)(Xe,{elevation:1,children:Object(X.jsxs)(Y.a,{container:!0,direction:"row",justify:"space-between",alignItems:"center",wrap:"nowrap",children:[Object(X.jsx)(Y.a,{item:!0,style:{flexGrow:"1",marginRight:"1rem"},children:e.options&&e.options.length?Object(X.jsxs)(Fe.a,{fullWidth:!0,children:[Object(X.jsx)(Le.a,{id:"".concat(e.key,"-select-label"),children:e.label}),Object(X.jsx)(Be.a,{labelId:"".concat(e.key,"-select-label"),id:"".concat(e.key,"-select"),value:i[e.key],defaultValue:e.options[0].key,onChange:function(t){return o.onChange(e.key,t)},children:e.options.map((function(e){return Object(X.jsx)(Te.a,{value:e.key,children:e.label})}))})]}):Object(X.jsx)(nt,{children:Object(X.jsx)(H.a,{label:e.label,value:i[e.key],type:e.type||"text",onChange:function(t){return o.onChange(e.key,t)}})})}),Object(X.jsx)(Y.a,{item:!0,children:Object(X.jsx)(Ke,{display:!0,children:Object(X.jsx)(Ne.a,{onClick:function(){return o.onReset(e.key)}})})})]})})})}))})]})]}),Object(X.jsx)(tt,{children:Object(X.jsx)(q.a,{color:"primary",onClick:function(){return j((function(e){return!e}))},children:"Toggle Preview"})}),u&&Object(X.jsx)(Ie,{config:i,catalog:r}),Object(X.jsx)(tt,{children:Object(X.jsx)(q.a,{variant:"contained",color:"primary",onClick:function(){return Ae()(JSON.stringify(i),"config.json")},children:"Download"})})]})};var ot=function(){var e=F(),t=L(),n=Object(P.a)(t,2),r=n[0],a=n[1],c=M(r),i=U(r);if(!r)return Object(X.jsx)(te,{open:!r,onSuccess:function(e){return a(e)}});switch(e){case"#config":return Object(X.jsx)(it,{defaultConfig:c,catalog:i});default:return Object(X.jsx)(Ie,{config:c,catalog:i,removeToken:function(){return a("")}})}},lt=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,479)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),r(e),a(e),c(e),i(e)}))};R.a.render(Object(X.jsx)(S.a.StrictMode,{children:Object(X.jsx)(ot,{})}),document.getElementById("root")),lt()}},[[415,1,2]]]);
//# sourceMappingURL=main.737ca501.chunk.js.map