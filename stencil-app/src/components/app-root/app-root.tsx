import { Component, h } from '@stencil/core';
import { Route, match } from '@stencil/router';
import { Router } from '../../shared/router';

@Component({
  tag: 'app-root',
  styleUrl: 'app-root.css',
  shadow: true,
})
export class AppRoot {
  render() {
    return (
      <div>
        <header>
          <h1>Stencil App Starter</h1>
        </header>

        <main>
          <app-menu></app-menu>

          <Router.Switch>
            <Route path='/'>
              <app-home></app-home>
            </Route>

            <Route path='/hello'>
              <my-hello name='SPA'></my-hello>
            </Route>

            <Route
              path={match('/hello/:name')}
              render={({ name }) => <my-hello name={name}></my-hello>}
            />

            <Route path='/lifecycle'>
              <my-lifecycle></my-lifecycle>
            </Route>

            <Route path='/store'>
              <my-store />
            </Route>

            <Route path='/todo'>
              <my-todo></my-todo>
            </Route>

            <Route path='/chart'>
              <my-chart />
            </Route>

            <Route path='/draganddrop'>
              <app-draganddrop />
            </Route>

            <Route path='/404'>Not Found</Route>
            <Route path={/./} to='/404'></Route>
          </Router.Switch>
        </main>
      </div>
    );
  }
}
