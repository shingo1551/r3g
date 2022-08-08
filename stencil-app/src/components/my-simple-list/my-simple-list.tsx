import { Component, Host, h, Prop } from '@stencil/core';
import Sortable from 'sortablejs';

@Component({
  tag: 'my-simple-list',
  styleUrl: 'my-simple-list.css',
  // shadow: true,
  scoped: true,
})
export class MySimpleList {
  @Prop() titleText = 'Simple list example';
  @Prop() group = 'my-simple-list';
  private ul: HTMLUListElement;

  componentDidLoad() {
    Sortable.create(this.ul, {
      animation: 150,
      group: this.group,
    });
  }

  render() {
    return (
      <Host>
        <h4>{this.titleText}</h4>
        <ul ref={el => this.ul = el}>
          <slot></slot>
        </ul>
      </Host>
    );
  }
}
