# SPA by Stencil

## Hello Stencil
- git clone github/shingo1551/stencil-hello
- npm install
- npm start

## Prop
- name

## Route
- onClick

```
  <app-root></app-root>
```

```
import { Route, match } from '@stencil/router';
import { Router } from '../../shared/router';

<Router.Switch>
  <Route path='/'>
    <app-hello></app-hello>
  </Route>
  <Route path='/hello'>
    <app-hello name='SPA'></app-hello>
  </Route>
  <Route
    path={match('/hello/:name')}
    render={({ name }) => <app-hello name={name}></app-hello>}
  />
</Router.Switch>
```

## build, serve, reload
```
npm i -g serve
serve -s www
```

## Life Cycle
- State()
- Lifecycle Method
- settimeout0, loading

```
@State() loading = true;
@State() count = 0;
```

- sessionStorage: save count
