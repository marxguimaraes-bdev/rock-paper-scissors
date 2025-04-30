import { mount } from '@vue/test-utils';
import { describe, it, expect, vi } from 'vitest';

import ButtonRound from './ButtonRound.vue';

describe('ButtonRound', () => {
  it('renders the text', () => {
    const wrapper = mount(ButtonRound, {
      props: {
        variant: 'rock',
        onClick: () => {},
      },
      slots: {
        default: 'Click me!',
      },
    });
    expect(wrapper.find('button').text()).toBe('Click me!');
  });

  it('calls onClick when clicked', () => {
    const onClick = vi.fn();
    const wrapper = mount(ButtonRound, {
      props: {
        variant: 'rock',
        onClick,
      },
      slots: {
        default: 'Click me!',
      },
    });
    wrapper.find('button').trigger('click');
    expect(onClick).toHaveBeenCalled();
  });
});
