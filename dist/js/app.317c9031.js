(function(e){function n(n){for(var i,a,c=n[0],s=n[1],u=n[2],h=0,l=[];h<c.length;h++)a=c[h],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&l.push(o[a][0]),o[a]=0;for(i in s)Object.prototype.hasOwnProperty.call(s,i)&&(e[i]=s[i]);d&&d(n);while(l.length)l.shift()();return r.push.apply(r,u||[]),t()}function t(){for(var e,n=0;n<r.length;n++){for(var t=r[n],i=!0,a=1;a<t.length;a++){var s=t[a];0!==o[s]&&(i=!1)}i&&(r.splice(n--,1),e=c(c.s=t[0]))}return e}var i={},o={app:0},r=[];function a(e){return c.p+"js/"+({"polyfills-core-js":"polyfills-core-js","polyfills-dom":"polyfills-dom"}[e]||e)+"."+{"chunk-02c995b5":"c8dee7ab","chunk-09155df3":"e3ac211b","chunk-09162720":"102e7a40","chunk-097e0872":"3522b5ab","chunk-0e93a01c":"b0a5975b","chunk-1bff95de":"c7f1bfb8","chunk-1c4705f4":"6dbe2887","chunk-1dbc15a2":"8c41fb29","chunk-21a76241":"9a71d653","chunk-25d83ca8":"89659437","chunk-2d0a463b":"580f9170","chunk-2d0c073f":"017f6960","chunk-2d0d43da":"c6672c38","chunk-2d0d5c33":"d98bbfcf","chunk-2d0da04a":"620f425b","chunk-2d0e5812":"bc3079e1","chunk-2d213189":"2b11f265","chunk-2d217e6a":"9d5e5387","chunk-2d218068":"115cead1","chunk-2d21da73":"56e20878","chunk-2d237b00":"037b5772","chunk-30dd9750":"6b7d6eb0","chunk-37f2300e":"cc3c45b7","chunk-3ed29de3":"9e68e146","chunk-41c0f7a4":"5f0941d1","chunk-426f2f16":"9f46eefa","chunk-462c869e":"0ea6ae2c","chunk-47245a33":"b9e6a322","chunk-4739acd0":"12a964e2","chunk-53b1137a":"8efb31cd","chunk-541ea42d":"63c37d24","chunk-54bbd082":"aa2ffdeb","chunk-59d4c87c":"9a2960ba","chunk-5a8ac886":"1c1bcfb0","chunk-5ff96a24":"bc2c1407","chunk-69eb8776":"8f434896","chunk-6d375f34":"8b250ad4","chunk-7548ca2d":"f50c2a89","chunk-79f1dac7":"4481f814","chunk-858cd918":"54b9acef","chunk-8bb7f81e":"4465b78a","chunk-a9395c36":"8777d2b5","chunk-d0e8aa0a":"ef2f5d14","chunk-d8413eac":"9e3a3351","chunk-e5275ddc":"a29be33a","chunk-eaa2b130":"700c0fb3","polyfills-core-js":"12be3461","polyfills-dom":"662760da","chunk-2d2297f7":"78980670","chunk-2d0c9758":"62f099a9","chunk-2d0b33e3":"2e69defc","chunk-2d0b9074":"cf6d8bbf","chunk-2d0b9280":"58416f48","chunk-2d0baac9":"ecbd8a2b","chunk-2d2376e6":"a05b70ee"}[e]+".js"}function c(n){if(i[n])return i[n].exports;var t=i[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,c),t.l=!0,t.exports}c.e=function(e){var n=[],t=o[e];if(0!==t)if(t)n.push(t[2]);else{var i=new Promise((function(n,i){t=o[e]=[n,i]}));n.push(t[2]=i);var r,s=document.createElement("script");s.charset="utf-8",s.timeout=120,c.nc&&s.setAttribute("nonce",c.nc),s.src=a(e);var u=new Error;r=function(n){s.onerror=s.onload=null,clearTimeout(h);var t=o[e];if(0!==t){if(t){var i=n&&("load"===n.type?"missing":n.type),r=n&&n.target&&n.target.src;u.message="Loading chunk "+e+" failed.\n("+i+": "+r+")",u.name="ChunkLoadError",u.type=i,u.request=r,t[1](u)}o[e]=void 0}};var h=setTimeout((function(){r({type:"timeout",target:s})}),12e4);s.onerror=s.onload=r,document.head.appendChild(s)}return Promise.all(n)},c.m=e,c.c=i,c.d=function(e,n,t){c.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,n){if(1&n&&(e=c(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(c.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var i in e)c.d(t,i,function(n){return e[n]}.bind(null,i));return t},c.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(n,"a",n),n},c.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},c.p="/",c.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],u=s.push.bind(s);s.push=n,s=s.slice();for(var h=0;h<s.length;h++)n(s[h]);var d=u;r.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("cd49")},5274:function(e,n,t){"use strict";t("8944")},8944:function(e,n,t){},"8c28":function(e,n,t){},aa55:function(e,n,t){var i={"./ion-action-sheet.entry.js":["6618","chunk-426f2f16"],"./ion-alert.entry.js":["f06c","chunk-1c4705f4"],"./ion-app_8.entry.js":["c215","chunk-53b1137a"],"./ion-avatar_3.entry.js":["cf12","chunk-59d4c87c"],"./ion-back-button.entry.js":["4b35","chunk-69eb8776"],"./ion-backdrop.entry.js":["429d","chunk-2d0c073f"],"./ion-button_2.entry.js":["4453","chunk-25d83ca8"],"./ion-card_5.entry.js":["070b","chunk-541ea42d"],"./ion-checkbox.entry.js":["dfd8","chunk-09162720"],"./ion-chip.entry.js":["430d","chunk-09155df3"],"./ion-col_3.entry.js":["6a8a","chunk-2d0da04a"],"./ion-datetime_3.entry.js":["c15b","chunk-21a76241"],"./ion-fab_3.entry.js":["dd47","chunk-3ed29de3"],"./ion-img.entry.js":["9588","chunk-2d0e5812"],"./ion-infinite-scroll_2.entry.js":["d1e5","chunk-2d21da73"],"./ion-input.entry.js":["d111","chunk-37f2300e"],"./ion-item-option_3.entry.js":["1bb3","chunk-5ff96a24"],"./ion-item_8.entry.js":["69da","chunk-5a8ac886"],"./ion-loading.entry.js":["53a5","chunk-6d375f34"],"./ion-menu_3.entry.js":["cb00","chunk-097e0872"],"./ion-modal.entry.js":["1ad0","chunk-1bff95de"],"./ion-nav_2.entry.js":["e44f","chunk-4739acd0"],"./ion-popover.entry.js":["4285","chunk-e5275ddc"],"./ion-progress-bar.entry.js":["9b72","chunk-1dbc15a2"],"./ion-radio_2.entry.js":["beb3","chunk-0e93a01c"],"./ion-range.entry.js":["719f","chunk-54bbd082"],"./ion-refresher_2.entry.js":["0a47","chunk-d8413eac"],"./ion-reorder_2.entry.js":["6672","chunk-d0e8aa0a"],"./ion-ripple-effect.entry.js":["c8da","chunk-2d218068"],"./ion-route_4.entry.js":["10e8","chunk-858cd918"],"./ion-searchbar.entry.js":["8625","chunk-a9395c36"],"./ion-segment_2.entry.js":["0c02","chunk-462c869e"],"./ion-select_3.entry.js":["d25f","chunk-79f1dac7"],"./ion-slide_2.entry.js":["05dd","chunk-2d0a463b"],"./ion-spinner.entry.js":["e11b","chunk-8bb7f81e"],"./ion-split-pane.entry.js":["aae8","chunk-2d213189"],"./ion-tab-bar_2.entry.js":["a2bb","chunk-02c995b5"],"./ion-tab_2.entry.js":["6725","chunk-47245a33"],"./ion-text.entry.js":["ed3b","chunk-30dd9750"],"./ion-textarea.entry.js":["8798","chunk-eaa2b130"],"./ion-toast.entry.js":["c1a5","chunk-41c0f7a4"],"./ion-toggle.entry.js":["bef2","chunk-7548ca2d"],"./ion-virtual-scroll.entry.js":["5fd7","chunk-2d0d43da"]};function o(e){if(!t.o(i,e))return Promise.resolve().then((function(){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}));var n=i[e],o=n[0];return t.e(n[1]).then((function(){return t(o)}))}o.keys=function(){return Object.keys(i)},o.id="aa55",e.exports=o},ab00:function(e,n,t){var i={"./ion-icon.entry.js":["7059","chunk-2d0d5c33"]};function o(e){if(!t.o(i,e))return Promise.resolve().then((function(){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}));var n=i[e],o=n[0];return t.e(n[1]).then((function(){return t(o)}))}o.keys=function(){return Object.keys(i)},o.id="ab00",e.exports=o},cd49:function(e,n,t){"use strict";t.r(n);t("e260"),t("e6cf"),t("cca6"),t("a79d");var i=t("7a23");function o(e,n,t,o,r,a){var c=Object(i["x"])("ion-router-outlet"),s=Object(i["x"])("ion-app");return Object(i["q"])(),Object(i["f"])(s,null,{default:Object(i["C"])((function(){return[Object(i["h"])(c)]})),_:1})}var r=t("d867"),a=Object(i["i"])({name:"App",components:{IonApp:r["a"],IonRouterOutlet:r["g"]}});a.render=o;var c=a,s=t("bec5");function u(e,n,t,o,r,a){var c=Object(i["x"])("SlidePuzzleContainer"),s=Object(i["x"])("ion-page");return Object(i["q"])(),Object(i["f"])(s,null,{default:Object(i["C"])((function(){return[Object(i["h"])(c)]})),_:1})}var h=Object(i["D"])("data-v-2fd292e3");Object(i["t"])("data-v-2fd292e3");var d={id:"layout"},l={class:"background",ref:"background"};Object(i["r"])();var f=h((function(e,n,t,o,r,a){var c=Object(i["x"])("ion-icon"),s=Object(i["x"])("ion-button"),u=Object(i["x"])("ion-datetime"),f=Object(i["x"])("ion-buttons"),b=Object(i["x"])("ion-title"),m=Object(i["x"])("ion-toolbar"),p=Object(i["x"])("ion-header"),g=Object(i["x"])("ion-content");return Object(i["q"])(),Object(i["f"])(i["a"],null,[Object(i["h"])(p,null,{default:h((function(){return[Object(i["h"])(m,null,{default:h((function(){return[Object(i["h"])(f,{slot:"primary"},{default:h((function(){return[Object(i["h"])(s,{onClick:n[1]||(n[1]=function(e){return a.randomSlide(500)})},{default:h((function(){return[Object(i["h"])(c,{slot:"icon-only",icon:o.refresh},null,8,["icon"])]})),_:1}),Object(i["h"])(s,{onClick:n[2]||(n[2]=function(n){return e.$refs.sizeOptionList.$el.open()})},{default:h((function(){return[Object(i["h"])(c,{slot:"icon-only",icon:o.expand},null,8,["icon"]),Object(i["h"])(u,{ref:"sizeOptionList",onIonChange:a.changeSizeUsingDate,"display-format":"YY",value:1900+r.puzzleSize,min:"1903",max:"1910",style:{display:"none"}},null,8,["onIonChange","value"])]})),_:1}),Object(i["h"])(s,{onClick:n[4]||(n[4]=function(n){return e.$refs.inputfile.click()})},{default:h((function(){return[Object(i["h"])(c,{slot:"icon-only",icon:o.folderOpenOutline},null,8,["icon"]),Object(i["h"])("input",{ref:"inputfile",type:"file",accept:"video/*,image/*",name:"image",id:"file",onChange:n[3]||(n[3]=function(){return a.loadFile&&a.loadFile.apply(a,arguments)})},null,544)]})),_:1})]})),_:1}),Object(i["h"])(b,{mode:"ios"},{default:h((function(){return[Object(i["g"])(Object(i["z"])(r.timerTime),1)]})),_:1})]})),_:1})]})),_:1}),Object(i["h"])(g,null,{default:h((function(){return[a.isImage?(Object(i["q"])(),Object(i["f"])("img",{key:0,class:"sourceImg",ref:"sourceImg",src:r.src,onLoad:n[5]||(n[5]=function(){return a.onMediaLoad&&a.onMediaLoad.apply(a,arguments)})},null,40,["src"])):(Object(i["q"])(),Object(i["f"])("video",{key:1,class:"sourceImg",ref:"sourceImg",autoplay:"autoplay",loop:"loop",playsinline:"",src:r.src,width:"500",height:"500",onPlay:n[6]||(n[6]=function(){return a.onMediaLoad&&a.onMediaLoad.apply(a,arguments)})},null,40,["src"])),Object(i["h"])("div",d,[Object(i["h"])(i["c"],{name:"slide",class:"puzzleContainer",tag:"span",style:{width:r.containerSize+"px"}},{default:h((function(){return[(Object(i["q"])(!0),Object(i["f"])(i["a"],null,Object(i["w"])(r.tiles,(function(e){return Object(i["q"])(),Object(i["f"])("div",{class:"tile",key:e.index,style:{width:"".concat(a.tileWidthPercent,"%"),height:"".concat(a.tileHeightPercent,"%"),opacity:e.position===r.openPos?0:1}},[Object(i["h"])("canvas",{ref:function(n){n&&(r.tileCanvasList[e.index]=n)},class:"tile_canvas",onClick:function(n){return a.move(e.position)},width:a.tileWidth,height:a.tileHeight},null,8,["onClick","width","height"])],4)})),128))]})),_:1},8,["style"]),Object(i["h"])("canvas",l,null,512)])]})),_:1})],64)})),b=t("b85c"),m=t("3835"),p=(t("d81d"),t("a630"),t("3ca3"),t("159b"),t("4fad"),t("4de4"),t("d3b7"),t("ddb0"),t("2b3d"),t("4d90"),t("b6a2")),g=t.n(p),k=t("ff79"),v=t("1a92"),j=t.n(v),y={name:"SlidePuzzleContainer",props:{name:String},components:{IonButtons:r["b"],IonContent:r["c"],IonHeader:r["e"],IonTitle:r["h"],IonToolbar:r["i"],IonDatetime:r["d"]},setup:function(){return{refresh:k["l"],expand:k["h"],folderOpenOutline:k["i"]}},data:function(){return{tiles:[],puzzleSize:4,cols:4,rows:4,openPos:null,contextList:[],containerSize:500,imageMinSize:0,imageStartX:0,imageStartY:0,tileCanvasList:{},image:null,blob:null,src:"../assets/img/Bokeh - 55859.mp4",lastRender:-1,canvasRAFID:null,bufferCanvas:null,bufferCanvasContext:null,backgroundCanvas:null,backgroundCtx:null,timerTime:"00:00:00",timerRAFID:null,startTime:0,runTime:0}},computed:{tileWidthPercent:function(){return 100/this.cols},tileHeightPercent:function(){return 100/this.rows},imageTileWidth:function(){return Math.floor(this.imageMinSize/this.cols)},imageTileHeight:function(){return Math.floor(this.imageMinSize/this.rows)},tileWidth:function(){return Math.floor(this.imageMinSize/this.cols)},tileHeight:function(){return Math.floor(this.imageMinSize/this.rows)},isImage:function(){if(null!=this.blob){if(/^image/.test(this.blob.type))return!0;if(/^video/.test(this.blob.type))return!1}return/\.(jpe?g|png|webm|gif)$/i.test(this.src)}},beforeMount:function(){this.getRandomImg(),this.setTile(),window.addEventListener("resize",this.handleResize),this.handleResize(),this.bufferCanvas||(this.bufferCanvas=document.createElement("canvas"),this.bufferCanvasContext=this.bufferCanvas.getContext("2d",{alpha:!1}),this.bufferCanvasContext.imageSmoothingEnabled=!1)},unmounted:function(){window.removeEventListener("resize",this.handleResize),this.terminateVideo()},methods:{getRandomImg:function(){var e=["Bokeh - 55859.mp4","Mountain - 65953.mp4","Waves - 61950.mp4"];this.src="../assets/img/"+j.a.pick(e)},setTile:function(){this.tiles=Array.from(g()(this.cols*this.rows)).map((function(e,n){return{index:n,position:n}})),this.openPos=this.cols*this.rows-1,this.stopTimer(),this.resetTimer()},onMediaLoad:function(){var e=this;this.$nextTick((function(){e.terminateVideo(),e.image=e.$refs.sourceImg,e.isImage?e.onImgLoad():e.onVideoLoad()}))},onVideoLoad:function(){var e=this;this.initCanvas(this.image.videoWidth,this.image.videoHeight);var n=function n(){e.imageToCanvas(),e.canvasRAFID=requestAnimationFrame(n)};this.canvasRAFID=requestAnimationFrame(n)},terminateVideo:function(){cancelAnimationFrame(this.canvasRAFID)},onImgLoad:function(){this.initCanvas(this.image.naturalWidth,this.image.naturalHeight),this.imageToCanvas()},imageToCanvas:function(){var e=this;this.bufferCanvasContext.drawImage(this.image,0,0),this.contextList.forEach((function(n,t){n.drawImage(e.bufferCanvas,e.imageStartX+e.getBackgroundPositionList[t].x,e.imageStartY+e.getBackgroundPositionList[t].y,e.imageTileWidth,e.imageTileHeight,0,0,e.tileWidth,e.tileHeight)})),this.backgroundCtx.drawImage(this.bufferCanvas,0,0,this.imageWidth,this.imageHeight,0,0,100,100)},initCanvas:function(e,n){var t=this;this.imageWidth=e,this.imageHeight=n,this.imageMinSize=Math.min(this.imageWidth,this.imageHeight),this.imageStartX=Math.floor((this.imageWidth-this.imageMinSize)/2),this.imageStartY=Math.floor((this.imageHeight-this.imageMinSize)/2),this.bufferCanvas.width=this.imageWidth,this.bufferCanvas.height=this.imageHeight,this.contextList=[],this.getBackgroundPositionList=[],Object.entries(this.tileCanvasList).forEach((function(e){var n=Object(m["a"])(e,2),i=n[0],o=n[1],r=o.getContext("2d",{alpha:!1});r.imageSmoothingEnabled=!1,t.contextList.push(r),t.getBackgroundPositionList.push(t.getBackgroundPosition(i))})),this.backgroundCanvas||(this.backgroundCanvas=this.$refs.background,this.backgroundCanvas.width=100,this.backgroundCanvas.height=100,this.backgroundCtx=this.backgroundCanvas.getContext("2d",{alpha:!1}),this.backgroundCtx.filter="blur(3px) brightness(0.5)")},posToCoor:function(e){return{x:e%this.cols,y:Math.floor(e/this.cols)}},getBackgroundPosition:function(e){var n=this.posToCoor(e);return{x:n.x*this.imageTileWidth,y:n.y*this.imageTileHeight}},move:function(e){var n=this,t=this.posToCoor(e).y==this.posToCoor(this.openPos).y,i=this.posToCoor(e).x==this.posToCoor(this.openPos).x;if(t||i){var o=this.openPos<e?1:-1;o=t?o:o*this.cols,g()(this.openPos,e,o).forEach((function(e){var t=[n.tiles[e+o].position,n.tiles[e].position];n.tiles[e].position=t[0],n.tiles[e+o].position=t[1];var i=[n.tiles[e+o],n.tiles[e]];n.tiles[e]=i[0],n.tiles[e+o]=i[1]})),this.openPos=e,1==this.checkSolved()&&this.stopTimer()}},checkSolved:function(){var e,n=Object(b["a"])(this.tiles);try{for(n.s();!(e=n.n()).done;){var t=e.value;if(t.index!=t.position)return!1}}catch(i){n.e(i)}finally{n.f()}return!0},randomSlide:function(e){var n,t=this;g()(e).forEach((function(e){n=e%2==0?Array.from(g()(t.openPos%t.cols,t.cols*t.rows,t.cols)):Array.from(g()(t.posToCoor(t.openPos).y*t.cols,(t.posToCoor(t.openPos).y+1)*t.cols)),n=n.filter((function(e,n){return n!==t.openPos}));var i=j.a.pick(n);t.move(i)})),this.restartTimer()},changeSizeUsingDate:function(e){var n=new Date(e.detail.value).getYear();this.puzzleSize=n,this.cols=this.puzzleSize,this.rows=this.puzzleSize,this.setTile(),this.onMediaLoad()},handleResize:function(){var e=Math.min(window.innerWidth,window.innerHeight-56);this.containerSize=e},loadFile:function(e){this.setTile(),this.blob&&URL.revokeObjectURL(this.blob),this.blob=e.target.files[0],this.src=URL.createObjectURL(this.blob)},restartTimer:function(){var e=this;function n(e){return String(e).padStart(2,"0")}if(this.startTime=performance.now(),!this.timerRAFID){var t=function t(){e.runTime=performance.now()-e.startTime;var i=Math.floor(e.runTime/10)%100,o=Math.floor(e.runTime/1e3)%60,r=Math.floor(e.runTime/1e3/60);e.timerTime=n(r)+":"+n(o)+":"+n(i),e.timerRAFID=requestAnimationFrame(t)};this.$nextTick(t)}},stopTimer:function(){cancelAnimationFrame(this.timerRAFID),this.timerRAFID=null},resetTimer:function(){this.timerTime="00:00:00"}}};t("5274");y.render=f,y.__scopeId="data-v-2fd292e3";var O=y,C=Object(i["i"])({name:"SlidePuzzle",components:{SlidePuzzleContainer:O,IonPage:r["f"]},setup:function(){return{}}});C.render=u;var w=C,x=[{path:"/",redirect:"/slide"},{path:"/slide",name:"Slide",component:w}],T=Object(s["a"])({history:Object(s["b"])("/"),routes:x}),z=T,_=(t("4b63"),t("4041"),t("51ef"),t("a237"),t("e09e"),t("46e5"),t("98b6"),t("2d22"),t("66b0"),t("ce1f"),t("8c28"),t("9483"));Object(_["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});var S=Object(i["e"])(c).use(r["j"]).use(z);z.isReady().then((function(){S.mount("#app")}))}});
//# sourceMappingURL=app.317c9031.js.map