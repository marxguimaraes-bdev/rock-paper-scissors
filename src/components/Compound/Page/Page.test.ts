import { mount } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';

import Page from './Page.vue';

describe('Page', () => {
  it('renders the score display, move selection and rules button', () => {
    const wrapper = mount(Page);

    const display = wrapper.find('Display');
    const moveSelection = wrapper.find('MoveSelection');
    const rulesButton = wrapper.findComponent({ name: 'Button' });

    expect(display).not.toBeNull();
    expect(moveSelection).not.toBeNull();
    expect(rulesButton.text()).toBe('Rules');
  });
});
