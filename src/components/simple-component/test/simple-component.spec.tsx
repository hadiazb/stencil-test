import { newSpecPage } from '@stencil/core/testing';
import { SimpleComponent } from '../simple-component';

describe('simple-component', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [SimpleComponent],
      html: `<simple-component></simple-component>`,
    });
    expect(page.root).toEqualHtml(`
      <simple-component>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </simple-component>
    `);
  });
});
