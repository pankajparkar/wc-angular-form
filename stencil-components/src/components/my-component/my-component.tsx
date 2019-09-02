import { Component, h } from '@stencil/core';

@Component({
  tag: 'my-input',
  styleUrl: 'my-component.css',
  shadow: true
})
export class MyInputComponent {
  render() {
    return <div>
      <input type="text" />
    </div>;
  }
}
