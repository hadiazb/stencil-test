import { Component, Prop, h } from '@stencil/core';


@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: true,
})
export class MyComponent {

  @Prop() configCard: {
    name: string;
    color: string;
  };
  @Prop() dataCard: {
    name: string;
    color: string;
  };

  render() {
    return (
      <div class="container">
        <simple-component
          configCard={this.configCard}
          dataCard={this.dataCard}
          ></simple-component>
      </div>
    )
  }
}
