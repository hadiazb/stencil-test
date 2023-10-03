import { newE2EPage } from '@stencil/core/testing';

describe('simple-component', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<simple-component></simple-component>');

    const element = await page.find('simple-component');
    expect(element).toHaveClass('hydrated');
  });
});
