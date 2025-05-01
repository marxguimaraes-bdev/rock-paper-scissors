import { Meta } from '@storybook/vue3';
import MoveSelection from './MoveSelection.vue';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta: Meta<typeof MoveSelection> = {
  title: 'Compound/MoveSelection',
  component: MoveSelection,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default = {
  args: {},
};

export default meta;
