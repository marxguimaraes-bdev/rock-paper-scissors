import ButtonRound from './ButtonRound.vue';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
export default {
  title: 'Base/ButtonRound',
  component: ButtonRound,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['rock', 'paper', 'scissors'],
    },
  },
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Rock = {
  args: {
    variant: 'rock',
  },
};

export const Paper = {
  args: {
    variant: 'paper',
  },
};

export const Scissors = {
  args: {
    variant: 'scissors',
  },
};
