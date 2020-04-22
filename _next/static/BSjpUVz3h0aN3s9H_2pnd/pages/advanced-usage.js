(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{FAKB:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/advanced-usage",function(){return t("kMfC")}])},kMfC:function(e,n,t){"use strict";t.r(n);var a=t("q1tI"),r=t.n(a),l=t("NsgW"),c=t("0FA2"),i=t("kOwS"),s=t("qNsG"),o=t("7ljp"),p=(r.a.createElement,{}),m="wrapper";function b(e){var n=e.components,t=Object(s.a)(e,["components"]);return Object(o.b)(m,Object(i.a)({},p,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"advanced-usage"},"Advanced Usage"),Object(o.b)("h2",{id:"table-of-contents"},"Table of Contents"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("a",Object(i.a)({parentName:"p"},{href:"#builder-and-parser"}),"Builder and Parser"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("a",Object(i.a)({parentName:"p"},{href:"#schema"}),"Schema")),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(i.a)({parentName:"li"},{href:"#async-schema"}),"Async schema")))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("a",Object(i.a)({parentName:"p"},{href:"#strict-mode"}),"Strict mode"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("a",Object(i.a)({parentName:"p"},{href:"#linter"}),"Linter")))),Object(o.b)("h2",{id:"builder-and-parser"},"Builder and Parser"),Object(o.b)("p",null,"You can achieve the same thing (but with more control) with ",Object(o.b)("inlineCode",{parentName:"p"},"Builder")," and ",Object(o.b)("inlineCode",{parentName:"p"},"Parser")," classes instead of ",Object(o.b)("inlineCode",{parentName:"p"},"Rockplate")," class seen on ",Object(o.b)("a",Object(i.a)({parentName:"p"},{href:"getting-started#usage"}),"Getting Started")," section."),Object(o.b)("p",null,"You can achieve the same thing that was achieved with ",Object(o.b)("inlineCode",{parentName:"p"},"Rockplate")," class on ",Object(o.b)("a",Object(i.a)({parentName:"p"},{href:"getting-started#usage"}),"Getting Started")," section, but with more control with ",Object(o.b)("inlineCode",{parentName:"p"},"Builder")," and ",Object(o.b)("inlineCode",{parentName:"p"},"Parser")," classes."),Object(o.b)("pre",null,Object(o.b)("code",Object(i.a)({parentName:"pre"},{className:"language-javascript"}),"import { Builder, Parser } from 'rockplate';\n\nconst template = 'My name is [my name]';\nconst schema = {\n  my: {\n    name: 'My Name',\n  },\n};\nconst builder = new Builder(template, schema);\n// wait for builder.build().then(... when using async schema resolver\nconsole.log(builder.blocks);\n\nconst parser = new Parser(builder);\nconst output = parser.parse({\n  // you will get type hints\n  // for properties in schema as you type\n  my: {\n    name: 'Safraz Razik',\n  },\n});\nconsole.log(output); // My name is Safraz Razik\n")),Object(o.b)("h2",{id:"schema"},"Schema"),Object(o.b)("p",null,"Schema can be passed as an object (recommended) or embedded into template (recommended only in standalone ",Object(o.b)("inlineCode",{parentName:"p"},".rpl")," and ",Object(o.b)("inlineCode",{parentName:"p"},".rphtml")," files)"),Object(o.b)("h3",{id:"async-schema"},"Async schema"),Object(o.b)("p",null,"When working with ",Object(o.b)("inlineCode",{parentName:"p"},".rpl")," and ",Object(o.b)("inlineCode",{parentName:"p"},".rphtml")," files, you can have your schema in an external json file, you should reference that json file from your rpl file by defining a json object on top of the file with only a key named ",Object(o.b)("inlineCode",{parentName:"p"},'"schema"')," with the json file path relative to the rpl file."),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"my-schema.json")," file"),Object(o.b)("pre",null,Object(o.b)("code",Object(i.a)({parentName:"pre"},{className:"language-json"}),'{\n  "my": {\n    "name": "My Name"\n  }\n}\n')),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"my-template.rpl")," file"),Object(o.b)("pre",null,Object(o.b)("code",Object(i.a)({parentName:"pre"},{className:"language-rockplate"}),'{\n    "schema": "./my-schema.json"\n}\n\nMy name is [my name]\n')),Object(o.b)("p",null,"As seen on ",Object(o.b)("a",Object(i.a)({parentName:"p"},{href:"getting-started#external-schema-file"}),"Getting Started")," section, you can pass a synchronous schema resolver function, or you can pass an asynchronous schema resolver with promises."),Object(o.b)("pre",null,Object(o.b)("code",Object(i.a)({parentName:"pre"},{className:"language-javascript"}),"import { Rockplate } from 'rockplate';\nimport { readFile } from 'fs';\nimport { resolve, dirname } from 'path';\n\nconst getRpl = (templateFile) => {\n  const schemaResolver = (schemaUrl) => {\n    const filePath = resolve(dirname(templateFile), schemaUrl);\n    return new Promise((resolve, reject) => {\n      readFile(filePath, 'utf8', (err, fileContent) => {\n        if (err) {\n          reject(err);\n          return;\n        }\n        resolve(JSON.parse(fileContent));\n      });\n    });\n  };\n\n  return new Promise((resolve, reject) => {\n    readFile(templateFile, 'utf8', (err, template) => {\n      if (err) {\n        reject('template file could not be read');\n        return;\n      }\n      const rpl = new Rockplate(template, schemaResolver);\n      // important! - as schema is resolved asynchronously, you should wait for rpl.build() to resolve\n      rpl.build().then(() => {\n        resolve(rpl);\n      });\n    });\n  });\n};\n\ngetRpl('/some/dir/my-template.rpl').then((rpl) => {\n  const output = rpl.parse({\n    // ...\n  });\n});\n")),Object(o.b)("h2",{id:"strict-mode"},"Strict mode"),Object(o.b)("p",null,"Strict mode is enabled automatically when you pass ",Object(o.b)("inlineCode",{parentName:"p"},"schema")," while creating Builder, Linter or Rockplate instance. You can override this setting via the third parameter."),Object(o.b)("pre",null,Object(o.b)("code",Object(i.a)({parentName:"pre"},{className:"language-javascript"}),"import { Builder, Rockplate, Linter } from 'rockplate';\n\n// ...\n\nconst strict = false;\nconst builder = new Builder(template, schema, strict);\nconst rockplate = new Rockplate(template, schema, strict);\nconst linter = new Linter(template, schema, strict);\n\n// ...\n")),Object(o.b)("h2",{id:"linter"},"Linter"),Object(o.b)("p",null,"When working with standalone ",Object(o.b)("inlineCode",{parentName:"p"},".rpl")," and ",Object(o.b)("inlineCode",{parentName:"p"},".rphtml")," files, Linter can be created with schema (strict mode) and params can be omitted when linting."),Object(o.b)("pre",null,Object(o.b)("code",Object(i.a)({parentName:"pre"},{className:"language-javascript"}),"import { Linter } from 'rockplate';\n\nconst template = 'My name is [my name]';\nconst schema = {\n  my: {\n    name: 'My Name',\n  },\n};\n// with schema\nconst linter = new Linter(template, schema);\n// without params\nconst result = linter.lint();\n")),Object(o.b)("p",null,"Meanwhile, Linter can be created without schema (non strict mode) and params can be passed for linting on the fly."),Object(o.b)("pre",null,Object(o.b)("code",Object(i.a)({parentName:"pre"},{className:"language-javascript"}),"import { Linter } from 'rockplate';\n\nconst template = 'My name is [my name]';\n// without schema\nconst linter = new Linter(template);\n// with params\nconst result = linter.lint({\n  my: {\n    name: 'Safraz',\n  },\n});\n")),Object(o.b)("p",null,"When you do not want the linter to resolve the lines the errors occured, set the second argument of ",Object(o.b)("inlineCode",{parentName:"p"},"lint()")," method to ",Object(o.b)("inlineCode",{parentName:"p"},"false")),Object(o.b)("pre",null,Object(o.b)("code",Object(i.a)({parentName:"pre"},{className:"language-javascript"}),"import { Linter } from 'rockplate';\n\n// ...\n\nconst resolveLines = false;\n\nconst linter = new Linter(template, schema);\nconst result = linter.lint(params, resolveLines);\n")))}b.isMDXComponent=!0,t.d(n,"default",(function(){return u}));var d=r.a.createElement;function u(){return d(l.a,null,d(b,null),d(c.a,{step:6,prev:{link:"/tools",label:"Tools"}}))}}},[["FAKB",1,2,0,3,4,5]]]);