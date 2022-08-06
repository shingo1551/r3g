import { createStore } from '@stencil/store';

export interface ToDo {
  done: boolean;
  text: string;
}

const list: ToDo[] = [
  { text: 'lean TypeScript', done: true },
  { text: 'build Stencil App', done: false },
];

const { state } = createStore({
  count: 0,
  list: list,
});

export function push(todo: ToDo) {
  state.list.push(todo);
  state.list = [...state.list];
  count();
}

export function done(n: number) {
  state.list[n].done = !state.list[n].done;
  state.list = [...state.list];
  count();
}

export function purge() {
  state.list = state.list.filter((todo) => !todo.done);
  count();
}

function count() {
  state.count = state.list.reduce((sum, todo) => sum + (todo.done ? 0 : 1), 0);
}

count();

export default state;
