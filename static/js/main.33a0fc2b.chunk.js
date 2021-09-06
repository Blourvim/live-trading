(this["webpackJsonplive-trading"]=this["webpackJsonplive-trading"]||[]).push([[0],{33:function(e,t,n){},34:function(e,t,n){},41:function(e,t,n){"use strict";n.r(t);var c=n(1),s=n.n(c),r=n(16),a=n.n(r),i=(n(33),n(34),n(6)),o=n(58),d=n(61),l=n(0),b=Object(o.a)({root:{backgroundColor:"#121621",borderBottomStyle:"solid",borderBottomWidth:"1px",borderBottomColor:"#292D38",display:"flex",paddingTop:"5px",paddingLeft:"7px"},text:{color:"white",margin:"0",padding:"0",textAlign:"center",fontSize:"0.56rem",textTransform:"uppercase"},glowText:{color:"white",margin:"0",padding:"0",textAlign:"center",fontSize:"0.6rem",textTransform:"uppercase",fontWeight:"600"},gridItem:{display:"flex"},star:{color:"#667280",margin:"0",padding:"0",textAlign:"start",fontSize:"0.6rem",textTransform:"uppercase"},end:{right:"-6px",position:"relative"}}),j=function(e){var t=b(),n=Object(c.useState)(!1),s=Object(i.a)(n,2),r=s[0],a=s[1],o=Object(c.useState)(!1),j=Object(i.a)(o,2),x=j[0],h=j[1];return Object(c.useEffect)((function(){var t=new WebSocket("wss://ws.bitstamp.net");return t.onopen=function(){t.send(JSON.stringify({event:"bts:subscribe",data:{channel:"live_trades_".concat(e.exchange)}}))},t.onmessage=function(e){var t=JSON.parse(e.data);if(0!==Object.entries(t.data).length){a(t),h(!0);var n=setTimeout((function(){h(!1)}),500);return function(){return clearTimeout(n)}}},t.onclose=function(){t.close()},function(){t.close()}}),[]),Object(l.jsxs)(d.a,{container:!0,className:t.root,alignContent:"center",children:[Object(l.jsx)(d.a,{item:!0,xs:1,children:Object(l.jsx)("span",{className:x?t.glowText:t.star,children:"\u2605"})}),Object(l.jsx)(d.a,{item:!0,xs:3,children:Object(l.jsxs)("p",{className:x?t.glowText:t.text,style:{marginLeft:"-20px"},children:[e.exchange.substring(0,3),"/",e.exchange.substring(3,7)]})}),Object(l.jsx)(d.a,{item:!0,xs:4,children:Object(l.jsx)("p",{className:x?t.glowText:t.text,children:r?r.data.amount:"None"})}),Object(l.jsx)(d.a,{item:!0,xs:4,children:Object(l.jsx)("div",{className:t.end,children:Object(l.jsx)("p",{className:x?t.glowText:t.text,children:r?r.data.price:"Yet"})})})]})},x=function(){return Object(l.jsx)("div",{children:["btcusd","btceur","btcgbp","gbpusd","gbpeur","eurusd","ethusd","etheur","ethbtc","ethgbp","ethpax","ethusdt","ethusdc","xrpusd","xrpeur","uniusd","unieur"].map((function(e,t){return Object(l.jsx)(j,{exchange:e},e)}))})},h=Object(o.a)({wrapper:{width:"100%",backgroundColor:"#121621"},picker:{display:"flex",background:"#1B1F2F",color:"#6A7584",fontSize:"0.7em",justifyContent:"space-between",border:"#292D38 1px solid",paddingRight:"5px",padding:"6px",fontWeight:"700"},legend:{height:"20px",backgroundColor:"#121621",borderBottomStyle:"solid",borderBottomWidth:"1px",borderBottomColor:"#292D38",display:"flex",paddingTop:"5px",paddingLeft:"7px",color:"#6A7584",justifyContent:"space-between",fontSize:"0.7rem"},search:{display:"flex",backgroundColor:"#121621"},form:{backgroundColor:"#292D38",color:"white",border:"none",width:"98%",height:"25px",margin:"5px auto",fontSize:"0.7rem"}}),p=function(){var e=h();return Object(l.jsxs)("div",{className:e.wrapper,children:[Object(l.jsx)("div",{className:e.search,children:Object(l.jsx)("input",{type:"text",className:e.form,placeholder:"\u2003\ud83d\udd0d\u2003Search"})}),Object(l.jsxs)("div",{className:e.picker,children:[Object(l.jsx)("span",{children:"\u2605"}),Object(l.jsx)("span",{style:{color:"white"},children:" BTC"}),Object(l.jsx)("span",{children:"ETH"}),Object(l.jsx)("span",{children:"NEO"}),Object(l.jsx)("span",{children:"USDT"}),Object(l.jsx)("span",{children:"DAI"}),Object(l.jsx)("span",{children:"PAX\u2003"})]}),Object(l.jsxs)("legend",{className:e.legend,children:[Object(l.jsx)("span",{children:"Pairs"}),Object(l.jsx)("span",{children:"Amount"}),Object(l.jsx)("span",{children:"Price\u2003"})]}),Object(l.jsx)(x,{})]})},u=n(27),m=function(){return Object(l.jsx)("div",{children:Object(l.jsx)(u.a,{widgetPropsAny:{newProp:!0}})})},O=n(43),g=Object(O.a)({formContainer:{backgroundColor:"#121621",height:"130px",padding:"5px"},form:{backgroundColor:"#292D38",border:"none",color:"white",borderRadius:"3px",width:"98%",height:"25px",margin:"px",fontSize:"0.8rem"},text:{color:"white",margin:"0",padding:"0",fontSize:"1.4vh"},button:{color:"white",background:"#292D38",borderWidth:"0px",borderRadius:"5px",width:"3.5rem",margin:"0 4px","&:hover":{background:"#B9B9BB",cursor:"pointer"}},bigButton:{color:"white",borderWidth:"0px",borderRadius:"5px",width:"100%",height:"30px",background:"#35DC83",marginTop:"10px",alignSelf:"center","&:hover":{background:"#159f49",cursor:"pointer"}},seperate:{justifyContent:"space-between",display:"flex",color:"white",padding:"0",marginBottom:"10px"},buttonContainer:{height:"20px",marginBottom:"15px"},adornment:{color:"white",zIndex:"2",position:"relative",float:"right",marginRight:"18px",marginTop:"-26px",fontSize:"0.9rem"}}),f=function(e){var t=e.isBuy,n=e.isMobile,c=g();return Object(l.jsxs)(d.a,{container:!0,style:{width:n?"50%":"100%"},className:c.formContainer,children:[Object(l.jsxs)(d.a,{item:!0,xs:12,className:c.flex,children:[Object(l.jsx)("input",{type:"text",className:c.form,placeholder:"\xa0Price"}),Object(l.jsx)("p",{className:c.adornment,children:"BTC"})]}),Object(l.jsxs)(d.a,{item:!0,xs:12,className:c.flex,children:[Object(l.jsx)("input",{type:"text",className:c.form,placeholder:"\xa0Amount"}),Object(l.jsx)("p",{className:c.adornment,children:"ETH"})]}),Object(l.jsxs)(d.a,{className:c.buttonContainer,item:!0,xs:12,children:[Object(l.jsx)("button",{className:c.button,children:"25%"}),Object(l.jsx)("button",{className:c.button,children:"50%"}),Object(l.jsx)("button",{className:c.button,children:"75%"}),Object(l.jsx)("button",{className:c.button,children:"100%"})]}),Object(l.jsxs)(d.a,{container:!0,justifyContent:"space-between",children:[Object(l.jsxs)(d.a,{className:c.seperate,item:!0,xs:5,children:[Object(l.jsx)("p",{className:c.text,children:"Available:"})," ",Object(l.jsx)("p",{className:c.text,children:"0 BTC = 0 USD"})]}),Object(l.jsxs)(d.a,{className:c.seperate,item:!0,xs:5,children:[Object(l.jsx)("p",{className:c.text,children:"Available:"})," ",Object(l.jsx)("p",{className:c.text,children:"0 BTC = 0 USD"})]}),Object(l.jsxs)(d.a,{className:c.seperate,item:!0,xs:5,children:[Object(l.jsx)("p",{className:c.text,children:"Available:"})," ",Object(l.jsx)("p",{className:c.text,children:"0 BTC = 0 USD"})]}),Object(l.jsxs)(d.a,{className:c.seperate,item:!0,xs:5,children:[Object(l.jsx)("p",{className:c.text,children:"Available:"})," ",Object(l.jsx)("p",{className:c.text,children:"0 BTC = 0 USD"})]})]}),Object(l.jsx)(d.a,{item:!0,xs:12,children:Object(l.jsx)("button",{style:{background:t?"#35DC83":"#DC2226"},className:c.bigButton,children:t?"BUY":"SELL"})})]})},N=n(63),v=n(62),w=Object(O.a)({container:{margin:"0px",paddingBottom:"15px",background:"#121621",width:"100%"},formContainer:{display:"flex",margin:"0px",padding:"0",background:"#121621"},divider:{height:"200px",width:"2px",background:"#333949",border:"none",alignSelf:"center"},tabs:{height:"18px",background:"#121621",display:"flex"},button:{border:"none",background:"#121621",color:"#5C5C61",fontSize:"12px",marginRight:"20px",marginBottom:"20px","&:hover":{color:"white",cursor:"pointer"}}}),y=function(){var e=w(),t=Object(v.a)("(min-width:630px)");return Object(l.jsxs)("div",{className:e.container,children:[Object(l.jsxs)("div",{className:e.tabs,children:[Object(l.jsx)("button",{style:{color:"white"},className:e.button,children:"Limit"}),Object(l.jsx)("button",{className:e.button,children:"Market"}),Object(l.jsx)("button",{className:e.button,children:"Stop Limit"}),Object(l.jsx)("button",{className:e.button,children:"Stop Market"})]}),Object(l.jsxs)(N.a,{className:e.formContainer,children:[Object(l.jsx)(f,{isMobile:t,isBuy:!0}),t&&Object(l.jsx)("div",{className:e.divider}),t&&Object(l.jsx)(f,{isMobile:t})]})]})},k=Object(O.a)({container:{background:"#292D38",height:"200px",width:"100%"},buttonContainer:{display:"flex",height:"30px",margin:"0 auto",width:"97%"},button:{background:"#292D38",border:"none",color:"#A4A4A4",marginRight:"40px","&:hover":{color:"white",cursor:"pointer"}},chart:{background:"#121621",width:"98%",margin:"0 auto",height:"160px",display:"flex",justifyContent:"space-between"},chartItem:{color:"#A4A4A4",display:"flex",margin:"5px",fontSize:"0.9rem"},list:{listStyle:"none",display:"inline"}}),S=function(){var e=k();return Object(l.jsxs)("div",{className:e.container,children:[Object(l.jsxs)("div",{className:e.buttonContainer,children:[Object(l.jsx)("button",{style:{color:"white"},className:e.button,children:"Open Orders"}),Object(l.jsx)("button",{className:e.button,children:"Close Orders"}),Object(l.jsx)("button",{className:e.button,children:"Order History"}),Object(l.jsx)("button",{className:e.button,children:"Balance"})]}),Object(l.jsxs)("div",{className:e.chart,children:[Object(l.jsx)("span",{className:e.chartItem,children:"Time"}),Object(l.jsx)("span",{className:e.chartItem,children:"All Pairs"}),Object(l.jsx)("span",{className:e.chartItem,children:"All Types"}),Object(l.jsx)("span",{className:e.chartItem,children:"Buy/Sell"}),Object(l.jsx)("span",{className:e.chartItem,children:"Price"}),Object(l.jsx)("span",{className:e.chartItem,children:"Amount"}),Object(l.jsx)("span",{className:e.chartItem,children:"Executed"}),Object(l.jsx)("span",{className:e.chartItem,children:"Unexecuted"})]})]})},C=Object(o.a)({root:{height:"20px",width:"100%",backgroundColor:"#121621",borderBottomStyle:"solid",borderBottomWidth:"1px",borderBottomColor:"#292D38",display:"flex",justifyContent:"flex-end",color:"white"},green:{height:"20px",background:"#206447"},red:{height:"20px",background:"#601E26"},numbersDiv:{position:"absolute",display:"flex",width:"220px",justifyContent:"space-between"}}),B=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object(i.a)(e.data,2),n=t[0],c=t[1],s=e.type,r=e.index,a=C(),o="green"===s,d="".concat(o?10+10*r:80-10*r,"%");return Object(l.jsxs)("div",{className:a.root,children:[Object(l.jsx)("div",{className:o?a.green:a.red,style:{width:d}}),Object(l.jsxs)("div",{className:a.numbersDiv,children:[Object(l.jsx)("span",{children:n}),Object(l.jsx)("span",{children:c}),Object(l.jsx)("span",{children:Math.floor(n*c*1e7)})]})]})},T=function(e){var t=e.data,n=e.type,c=t.slice(0,8);return Object(l.jsx)(l.Fragment,{children:c.map((function(e,t){return Object(l.jsx)(B,{index:t,type:n,data:e})}))})},D=Object(o.a)({root:{background:"#292D38",color:"white",width:"100%",fontSize:"0.7em"},legend:{display:"flex",justifyContent:"space-between",background:"#121621",padding:"6px",color:"#46566A",fontSize:"0.7em"},center:{justifyContent:"space-between",display:"flex",fontSize:"0.7em",backgroundColor:"#121621",borderBottomStyle:"solid",borderBottomWidth:"1px",borderBottomColor:"#292D38"},header:{margin:"0px",padding:"4px"}}),A=function(){var e=D(),t=Object(c.useState)(!1),n=Object(i.a)(t,2),s=n[0],r=n[1];return Object(c.useEffect)((function(){var e=new WebSocket("wss://ws.bitstamp.net");return e.onopen=function(){e.send(JSON.stringify({event:"bts:subscribe",data:{channel:"order_book_ethbtc"}}))},e.onmessage=function(e){var t=JSON.parse(e.data);t.data.bids&&r(t.data)},e.onclose=function(){e.close()},function(){e.close()}}),[]),Object(l.jsxs)("div",{className:e.root,children:[Object(l.jsx)("p",{className:e.header,children:"OrderBook"}),Object(l.jsxs)("legend",{className:e.legend,children:[Object(l.jsx)("span",{children:"Price(BTC)"}),Object(l.jsx)("span",{children:"Amount(ETH)"}),Object(l.jsx)("span",{children:"PMBB(ETH)"})]}),s&&Object(l.jsx)(T,{type:"red",data:s.asks}),Object(l.jsx)("div",{className:e.center}),s&&Object(l.jsx)(T,{type:"green",data:s.bids})]})},z=Object(o.a)({root:{background:"#121621",color:"white",padding:"5px",paddingBottom:"10px",borderBottomStyle:"solid",borderBottomWidth:"1px",borderBottomColor:"#292D38",fontSize:"0.7rem",paddingLeft:"10px"},background:{background:"#292D38"}}),I=function(e){var t=z();return Object(l.jsxs)("div",{className:t.root,children:[Object(l.jsx)("span",{style:{fontWeight:"700"},children:"Lorem Ipsum"}),Object(l.jsx)("p",{children:"Lorem ipsum dolar sit amet consequeter requiem emperio dor serene"}),Object(l.jsx)("div",{className:t.background,children:Object(l.jsx)("span",{children:"01-20-200-19:42:22"})})]})},L=Object(o.a)({root:{},header:{fontWeight:"700",background:"#292D38",color:"white",fontSize:"0.7rem",paddingLeft:"7px"}}),W=function(){var e=L();return Object(l.jsxs)("div",{className:e.root,children:[Object(l.jsx)("header",{className:e.header,children:"Market News"}),Object(l.jsx)(I,{}),Object(l.jsx)(I,{}),Object(l.jsx)(I,{})]})},E=Object(o.a)({column:{width:"10px"}}),P=function(e){var t=e.color,n=e.height,c=E();return Object(l.jsx)("div",{style:{background:"".concat(t),height:"".concat(n,"px")},className:c.column})},M=Object(o.a)({root:{background:"#292D38",color:"white",width:"100%",height:"200px"},chart:{display:"flex",fledirection:"column-reverse",height:"200px",width:"97%",background:"#121621",margin:"0 auto",WebkitTransform:"rotate(180deg)"},title:{color:"#8C8F96",fontSize:"0.7rem",paddingLeft:"10px",marginBottom:"4px"},subTitle:{color:"white",fontSize:"0.7rem",paddingLeft:"10px"},titles:{paddingBottom:"5px"}}),R=function(){var e=M(),t=Object(c.useState)(!1),n=Object(i.a)(t,2),s=n[0],r=n[1];return Object(c.useEffect)((function(){var e=new WebSocket("wss://ws.bitstamp.net");return e.onopen=function(){e.send(JSON.stringify({event:"bts:subscribe",data:{channel:"order_book_ethbtc"}}))},e.onmessage=function(e){var t=JSON.parse(e.data);t.data&&r(t.data)},e.onclose=function(){e.close()},function(){e.close()}}),[]),Object(l.jsxs)("div",{className:e.root,children:[Object(l.jsxs)("div",{className:e.titles,children:[Object(l.jsx)("span",{className:e.title,children:"Recent Trades"}),Object(l.jsx)("span",{className:e.subTitle,children:"Market Depth"})]}),Object(l.jsxs)("div",{className:e.chart,children:[s.asks&&s.bids.map((function(e){return Object(l.jsx)(P,{color:"red",height:e[1]})})),s.asks&&s.asks.map((function(e){return Object(l.jsx)(P,{color:"green",height:e[1]})}))]})]})},F=function(){return Object(l.jsxs)(d.a,{container:!0,children:[Object(l.jsxs)(d.a,{item:!0,xs:12,md:2,children:[Object(l.jsx)(p,{}),Object(l.jsx)(W,{})]}),Object(l.jsxs)(d.a,{item:!0,xs:12,md:8,children:[Object(l.jsx)(m,{}),Object(l.jsx)(y,{}),Object(l.jsx)(S,{})]}),Object(l.jsxs)(d.a,{item:!0,xs:12,md:2,children:[Object(l.jsx)(A,{}),Object(l.jsx)(R,{})]})]})};var J=function(){return Object(l.jsx)(l.Fragment,{children:Object(l.jsx)(F,{style:{background:"#121621"}})})},U=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,64)).then((function(t){var n=t.getCLS,c=t.getFID,s=t.getFCP,r=t.getLCP,a=t.getTTFB;n(e),c(e),s(e),r(e),a(e)}))},_=n(26),H=n(15),q=n(25),Y=n(10),X=[],G=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:X,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"UPDATE_ORDERS":return Object(Y.a)(Object(Y.a)({},e),{},{new:t.payload});default:return e}},K=Object(H.b)({data:G}),Q=Object(H.c)(K,{},Object(H.a)(q.a));a.a.render(Object(l.jsx)(s.a.StrictMode,{children:Object(l.jsx)(_.a,{store:Q,children:Object(l.jsx)(J,{})})}),document.getElementById("root")),U()}},[[41,1,2]]]);
//# sourceMappingURL=main.33a0fc2b.chunk.js.map