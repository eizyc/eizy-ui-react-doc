(self.webpackChunk_eizyui_eizy_ui_react=self.webpackChunk_eizyui_eizy_ui_react||[]).push([[232],{"./node_modules/classnames/index.js":(module,exports)=>{var __WEBPACK_AMD_DEFINE_RESULT__;/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/!function(){"use strict";var hasOwn={}.hasOwnProperty;function classNames(){for(var classes=[],i=0;i<arguments.length;i++){var arg=arguments[i];if(arg){var argType=typeof arg;if("string"===argType||"number"===argType)classes.push(arg);else if(Array.isArray(arg)){if(arg.length){var inner=classNames.apply(null,arg);inner&&classes.push(inner)}}else if("object"===argType){if(arg.toString!==Object.prototype.toString&&!arg.toString.toString().includes("[native code]")){classes.push(arg.toString());continue}for(var key in arg)hasOwn.call(arg,key)&&arg[key]&&classes.push(key)}}}return classes.join(" ")}module.exports?(classNames.default=classNames,module.exports=classNames):void 0!==(__WEBPACK_AMD_DEFINE_RESULT__=(function(){return classNames}).apply(exports,[]))&&(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)}()},"./src/components/Button/button.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),classnames__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__),_utils_const__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/utils/const.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");let prefixCls="".concat(_utils_const__WEBPACK_IMPORTED_MODULE_3__.J,"-btn"),Button1=(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)((props,ref)=>{let{buttonType,className,disabled,size,ghost,children,href,...restProps}=props,classes=classnames__WEBPACK_IMPORTED_MODULE_1___default()(prefixCls,className,{["".concat(prefixCls,"-").concat(buttonType)]:buttonType,["".concat(prefixCls,"-").concat(size)]:"md"!==size,["".concat(prefixCls,"-link-disabled")]:"link"===buttonType&&disabled});return"link"===buttonType?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span",{className:classes,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("a",{...restProps,href:href,children:children})}):(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("button",{ref:ref,...restProps,className:classes,disabled:disabled,children:children})});Button1.defaultProps={disabled:!1,buttonType:"default",size:"md",ghost:!1};let __WEBPACK_DEFAULT_EXPORT__=Button1;try{Button1.displayName="Button",Button1.__docgenInfo={description:"",displayName:"Button",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},size:{defaultValue:{value:"md"},description:"The Size of Button",name:"size",required:!1,type:{name:"enum",value:[{value:'"lg"'},{value:'"md"'},{value:'"sm"'}]}},buttonType:{defaultValue:{value:"default"},description:"",name:"buttonType",required:!1,type:{name:"enum",value:[{value:'"link"'},{value:'"default"'},{value:'"error"'},{value:'"success"'},{value:'"warning"'},{value:'"primary"'},{value:'"secondary"'},{value:'"tertiary"'}]}},ghost:{defaultValue:{value:"false"},description:"",name:"ghost",required:!1,type:{name:"boolean"}},href:{defaultValue:null,description:"",name:"href",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Button/button.tsx#Button"]={docgenInfo:Button1.__docgenInfo,name:"Button",path:"src/components/Button/button.tsx#Button"})}catch(__react_docgen_typescript_loader_error){}try{button.displayName="button",button.__docgenInfo={description:"",displayName:"button",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},size:{defaultValue:{value:"md"},description:"The Size of Button",name:"size",required:!1,type:{name:"enum",value:[{value:'"lg"'},{value:'"md"'},{value:'"sm"'}]}},buttonType:{defaultValue:{value:"default"},description:"",name:"buttonType",required:!1,type:{name:"enum",value:[{value:'"link"'},{value:'"default"'},{value:'"error"'},{value:'"success"'},{value:'"warning"'},{value:'"primary"'},{value:'"secondary"'},{value:'"tertiary"'}]}},ghost:{defaultValue:{value:"false"},description:"",name:"ghost",required:!1,type:{name:"boolean"}},href:{defaultValue:null,description:"",name:"href",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Button/button.tsx#button"]={docgenInfo:button.__docgenInfo,name:"button",path:"src/components/Button/button.tsx#button"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/Button/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});let __WEBPACK_DEFAULT_EXPORT__=__webpack_require__("./src/components/Button/button.tsx").Z;try{Button.displayName="Button",Button.__docgenInfo={description:"",displayName:"Button",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},size:{defaultValue:{value:"md"},description:"The Size of Button",name:"size",required:!1,type:{name:"enum",value:[{value:'"lg"'},{value:'"md"'},{value:'"sm"'}]}},buttonType:{defaultValue:{value:"default"},description:"",name:"buttonType",required:!1,type:{name:"enum",value:[{value:'"link"'},{value:'"default"'},{value:'"error"'},{value:'"success"'},{value:'"warning"'},{value:'"primary"'},{value:'"secondary"'},{value:'"tertiary"'}]}},ghost:{defaultValue:{value:"false"},description:"",name:"ghost",required:!1,type:{name:"boolean"}},href:{defaultValue:null,description:"",name:"href",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Button/index.tsx#Button"]={docgenInfo:Button.__docgenInfo,name:"Button",path:"src/components/Button/index.tsx#Button"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/Overlay/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>Overlay});var overlay1=__webpack_require__("./src/components/Overlay/overlay.tsx"),react=__webpack_require__("./node_modules/react/index.js"),classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),utils_const=__webpack_require__("./src/utils/const.ts"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");let prefixCls="".concat(utils_const.J,"-overlay"),OverlayWithArrow=props=>{let{className,style,children,placement,overlayName,arrow,arrowSize,arrowOffsetX,arrowOffsetY,gap,...restProps}=props,[realPlacement,setPlacement]=(0,react.useState)(placement),showArrow=(0,react.useMemo)(()=>!!arrow,[arrow]),pointAtCenter=(0,react.useMemo)(()=>{var _arrow$pointAtCenter;return"boolean"!=typeof arrow&&null!==(_arrow$pointAtCenter=null==arrow?void 0:arrow.pointAtCenter)&&void 0!==_arrow$pointAtCenter&&_arrow$pointAtCenter},[arrow]),classes=classnames_default()(prefixCls,className,"".concat(utils_const.J,"-").concat(overlayName),{["".concat(prefixCls,"-placement-").concat(realPlacement)]:realPlacement}),addGap=(0,react.useCallback)((position,_ref)=>{let{placement:place}=_ref,{left,top}=position,totalOffset=gap+(showArrow?arrowSize:0);return -1!==place.indexOf("top")?top-=totalOffset:-1!==place.indexOf("bottom")?top+=totalOffset:-1!==place.indexOf("left")?left-=totalOffset:-1!==place.indexOf("right")&&(left+=totalOffset),{...position,left,top}},[arrowSize,gap,showArrow]),postPosition=(0,react.useCallback)((position,_ref2)=>{let{target,placement:place}=_ref2,arrowOffset=showArrow?arrowSize:0;setPlacement(place);let{left,top}=position;pointAtCenter&&(-1!==place.indexOf("Left")?left+=target.width/2-arrowOffset-arrowOffsetX:-1!==place.indexOf("Right")?left+=-target.width/2+arrowOffset+arrowOffsetX:-1!==place.indexOf("Top")?top+=+target.height/2-arrowOffset-arrowOffsetY:-1!==place.indexOf("Bottom")&&(top+=-target.height/2+arrowOffset+arrowOffsetY));let{left:realLeft,top:realTop}=addGap({...position,left,top},{target,placement:place});return{...position,left:realLeft,top:realTop}},[addGap,arrowOffsetX,arrowOffsetY,arrowSize,pointAtCenter,showArrow]),boforeAutoAdjust=(0,react.useCallback)((position,_ref3)=>{let{target,placement:place}=_ref3,{left,top}=position,{left:realLeft,top:realTop}=addGap({...position,left,top},{target,placement:place});return{...position,left:realLeft,top:realTop}},[addGap]),overlayContent=(0,jsx_runtime.jsx)("div",{className:classes,children:(0,jsx_runtime.jsxs)("div",{className:"".concat(prefixCls,"-content"),children:[showArrow&&(0,jsx_runtime.jsx)("div",{className:"".concat(prefixCls,"-arrow")}),(0,jsx_runtime.jsx)("div",{className:"".concat(prefixCls,"-inner"),children:children})]})});return(0,jsx_runtime.jsx)(overlay1.ZP,{style:style,placement:placement,boforeAutoAdjust:boforeAutoAdjust,postPosition:postPosition,onVisibleChange:val=>{val||setPlacement(void 0)},...restProps,children:overlayContent})};OverlayWithArrow.defaultProps={arrow:!0,placement:"top",trigger:"hover",arrowSize:0,arrowOffsetX:0,arrowOffsetY:0,gap:0};try{OverlayWithArrow.displayName="OverlayWithArrow",OverlayWithArrow.__docgenInfo={description:"",displayName:"OverlayWithArrow",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},arrow:{defaultValue:{value:"true"},description:"",name:"arrow",required:!1,type:{name:"boolean | { pointAtCenter: boolean; }"}},placement:{defaultValue:{value:"top"},description:"",name:"placement",required:!1,type:{name:"enum",value:[{value:'"topLeft"'},{value:'"top"'},{value:'"topRight"'},{value:'"leftTop"'},{value:'"left"'},{value:'"leftBottom"'},{value:'"rightTop"'},{value:'"right"'},{value:'"rightBottom"'},{value:'"bottomLeft"'},{value:'"bottom"'},{value:'"bottomRight"'}]}},arrowSize:{defaultValue:{value:"0"},description:"",name:"arrowSize",required:!1,type:{name:"number"}},arrowOffsetX:{defaultValue:{value:"0"},description:"",name:"arrowOffsetX",required:!1,type:{name:"number"}},arrowOffsetY:{defaultValue:{value:"0"},description:"",name:"arrowOffsetY",required:!1,type:{name:"number"}},gap:{defaultValue:{value:"0"},description:"",name:"gap",required:!1,type:{name:"number"}},trigger:{defaultValue:{value:"hover"},description:"",name:"trigger",required:!1,type:{name:"ReactNode | HTMLElement"}},triggerType:{defaultValue:null,description:"",name:"triggerType",required:!1,type:{name:"enum",value:[{value:'"hover"'},{value:'"click"'}]}},overlayName:{defaultValue:null,description:"",name:"overlayName",required:!1,type:{name:"string"}},mask:{defaultValue:null,description:"",name:"mask",required:!1,type:{name:"boolean"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"boolean"}},target:{defaultValue:null,description:"",name:"target",required:!1,type:{name:"HTMLElement | (() => HTMLElement)"}},container:{defaultValue:null,description:"",name:"container",required:!1,type:{name:"HTMLElement | (() => HTMLElement)"}},autoAdjustOverflow:{defaultValue:null,description:"",name:"autoAdjustOverflow",required:!1,type:{name:"boolean"}},maskStyle:{defaultValue:null,description:"",name:"maskStyle",required:!1,type:{name:"CSSProperties"}},maskClassName:{defaultValue:null,description:"",name:"maskClassName",required:!1,type:{name:"string"}},onVisibleChange:{defaultValue:null,description:"",name:"onVisibleChange",required:!1,type:{name:"((visible: boolean) => void)"}},postPosition:{defaultValue:null,description:"",name:"postPosition",required:!1,type:{name:"HookFunction"}},boforeAutoAdjust:{defaultValue:null,description:"",name:"boforeAutoAdjust",required:!1,type:{name:"HookFunction"}},afterAutoAdjust:{defaultValue:null,description:"",name:"afterAutoAdjust",required:!1,type:{name:"HookFunction"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Overlay/overlayWithArrow.tsx#OverlayWithArrow"]={docgenInfo:OverlayWithArrow.__docgenInfo,name:"OverlayWithArrow",path:"src/components/Overlay/overlayWithArrow.tsx#OverlayWithArrow"})}catch(__react_docgen_typescript_loader_error){}try{overlayWithArrow.displayName="overlayWithArrow",overlayWithArrow.__docgenInfo={description:"",displayName:"overlayWithArrow",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},arrow:{defaultValue:{value:"true"},description:"",name:"arrow",required:!1,type:{name:"boolean | { pointAtCenter: boolean; }"}},placement:{defaultValue:{value:"top"},description:"",name:"placement",required:!1,type:{name:"enum",value:[{value:'"topLeft"'},{value:'"top"'},{value:'"topRight"'},{value:'"leftTop"'},{value:'"left"'},{value:'"leftBottom"'},{value:'"rightTop"'},{value:'"right"'},{value:'"rightBottom"'},{value:'"bottomLeft"'},{value:'"bottom"'},{value:'"bottomRight"'}]}},arrowSize:{defaultValue:{value:"0"},description:"",name:"arrowSize",required:!1,type:{name:"number"}},arrowOffsetX:{defaultValue:{value:"0"},description:"",name:"arrowOffsetX",required:!1,type:{name:"number"}},arrowOffsetY:{defaultValue:{value:"0"},description:"",name:"arrowOffsetY",required:!1,type:{name:"number"}},gap:{defaultValue:{value:"0"},description:"",name:"gap",required:!1,type:{name:"number"}},trigger:{defaultValue:{value:"hover"},description:"",name:"trigger",required:!1,type:{name:"ReactNode | HTMLElement"}},triggerType:{defaultValue:null,description:"",name:"triggerType",required:!1,type:{name:"enum",value:[{value:'"hover"'},{value:'"click"'}]}},overlayName:{defaultValue:null,description:"",name:"overlayName",required:!1,type:{name:"string"}},mask:{defaultValue:null,description:"",name:"mask",required:!1,type:{name:"boolean"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"boolean"}},target:{defaultValue:null,description:"",name:"target",required:!1,type:{name:"HTMLElement | (() => HTMLElement)"}},container:{defaultValue:null,description:"",name:"container",required:!1,type:{name:"HTMLElement | (() => HTMLElement)"}},autoAdjustOverflow:{defaultValue:null,description:"",name:"autoAdjustOverflow",required:!1,type:{name:"boolean"}},maskStyle:{defaultValue:null,description:"",name:"maskStyle",required:!1,type:{name:"CSSProperties"}},maskClassName:{defaultValue:null,description:"",name:"maskClassName",required:!1,type:{name:"string"}},onVisibleChange:{defaultValue:null,description:"",name:"onVisibleChange",required:!1,type:{name:"((visible: boolean) => void)"}},postPosition:{defaultValue:null,description:"",name:"postPosition",required:!1,type:{name:"HookFunction"}},boforeAutoAdjust:{defaultValue:null,description:"",name:"boforeAutoAdjust",required:!1,type:{name:"HookFunction"}},afterAutoAdjust:{defaultValue:null,description:"",name:"afterAutoAdjust",required:!1,type:{name:"HookFunction"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Overlay/overlayWithArrow.tsx#overlayWithArrow"]={docgenInfo:overlayWithArrow.__docgenInfo,name:"overlayWithArrow",path:"src/components/Overlay/overlayWithArrow.tsx#overlayWithArrow"})}catch(__react_docgen_typescript_loader_error){}let OverlayComponent=overlay1.ZP;OverlayComponent.WithArrow=OverlayWithArrow;let Overlay=OverlayComponent},"./src/components/Overlay/overlay.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{ZP:()=>Overlay_overlay});var react=__webpack_require__("./node_modules/react/index.js"),utils_const=__webpack_require__("./src/utils/const.ts"),useEvent=__webpack_require__("./src/utils/hooks/useEvent.ts"),classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),react_dom=__webpack_require__("./node_modules/react-dom/index.js"),hooks=__webpack_require__("./src/utils/hooks/index.ts");let getScroll=node=>{if([document.body,window,void 0].includes(node))return{scrollTop:window.scrollY||document.body.scrollTop||document.documentElement.scrollTop||0,scrollLeft:window.scrollX||document.body.scrollLeft||document.documentElement.scrollLeft||0,scrollHeight:document.body.scrollHeight||document.documentElement.scrollHeight||0,scrollWidth:document.body.scrollWidth||document.documentElement.scrollWidth||0};{let{scrollTop,scrollLeft,scrollHeight,scrollWidth}=node;return{scrollTop,scrollLeft,scrollHeight,scrollWidth}}},placementMap={topLeft:["bl","tl"],top:["bc","tc"],topRight:["br","tr"],leftTop:["tr","tl"],left:["cr","cl"],leftBottom:["br","bl"],rightTop:["tl","tr"],right:["cl","cr"],rightBottom:["bl","br"],bottomLeft:["tl","bl"],bottom:["tc","bc"],bottomRight:["tr","br"]},getPlacement=_ref=>{let{target,overlay:overlay1,placement="bottom",points:_points,container,autoAdjustOverflow,boforeAutoAdjust,afterAutoAdjust,postPosition}=_ref;if(!target||!overlay1)return{};let{width:tWidth,height:tHeight,left:tLeft,top:tTop}=target.getBoundingClientRect(),{width:oWidth,height:oHeight}=overlay1.getBoundingClientRect(),{scrollTop,scrollLeft,scrollHeight,scrollWidth}=getScroll(container),getTopLeft=placement=>{let points=_points;placement in placementMap&&(points=placementMap[placement]);let top=tTop+scrollTop,left=tLeft+scrollLeft;switch(points[1][0]){case"t":top+=0;break;case"c":top+=tHeight/2;break;case"b":top+=tHeight}switch(points[1][1]){case"l":left+=0;break;case"c":left+=tWidth/2;break;case"r":left+=tWidth}switch(points[0][0]){case"t":top+=0;break;case"c":top-=oHeight/2;break;case"b":top-=oHeight}switch(points[0][1]){case"l":left+=0;break;case"c":left-=oWidth/2;break;case"r":left-=oWidth}return{left,top}},{left,top}=getTopLeft(placement),resultStyle={top,left};autoAdjustOverflow&&"function"==typeof boforeAutoAdjust&&(resultStyle=boforeAutoAdjust(resultStyle,{target:{width:tWidth,height:tHeight,dom:target},overlay:{width:oWidth,height:oHeight,dom:overlay1},container,placement})),top=resultStyle.top,left=resultStyle.left;let newPlacement=placement;autoAdjustOverflow&&(left<0||top<0||left+oWidth>scrollWidth||top+oHeight>scrollHeight)&&(top<0?newPlacement=(newPlacement=newPlacement.replace("top","bottom")).replace("Bottom","Top"):top+oHeight>scrollHeight&&(newPlacement=(newPlacement=newPlacement.replace("bottom","top")).replace("Top","Bottom")),left<0?newPlacement=(newPlacement=newPlacement.replace("left","right")).replace("Right","Left"):left+oWidth>scrollWidth&&(newPlacement=(newPlacement=newPlacement.replace("right","left")).replace("Left","Right")),placement=newPlacement),autoAdjustOverflow&&"function"==typeof afterAutoAdjust&&(resultStyle=afterAutoAdjust(resultStyle,{target:{width:tWidth,height:tHeight,dom:target},overlay:{width:oWidth,height:oHeight,dom:overlay1},container,placement}));let{left:newleft,top:newtop}=getTopLeft(placement);return resultStyle={top:newtop,left:newleft},"function"==typeof postPosition&&(resultStyle=postPosition(resultStyle,{target:{width:tWidth,height:tHeight,dom:target},overlay:{width:oWidth,height:oHeight,dom:overlay1},container,placement})),{position:"absolute",...resultStyle}};var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");let prefixCls="".concat(utils_const.J,"-overlay-popup"),initStyle={position:"absolute"},Popup=props=>{var _child$props;let{className,style,maskStyle,mask,maskClassName,children,target,container,defaultValue,autoAdjustOverflow,placement,value:pValue,onVisibleChange,postPosition,boforeAutoAdjust,afterAutoAdjust,...restProps}=props,popupRef=(0,react.useRef)(null),[positionStyle,setPositionStyle]=(0,react.useState)(initStyle),[value,setValue]=(0,hooks.C8)(!1,{value:pValue,defaultValue,onChange:onVisibleChange});(0,hooks.rf)(()=>{value||setPositionStyle(initStyle)},[value]);let maskClasses=classnames_default()("".concat(prefixCls,"-mask"),maskClassName),containerElement=(0,react.useMemo)(()=>"function"==typeof container?container():container,[container]);(0,hooks.o$)(window,"mousedown",e=>{let popupElement=popupRef.current,targetElement="function"==typeof target?target():target,clickNode=e.target;popupElement&&popupElement.contains(clickNode)||targetElement&&targetElement.contains(clickNode)||setValue(!1)},value),(0,hooks.o$)(window,"keydown",e=>{value&&popupRef.current&&"Escape"===e.key&&setValue(!1)},value);let popupRefCallback=(0,react.useCallback)(node=>{popupRef.current=node,node&&target&&setPositionStyle(getPlacement({target:"function"==typeof target?target():target,overlay:node,placement,autoAdjustOverflow,container:containerElement,boforeAutoAdjust,postPosition,afterAutoAdjust}))},[target,placement,autoAdjustOverflow,containerElement,boforeAutoAdjust,postPosition,afterAutoAdjust]),child=react.Children.only((0,react.isValidElement)(children)?children:(0,react.createElement)("div",null,children)),newChildren=(0,react.cloneElement)(child,{...restProps,ref:popupRefCallback,style:{...positionStyle,...null==child?void 0:null===(_child$props=child.props)||void 0===_child$props?void 0:_child$props.style}});return value?(0,react_dom.createPortal)((0,jsx_runtime.jsxs)("div",{children:[mask?(0,jsx_runtime.jsx)("div",{className:maskClasses,style:maskStyle}):null,newChildren]}),containerElement):null};Popup.defaultProps={mask:!1,placement:"bottom",autoAdjustOverflow:!0,container:document.body};try{Popup.displayName="Popup",Popup.__docgenInfo={description:"",displayName:"Popup",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},mask:{defaultValue:{value:"false"},description:"",name:"mask",required:!1,type:{name:"boolean"}},defaultValue:{defaultValue:null,description:"",name:"defaultValue",required:!1,type:{name:"boolean"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"boolean"}},target:{defaultValue:null,description:"",name:"target",required:!1,type:{name:"HTMLElement | (() => HTMLElement)"}},container:{defaultValue:{value:"document.body"},description:"",name:"container",required:!1,type:{name:"HTMLElement | (() => HTMLElement)"}},placement:{defaultValue:{value:"bottom"},description:"",name:"placement",required:!1,type:{name:"enum",value:[{value:'"topLeft"'},{value:'"top"'},{value:'"topRight"'},{value:'"leftTop"'},{value:'"left"'},{value:'"leftBottom"'},{value:'"rightTop"'},{value:'"right"'},{value:'"rightBottom"'},{value:'"bottomLeft"'},{value:'"bottom"'},{value:'"bottomRight"'}]}},autoAdjustOverflow:{defaultValue:{value:"true"},description:"",name:"autoAdjustOverflow",required:!1,type:{name:"boolean"}},maskStyle:{defaultValue:null,description:"",name:"maskStyle",required:!1,type:{name:"CSSProperties"}},maskClassName:{defaultValue:null,description:"",name:"maskClassName",required:!1,type:{name:"string"}},onVisibleChange:{defaultValue:null,description:"",name:"onVisibleChange",required:!1,type:{name:"((visible: boolean) => void)"}},postPosition:{defaultValue:null,description:"",name:"postPosition",required:!1,type:{name:"HookFunction"}},boforeAutoAdjust:{defaultValue:null,description:"",name:"boforeAutoAdjust",required:!1,type:{name:"HookFunction"}},afterAutoAdjust:{defaultValue:null,description:"",name:"afterAutoAdjust",required:!1,type:{name:"HookFunction"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Overlay/popup.tsx#Popup"]={docgenInfo:Popup.__docgenInfo,name:"Popup",path:"src/components/Overlay/popup.tsx#Popup"})}catch(__react_docgen_typescript_loader_error){}try{popup.displayName="popup",popup.__docgenInfo={description:"",displayName:"popup",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},mask:{defaultValue:{value:"false"},description:"",name:"mask",required:!1,type:{name:"boolean"}},defaultValue:{defaultValue:null,description:"",name:"defaultValue",required:!1,type:{name:"boolean"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"boolean"}},target:{defaultValue:null,description:"",name:"target",required:!1,type:{name:"HTMLElement | (() => HTMLElement)"}},container:{defaultValue:{value:"document.body"},description:"",name:"container",required:!1,type:{name:"HTMLElement | (() => HTMLElement)"}},placement:{defaultValue:{value:"bottom"},description:"",name:"placement",required:!1,type:{name:"enum",value:[{value:'"topLeft"'},{value:'"top"'},{value:'"topRight"'},{value:'"leftTop"'},{value:'"left"'},{value:'"leftBottom"'},{value:'"rightTop"'},{value:'"right"'},{value:'"rightBottom"'},{value:'"bottomLeft"'},{value:'"bottom"'},{value:'"bottomRight"'}]}},autoAdjustOverflow:{defaultValue:{value:"true"},description:"",name:"autoAdjustOverflow",required:!1,type:{name:"boolean"}},maskStyle:{defaultValue:null,description:"",name:"maskStyle",required:!1,type:{name:"CSSProperties"}},maskClassName:{defaultValue:null,description:"",name:"maskClassName",required:!1,type:{name:"string"}},onVisibleChange:{defaultValue:null,description:"",name:"onVisibleChange",required:!1,type:{name:"((visible: boolean) => void)"}},postPosition:{defaultValue:null,description:"",name:"postPosition",required:!1,type:{name:"HookFunction"}},boforeAutoAdjust:{defaultValue:null,description:"",name:"boforeAutoAdjust",required:!1,type:{name:"HookFunction"}},afterAutoAdjust:{defaultValue:null,description:"",name:"afterAutoAdjust",required:!1,type:{name:"HookFunction"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Overlay/popup.tsx#popup"]={docgenInfo:popup.__docgenInfo,name:"popup",path:"src/components/Overlay/popup.tsx#popup"})}catch(__react_docgen_typescript_loader_error){}let isReactNode=value=>(0,react.isValidElement)(value)||"string"==typeof value||"number"==typeof value||"boolean"==typeof value||null==value;utils_const.J;let Overlay=props=>{let{className,style,children,trigger,triggerType,target,value,onVisibleChange,...restProps}=props,triggerRef=(0,react.useRef)(null),mouseEnterTimer=(0,react.useRef)(null),mouseOutTimer=(0,react.useRef)(null),[visible,setVisible]=(0,hooks.C8)(!1,{value,defaultValue:!1}),trggierNeedRender=isReactNode(trigger);trggierNeedRender||(triggerRef.current=trigger);let triggerRefCallback=(0,useEvent.Z)(node=>{trggierNeedRender&&(triggerRef.current=node)}),onMouseEnter=(0,react.useCallback)(()=>{mouseOutTimer.current&&(clearTimeout(mouseOutTimer.current),mouseOutTimer.current=null),mouseEnterTimer.current||visible||(mouseEnterTimer.current=setTimeout(()=>{setVisible(!0)},100))},[visible]),onMouseLeave=(0,react.useCallback)(()=>{mouseEnterTimer.current&&(clearTimeout(mouseEnterTimer.current),mouseEnterTimer.current=null),!mouseOutTimer.current&&visible&&(mouseOutTimer.current=setTimeout(()=>{setVisible(!1)},100))},[visible]),triggerProps=(0,react.useMemo)(()=>{switch(triggerType){case"click":return{ref:triggerRefCallback,onClick:()=>setVisible(val=>!val)};case"hover":return{ref:triggerRefCallback,onMouseEnter,onMouseLeave};default:return{ref:triggerRefCallback}}},[onMouseEnter,onMouseLeave,triggerRefCallback,triggerType]),popupProps=(0,react.useMemo)(()=>"hover"===triggerType?{onMouseEnter,onMouseLeave}:{},[onMouseEnter,onMouseLeave,triggerType]),triggerNode=trggierNeedRender?(0,react.cloneElement)("string"==typeof trigger?(0,jsx_runtime.jsx)("span",{children:trigger}):react.Children.toArray(trigger).length>1?(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:trigger}):trigger,triggerProps):null;return(0,hooks.rf)(()=>{null==onVisibleChange||onVisibleChange(visible)},[visible]),(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[triggerNode,(0,jsx_runtime.jsx)(Popup,{target:()=>triggerRef.current,value:visible,...popupProps,...restProps,children:"string"==typeof children?(0,jsx_runtime.jsx)("div",{style:{border:"1px solid #999"},children:children}):children})]})};Overlay.defaultProps={placement:"bottom",triggerType:"hover",trigger:(0,jsx_runtime.jsx)("div",{})};let Overlay_overlay=Overlay;try{Overlay.displayName="Overlay",Overlay.__docgenInfo={description:"",displayName:"Overlay",props:{trigger:{defaultValue:{value:"<div></div>"},description:"",name:"trigger",required:!1,type:{name:"ReactNode | HTMLElement"}},triggerType:{defaultValue:{value:"hover"},description:"",name:"triggerType",required:!1,type:{name:"enum",value:[{value:'"hover"'},{value:'"click"'}]}},placement:{defaultValue:{value:"bottom"},description:"",name:"placement",required:!1,type:{name:"enum",value:[{value:'"topLeft"'},{value:'"top"'},{value:'"topRight"'},{value:'"leftTop"'},{value:'"left"'},{value:'"leftBottom"'},{value:'"rightTop"'},{value:'"right"'},{value:'"rightBottom"'},{value:'"bottomLeft"'},{value:'"bottom"'},{value:'"bottomRight"'}]}},overlayName:{defaultValue:null,description:"",name:"overlayName",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},mask:{defaultValue:null,description:"",name:"mask",required:!1,type:{name:"boolean"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"boolean"}},target:{defaultValue:null,description:"",name:"target",required:!1,type:{name:"HTMLElement | (() => HTMLElement)"}},container:{defaultValue:null,description:"",name:"container",required:!1,type:{name:"HTMLElement | (() => HTMLElement)"}},autoAdjustOverflow:{defaultValue:null,description:"",name:"autoAdjustOverflow",required:!1,type:{name:"boolean"}},maskStyle:{defaultValue:null,description:"",name:"maskStyle",required:!1,type:{name:"CSSProperties"}},maskClassName:{defaultValue:null,description:"",name:"maskClassName",required:!1,type:{name:"string"}},onVisibleChange:{defaultValue:null,description:"",name:"onVisibleChange",required:!1,type:{name:"((visible: boolean) => void)"}},postPosition:{defaultValue:null,description:"",name:"postPosition",required:!1,type:{name:"HookFunction"}},boforeAutoAdjust:{defaultValue:null,description:"",name:"boforeAutoAdjust",required:!1,type:{name:"HookFunction"}},afterAutoAdjust:{defaultValue:null,description:"",name:"afterAutoAdjust",required:!1,type:{name:"HookFunction"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Overlay/overlay.tsx#Overlay"]={docgenInfo:Overlay.__docgenInfo,name:"Overlay",path:"src/components/Overlay/overlay.tsx#Overlay"})}catch(__react_docgen_typescript_loader_error){}try{overlay.displayName="overlay",overlay.__docgenInfo={description:"",displayName:"overlay",props:{trigger:{defaultValue:{value:"<div></div>"},description:"",name:"trigger",required:!1,type:{name:"ReactNode | HTMLElement"}},triggerType:{defaultValue:{value:"hover"},description:"",name:"triggerType",required:!1,type:{name:"enum",value:[{value:'"hover"'},{value:'"click"'}]}},placement:{defaultValue:{value:"bottom"},description:"",name:"placement",required:!1,type:{name:"enum",value:[{value:'"topLeft"'},{value:'"top"'},{value:'"topRight"'},{value:'"leftTop"'},{value:'"left"'},{value:'"leftBottom"'},{value:'"rightTop"'},{value:'"right"'},{value:'"rightBottom"'},{value:'"bottomLeft"'},{value:'"bottom"'},{value:'"bottomRight"'}]}},overlayName:{defaultValue:null,description:"",name:"overlayName",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},mask:{defaultValue:null,description:"",name:"mask",required:!1,type:{name:"boolean"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"boolean"}},target:{defaultValue:null,description:"",name:"target",required:!1,type:{name:"HTMLElement | (() => HTMLElement)"}},container:{defaultValue:null,description:"",name:"container",required:!1,type:{name:"HTMLElement | (() => HTMLElement)"}},autoAdjustOverflow:{defaultValue:null,description:"",name:"autoAdjustOverflow",required:!1,type:{name:"boolean"}},maskStyle:{defaultValue:null,description:"",name:"maskStyle",required:!1,type:{name:"CSSProperties"}},maskClassName:{defaultValue:null,description:"",name:"maskClassName",required:!1,type:{name:"string"}},onVisibleChange:{defaultValue:null,description:"",name:"onVisibleChange",required:!1,type:{name:"((visible: boolean) => void)"}},postPosition:{defaultValue:null,description:"",name:"postPosition",required:!1,type:{name:"HookFunction"}},boforeAutoAdjust:{defaultValue:null,description:"",name:"boforeAutoAdjust",required:!1,type:{name:"HookFunction"}},afterAutoAdjust:{defaultValue:null,description:"",name:"afterAutoAdjust",required:!1,type:{name:"HookFunction"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Overlay/overlay.tsx#overlay"]={docgenInfo:overlay.__docgenInfo,name:"overlay",path:"src/components/Overlay/overlay.tsx#overlay"})}catch(__react_docgen_typescript_loader_error){}},"./src/utils/const.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{J:()=>STYLE_PREFIX});let STYLE_PREFIX="eizy-ui"},"./src/utils/hooks/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{O8:()=>useClickOutside,Nr:()=>useDebounce,o$:()=>useListener,C8:()=>useMergedState,rf:()=>useUpdateEffect});var react=__webpack_require__("./node_modules/react/index.js");function useSafeState(defaultValue){let destroyRef=(0,react.useRef)(!1),[value,setValue]=(0,react.useState)(defaultValue);return(0,react.useEffect)(()=>(destroyRef.current=!1,()=>{destroyRef.current=!0}),[]),[value,function safeSetState(updater,ignoreDestroy){ignoreDestroy&&destroyRef.current||setValue(updater)}]}var useEvent=__webpack_require__("./src/utils/hooks/useEvent.ts");let update_createUpdateEffect=hook=>(effect,deps)=>{let isMounted=(0,react.useRef)(!1);hook(()=>()=>{isMounted.current=!1},[]),hook(()=>{if(isMounted.current)return effect();isMounted.current=!0},deps)},useUpdateLayoutEffect=update_createUpdateEffect(react.useLayoutEffect);function hasValue(value){return void 0!==value}function useMergedState(defaultStateValue,option){var _postState;let{defaultValue,value,onChange,postState}=option||{},[innerValue,setInnerValue]=useSafeState(()=>hasValue(value)?value:hasValue(defaultValue)?"function"==typeof defaultValue?defaultValue():defaultValue:"function"==typeof defaultStateValue?defaultStateValue():defaultStateValue),mergedValue=hasValue(value)?value:innerValue,postMergedValue=null!==(_postState=null==postState?void 0:postState(mergedValue))&&void 0!==_postState?_postState:mergedValue,onChangeFn=(0,useEvent.Z)(onChange),[prevValue,setPrevValue]=useSafeState(mergedValue);return useUpdateLayoutEffect(()=>{innerValue!==prevValue&&onChangeFn(innerValue,prevValue)},[innerValue]),useUpdateLayoutEffect(()=>{setInnerValue(value)},[value]),[postMergedValue,(0,useEvent.Z)((updater,ignoreDestroy)=>{setPrevValue(mergedValue,ignoreDestroy),setInnerValue(updater,ignoreDestroy)})]}let useUpdateEffect=update_createUpdateEffect(react.useEffect),useDebounce=function(value){let delay=arguments.length>1&&void 0!==arguments[1]?arguments[1]:300,[debouncedValue,setDebouncedValue]=(0,react.useState)(value);return(0,react.useEffect)(()=>{let handler=window.setTimeout(()=>{setDebouncedValue(value)},delay);return()=>{clearTimeout(handler)}},[value,delay]),debouncedValue},useClickOutside=(ref,handler)=>{(0,react.useEffect)(()=>{let listener=event=>{!ref.current||ref.current.contains(event.target)||handler(event)};return document.addEventListener("click",listener),()=>{document.removeEventListener("click",listener)}},[ref,handler])},useListener=(node,eventName,callback,condition)=>{(0,react.useEffect)(()=>{if(condition)return node.addEventListener(eventName,callback),()=>{node.removeEventListener(eventName,callback,!1)}},[condition])}},"./src/utils/hooks/useEvent.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>useEvent});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function useEvent(callback){let fnRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();return fnRef.current=callback,(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function(){for(var _fnRef$current,_len=arguments.length,args=Array(_len),_key=0;_key<_len;_key++)args[_key]=arguments[_key];return null===(_fnRef$current=fnRef.current)||void 0===_fnRef$current?void 0:_fnRef$current.call(fnRef,...args)},[])}}}]);
//# sourceMappingURL=232.e4160fef.iframe.bundle.js.map