import { Meta } from '@storybook/vue3';
import Display from './Display.vue';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta: Meta<typeof Display> = {
  title: 'Base/Display',
  component: Display,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    label: { control: { type: 'text' } },
    value: { control: { type: 'text' } },
  },
};

export default meta;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default = {
  args: {
    label: 'Score',
    value: '1',
  },
};
