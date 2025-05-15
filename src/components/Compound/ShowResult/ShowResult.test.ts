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

  it('emits play-again when play again button is clicked', () => {
    const wrapper = mount(ShowResult, {
      props: {
        moves: [
          { type: 'scissors', winner: false },
          { type: 'rock', winner: true },
        ],
      },
    });

    const playAgainButton = wrapper
      .findComponent({ name: 'Button' })
      .trigger('click');

    expect(wrapper.emitted()['play-again']).toBeTruthy();
  });
});
