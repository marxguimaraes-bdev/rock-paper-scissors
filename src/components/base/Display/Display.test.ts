import { mount } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';

import Display from './Display.vue';

describe('Display', () => {
  it('renders the label and value', () => {
    const wrapper = mount(Display, {
      props: {
        label: 'Score',
        value: '1',
      },
    });
    expect(wrapper.find('div.display__label').text()).toBe('Score');
    expect(wrapper.find('div.display__value').text()).toBe('1');
  });
});
