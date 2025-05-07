import { mount } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';

import ShowResult from './ShowResult.vue';

describe('ShowResult', () => {
  it('renders the two move buttons', () => {
    const wrapper = mount(ShowResult, {
      props: {
        moves: [
          { type: 'scissors', winner: false },
          { type: 'rock', winner: true },
        ],
      },
    });

    expect(wrapper.findAllComponents({ name: 'ButtonRound' })).toHaveLength(2);
  });
});
