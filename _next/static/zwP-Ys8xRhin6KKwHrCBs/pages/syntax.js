(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{"3lyb":function(e,n,t){"use strict";t.r(n);var a=t("q1tI"),b=t.n(a),r=t("NsgW"),p=t("0FA2"),c=t("kOwS"),l=t("qNsG"),i=t("7ljp"),o=(b.a.createElement,{}),s="wrapper";function O(e){var n=e.components,t=Object(l.a)(e,["components"]);return Object(i.b)(s,Object(c.a)({},o,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"syntax"},"Syntax"),Object(i.b)("h2",{id:"table-of-contents"},"Table of Contents"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("a",Object(c.a)({parentName:"p"},{href:"#introduction"}),"Introduction"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("a",Object(c.a)({parentName:"p"},{href:"#comments"}),"Comments"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("a",Object(c.a)({parentName:"p"},{href:"#expressions---identifers"}),"Expressions - Identifers"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("a",Object(c.a)({parentName:"p"},{href:"#if-blocks---booleans"}),"If blocks - Booleans")),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(c.a)({parentName:"li"},{href:"#operators"}),"Operators")))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("a",Object(c.a)({parentName:"p"},{href:"#repeat-blocks---arrays"}),"Repeat blocks - Arrays")))),Object(i.b)("h2",{id:"introduction"},"Introduction"),Object(i.b)("p",null,"All the code related to Rockplate start with ",Object(i.b)("inlineCode",{parentName:"p"},"[")," and ends with ",Object(i.b)("inlineCode",{parentName:"p"},"]"),". To separate keywords and identifers ",Object(i.b)("inlineCode",{parentName:"p"},"space")," is used as a delimiter."),Object(i.b)("pre",null,Object(i.b)("code",Object(c.a)({parentName:"pre"},{className:"language-rockplate"}),"You can have [rockplate syntax] in between\nan HTML, CSS, XML, plain text\nor ANY text content\n")),Object(i.b)("p",null,"a complex example:"),Object(i.b)("pre",null,Object(i.b)("code",Object(c.a)({parentName:"pre"},{className:"language-rockplate"}),'<div class="[container classname]">\n    <a href="[home link]">Go home</a>\n    <p>This is awesome</p>\n    <ul>\n    [repeat items]\n      <li>\n        <h3>[item name]</h3>\n        <p>\n          [item description]\n          [if item is free]\n            <span class="highlight">FREE</span>\n          [end if]\n        </p>\n      </li>\n    [end repeat]\n    </ul>\n</div>\n<style>\n  .[container classname] {\n    max-width: [container width];\n  }\n</style>\n')),Object(i.b)("h2",{id:"comments"},"Comments"),Object(i.b)("p",null,"Comments start with ",Object(i.b)("inlineCode",{parentName:"p"},"[--")," and ends with ",Object(i.b)("inlineCode",{parentName:"p"},"--]"),". In between it can have any text."),Object(i.b)("p",null,"Syntax notation:"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"[")," ",Object(i.b)("inlineCode",{parentName:"p"},"--")," ",Object(i.b)("inlineCode",{parentName:"p"},"zero or more characters")," ",Object(i.b)("inlineCode",{parentName:"p"},"--")," ",Object(i.b)("inlineCode",{parentName:"p"},"]")),Object(i.b)("pre",null,Object(i.b)("code",Object(c.a)({parentName:"pre"},{className:"language-rockplate"}),"This is [-- a comment --] among other text\n\nComments can have\n[--\n  multiple\n  lines\n--]\n\nOther expressions [-- within the comment block\nhave no [special meaning] --]\n\n")),Object(i.b)("h2",{id:"expressions---identifers"},"Expressions - Identifers"),Object(i.b)("p",null,"Expressions can be used to print ",Object(i.b)("a",Object(c.a)({parentName:"p"},{href:"/data-structure#identifers"}),"Identifiers")),Object(i.b)("p",null,"Syntax notation:"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"[")," ",Object(i.b)("inlineCode",{parentName:"p"},"OBJECT")," ",Object(i.b)("inlineCode",{parentName:"p"},"space")," ",Object(i.b)("inlineCode",{parentName:"p"},"IDENTIFIER_PROPERTY")," ",Object(i.b)("inlineCode",{parentName:"p"},"]")),Object(i.b)("pre",null,Object(i.b)("code",Object(c.a)({parentName:"pre"},{className:"language-json"}),'{\n  "order": {\n    "ref": "210045-674558-981560"\n  }\n}\n')),Object(i.b)("pre",null,Object(i.b)("code",Object(c.a)({parentName:"pre"},{className:"language-rockplate"}),"Dear customer,\nYour order [order ref] is on the way.\nThank you.\n")),Object(i.b)("h2",{id:"if-blocks---booleans"},"If blocks - Booleans"),Object(i.b)("p",null,"If blocks can be used to make use of ",Object(i.b)("a",Object(c.a)({parentName:"p"},{href:"/data-structure#booleans"}),"Booleans")),Object(i.b)("p",null,"Syntax notation:"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"[")," ",Object(i.b)("inlineCode",{parentName:"p"},"if")," ",Object(i.b)("inlineCode",{parentName:"p"},"space")," ",Object(i.b)("inlineCode",{parentName:"p"},"OBJECT")," ",Object(i.b)("inlineCode",{parentName:"p"},"space")," ",Object(i.b)("inlineCode",{parentName:"p"},"operator")," ",Object(i.b)("inlineCode",{parentName:"p"},"space")," ",Object(i.b)("inlineCode",{parentName:"p"},"BOOLEAN_PROPERTY")," ",Object(i.b)("inlineCode",{parentName:"p"},"]")),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"True Content")),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"[")," ",Object(i.b)("inlineCode",{parentName:"p"},"else")," ",Object(i.b)("inlineCode",{parentName:"p"},"]")),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"False Content (optional)")),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"[")," ",Object(i.b)("inlineCode",{parentName:"p"},"end")," ",Object(i.b)("inlineCode",{parentName:"p"},"space")," ",Object(i.b)("inlineCode",{parentName:"p"},"if")," ",Object(i.b)("inlineCode",{parentName:"p"},"]")),Object(i.b)("h3",{id:"operators"},"Operators"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"is")," | ",Object(i.b)("inlineCode",{parentName:"p"},"are")," | ",Object(i.b)("inlineCode",{parentName:"p"},"is not")," | ",Object(i.b)("inlineCode",{parentName:"p"},"are not")),Object(i.b)("pre",null,Object(i.b)("code",Object(c.a)({parentName:"pre"},{className:"language-json"}),'{\n  "order": {\n    "paid": true\n  },\n  "vegetables": {\n    "fresh": true\n  }\n}\n')),Object(i.b)("pre",null,Object(i.b)("code",Object(c.a)({parentName:"pre"},{className:"language-rockplate"}),"[if order is paid]\n  Paid\n[else]\n  Unpaid\n[end if]\n")),Object(i.b)("pre",null,Object(i.b)("code",Object(c.a)({parentName:"pre"},{className:"language-rockplate"}),"I eat\n[if vegetables are fresh]\n  healthy\n[end if]\nvegetables \ud83e\udd55\ud83e\udd66\ud83c\udf45\ud83c\udf46\ud83e\udd5d\ud83e\udd6c\ud83e\udd52\ud83c\udf36\n")),Object(i.b)("h2",{id:"repeat-blocks---arrays"},"Repeat blocks - Arrays"),Object(i.b)("p",null,"Repeat blocks can be used to loop through ",Object(i.b)("a",Object(c.a)({parentName:"p"},{href:"/data-structure#arrays"}),"Arrays")),Object(i.b)("p",null,"Syntax notation:"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"[")," ",Object(i.b)("inlineCode",{parentName:"p"},"repeat")," ",Object(i.b)("inlineCode",{parentName:"p"},"space")," ",Object(i.b)("inlineCode",{parentName:"p"},"ARRAY")," ",Object(i.b)("inlineCode",{parentName:"p"},"]")),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"Inner Content")),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"[")," ",Object(i.b)("inlineCode",{parentName:"p"},"end")," ",Object(i.b)("inlineCode",{parentName:"p"},"space")," ",Object(i.b)("inlineCode",{parentName:"p"},"repeat")," ",Object(i.b)("inlineCode",{parentName:"p"},"]")),Object(i.b)("pre",null,Object(i.b)("code",Object(c.a)({parentName:"pre"},{className:"language-json"}),'{\n  "orders": [\n    {\n      "order": {\n        "status": "Paid",\n        "ref": "210045-674558-981560"\n      },\n      "discount": {\n        "available": false,\n        "amount": "5%"\n      }\n    }\n  ]\n}\n')),Object(i.b)("pre",null,Object(i.b)("code",Object(c.a)({parentName:"pre"},{className:"language-rockplate"}),"Your orders:\n[repeat orders]\n\n Ref: [order ref]\n\n Status: [order status]\n\n [if discount is available]\n   Discount: [discount amount]\n [end if]\n\n[end repeat]\n")))}O.isMDXComponent=!0,t.d(n,"default",(function(){return m}));var j=b.a.createElement;function m(){return j(r.a,null,j(O,null),j(p.a,{step:3,prev:{link:"/data-structure",label:"Data Structure"},next:{link:"/linter",label:"Linter"}}))}},KhfF:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/syntax",function(){return t("3lyb")}])}},[["KhfF",1,2,0,3,4,5]]]);