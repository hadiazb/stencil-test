import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'simple-component',
  styleUrl: 'simple-component.css',
  shadow: true,
})
export class SimpleComponent {
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
      <div class="container-list">
        <div class="row">
          <p class="label">
            {this.configCard.name}:
          </p>
          <p class="value">
            {this.dataCard.name}
          </p>
        </div>
        <div class="row">
          <p class="label">
            {this.configCard.color}:
          </p>
          <p class="value">
            {this.dataCard.color}
          </p>
        </div>
      </div>
    );
  }

}
