import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'simple-component',
  styleUrl: 'simple-component.css',
  shadow: true,
})
export class SimpleComponent {
  @Prop() titleCtr: string;
  @Prop() color: string = 'blue';

  render() {
    return (
      <div>
        <h1>{this.titleCtr}</h1>
        <h1>{this.color}</h1>
      </div>
    );
  }

}
