(window.webpackJsonp=window.webpackJsonp||[]).push([[9,10],{P32K:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return v}));var a=n("1OyB"),r=n("vuIU"),o=n("JX7q"),i=n("Ji7U"),l=n("md7G"),s=n("foSv"),c=n("rePB"),u=n("q1tI"),d=n.n(u),p=n("a2PE"),f=n("A5/5"),m=n("z06z"),g=d.a.createElement;function h(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}var v=function(e){Object(i.a)(u,e);var t,n=(t=u,function(){var e,n=Object(s.a)(t);if(h()){var a=Object(s.a)(this).constructor;e=Reflect.construct(n,arguments,a)}else e=n.apply(this,arguments);return Object(l.a)(this,e)});function u(e){var t;Object(a.a)(this,u),t=n.call(this,e),Object(c.a)(Object(o.a)(t),"language",void 0),t.language=e.language||(e.className||"unknown").replace("language-","");var r=e.children;return t.state={code:r},t}return Object(r.a)(u,[{key:"componentDidUpdate",value:function(e){e.children!==this.props.children&&this.setState({code:this.props.children})}},{key:"render",value:function(){if("rockplate:tabs"===this.language){var e=new m.Builder(this.state.code);if(e.build(),e.schema){var t=e.schema.schema?e.schema.schema:e.schema,n=e.schema.params?e.schema.params:t;return g(f.default,{template:e.template.trim(),schema:t,params:n,strict:!0})}this.language="rockplate"}var a={theme:"dracula",mode:"rockplate",lineNumbers:!0,lineWrapping:!0,foldGutter:!0,gutters:["CodeMirror-linenumbers","CodeMirror-foldgutter","CodeMirror-lint-markers"],lint:!0,viewportMargin:1/0};return a.lint="rockplate"!==this.language,a.theme="rockplate"===this.language||"json"===this.language?"dracula":"monokai",a.mode="json"===this.language?{name:"javascript",json:"json"===this.language}:this.language,g("div",{className:"highlight-container"},g(p.Controlled,{value:this.state.code.trim(),onBeforeChange:function(e,t,n){},options:a,className:"cm-inline-wrapper"}))}}]),u}(d.a.Component)},fOUm:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return K}));var a=n("1OyB"),r=n("vuIU"),o=n("JX7q"),i=n("Ji7U"),l=n("md7G"),s=n("foSv"),c=n("rePB"),u=n("q1tI"),d=n.n(u),p=n("z06z"),f=n("KJax"),m=n("ZGBi"),g=n("UhlP"),h=n("wx14"),v=n("Ff2n"),b=(n("17x9"),n("iuhU"));var y=n("4hqb"),x=n("H2TA"),w=n("NqtD"),j=n("bfFb"),C=n("l3Wi");function O(e,t){return parseInt(e[t],10)||0}var k="undefined"!==typeof window?u.useLayoutEffect:u.useEffect,S={visibility:"hidden",position:"absolute",overflow:"hidden",height:0,top:0,left:0,transform:"translateZ(0)"},M=u.forwardRef((function(e,t){var n=e.onChange,a=e.rows,r=e.rowsMax,o=e.rowsMin,i=void 0===o?1:o,l=e.style,s=e.value,c=Object(v.a)(e,["onChange","rows","rowsMax","rowsMin","style","value"]),d=a||i,p=u.useRef(null!=s).current,f=u.useRef(null),m=Object(j.a)(t,f),g=u.useRef(null),b=u.useRef(0),y=u.useState({}),x=y[0],w=y[1],M=u.useCallback((function(){var t=f.current,n=window.getComputedStyle(t),a=g.current;a.style.width=n.width,a.value=t.value||e.placeholder||"x","\n"===a.value.slice(-1)&&(a.value+=" ");var o=n["box-sizing"],i=O(n,"padding-bottom")+O(n,"padding-top"),l=O(n,"border-bottom-width")+O(n,"border-top-width"),s=a.scrollHeight-i;a.value="x";var c=a.scrollHeight-i,u=s;d&&(u=Math.max(Number(d)*c,u)),r&&(u=Math.min(Number(r)*c,u));var p=(u=Math.max(u,c))+("border-box"===o?i+l:0),m=Math.abs(u-s)<=1;w((function(e){return b.current<20&&(p>0&&Math.abs((e.outerHeightStyle||0)-p)>1||e.overflow!==m)?(b.current+=1,{overflow:m,outerHeightStyle:p}):e}))}),[r,d,e.placeholder]);u.useEffect((function(){var e=Object(C.a)((function(){b.current=0,M()}));return window.addEventListener("resize",e),function(){e.clear(),window.removeEventListener("resize",e)}}),[M]),k((function(){M()})),u.useEffect((function(){b.current=0}),[s]);return u.createElement(u.Fragment,null,u.createElement("textarea",Object(h.a)({value:s,onChange:function(e){b.current=0,p||M(),n&&n(e)},ref:m,rows:d,style:Object(h.a)({height:x.outerHeightStyle,overflow:x.overflow?"hidden":null},l)},c)),u.createElement("textarea",{"aria-hidden":!0,className:e.className,readOnly:!0,ref:g,tabIndex:-1,style:Object(h.a)({},S,{},l)}))}));function E(e){return null!=e&&!(Array.isArray(e)&&0===e.length)}var B="undefined"===typeof window?u.useEffect:u.useLayoutEffect,R=u.forwardRef((function(e,t){var n=e["aria-describedby"],a=e.autoComplete,r=e.autoFocus,o=e.classes,i=e.className,l=(e.color,e.defaultValue),s=e.disabled,c=e.endAdornment,d=(e.error,e.fullWidth),p=void 0!==d&&d,f=e.id,m=e.inputComponent,g=void 0===m?"input":m,x=e.inputProps,C=void 0===x?{}:x,O=e.inputRef,k=(e.margin,e.multiline),S=void 0!==k&&k,R=e.name,N=e.onBlur,W=e.onChange,D=e.onClick,z=e.onFocus,F=e.onKeyDown,I=e.onKeyUp,A=e.placeholder,P=e.readOnly,T=e.renderSuffix,U=e.rows,H=e.rowsMax,q=e.rowsMin,$=e.startAdornment,J=e.type,K=void 0===J?"text":J,L=e.value,G=Object(v.a)(e,["aria-describedby","autoComplete","autoFocus","classes","className","color","defaultValue","disabled","endAdornment","error","fullWidth","id","inputComponent","inputProps","inputRef","margin","multiline","name","onBlur","onChange","onClick","onFocus","onKeyDown","onKeyUp","placeholder","readOnly","renderSuffix","rows","rowsMax","rowsMin","startAdornment","type","value"]),V=null!=C.value?C.value:L,X=u.useRef(null!=V).current,Y=u.useRef(),Z=u.useCallback((function(e){0}),[]),Q=Object(j.a)(C.ref,Z),_=Object(j.a)(O,Q),ee=Object(j.a)(Y,_),te=u.useState(!1),ne=te[0],ae=te[1],re=Object(y.b)();var oe=function(e){var t=e.props,n=e.states,a=e.muiFormControl;return n.reduce((function(e,n){return e[n]=t[n],a&&"undefined"===typeof t[n]&&(e[n]=a[n]),e}),{})}({props:e,muiFormControl:re,states:["color","disabled","error","hiddenLabel","margin","required","filled"]});oe.focused=re?re.focused:ne,u.useEffect((function(){!re&&s&&ne&&(ae(!1),N&&N())}),[re,s,ne,N]);var ie=re&&re.onFilled,le=re&&re.onEmpty,se=u.useCallback((function(e){!function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return e&&(E(e.value)&&""!==e.value||t&&E(e.defaultValue)&&""!==e.defaultValue)}(e)?le&&le():ie&&ie()}),[ie,le]);B((function(){X&&se({value:V})}),[V,se,X]);u.useEffect((function(){se(Y.current)}),[]);var ce=g,ue=Object(h.a)({},C,{ref:ee});"string"!==typeof ce?ue=Object(h.a)({inputRef:ee,type:K},ue,{ref:null}):S?!U||H||q?(ue=Object(h.a)({rows:U,rowsMax:H},ue),ce=M):ce="textarea":ue=Object(h.a)({type:K},ue);return u.useEffect((function(){re&&re.setAdornedStart(Boolean($))}),[re,$]),u.createElement("div",Object(h.a)({className:Object(b.a)(o.root,o["color".concat(Object(w.a)(oe.color||"primary"))],i,oe.disabled&&o.disabled,oe.error&&o.error,p&&o.fullWidth,oe.focused&&o.focused,re&&o.formControl,S&&o.multiline,$&&o.adornedStart,c&&o.adornedEnd,"dense"===oe.margin&&o.marginDense),onClick:function(e){Y.current&&e.currentTarget===e.target&&Y.current.focus(),D&&D(e)},ref:t},G),$,u.createElement(y.a.Provider,{value:null},u.createElement(ce,Object(h.a)({"aria-invalid":oe.error,"aria-describedby":n,autoComplete:a,autoFocus:r,defaultValue:l,disabled:oe.disabled,id:f,onAnimationStart:function(e){se("mui-auto-fill-cancel"===e.animationName?Y.current:{value:"x"})},name:R,placeholder:A,readOnly:P,required:oe.required,rows:U,value:V,onKeyDown:F,onKeyUp:I},ue,{className:Object(b.a)(o.input,C.className,oe.disabled&&o.disabled,S&&o.inputMultiline,oe.hiddenLabel&&o.inputHiddenLabel,$&&o.inputAdornedStart,c&&o.inputAdornedEnd,"search"===K&&o.inputTypeSearch,"dense"===oe.margin&&o.inputMarginDense),onBlur:function(e){N&&N(e),C.onBlur&&C.onBlur(e),re&&re.onBlur?re.onBlur(e):ae(!1)},onChange:function(e){if(!X){var t=e.target||Y.current;if(null==t)throw new TypeError("Material-UI: Expected valid input target. Did you use a custom `inputComponent` and forget to forward refs? See https://material-ui.com/r/input-component-ref-interface for more info.");se({value:t.value})}for(var n=arguments.length,a=new Array(n>1?n-1:0),r=1;r<n;r++)a[r-1]=arguments[r];C.onChange&&C.onChange.apply(C,[e].concat(a)),W&&W.apply(void 0,[e].concat(a))},onFocus:function(e){oe.disabled?e.stopPropagation():(z&&z(e),C.onFocus&&C.onFocus(e),re&&re.onFocus?re.onFocus(e):ae(!0))}}))),c,T?T(Object(h.a)({},oe,{startAdornment:$})):null)})),N=Object(x.a)((function(e){var t="light"===e.palette.type,n={color:"currentColor",opacity:t?.42:.5,transition:e.transitions.create("opacity",{duration:e.transitions.duration.shorter})},a={opacity:"0 !important"},r={opacity:t?.42:.5};return{"@global":{"@keyframes mui-auto-fill":{from:{}},"@keyframes mui-auto-fill-cancel":{from:{}}},root:Object(h.a)({},e.typography.body1,{color:e.palette.text.primary,lineHeight:"1.1876em",boxSizing:"border-box",position:"relative",cursor:"text",display:"inline-flex",alignItems:"center","&$disabled":{color:e.palette.text.disabled,cursor:"default"}}),formControl:{},focused:{},disabled:{},adornedStart:{},adornedEnd:{},error:{},marginDense:{},multiline:{padding:"".concat(6,"px 0 ").concat(7,"px"),"&$marginDense":{paddingTop:3}},colorSecondary:{},fullWidth:{width:"100%"},input:{font:"inherit",color:"currentColor",padding:"".concat(6,"px 0 ").concat(7,"px"),border:0,boxSizing:"content-box",background:"none",height:"1.1876em",margin:0,WebkitTapHighlightColor:"transparent",display:"block",minWidth:0,width:"100%",animationName:"mui-auto-fill-cancel","&::-webkit-input-placeholder":n,"&::-moz-placeholder":n,"&:-ms-input-placeholder":n,"&::-ms-input-placeholder":n,"&:focus":{outline:0},"&:invalid":{boxShadow:"none"},"&::-webkit-search-decoration":{"-webkit-appearance":"none"},"label[data-shrink=false] + $formControl &":{"&::-webkit-input-placeholder":a,"&::-moz-placeholder":a,"&:-ms-input-placeholder":a,"&::-ms-input-placeholder":a,"&:focus::-webkit-input-placeholder":r,"&:focus::-moz-placeholder":r,"&:focus:-ms-input-placeholder":r,"&:focus::-ms-input-placeholder":r},"&$disabled":{opacity:1},"&:-webkit-autofill":{animationDuration:"5000s",animationName:"mui-auto-fill"}},inputMarginDense:{paddingTop:3},inputMultiline:{height:"auto",resize:"none",padding:0},inputTypeSearch:{"-moz-appearance":"textfield","-webkit-appearance":"textfield"},inputAdornedStart:{},inputAdornedEnd:{},inputHiddenLabel:{}}}),{name:"MuiInputBase"})(R),W=u.forwardRef((function(e,t){var n=e.disableUnderline,a=e.classes,r=e.fullWidth,o=void 0!==r&&r,i=e.inputComponent,l=void 0===i?"input":i,s=e.multiline,c=void 0!==s&&s,d=e.type,p=void 0===d?"text":d,f=Object(v.a)(e,["disableUnderline","classes","fullWidth","inputComponent","multiline","type"]);return u.createElement(N,Object(h.a)({classes:Object(h.a)({},a,{root:Object(b.a)(a.root,!n&&a.underline),underline:null}),fullWidth:o,inputComponent:l,multiline:c,ref:t,type:p},f))}));W.muiName="Input";var D=Object(x.a)((function(e){var t="light"===e.palette.type?"rgba(0, 0, 0, 0.42)":"rgba(255, 255, 255, 0.7)";return{root:{position:"relative"},formControl:{"label + &":{marginTop:16}},focused:{},disabled:{},colorSecondary:{"&$underline:after":{borderBottomColor:e.palette.secondary.main}},underline:{"&:after":{borderBottom:"2px solid ".concat(e.palette.primary.main),left:0,bottom:0,content:'""',position:"absolute",right:0,transform:"scaleX(0)",transition:e.transitions.create("transform",{duration:e.transitions.duration.shorter,easing:e.transitions.easing.easeOut}),pointerEvents:"none"},"&$focused:after":{transform:"scaleX(1)"},"&$error:after":{borderBottomColor:e.palette.error.main,transform:"scaleX(1)"},"&:before":{borderBottom:"1px solid ".concat(t),left:0,bottom:0,content:'"\\00a0"',position:"absolute",right:0,transition:e.transitions.create("border-bottom-color",{duration:e.transitions.duration.shorter}),pointerEvents:"none"},"&:hover:not($disabled):before":{borderBottom:"2px solid ".concat(e.palette.text.primary),"@media (hover: none)":{borderBottom:"1px solid ".concat(t)}},"&$disabled:before":{borderBottomStyle:"dotted"}},error:{},marginDense:{},multiline:{},fullWidth:{},input:{},inputMarginDense:{},inputMultiline:{},inputTypeSearch:{}}}),{name:"MuiInput"})(W),z=n("tRbT"),F=n("30+C"),I=n("oa/T"),A=n("P32K"),P=n("B5nJ"),T=n("viY9"),U=n("bWLx"),H=d.a.createElement;function q(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}var $=Object(T.a)({palette:{type:"dark"}}),J={you:{"a developer":!1,genius:""}},K=function(e){Object(i.a)(u,e);var t,n=(t=u,function(){var e,n=Object(s.a)(t);if(q()){var a=Object(s.a)(this).constructor;e=Reflect.construct(n,arguments,a)}else e=n.apply(this,arguments);return Object(l.a)(this,e)});function u(e){var t;Object(a.a)(this,u),t=n.call(this,e),Object(c.a)(Object(o.a)(t),"rock",void 0);return t.state={template:"[if you are a developer]\n  You code, you rock\n  [you genius] \ud83e\udd18\n[else]\n  Stay home \ud83d\ude0a [-- Crisis --]\n[end if]",message:"",params:J},t}return Object(r.a)(u,[{key:"componentDidMount",value:function(){this.getMessage(!0)}},{key:"getMessage",value:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];this.rock&&!t||(this.rock=new p.Rockplate(this.state.template,J));var n=this.rock.parse(this.state.params);return e&&this.setState({message:n}),n}},{key:"getParamsCode",value:function(){return JSON.stringify(this.state.params,null,2)}},{key:"paramsChanged",value:function(e,t){var n=this,a=void 0!==e?e:this.state.params.you["a developer"],r=void 0!==t?t:this.state.params.you.genius;this.setState({params:{you:{"a developer":a,genius:r}}},(function(){n.getMessage(!0)}))}},{key:"inputChanged",value:function(e){this.paramsChanged(void 0,e)}},{key:"toggleChanged",value:function(e){this.paramsChanged(e,void 0)}},{key:"getCodeSection",value:function(){return H("div",null,H("div",null,"Hello there"))}},{key:"render",value:function(){var e=this;return H(z.a,{container:!0,spacing:1},H(z.a,{item:!0,xs:12,sm:12,md:6},H(P.CodeTabs,{template:this.state.template,schema:J,params:this.state.params,codeOnly:!0,onChange:function(t){e.setState({template:t.template},(function(){e.getMessage(!0,!0)}))}}),H("div",{className:""},H("h2",null,this.state.message))),H(z.a,{item:!0,xs:12,sm:12,md:6,className:"params-wrapper"},H("div",null,H(U.a,{theme:$},H("div",{className:"code-tabs-wrapper"},H(F.a,null,H(I.a,null,H("p",{style:{marginTop:0}},"(readonly) Params"),H(A.default,{language:"json"},this.getParamsCode())))))),H("div",{style:{margin:"0.83em 0"}},H(f.a,{row:!0},H(m.a,{control:H(g.a,{checked:this.state.params.you["a developer"],onChange:function(t){e.toggleChanged(t.target.checked)},color:"primary"}),label:this.state.params.you["a developer"]?"":"you are a developer"}),this.state.params.you["a developer"]?H(D,{placeholder:"Enter your name, genius",value:this.state.params.you.genius,onChange:function(t){e.inputChanged(t.target.value)},inputProps:{"aria-label":"Enter your name, genius"}}):""))))}}]),u}(d.a.Component)},tRbT:function(e,t,n){"use strict";var a=n("Ff2n"),r=n("wx14"),o=n("q1tI"),i=(n("17x9"),n("iuhU")),l=n("H2TA"),s=[0,1,2,3,4,5,6,7,8,9,10],c=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12];function u(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n=parseFloat(e);return"".concat(n/t).concat(String(e).replace(String(n),"")||"px")}var d=o.forwardRef((function(e,t){var n=e.alignContent,l=void 0===n?"stretch":n,s=e.alignItems,c=void 0===s?"stretch":s,u=e.classes,d=e.className,p=e.component,f=void 0===p?"div":p,m=e.container,g=void 0!==m&&m,h=e.direction,v=void 0===h?"row":h,b=e.item,y=void 0!==b&&b,x=e.justify,w=void 0===x?"flex-start":x,j=e.lg,C=void 0!==j&&j,O=e.md,k=void 0!==O&&O,S=e.sm,M=void 0!==S&&S,E=e.spacing,B=void 0===E?0:E,R=e.wrap,N=void 0===R?"wrap":R,W=e.xl,D=void 0!==W&&W,z=e.xs,F=void 0!==z&&z,I=e.zeroMinWidth,A=void 0!==I&&I,P=Object(a.a)(e,["alignContent","alignItems","classes","className","component","container","direction","item","justify","lg","md","sm","spacing","wrap","xl","xs","zeroMinWidth"]),T=Object(i.a)(u.root,d,g&&[u.container,0!==B&&u["spacing-xs-".concat(String(B))]],y&&u.item,A&&u.zeroMinWidth,"row"!==v&&u["direction-xs-".concat(String(v))],"wrap"!==N&&u["wrap-xs-".concat(String(N))],"stretch"!==c&&u["align-items-xs-".concat(String(c))],"stretch"!==l&&u["align-content-xs-".concat(String(l))],"flex-start"!==w&&u["justify-xs-".concat(String(w))],!1!==F&&u["grid-xs-".concat(String(F))],!1!==M&&u["grid-sm-".concat(String(M))],!1!==k&&u["grid-md-".concat(String(k))],!1!==C&&u["grid-lg-".concat(String(C))],!1!==D&&u["grid-xl-".concat(String(D))]);return o.createElement(f,Object(r.a)({className:T,ref:t},P))})),p=Object(l.a)((function(e){return Object(r.a)({root:{},container:{boxSizing:"border-box",display:"flex",flexWrap:"wrap",width:"100%"},item:{boxSizing:"border-box",margin:"0"},zeroMinWidth:{minWidth:0},"direction-xs-column":{flexDirection:"column"},"direction-xs-column-reverse":{flexDirection:"column-reverse"},"direction-xs-row-reverse":{flexDirection:"row-reverse"},"wrap-xs-nowrap":{flexWrap:"nowrap"},"wrap-xs-wrap-reverse":{flexWrap:"wrap-reverse"},"align-items-xs-center":{alignItems:"center"},"align-items-xs-flex-start":{alignItems:"flex-start"},"align-items-xs-flex-end":{alignItems:"flex-end"},"align-items-xs-baseline":{alignItems:"baseline"},"align-content-xs-center":{alignContent:"center"},"align-content-xs-flex-start":{alignContent:"flex-start"},"align-content-xs-flex-end":{alignContent:"flex-end"},"align-content-xs-space-between":{alignContent:"space-between"},"align-content-xs-space-around":{alignContent:"space-around"},"justify-xs-center":{justifyContent:"center"},"justify-xs-flex-end":{justifyContent:"flex-end"},"justify-xs-space-between":{justifyContent:"space-between"},"justify-xs-space-around":{justifyContent:"space-around"},"justify-xs-space-evenly":{justifyContent:"space-evenly"}},function(e,t){var n={};return s.forEach((function(a){var r=e.spacing(a);0!==r&&(n["spacing-".concat(t,"-").concat(a)]={margin:"-".concat(u(r,2)),width:"calc(100% + ".concat(u(r),")"),"& > $item":{padding:u(r,2)}})})),n}(e,"xs"),{},e.breakpoints.keys.reduce((function(t,n){return function(e,t,n){var a={};c.forEach((function(e){var t="grid-".concat(n,"-").concat(e);if(!0!==e)if("auto"!==e){var r="".concat(Math.round(e/12*1e8)/1e6,"%");a[t]={flexBasis:r,flexGrow:0,maxWidth:r}}else a[t]={flexBasis:"auto",flexGrow:0,maxWidth:"none"};else a[t]={flexBasis:0,flexGrow:1,maxWidth:"100%"}})),"xs"===n?Object(r.a)(e,a):e[t.breakpoints.up(n)]=a}(t,e,n),t}),{}))}),{name:"MuiGrid"})(d);t.a=p}}]);