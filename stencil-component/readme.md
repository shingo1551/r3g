# Stencil App Starter

Stencil is a compiler for building fast web apps using Web Components.

Stencil combines the best concepts of the most popular frontend frameworks into a compile-time rather than run-time tool. Stencil takes TypeScript, JSX, a tiny virtual DOM layer, efficient one-way data binding, an asynchronous rendering pipeline (similar to React Fiber), and lazy-loading out of the box, and generates 100% standards-based Web Components that run in any browser supporting the Custom Elements v1 spec.

Stencil components are just Web Components, so they work in any major framework or with no framework at all. In many cases, Stencil can be used as a drop in replacement for traditional frontend frameworks given the capabilities now available in the browser, though using it as such is certainly not required.

Stencil also enables a number of key capabilities on top of Web Components, in particular Server Side Rendering (SSR) without the need to run a headless browser, pre-rendering, and objects-as-properties (instead of just strings).

## Getting Started

To start a new project using Stencil, clone this repo to a new directory:

```bash
npm init stencil app
```

and run:

```bash
npm start
```

To build the app for production, run:

```bash
npm run build
```

```
npm i -g serve
serve -s www
```

## Step

1. my-hello

```
   <my-hello name="Stencil"></my-hello>
```

2. my-lifecycle

```
   <my-lifecycle></my-lifecycle>
```

3. my-store

```
   <my-store></my-store>
```

4. my-todo

```
   <my-todo></my-todo>
```

5. my-chart

```
   <my-chart></my-chart>
```

6. my-simple-list

```
   <my-simple-list title-text="yet" group="g1">
     <li>item 1</li>
     <li>item 2</li>
     <li>item 3</li>
   </my-simple-list>
   <my-simple-list title-text="done" group="g1">
     <li>item 4</li>
     <li>item 5</li>
     <li>item 6</li>
   </my-simple-list>
```
