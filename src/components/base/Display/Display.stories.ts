import Display from './Display.vue';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
export default {
  title: 'Base/Display',
  component: Display,
  tags: ['autodocs'],
  argTypes: {
    label: { control: { type: 'text' } },
    value: { control: { type: 'text' } },
  },
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default = {
  args: {
    label: 'Score',
    value: '1',
  },
};
