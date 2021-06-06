# TS
TypeScript Reference - Learning TS

### What is TypeScript?
-  TypeScript is a programming language built and maintained by Microsoft. It is a superset of JavaScript that adds strong type checking and is compiled into plain JavaScript code. (means that TypeScript has all the features of JavaScript as well as some additional features)
-  Comes with features such as better development-time tooling, static code analysis, compile-time type checking, and code-level documentation.
-  The features that come with TypeScript make it the perfect programming language for building large-scale JavaScript applications.

### Main pillars of Typescript
- Typescript is built upon three main pillars – namely the language, the compiler, and the language service.

#### TypeScript Language
- This consists of the syntax, keywords, and type annotations of TypeScript. Its yntax is similar to but not the same as JavaScript syntax.

#### TypeScript Compiler
- The compiler is responsible for compiling TypeScript code into JavaScript. In reality, what happens is not actually compiling but transpiling. The TypeScript compiler is also responsible for erasing any information related to types at compile time.
- Types are not valid features in JavaScript. And since TypeScript has to be compiled to plain JavaScript, anything related to types has to be erased before it can become valid JavaScript ready to be executed by the browser.
- The Typescript compiler also performs code analysis. It emits errors and warnings if there's reason to do so.

#### Language Service
- The language service is responsible for collecting type information from the source code.
