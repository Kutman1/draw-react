(this.webpackJsonppaint=this.webpackJsonppaint||[]).push([[0],{74:function(t,e,n){},80:function(t,e,n){},81:function(t,e,n){},83:function(t,e,n){"use strict";n.r(e);var a=n(0),c=n.n(a),s=n(9),o=n.n(s),r=n(8),i=(n(74),n(40)),l=n(10),u="SET_CANVAS",d="SET_TOOLBAR",h="SET_COLOR",v="SET_WIDTH",f="UNDO",j="REDO",b="PUSH_UNDO",g="SET_SOCKET",p="SET_SESSIONID",w="UPDATE_UNDO_CANVAS",O="UPDATE_REDO_CANVAS",x="UPDATE_TEXTAREA",m="UPDATE_TEXT",y="SET_TOOL",C=function(t){return function(e){e({type:d,payload:{tool:t}})}},k=function(t){return{type:v,payload:{width:t}}},L=function(t,e){return{type:x,payload:{x:t,y:e}}},D=function(t){return{type:m,payload:{text:t}}},S=function(t){return{type:y,payload:{tool:t}}},H=n(2),T=function(){return Object(H.jsxs)("svg",{width:"25",height:"25",viewBox:"0 0 25 25",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[Object(H.jsx)("path",{d:"M23.4761 0.227766C23.6579 0.0649669 23.8848 -0.0151916 24.114 0.00238078C24.3432 0.0199532 24.5589 0.134044 24.7206 0.323176C24.8818 0.507435 24.98 0.752993 24.9972 1.01459C25.0145 1.27619 24.9496 1.5362 24.8145 1.74669C23.2654 4.16629 18.2595 11.8468 14.2363 16.5085C13.0675 17.8633 11.8987 18.8804 11.023 19.554C10.1867 20.2009 9.10189 20.0005 8.39075 19.1781C7.70595 18.3843 7.51828 17.1802 8.04176 16.2337C8.61133 15.1995 9.5019 13.8046 10.7448 12.4612C14.8947 7.97696 21.4053 2.08063 23.4761 0.227766Z",fill:"black"}),Object(H.jsx)("path",{d:"M9.95628 21.1836C9.95628 22.1958 9.60941 23.1665 8.99198 23.8822C8.37455 24.5979 7.53714 25 6.66396 25C5.0178 25 3.37165 25 0.902409 24.0459C-1.56683 23.0918 1.72549 22.1377 2.54857 21.1836C3.37165 20.2295 4.84496 17.3672 6.66396 17.3672C7.53714 17.3672 8.37455 17.7693 8.99198 18.485C9.60941 19.2007 9.95628 20.1714 9.95628 21.1836Z",fill:"black"})]})},M=function(){return Object(H.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",viewBox:"0 0 512 512",children:Object(H.jsx)("path",{d:"M256,0C114.833,0,0,114.844,0,256s114.833,256,256,256s256-114.844,256-256S397.167,0,256,0z M256,490.667\r C126.604,490.667,21.333,385.396,21.333,256S126.604,21.333,256,21.333S490.667,126.604,490.667,256S385.396,490.667,256,490.667z\r "})})},X=function(){return Object(H.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",viewBox:"0 0 60 60",children:Object(H.jsx)("path",{d:"M49.001,0H10.999C4.934,0,0,4.934,0,10.999v38.003C0,55.066,4.934,60,10.999,60h38.002C55.065,60,60,55.066,60,49.001\r V10.999C60,4.934,55.065,0,49.001,0z M58,49.001C58,53.963,53.963,58,49.001,58H10.999C6.037,58,2,53.963,2,49.001V10.999\r C2,6.037,6.037,2,10.999,2h38.002C53.963,2,58,6.037,58,10.999V49.001z"})})},N=function(){return Object(H.jsx)("svg",{height:"511pt",viewBox:"0 -10 511.98685 511",width:"511pt",xmlns:"http://www.w3.org/2000/svg",children:Object(H.jsx)("path",{d:"m114.59375 491.140625c-5.609375 0-11.179688-1.75-15.933594-5.1875-8.855468-6.417969-12.992187-17.449219-10.582031-28.09375l32.9375-145.089844-111.703125-97.960937c-8.210938-7.167969-11.347656-18.519532-7.976562-28.90625 3.371093-10.367188 12.542968-17.707032 23.402343-18.710938l147.796875-13.417968 58.433594-136.746094c4.308594-10.046875 14.121094-16.535156 25.023438-16.535156 10.902343 0 20.714843 6.488281 25.023437 16.511718l58.433594 136.769532 147.773437 13.417968c10.882813.980469 20.054688 8.34375 23.425782 18.710938 3.371093 10.367187.253906 21.738281-7.957032 28.90625l-111.703125 97.941406 32.9375 145.085938c2.414063 10.667968-1.726562 21.699218-10.578125 28.097656-8.832031 6.398437-20.609375 6.890625-29.910156 1.300781l-127.445312-76.160156-127.445313 76.203125c-4.308594 2.558594-9.109375 3.863281-13.953125 3.863281zm141.398438-112.875c4.84375 0 9.640624 1.300781 13.953124 3.859375l120.277344 71.9375-31.085937-136.941406c-2.21875-9.746094 1.089843-19.921875 8.621093-26.515625l105.472657-92.5-139.542969-12.671875c-10.046875-.917969-18.6875-7.234375-22.613281-16.492188l-55.082031-129.046875-55.148438 129.066407c-3.882812 9.195312-12.523438 15.511718-22.546875 16.429687l-139.5625 12.671875 105.46875 92.5c7.554687 6.613281 10.859375 16.769531 8.621094 26.539062l-31.0625 136.9375 120.277343-71.914062c4.308594-2.558594 9.109376-3.859375 13.953126-3.859375zm-84.585938-221.847656s0 .023437-.023438.042969zm169.128906-.0625.023438.042969c0-.023438 0-.023438-.023438-.042969zm0 0"})})},Y=function(){return Object(H.jsx)("svg",{width:"25",height:"25",viewBox:"0 0 25 25",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(H.jsx)("path",{d:"M25 7.89269C24.9992 7.60318 24.9436 7.31669 24.8364 7.04977C24.7292 6.78284 24.5725 6.54075 24.3754 6.33748L18.9545 0.622084C18.5535 0.222743 18.021 0 17.4673 0C16.9136 0 16.381 0.222743 15.9801 0.622084L0.617192 16.6641C0.224855 17.0777 0.00470951 17.6367 0.00470951 18.2193C0.00470951 18.8019 0.224855 19.3609 0.617192 19.7745L4.11214 23.4448H0.743605C0.546389 23.4448 0.35725 23.5267 0.217797 23.6725C0.0783438 23.8184 0 24.0162 0 24.2224C0 24.4286 0.0783438 24.6264 0.217797 24.7722C0.35725 24.9181 0.546389 25 0.743605 25H19.3337C19.5309 25 19.7201 24.9181 19.8595 24.7722C19.999 24.6264 20.0773 24.4286 20.0773 24.2224C20.0773 24.0162 19.999 23.8184 19.8595 23.6725C19.7201 23.5267 19.5309 23.4448 19.3337 23.4448H10.9607L24.3456 9.4479C24.5482 9.24723 24.7103 9.00631 24.8227 8.73926C24.9351 8.47222 24.9953 8.18441 25 7.89269ZM8.85634 23.4448H6.21654L1.67311 18.6936C1.61488 18.6329 1.56868 18.5608 1.53715 18.4814C1.50562 18.402 1.48939 18.3169 1.48939 18.2309C1.48939 18.145 1.50562 18.0599 1.53715 17.9805C1.56868 17.9011 1.61488 17.829 1.67311 17.7683L5.77038 13.4759L12.0836 20.07L8.85634 23.4448ZM23.3269 8.3126L13.1321 18.9736L6.82629 12.3717L17.0137 1.71851C17.1327 1.59922 17.2912 1.53262 17.4561 1.53262C17.621 1.53262 17.7795 1.59922 17.8986 1.71851L23.3269 7.38725C23.4448 7.51135 23.5116 7.67885 23.5128 7.85381C23.5128 7.93942 23.4964 8.02416 23.4645 8.10298C23.4325 8.1818 23.3857 8.25309 23.3269 8.3126Z",fill:"black"})})},I=function(){return Object(H.jsx)("svg",{width:"22",height:"19",viewBox:"0 0 22 19",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(H.jsx)("path",{d:"M19.1274 0.158655L0.193206 15.7068C0.0869428 15.7941 0.0951929 15.9814 0.21154 16.1231L1.69232 17.9263C1.80866 18.068 1.9908 18.1126 2.09706 18.0253L21.0313 2.47713C21.1375 2.38987 21.1293 2.20255 21.0129 2.06087L19.5322 0.257609C19.4158 0.115924 19.2337 0.0713948 19.1274 0.158655Z",fill:"black"})})},_=function(){return Object(H.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",children:[Object(H.jsx)("path",{d:"M198.718,293.281H20c-11.046,0-20,8.954-20,20V492c0,11.046,8.954,20,20,20h178.718c11.046,0,20-8.954,20-20V313.281\r C218.718,302.235,209.764,293.281,198.718,293.281z M178.718,472H40V333.281h138.718V472z"}),Object(H.jsx)("path",{d:"M304.511,299.139c-7.81-7.811-20.473-7.81-28.284,0c-7.811,7.81-7.811,20.474,0,28.284l171.844,171.845\r c7.81,7.809,20.472,7.811,28.284,0c7.811-7.81,7.811-20.474,0-28.285L304.511,299.139z"}),Object(H.jsx)("path",{d:"M509.889,212.687L409.073,11.056C405.685,4.28,398.76,0,391.185,0s-14.5,4.28-17.889,11.056L272.48,212.687\r c-3.1,6.2-2.769,13.563,0.875,19.459c3.645,5.896,10.082,9.485,17.013,9.485H492c6.932,0,13.369-3.589,17.013-9.485\r C512.657,226.249,512.988,218.887,509.889,212.687z M322.73,201.631l68.455-136.909l68.455,136.909H322.73z"}),Object(H.jsx)("path",{d:"M120.815,0C54.198,0,0,54.197,0,120.815S54.198,241.63,120.815,241.63S241.63,187.433,241.63,120.815\r S187.433,0,120.815,0z M120.815,201.631C76.253,201.631,40,165.377,40,120.815S76.253,40,120.815,40s80.815,36.254,80.815,80.815\r C201.63,165.376,165.377,201.631,120.815,201.631z"})]})},E=function(){return Object(H.jsx)("svg",{height:"496pt",viewBox:"0 0 496 496.00305",width:"496pt",xmlns:"http://www.w3.org/2000/svg",children:Object(H.jsx)("path",{d:"m406.027344 134.035156c-33.34375-26.613281-72.457032-45.042968-114.207032-53.816406-30.4375-4.339844-61.089843-6.996094-91.816406-7.953125v-64.265625c0-3.132812-1.828125-5.980469-4.679687-7.277344-2.855469-1.300781-6.203125-.816406-8.570313 1.238282l-184 160c-1.746094 1.519531-2.753906 3.722656-2.753906 6.039062 0 2.320312 1.007812 4.523438 2.753906 6.042969l184 160c2.367188 2.054687 5.714844 2.539062 8.570313 1.238281 2.851562-1.296875 4.679687-4.144531 4.679687-7.28125v-64c32.0625-.582031 63.746094 7.03125 92.039063 22.128906 39.726562 21.34375 71.855469 54.484375 91.960937 94.847656 11.730469 25.308594 17.707032 52.90625 17.496094 80.800782.054688 8.433594-.414062 16.859375-1.410156 25.234375-.410156 3.285156 1.246094 6.484375 4.171875 8.046875 2.921875 1.5625 6.5 1.160156 9.007812-1.007813 51.945313-44.195312 82.132813-108.769531 82.734375-176.96875-.664062-71.507812-33.765625-138.84375-89.976562-183.046875zm11.375 334.144532c.050781-2.082032.074218-4.214844.074218-6.402344.210938-30.246094-6.277343-60.164063-19.007812-87.597656-21.535156-43.378907-55.988281-79.015626-98.617188-102-32.148437-17.128907-68.246093-25.46875-104.648437-24.179688h-3.3125c-4.375.0625-7.886719 3.628906-7.886719 8v54.449219l-163.808594-142.449219 163.808594-142.445312v54.445312c0 4.347656 3.464844 7.898438 7.808594 8 32.332031.882812 64.597656 3.503906 96.648438 7.859375 39.304687 8.25 76.132812 25.582031 107.542968 50.613281 52.421875 41.191406 83.320313 103.945313 84 170.609375-.058594 56.664063-22.566406 110.996094-62.601562 151.097657zm0 0"})})},R=function(){return Object(H.jsx)("svg",{height:"496pt",viewBox:"0 0 496 496.00305",width:"496pt",xmlns:"http://www.w3.org/2000/svg",children:Object(H.jsx)("path",{d:"m493.25 161.960938-184-160c-2.367188-2.054688-5.714844-2.539063-8.566406-1.238282-2.851563 1.296875-4.683594 4.144532-4.683594 7.277344v64.265625c-30.722656.957031-61.375 3.613281-91.804688 7.953125-41.753906 8.773438-80.871093 27.203125-114.21875 53.816406-56.210937 44.203125-89.308593 111.539063-89.976562 183.046875.609375 68.203125 30.808594 132.777344 82.761719 176.96875 2.503906 2.167969 6.085937 2.570313 9.007812 1.007813s4.578125-4.761719 4.167969-8.046875c-.992188-8.375-1.464844-16.800781-1.40625-25.234375-.222656-27.894532 5.746094-55.488282 17.46875-80.800782 20.109375-40.351562 52.234375-73.480468 91.953125-94.824218 28.292969-15.105469 59.980469-22.730469 92.046875-22.152344v64c0 3.136719 1.832031 5.984375 4.683594 7.28125 2.851562 1.300781 6.199218.816406 8.566406-1.238281l184-160c1.75-1.519531 2.753906-3.722657 2.753906-6.042969 0-2.316406-1.003906-4.519531-2.753906-6.039062zm-181.25 148.488281v-54.449219c0-4.386719-3.53125-7.953125-7.917969-8-43.382812-.261719-77.679687 7.273438-107.9375 24.179688-42.621093 22.988281-77.074219 58.621093-98.605469 102-12.730468 27.433593-19.222656 57.351562-19.007812 87.597656 0 2.183594.023438 4.316406.070312 6.402344-40.03125-40.101563-62.542968-94.433594-62.601562-151.097657.679688-66.664062 31.578125-129.417969 84-170.609375 31.402344-25.027344 68.222656-42.359375 107.523438-50.613281 32.058593-4.355469 64.328124-6.976563 96.671874-7.859375 4.339844-.101562 7.808594-3.652344 7.804688-8v-54.445312l163.808594 142.445312zm0 0"})})},U=function(){return Object(H.jsxs)("svg",{id:"light",enableBackground:"new 0 0 24 24",height:"512",viewBox:"0 0 24 24",width:"512",xmlns:"http://www.w3.org/2000/svg",children:[Object(H.jsx)("path",{d:"m12 24c-6.617 0-12-5.383-12-12s5.383-12 12-12 12 5.383 12 12-5.383 12-12 12zm0-23c-6.065 0-11 4.935-11 11s4.935 11 11 11 11-4.935 11-11-4.935-11-11-11z"}),Object(H.jsx)("path",{d:"m16.5 8h-9c-.276 0-.5-.224-.5-.5s.224-.5.5-.5h9c.276 0 .5.224.5.5s-.224.5-.5.5z"}),Object(H.jsx)("path",{d:"m16.5 12.5h-9c-.276 0-.5-.224-.5-.5s.224-.5.5-.5h9c.276 0 .5.224.5.5s-.224.5-.5.5z"}),Object(H.jsx)("path",{d:"m16.5 17h-9c-.276 0-.5-.224-.5-.5s.224-.5.5-.5h9c.276 0 .5.224.5.5s-.224.5-.5.5z"})]})},P=function(){return Object(H.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"42",height:"42",viewBox:"0 0 42 42",children:Object(H.jsx)("path",{d:"M29.92 11.75v4.52h-.57a8.31 8.31 0 0 0-.89-2 3.36 3.36 0 0 0-1.35-1.07 4.51 4.51 0 0 0-1.68-.2h-2.37v13.32a5.26 5.26 0 0 0 .15 1.68 3.24 3.24 0 0 0 .57.9 1.73 1.73 0 0 0 1.15.58h1.25v.81H16v-.85h1.09a1.85 1.85 0 0 0 1.2-.6 2.06 2.06 0 0 0 .5-.77 7.06 7.06 0 0 0 .12-1.75V13h-2.3a3.63 3.63 0 0 0-2.51.56 5.86 5.86 0 0 0-1.39 2.74h-.63v-4.55h17.84m.95-.95H11.13v6.42h2.37l.17-.73a5 5 0 0 1 1.11-2.26 3.23 3.23 0 0 1 1.86-.3H18v12.39a7.37 7.37 0 0 1-.07 1.44 1.11 1.11 0 0 1-.26.39 1 1 0 0 1-.54.34h-2v2.71h12.01v-2.71h-2.2a.82.82 0 0 1-.49-.31 2.32 2.32 0 0 1-.37-.62 7 7 0 0 1-.08-1.24v-12.4h1.43a4.34 4.34 0 0 1 1.27.08 2.41 2.41 0 0 1 1 .76 7.44 7.44 0 0 1 .77 1.79l.21.66h2.2V10.8z"})})},z=n(13),B=n(15),J=n(18),A=n(17),V=function t(e,n,a,c){var s=this;Object(z.a)(this,t),this.destroyEvents=function(){s.canvas.onkeydown=null,s.canvas.onmousemove=null,s.canvas.onmousedown=null,s.canvas.onmouseup=null},this.canvas=e,this.socket=n,this.id=a,this.updateColor=c,this.ctx=e.getContext("2d"),this.destroyEvents()},W=function(t){Object(J.a)(n,t);var e=Object(A.a)(n);function n(t,a,c){var s;return Object(z.a)(this,n),(s=e.call(this,t,a,c)).mouseUpHandler=function(t){s.mouseDown=!1,s.socket.send(JSON.stringify({method:"draw",id:s.id,figure:{type:"circle",x:s.startX,y:s.startY,r:s.r,color:s.ctx.fillStyle}}))},s.mouseDownHandler=function(t){s.mouseDown=!0,s.ctx.beginPath(),s.startX=t.pageX-t.target.offsetLeft,s.startY=t.pageY-t.target.offsetTop,s.saved=s.canvas.toDataURL()},s.mouseMoveHandler=function(t){s.mouseDown&&(s.currentX=t.pageX-t.target.offsetLeft,s.currentY=t.pageY-t.target.offsetTop,s.width=s.currentX-s.startX,s.height=s.currentY-s.startY,s.r=Math.sqrt(Math.pow(s.width,2)+Math.pow(s.height,2)),s.draw(s.startX,s.startY,s.r))},s.draw=function(t,e,n){var a=new Image;a.src=s.saved,a.onload=function(){s.ctx.clearRect(0,0,s.canvas.width,s.canvas.height),s.ctx.drawImage(a,0,0,s.canvas.width,s.canvas.height),s.ctx.beginPath(),s.ctx.arc(t,e,n,0,2*Math.PI),s.ctx.stroke()}},s.listen(),s}return Object(B.a)(n,[{key:"listen",value:function(){this.canvas.onmousemove=this.mouseMoveHandler,this.canvas.onmousedown=this.mouseDownHandler,this.canvas.onmouseup=this.mouseUpHandler}}],[{key:"staticDraw",value:function(t,e,n,a,c){t.fillStyle=c,t.beginPath(),t.arc(e,n,a,0,2*Math.PI),t.stroke()}}]),n}(V),Z=n(44),F=function(t){Object(J.a)(n,t);var e=Object(A.a)(n);function n(t,a,c){var s;return Object(z.a)(this,n),(s=e.call(this,t,a,c)).mouseUpHandler=function(t){console.log(Object(Z.a)(s)),s.mouseDown=!1,s.socket.send(JSON.stringify({method:"draw",id:s.id,figure:{type:"rect",x:s.startX,y:s.startY,w:s.width,h:s.height,color:s.ctx.fillStyle}}))},s.mouseDownHandler=function(t){s.mouseDown=!0,s.ctx.beginPath(),s.startX=t.pageX-t.target.offsetLeft,s.startY=t.pageY-t.target.offsetTop,s.saved=s.canvas.toDataURL()},s.mouseMoveHandler=function(t){if(s.mouseDown){var e=t.pageX-t.target.offsetLeft,n=t.pageY-t.target.offsetTop;s.width=e-s.startX,s.height=n-s.startY,s.draw(s.startX,s.startY,s.width,s.height)}},s.draw=function(t,e,n,a){var c=new Image;c.src=s.saved,c.onload=function(){s.ctx.clearRect(0,0,s.canvas.width,s.canvas.height),s.ctx.drawImage(c,0,0,s.canvas.width,s.canvas.height),s.ctx.beginPath(),s.ctx.rect(t,e,n,a),s.ctx.stroke()}},s.listen(),s}return Object(B.a)(n,[{key:"listen",value:function(){this.canvas.onmousemove=this.mouseMoveHandler,this.canvas.onmousedown=this.mouseDownHandler,this.canvas.onmouseup=this.mouseUpHandler}}],[{key:"staticDraw",value:function(t,e,n,a,c,s){t.fillStyle=s,t.beginPath(),t.rect(e,n,a,c),t.stroke()}}]),n}(V),q=function(t){Object(J.a)(n,t);var e=Object(A.a)(n);function n(t,a,c){var s;return Object(z.a)(this,n),(s=e.call(this,t,a,c)).mouseUpHandler=function(t){s.mouseDown=!1,s.socket.send(JSON.stringify({method:"draw",id:s.id,figure:{type:"star",cx:s.startX,cy:s.startY,spikes:5,color:s.ctx.strokeStyle,outerRadius:30,innerRadius:15}}))},s.mouseDownHandler=function(t){s.mouseDown=!0,s.ctx.beginPath(),s.startX=t.pageX-t.target.offsetLeft,s.startY=t.pageY-t.target.offsetTop,s.saved=s.canvas.toDataURL()},s.mouseMoveHandler=function(t){s.mouseDown&&(s.currentX=t.pageX-t.target.offsetLeft,s.currentY=t.pageY-t.target.offsetTop,s.width=s.currentX-s.startX,s.height=s.currentY-s.startY,s.r=Math.sqrt(Math.pow(s.width,2)+Math.pow(s.height,2)))},s.draw=function(t,e,n){var a=new Image;a.src=s.saved,a.onload=function(){s.ctx.clearRect(0,0,s.canvas.width,s.canvas.height),s.ctx.drawImage(a,0,0,s.canvas.width,s.canvas.height),s.ctx.beginPath(),s.ctx.arc(t,e,n,0,2*Math.PI),s.ctx.stroke()}},s.listen(),s}return Object(B.a)(n,[{key:"listen",value:function(){this.canvas.onmousemove=this.mouseMoveHandler,this.canvas.onmousedown=this.mouseDownHandler,this.canvas.onmouseup=this.mouseUpHandler}}],[{key:"staticDraw",value:function(t,e,n,a,c,s,o){var r=Math.PI/2*3,i=e,l=n,u=Math.PI/a;t.strokeSyle="#000",t.beginPath(),t.moveTo(e,n-c);for(var d=0;d<a;d++)i=e+Math.cos(r)*c,l=n+Math.sin(r)*c,t.lineTo(i,l),r+=u,i=e+Math.cos(r)*s,l=n+Math.sin(r)*s,t.lineTo(i,l),r+=u;t.lineTo(e,n-c),t.closePath(),t.lineWidth=5,t.strokeStyle=o,t.stroke(),t.fillStyle=o}}]),n}(V),K=n(110),$=n(113),G=function(t){var e=t.open,n=t.close;return Object(H.jsx)(K.a,{className:"drawer",anchor:"left",open:e,onClose:n,children:Object(H.jsxs)("div",{className:"drawer__header",children:[Object(H.jsx)("div",{children:"Draw.K"}),Object(H.jsxs)("div",{onClick:n,children:[" ",Object(H.jsx)($.a,{})]})]})})},Q=n(16),tt=n(114),et=Object(Q.a)({root:{color:"#3897f0",height:8},thumb:{height:24,width:24,backgroundColor:"#fff",border:"2px solid currentColor",marginTop:-8,marginLeft:-12,"&:focus, &:hover, &$active":{boxShadow:"inherit"}},active:{},valueLabel:{left:"calc(-50% + 4px)"},track:{height:8,borderRadius:4},rail:{height:8,borderRadius:4}})(tt.a),nt=function(){var t=Object(l.c)((function(t){return t.toolbar.selectedTool})),e=Object(a.useState)(!1),n=Object(i.a)(e,2),c=n[0],s=n[1],o=Object(l.c)((function(t){return t.canvas})),r=Object(l.c)((function(t){return t.canvas.canvas})),u=Object(l.b)(),d=Object(a.useState)(null),h=Object(i.a)(d,2),v=h[0],f=h[1],j=function(t,e){u(C(t)),f(e)},b=function(){return s(!c)};return Object(H.jsxs)("div",{className:"settingBar",children:[Object(H.jsx)("div",{className:"settingBar__header",children:Object(H.jsx)("div",{className:"settingBar__hamburger",onClick:b,children:Object(H.jsx)(U,{})})}),[1,2,3].includes(t)&&Object(H.jsx)("div",{className:"weight-slider",children:Object(H.jsx)(et,{valueLabelDisplay:"auto",min:1,max:50,onChange:function(t,e){return u(k(e))},"aria-label":"pretto slider",defaultValue:1})}),4===t&&Object(H.jsxs)("div",{className:"settingBar__figure",children:[Object(H.jsx)("div",{className:"settingBar__circle ".concat(1===v&&"activeFigure"),onClick:function(){return j(new W(r,o.socket,o.sessionId),1)},children:Object(H.jsx)(M,{})}),Object(H.jsx)("div",{className:"settingBar__square ".concat(2===v&&"activeFigure"),onClick:function(){return j(new F(r,o.socket,o.sessionId),2)},children:Object(H.jsx)(X,{})}),Object(H.jsx)("div",{className:"settingBar__star ".concat(3===v&&"activeFigure"),onClick:function(){return j(new q(r,o.socket,o.sessionId),3)},children:Object(H.jsx)(N,{})})]}),Object(H.jsx)(G,{open:c,close:b})]})},at=(n(80),function(t){Object(J.a)(n,t);var e=Object(A.a)(n);function n(t,a,c,s){var o;return Object(z.a)(this,n),(o=e.call(this,t,a,c,s)).mouseLeaveHandler=function(){o.mouseDown=!1},o.mouseUpHandler=function(t){o.mouseDown=!1,o.socket.send(JSON.stringify({method:"draw",id:o.id,figure:{type:"finish"}}))},o.mouseDownHandler=function(t){o.mouseDown=!0,o.ctx.beginPath(),o.ctx.moveTo(t.pageX-t.target.offsetLeft,t.pageY-t.target.offsetTop)},o.mouseMoveHandler=function(t){o.mouseDown&&(console.log(t.pageX-t.target.offsetLeft),console.log(t.pageY-t.target.offsetTop),o.socket.send(JSON.stringify({method:"draw",id:o.id,figure:{type:"brush",x:t.pageX-t.target.offsetLeft,y:t.pageY-t.target.offsetTop}})))},o.listen(),o}return Object(B.a)(n,[{key:"listen",value:function(){this.canvas.onmousemove=this.mouseMoveHandler,this.canvas.onmouseleave=this.mouseLeaveHandler,this.canvas.onmousedown=this.mouseDownHandler,this.canvas.onmouseup=this.mouseUpHandler}}]),n}(V));at.draw=function(t,e,n){t.lineTo(e,n),t.stroke()};var ct=function(t){Object(J.a)(n,t);var e=Object(A.a)(n);function n(t,a,c){var s;return Object(z.a)(this,n),(s=e.call(this,t,a,c)).mouseUpHandler=function(t){s.mouseDown=!1,s.socket.send(JSON.stringify({method:"draw",id:s.id,figure:{type:"line",x:s.startX,y:s.startY,currentX:s.currentX,currentY:s.currentY,color:s.ctx.strokeStyle}}))},s.mouseDownHandler=function(t){s.mouseDown=!0,s.ctx.beginPath(),s.startX=t.pageX-t.target.offsetLeft,s.startY=t.pageY-t.target.offsetTop,s.saved=s.canvas.toDataURL()},s.mouseMoveHandler=function(t){s.mouseDown&&(s.currentX=t.pageX-t.target.offsetLeft,s.currentY=t.pageY-t.target.offsetTop,s.draw(s.startX,s.startY))},s.draw=function(t,e,n){var a=new Image;a.src=s.saved,s.ctx.strokeStyle=s.color,a.onload=function(){s.ctx.clearRect(0,0,s.canvas.width,s.canvas.height),s.ctx.drawImage(a,0,0,s.canvas.width,s.canvas.height),s.ctx.beginPath(),s.ctx.moveTo(s.currentX,s.currentY),s.ctx.lineTo(t,e),s.ctx.fill(),s.ctx.stroke()}},s.listen(),s}return Object(B.a)(n,[{key:"listen",value:function(){this.canvas.onmousemove=this.mouseMoveHandler,this.canvas.onmousedown=this.mouseDownHandler,this.canvas.onmouseup=this.mouseUpHandler}}]),n}(V);ct.staticDraw=function(t,e,n,a,c,s){t.strokeStyle=s,t.beginPath(),t.moveTo(a,c),t.lineTo(e,n),t.fill(),t.stroke()};var st=function(t){return function(e){e(function(t){return{type:u,payload:{canvas:t}}}(t))}},ot=n(112),rt=function(t){Object(J.a)(n,t);var e=Object(A.a)(n);function n(t,a,c,s){var o;return Object(z.a)(this,n),(o=e.call(this,t,a,c,s)).mouseLeaveHandler=function(){o.ctx.fillStyle=o.updateColor,o.ctx.strokeStyle=o.updateColor},o.mouseUpHandler=function(t){o.ctx.fillStyle=o.updateColor,o.ctx.strokeStyle=o.updateColor,o.mouseDown=!1,o.socket.send(JSON.stringify({method:"draw",id:o.id,figure:{type:"finish"}}))},o.mouseDownHandler=function(t){o.mouseDown=!0,o.ctx.beginPath(),o.ctx.moveTo(t.pageX-t.target.offsetLeft,t.pageY-t.target.offsetTop)},o.mouseMoveHandler=function(t){o.mouseDown&&o.socket.send(JSON.stringify({method:"draw",id:o.id,figure:{type:"eraser",x:t.pageX-t.target.offsetLeft,y:t.pageY-t.target.offsetTop,width:o.ctx.lineWidth}}))},o.listen(),o}return Object(B.a)(n,[{key:"listen",value:function(){this.canvas.onmousemove=this.mouseMoveHandler,this.canvas.onmousedown=this.mouseDownHandler,this.canvas.onmouseup=this.mouseUpHandler,this.canvas.onmouseleave=this.mouseLeaveHandler}}]),n}(V);rt.staticDraw=function(t,e,n,a){t.lineWidth=a,t.strokeStyle="white",t.lineTo(e,n),t.stroke()};var it=n(33),lt=n(63),ut=n(4),dt={tool:null,selectedTool:1,method:"brush"},ht=n(65),vt={canvas:null,sessionId:null,socket:null,userId:localStorage.getItem("session"),undoList:[],redoList:[],update:null,position:{x:null,y:null},text:""},ft=Object(it.c)({toolbar:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:dt,e=arguments.length>1?arguments[1]:void 0,n=e.type,a=e.payload;switch(n){case y:return Object(ut.a)(Object(ut.a)({},t),{},{selectedTool:a.tool});case v:var c=t.tool;return c.ctx.lineWidth=parseInt(a.width),Object(ut.a)(Object(ut.a)({},t),{},{tool:c});case h:var s=t.tool;return s.ctx.fillColor=a.color,s.ctx.strokeColor=a.color,s.ctx.fillStyle=a.color,s.ctx.strokeStyle=a.color,Object(ut.a)(Object(ut.a)({},t),{},{canvas:s});case d:return Object(ut.a)(Object(ut.a)({},t),{},{tool:a.tool});default:return t}},canvas:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:vt,e=arguments.length>1?arguments[1]:void 0,n=e.type,a=e.payload;switch(n){case x:return Object(ut.a)(Object(ut.a)({},t),{},{position:{x:a.x,y:a.y}});case m:return Object(ut.a)(Object(ut.a)({},t),{},{text:a.text});case w:var c=a.canvas,s=a.undoList,o=c,r=o.getContext("2d");if(s.length>0){var i=s.pop(),l=new Image;l.src=i,l.onload=function(){r.clearRect(0,0,t.canvas.width,t.canvas.height),r.drawImage(l,0,0,t.canvas.width,t.canvas.height)}}else r.clearRect(0,0,t.canvas.width,t.canvas.height);return Object(ut.a)(Object(ut.a)({},t),{},{undoList:s,canvas:o});case O:var d=a.redoList,h=t.canvas,v=h.getContext("2d");if(d.length>0){var y=d.pop(),C=new Image;C.src=y,C.onload=function(){v.clearRect(0,0,t.canvas.width,t.canvas.height),v.drawImage(C,0,0,t.canvas.width,t.canvas.height)}}return Object(ut.a)(Object(ut.a)({},t),{},{redoList:d,canvas:h});case p:return Object(ut.a)(Object(ut.a)({},t),{},{sessionId:a.sessionId});case g:return Object(ut.a)(Object(ut.a)({},t),{},{socket:a.socket});case b:return Object(ut.a)(Object(ut.a)({},t),{},{undoList:[].concat(Object(ht.a)(t.undoList),[a.undo])});case j:var k=t.canvas;return t.redoList.length>0&&(t.undoList.push(t.canvas.toDataURL()),t.socket.send(JSON.stringify({method:"redo",id:t.sessionId,undoList:t.undoList,redoList:t.redoList}))),Object(ut.a)(Object(ut.a)({},t),{},{canvas:k});case f:var L=t.canvas,D=L.getContext("2d");return t.undoList.length>0?(t.redoList.push(t.canvas.toDataURL()),t.socket.send(JSON.stringify({method:"undo",id:t.sessionId,undoList:t.undoList,redoList:t.redoList}))):D.clearRect(0,0,t.canvas.width,t.canvas.height),Object(ut.a)(Object(ut.a)({},t),{},{canvas:L});case u:return Object(ut.a)(Object(ut.a)({},t),{},{canvas:a.canvas});default:return t}}}),jt=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||it.d,bt=[lt.a];var gt=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object(it.e)(ft,t,jt(it.a.apply(void 0,bt)))}(),pt=function(t){Object(J.a)(n,t);var e=Object(A.a)(n);function n(t,a,c){var s;return Object(z.a)(this,n),(s=e.call(this,t,a,c)).clickHandler=function(t){},s.mouseDownHandler=function(t){gt.getState().canvas.text?(s.socket.send(JSON.stringify({method:"typing",id:s.id,posX:s.startX,posY:s.startY,text:gt.getState().canvas.text})),s.mouseDown=!0,gt.dispatch(C(new at(s.canvas,s.socket,s.id))),gt.dispatch(D("")),gt.dispatch(S(1)),gt.dispatch(L(null,null))):(s.startX=t.pageX-t.target.offsetLeft,s.startY=t.pageY-t.target.offsetTop,gt.dispatch(L(t.pageX-t.target.offsetLeft,t.pageY-t.target.offsetTop)))},s.listen(),s}return Object(B.a)(n,[{key:"listen",value:function(){this.canvas.onclick=this.clickHandler,this.canvas.onmouseup=this.mouseDownHandler,this.canvas.onmousemove=this.mouseMoveHandler}}],[{key:"staticDraw",value:function(t,e,n,a){t.font="20px Arial",t.fillText(a,e,n)}}]),n}(V),wt=function(){var t=Object(a.useState)("#000"),e=Object(i.a)(t,2),n=e[0],c=e[1],s=Object(l.c)((function(t){return t.canvas.canvas})),o=Object(l.c)((function(t){return t.canvas.undoList})),r=Object(l.c)((function(t){return t.canvas.redoList})),u=Object(l.c)((function(t){return t.toolbar.selectedTool})),d=Object(l.c)((function(t){return t.canvas})),v=Object(l.c)((function(t){return t.toolbar.color})),b=Object(l.b)(),g=function(t,e){b(C(t)),b(S(e)),3===e&&b(k(15))};return Object(H.jsxs)("div",{className:"toolbar",children:[Object(H.jsx)(ot.a,{title:"\u041a\u0438\u0441\u0442\u044c",placement:"right-end",children:Object(H.jsx)("button",{className:1===u?"active":"",onClick:function(){return g(new at(s,d.socket,d.sessionId),1)},children:Object(H.jsx)(T,{})})}),Object(H.jsx)(ot.a,{title:"\u041b\u0438\u043d\u0438\u044f",placement:"right-end",children:Object(H.jsx)("button",{className:2===u?"active":"",onClick:function(){return g(new ct(s,d.socket,d.sessionId),2)},children:Object(H.jsx)(I,{})})}),Object(H.jsx)(ot.a,{title:"\u0421\u0442\u0438\u0440\u0430\u043b\u043a\u0430",placement:"right-end",children:Object(H.jsx)("button",{className:3===u?"active":"",onClick:function(){return g(new rt(s,d.socket,d.sessionId,n),3)},children:Object(H.jsx)(Y,{})})}),Object(H.jsx)(ot.a,{title:"\u0424\u0438\u0433\u0443\u0440\u044b",placement:"right-end",children:Object(H.jsx)("button",{className:4===u?"active":"",onClick:function(){return b(S(4))},children:Object(H.jsx)(_,{})})}),Object(H.jsx)(ot.a,{title:"\u0422\u0435\u043a\u0441\u0442",placement:"right-end",children:Object(H.jsx)("button",{className:5===u?"active":"",onClick:function(){return g(new pt(s,d.socket,d.sessionId),5)},children:Object(H.jsx)(P,{})})}),Object(H.jsx)(ot.a,{title:"colors",placement:"right-end",children:Object(H.jsx)("button",{children:Object(H.jsx)("input",{id:"color",value:v,onChange:function(t){var e=t.target.value;b(function(t){return{type:h,payload:{color:t}}}(e)),c(e)},type:"color"})})}),Object(H.jsx)(ot.a,{title:"\u041e\u0442\u043c\u0435\u043d\u0438\u0442\u044c",placement:"left-start",children:Object(H.jsx)("button",{className:!o.length&&"disabled",onClick:function(){return b(function(t,e){return{type:f,payload:{canvas:t,undoList:e}}}())},children:Object(H.jsx)(E,{})})}),Object(H.jsx)(ot.a,{title:"\u0412\u0435\u0440\u043d\u0443\u0442\u044c",placement:"left-start",children:Object(H.jsx)("button",{className:!r.length&&"disabled",onClick:function(){return b({type:j})},children:Object(H.jsx)(R,{})})})]})},Ot=(n(81),function(){var t=Object(a.useRef)(),e=Object(l.c)((function(t){return t.canvas.position})),n=Object(l.c)((function(t){return t.canvas.text})),c=Object(l.c)((function(t){return t.toolbar.selectedTool})),s=Object(a.useRef)();Object(a.useEffect)((function(){5===c&&s.current.focus()}),[e]);var o=Object(l.b)(),i=Object(r.g)().id;Object(a.useEffect)((function(){o(st(t.current))}),[o]);var u=function(){var e;o((e=t.current.toDataURL(),{type:b,payload:{undo:e}}))};Object(a.useEffect)((function(){var e=new WebSocket("wss://draw-app-canvas.herokuapp.com/");e.onopen=function(){o(function(t){return{type:g,payload:{socket:t}}}(e)),o({type:p,payload:{sessionId:i}}),o(C(new at(t.current,e,i))),e.send(JSON.stringify({id:i,method:"connection"}))},e.onmessage=function(t){var e=JSON.parse(t.data);switch(e.method){case"connection":console.log("Connected");break;case"draw":f(e);break;case"undo":console.log("undo",e),v(e);break;case"redo":h(e);break;case"typing":d(e)}}}),[]);var d=function(e){var n=t.current.getContext("2d");pt.staticDraw(n,e.posX,e.posY,e.text)},h=function(t){return o((e=t.redoList,{type:O,payload:{redoList:e}}));var e},v=function(e){var n,a;o((n=e.undoList,a=t.current,{type:w,payload:{undoList:n,canvas:a}}))},f=function(e){var n=e.figure,a=t.current.getContext("2d");switch(n.type){case"brush":at.draw(a,n.x,n.y);break;case"eraser":rt.staticDraw(a,n.x,n.y,n.width);break;case"rect":F.staticDraw(a,n.x,n.y,n.w,n.h,n.color);break;case"circle":W.staticDraw(a,n.x,n.y,n.r,n.color);break;case"line":ct.staticDraw(a,n.x,n.y,n.currentX,n.currentY,n.color);break;case"star":q.staticDraw(a,n.cx,n.cy,n.spikes,n.outerRadius,n.innerRadius,n.color);break;case"finish":a.beginPath()}};return console.log(e),Object(H.jsxs)("div",{className:"canvas",children:[Object(H.jsx)("textarea",{autoFocus:!0,ref:s,style:{top:e.y+80,left:e.x+160,display:e.x?"":"none"},onBlur:function(){},value:n,onChange:function(t){var e=t.target.value;return o(D(e))}}),Object(H.jsx)("canvas",{onMouseDown:function(){return u()},ref:t,width:1200,height:500})]})});var xt=function(){return Object(H.jsx)("div",{className:"app",children:Object(H.jsxs)(r.d,{children:[Object(H.jsxs)(r.b,{path:"/:id",children:[Object(H.jsx)(nt,{}),Object(H.jsxs)("div",{className:"contentWrap",children:[Object(H.jsx)(wt,{}),Object(H.jsx)(Ot,{})]})]}),Object(H.jsx)(r.a,{to:"f".concat((+new Date).toString(16))})]})})},mt=n(42);o.a.render(Object(H.jsx)(c.a.StrictMode,{children:Object(H.jsx)(mt.a,{children:Object(H.jsx)(l.a,{store:gt,children:Object(H.jsx)(xt,{})})})}),document.getElementById("root"))}},[[83,1,2]]]);
//# sourceMappingURL=main.8209520d.chunk.js.map