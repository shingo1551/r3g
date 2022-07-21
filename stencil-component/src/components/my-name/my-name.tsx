import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'my-name',
  styleUrl: 'my-name.css',
  shadow: true,
})
export class MyChild {
  @Prop() first: string;
  @Prop() last: string;

  render() {
    return (
      <h3>
        {this.last}, {this.first}
      </h3>
    );
  }
}
