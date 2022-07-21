import { Component, State, h } from '@stencil/core';

@Component({
  tag: 'my-lifecycle',
  styleUrl: 'my-lifecycle.css',
  shadow: true,
})
export class MyLifecycle {
  @State() loading = true;
  @State() count = 0;

  countup = () => {
    this.count++;
    sessionStorage.setItem('count', '' + this.count);
  };

  connectedCallback() {
    console.log('1. connectedCallback');
    this.count = +sessionStorage.getItem('count');
  }

  componentWillLoad() {
    console.log('2. componentWillLoad');
  }

  componentWillRender() {
    console.log('3. componentWillRender');
  }

  componentDidRender() {
    console.log('4. componentDidRender');
  }

  componentDidLoad() {
    console.log('5. componentDidLoad');
  }

  componentWillUpdate() {
    console.log('6. componentWillUpdate');
  }

  componentDidUpdate() {
    console.log('7. componentDidUpdate');
  }

  disconnectedCallback() {
    console.log('8. disconnectedCallback');
  }

  render() {
    console.log('render');

    return this.loading ? (
      setTimeout(() => (this.loading = false), 0)
    ) : (
      <div>
        <h1>Lifecycle</h1>
        <button onClick={this.countup}>Counter</button>
        <h2>{this.count}</h2>
      </div>
    );
  }
}
