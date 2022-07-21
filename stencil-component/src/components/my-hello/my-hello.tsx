import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'my-hello',
  styleUrl: 'my-hello.css',
  shadow: true,
})
export class MyHello {
  @Prop() name = 'Stencil';

  render() {
    return <h1>Hello {this.name}!</h1>;
  }
}
