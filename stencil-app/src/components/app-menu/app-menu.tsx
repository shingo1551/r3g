import { Component, h } from '@stencil/core';
import { push } from '../../shared/router';
import { A } from '../../shared/menu';

@Component({
  tag: 'app-menu',
  styleUrl: 'app-menu.css',
  shadow: true,
})
export class AppMenu {
  onClick = (e: MouseEvent) => {
    e.preventDefault();
    push('/hello/clicked');
  }

  render() {
    return (
      <ul>
        <A href='/hello'>Hello</A>
        <A href='/hello/abc'>Hello ABC</A>

        <A href='/hello/clicked' onClick={this.onClick}>Click me!</A>

        <A href='/lifecycle'>Lifecycle</A>
        <A href='/store'>Store</A>
        <A href='/todo'>ToDo</A>

        <A href='/chart'>Chart</A>

        <A href='/draganddrop'>Drag and Drop</A>
      </ul>
    );
  }

}
