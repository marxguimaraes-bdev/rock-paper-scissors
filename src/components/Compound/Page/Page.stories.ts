import { Meta } from '@storybook/vue3';
import Page from './Page.vue';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta: Meta<typeof Page> = {
  title: 'Compound/Page',
  component: Page,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default = {
  args: {},
};

export default meta;
