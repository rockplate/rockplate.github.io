(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{P32K:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return v}));var n=a("1OyB"),r=a("vuIU"),c=a("JX7q"),i=a("Ji7U"),o=a("md7G"),s=a("foSv"),l=a("rePB"),u=a("q1tI"),h=a.n(u),p=a("a2PE"),m=a("A5/5"),d=a("z06z"),g=h.a.createElement;function f(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}var v=function(e){Object(i.a)(u,e);var t,a=(t=u,function(){var e,a=Object(s.a)(t);if(f()){var n=Object(s.a)(this).constructor;e=Reflect.construct(a,arguments,n)}else e=a.apply(this,arguments);return Object(o.a)(this,e)});function u(e){var t;Object(n.a)(this,u),t=a.call(this,e),Object(l.a)(Object(c.a)(t),"language",void 0),t.language=e.language||(e.className||"unknown").replace("language-","");var r=e.children;return t.state={code:r},t}return Object(r.a)(u,[{key:"componentDidUpdate",value:function(e){e.children!==this.props.children&&this.setState({code:this.props.children})}},{key:"render",value:function(){if("rockplate:tabs"===this.language){var e=new d.Builder(this.state.code);if(e.build(),e.schema){var t=e.schema.schema?e.schema.schema:e.schema,a=e.schema.params?e.schema.params:t;return g(m.default,{template:e.template.trim(),schema:t,params:a,strict:!0})}this.language="rockplate"}var n={theme:"dracula",mode:"rockplate",lineNumbers:!0,lineWrapping:!0,foldGutter:!0,gutters:["CodeMirror-linenumbers","CodeMirror-foldgutter","CodeMirror-lint-markers"],lint:!0,viewportMargin:1/0};return n.lint="rockplate"!==this.language,n.theme="rockplate"===this.language||"json"===this.language?"dracula":"monokai",n.mode="json"===this.language?{name:"javascript",json:"json"===this.language}:this.language,g("div",{className:"highlight-container"},g(p.Controlled,{value:this.state.code.trim(),onBeforeChange:function(e,t,a){},options:n,className:"cm-inline-wrapper"}))}}]),u}(h.a.Component)}}]);