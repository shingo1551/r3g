# SPA by Stencil

## Web Components Stencil

- git clone github/shingo1551/stencil-component
- npm install
- npm start

## Prop

- name

## Route

- onClick

```
  <my-root></my-root>
```

```
import { Route, match } from '@stencil/router';
import { Router } from '../../shared/router';

<Router.Switch>
  <Route path='/'>
    <my-hello></my-hello>
  </Route>
  <Route path='/hello'>
    <my-hello name='SPA'></my-hello>
  </Route>
  <Route
    path={match('/hello/:name')}
    render={({ name }) => <my-hello name={name}></my-hello>}
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
