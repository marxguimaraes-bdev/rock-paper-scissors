import { Meta } from '@storybook/vue3';
import ShowResult from './ShowResult.vue';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta: Meta<typeof ShowResult> = {
  title: 'Compound/ShowResult',
  component: ShowResult,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default = {
  args: {
    moves: [
      { type: 'scissors', winner: false },
      { type: 'rock', winner: true },
    ],
  },
};

export default meta;
