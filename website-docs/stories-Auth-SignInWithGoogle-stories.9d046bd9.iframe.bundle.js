(self.webpackChunkanaglyph_letter_puzzle_game_frontend=self.webpackChunkanaglyph_letter_puzzle_game_frontend||[]).push([[107],{"./node_modules/@babel/runtime/helpers/esm/defineProperty.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";function _typeof(obj){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===_typeof(key)?key:String(key)}function _defineProperty(obj,key,value){return(key=_toPropertyKey(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}__webpack_require__.d(__webpack_exports__,{Z:()=>_defineProperty})},"./src/stories/Auth/SignInWithGoogle.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _Default$parameters,_Default$parameters2,_Default$parameters2$,_home_parth_Desktop_Anaglyph_Letter_Puzzle_Game_anaglyph_letter_puzzle_game_frontend_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_components_Auth_SignInWithGoogle__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/Auth/SignInWithGoogle.tsx"),__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement;function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){(0,_home_parth_Desktop_Anaglyph_Letter_Puzzle_Game_anaglyph_letter_puzzle_game_frontend_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__.Z)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}const __WEBPACK_DEFAULT_EXPORT__={title:"SignInWithGoogle",component:_components_Auth_SignInWithGoogle__WEBPACK_IMPORTED_MODULE_2__.Z,tags:["autodocs"]};var Default=function Default(){return __jsx(_components_Auth_SignInWithGoogle__WEBPACK_IMPORTED_MODULE_2__.Z,null)};Default.displayName="Default",Default.parameters=_objectSpread(_objectSpread({},Default.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Default$parameters=Default.parameters)||void 0===_Default$parameters?void 0:_Default$parameters.docs),{},{source:_objectSpread({originalSource:"() => <SignInWithGoogle />"},null===(_Default$parameters2=Default.parameters)||void 0===_Default$parameters2||null===(_Default$parameters2$=_Default$parameters2.docs)||void 0===_Default$parameters2$?void 0:_Default$parameters2$.source)})}),Default.__docgenInfo={description:"",methods:[],displayName:"Default"}},"./src/components/Auth/SignInWithGoogle.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>SignInWithGoogle});var react=__webpack_require__("./node_modules/react/index.js"),index_esm=__webpack_require__("./node_modules/react-icons/fc/index.esm.js"),esm_index_esm=__webpack_require__("./node_modules/firebase/auth/dist/esm/index.esm.js"),dist_esm_index_esm=__webpack_require__("./node_modules/firebase/app/dist/esm/index.esm.js"),firestore_dist_esm_index_esm=__webpack_require__("./node_modules/firebase/firestore/dist/esm/index.esm.js"),app=(0,dist_esm_index_esm.ZF)({apiKey:"AIzaSyDpyGIbJXOHc53qTMGdG9XS8tnFeREcxNY",authDomain:"anaglyph-letter-game.firebaseapp.com",projectId:"anaglyph-letter-game",storageBucket:"anaglyph-letter-game.appspot.com",messagingSenderId:"370658729206",appId:"1:370658729206:web:93a8b30502aaa30ab2a0d7"});(0,firestore_dist_esm_index_esm.ad)(app);const firebase_config=app;var next_router=__webpack_require__("./node_modules/next/router.js"),__jsx=react.createElement;function SignInWithGoogle(){var auth=(0,esm_index_esm.v0)(firebase_config),router=(0,next_router.useRouter)();return __jsx("button",{onClick:function handleGoogleSignIn(){var provider=new esm_index_esm.hJ;(0,esm_index_esm.rh)(auth,provider).catch((function(err){console.error(err)})).finally((function(){return router.push("/")}))},type:"button",className:"p-2 flex justify-center items-center w-full gap-3 text-xl bg-black text-white rounded-lg hover:bg-gray-700"},__jsx(index_esm.JM8,{size:32,className:"xs1-max:text-lg"})," ",__jsx("p",{className:"font-semibold xs1-max:text-lg"},"Continue with Google"))}SignInWithGoogle.displayName="SignInWithGoogle",SignInWithGoogle.__docgenInfo={description:"Button to allow users to choose Google OAUTH",methods:[],displayName:"SignInWithGoogle"};try{SignInWithGoogle.displayName="SignInWithGoogle",SignInWithGoogle.__docgenInfo={description:"Button to allow users to choose Google OAUTH",displayName:"SignInWithGoogle",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Auth/SignInWithGoogle.tsx#SignInWithGoogle"]={docgenInfo:SignInWithGoogle.__docgenInfo,name:"SignInWithGoogle",path:"src/components/Auth/SignInWithGoogle.tsx#SignInWithGoogle"})}catch(__react_docgen_typescript_loader_error){}},"./node_modules/react-icons/lib/esm/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{w_:()=>GenIcon});var react=__webpack_require__("./node_modules/react/index.js"),DefaultContext={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},IconContext=react.createContext&&react.createContext(DefaultContext),__assign=function(){return __assign=Object.assign||function(t){for(var s,i=1,n=arguments.length;i<n;i++)for(var p in s=arguments[i])Object.prototype.hasOwnProperty.call(s,p)&&(t[p]=s[p]);return t},__assign.apply(this,arguments)},__rest=function(s,e){var t={};for(var p in s)Object.prototype.hasOwnProperty.call(s,p)&&e.indexOf(p)<0&&(t[p]=s[p]);if(null!=s&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(p=Object.getOwnPropertySymbols(s);i<p.length;i++)e.indexOf(p[i])<0&&Object.prototype.propertyIsEnumerable.call(s,p[i])&&(t[p[i]]=s[p[i]])}return t};function Tree2Element(tree){return tree&&tree.map((function(node,i){return react.createElement(node.tag,__assign({key:i},node.attr),Tree2Element(node.child))}))}function GenIcon(data){return function(props){return react.createElement(IconBase,__assign({attr:__assign({},data.attr)},props),Tree2Element(data.child))}}function IconBase(props){var elem=function(conf){var className,attr=props.attr,size=props.size,title=props.title,svgProps=__rest(props,["attr","size","title"]),computedSize=size||conf.size||"1em";return conf.className&&(className=conf.className),props.className&&(className=(className?className+" ":"")+props.className),react.createElement("svg",__assign({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},conf.attr,attr,svgProps,{className,style:__assign(__assign({color:props.color||conf.color},conf.style),props.style),height:computedSize,width:computedSize,xmlns:"http://www.w3.org/2000/svg"}),title&&react.createElement("title",null,title),props.children)};return void 0!==IconContext?react.createElement(IconContext.Consumer,null,(function(conf){return elem(conf)})):elem(DefaultContext)}},"?6e58":()=>{}}]);