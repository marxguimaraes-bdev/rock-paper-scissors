import { mount } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';

import MoveSelection from './MoveSelection.vue';

describe('MoveSelection', () => {
  it('renders the three move buttons', () => {
    const wrapper = mount(MoveSelection);

    expect(wrapper.findAll('button')).toHaveLength(3);
  });
});
