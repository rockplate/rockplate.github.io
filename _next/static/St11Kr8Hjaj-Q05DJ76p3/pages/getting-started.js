(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{WkzS:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/getting-started",function(){return t("l4Da")}])},l4Da:function(e,n,t){"use strict";t.r(n);var a=t("q1tI"),l=t.n(a),r=t("NsgW"),o=t("kOwS"),p=t("qNsG"),c=t("7ljp"),s=(l.a.createElement,{}),i="wrapper";function m(e){var n=e.components,t=Object(p.a)(e,["components"]);return Object(c.b)(i,Object(o.a)({},s,t,{components:n,mdxType:"MDXLayout"}),Object(c.b)("h1",null,"Getting Started"),Object(c.b)("h2",null,"Installation"),Object(c.b)("p",null,"Installing with ",Object(c.b)("inlineCode",{parentName:"p"},"npm")," or ",Object(c.b)("inlineCode",{parentName:"p"},"yarn")),Object(c.b)("pre",null,Object(c.b)("code",Object(o.a)({parentName:"pre"},{}),"npm install rockplate\nyarn add rockplate\n")),Object(c.b)("p",null,"Installing with ",Object(c.b)("inlineCode",{parentName:"p"},"<script>")," tag"),Object(c.b)("pre",null,Object(c.b)("code",Object(o.a)({parentName:"pre"},{className:"language-html"}),'<script src="https://cdn.jsdelivr.net/npm/rockplate@latest/dist/rockplate.min.js"><\/script>\n')),Object(c.b)("h2",null,"Usage"),Object(c.b)("p",null,"TypeScript/JavaScript"),Object(c.b)("pre",null,Object(c.b)("code",Object(o.a)({parentName:"pre"},{className:"language-javascript"}),"import { Rockplate } from 'rockplate';\n\nconst template = 'My name is [my name]';\nconst schema = {\n  my: {\n    name: 'My Name',\n  },\n};\nconst rpl = new Rockplate(template, schema);\nconst output = rpl.parse({\n  // you will get type hints\n  // for properties in schema as you type\n  my: {\n    name: 'Safraz Razik',\n  },\n});\nconsole.log(output); // My name is Safraz Razik\n")),Object(c.b)("p",null,"Usage with ",Object(c.b)("inlineCode",{parentName:"p"},"<script>")," tag:"),Object(c.b)("pre",null,Object(c.b)("code",Object(o.a)({parentName:"pre"},{className:"language-javascript"}),"var Rockplate = window.rockplate.Rockplate;\n\nvar rpl = new Rockplate(template, schema);\n\n// ...\n")),Object(c.b)("h2",null,"Usage with an ",Object(c.b)("inlineCode",{parentName:"h2"},".rpl")," file"),Object(c.b)("p",null,"NOTE: If you're using Visual Studio Code, install the ",Object(c.b)("a",Object(o.a)({parentName:"p"},{href:"https://github.com/rockplate/rockplate-vscode"}),"Official Extension")," to get IntelliSense and Linting support for ",Object(c.b)("inlineCode",{parentName:"p"},".rpl")," files."),Object(c.b)("div",{style:{width:"100%",overflowX:"auto"}},Object(c.b)("p",null,Object(c.b)("img",Object(o.a)({parentName:"p"},{src:"https://raw.githubusercontent.com/rockplate/rockplate-vscode/master/images/rockplate-demo.gif",alt:"Rockplate VSCode"})))),Object(c.b)("p",null,"You can embed schema in an ",Object(c.b)("inlineCode",{parentName:"p"},".rpl")," file in json format on top of the file. If you choose to have your schema in an external json file, you should reference that json file from your rpl file by defining a json object on top of the file with only a key named ",Object(c.b)("inlineCode",{parentName:"p"},'"schema"')," with the json file path relative to the rpl file"),Object(c.b)("p",null,Object(c.b)("inlineCode",{parentName:"p"},"my-schema.json")," file"),Object(c.b)("pre",null,Object(c.b)("code",Object(o.a)({parentName:"pre"},{className:"language-json"}),'{\n  "my": {\n    "name": "My Name"\n  }\n}\n')),Object(c.b)("p",null,Object(c.b)("inlineCode",{parentName:"p"},"my-template.rpl")," file"),Object(c.b)("pre",null,Object(c.b)("code",Object(o.a)({parentName:"pre"},{className:"language-rockplate"}),'{\n    "schema": "./my-schema.json"\n}\n\nMy name is [my name]\n')),Object(c.b)("p",null,"Reading files synchronously"),Object(c.b)("pre",null,Object(c.b)("code",Object(o.a)({parentName:"pre"},{className:"language-javascript"}),"import { Rockplate } from 'rockplate';\nimport { readFileSync } from 'fs';\nimport { resolve, dirname } from 'path';\n\nconst getRpl = (templateFile) => {\n  const schemaResolver = (schemaUrl) => {\n    const filePath = resolve(dirname(templateFile), schemaUrl);\n    const fileContent = readFileSync(filePath, 'utf8');\n    return JSON.parse(fileContent);\n  };\n\n  const template = readFileSync(templateFile, 'utf8');\n\n  return new Rockplate(template, schemaResolver);\n};\n\nconst rpl = getRpl('/some/dir/my-template.rpl');\nconst output = rpl.parse({\n  // ...\n});\n")),Object(c.b)("p",null,"Reading files asynchronously"),Object(c.b)("pre",null,Object(c.b)("code",Object(o.a)({parentName:"pre"},{className:"language-javascript"}),"import { Rockplate } from 'rockplate';\nimport { readFile } from 'fs';\nimport { resolve, dirname } from 'path';\n\nconst getRpl = (templateFile) => {\n  const schemaResolver = (schemaUrl) => {\n    const filePath = resolve(dirname(templateFile), schemaUrl);\n    return new Promise((resolve, reject) => {\n      readFile(filePath, 'utf8', (err, fileContent) => {\n        if (err) {\n          reject(err);\n          return;\n        }\n        resolve(JSON.parse(fileContent));\n      });\n    });\n  };\n\n  return new Promise((resolve, reject) => {\n    readFile(templateFile, 'utf8', (err, template) => {\n      if (err) {\n        reject('template file could not be read');\n        return;\n      }\n      const rpl = new Rockplate(template, schemaResolver);\n      // important! - as schema is resolved asynchronously, you should wait for rpl.build() to resolve\n      rpl.build().then(() => {\n        resolve(rpl);\n      });\n    });\n  });\n};\n\ngetRpl('/some/dir/my-template.rpl').then((rpl) => {\n  const output = rpl.parse({\n    // ...\n  });\n});\n")))}m.isMDXComponent=!0,t.d(n,"default",(function(){return u}));var b=l.a.createElement;function u(){return b(r.a,null,b(m,null))}}},[["WkzS",1,2,0,3,5]]]);