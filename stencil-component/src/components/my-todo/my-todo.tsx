import { Component, Host, h, State } from '@stencil/core';
import state, { purge, done, push } from './todo';

@Component({
  tag: 'my-todo',
  styleUrl: 'my-todo.css',
  shadow: true,
})
export class MyTodo {
  @State() disabled = true;

  input: HTMLInputElement;

  onPurge = (ev: Event) => {
    ev.preventDefault();
    purge();
  };

  onAdd = (ev: MouseEvent) => {
    ev.preventDefault();
    push({ text: this.input.value, done: false });
    this.input.value = '';
    this.disabled = true;
  };

  onInput = () => {
    this.disabled = !this.input.value;
  };

  render() {
    return (
      <Host>
        <h2>Todo</h2>
        <span>
          1 of 2 remaining
          <button>
            purge
          </button>
        </span>

        <ul>
          {state.list.map((todo, n) => (
            <my-check-todo
              done={todo.done}
              text={todo.text}
              n={n}
              onTodo={(e) => done(e.detail)}
            />
          ))}
        </ul>

        <form>
          <input
            type='text'
            size={30}
            placeholder='add new todo here'
            ref={(el) => (this.input = el)}
          />
          <button>add</button>
        </form>
      </Host>
    )
  }
}
