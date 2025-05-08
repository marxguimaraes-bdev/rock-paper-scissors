import { mount } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';

import Modal from './Modal.vue';

describe('Modal', () => {
  it('renders the slot content', () => {
    const wrapper = mount(Modal, {
      props: {
        visible: true,
      },
      slots: {
        default: 'Hello World',
      },
    });

    expect(wrapper.text()).toBe('Hello World');
  });

  it('emits toggle event when close icon is clicked', () => {
    const wrapper = mount(Modal, {
      props: {
        visible: true,
      },
      slots: {
        default: 'Hello World',
      },
    });

    wrapper.find('button').trigger('click');
    expect(wrapper.emitted().toggle).toBeTruthy();
  });
});
