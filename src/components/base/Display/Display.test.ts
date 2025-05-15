import { mount } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';

import Display from './Display.vue';

describe('Display', () => {
  it('renders the label and value', async () => {
    const wrapper = await mount(Display, {
      props: {
        label: 'Score',
        value: '1',
      },
    });

    const label = wrapper.find('div.display__label');
    const value = wrapper.find('span.display__value');

    expect(label.text()).toBe('Score');
    expect(value.text()).toBe('1');
  });
});
