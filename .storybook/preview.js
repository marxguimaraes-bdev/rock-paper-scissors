import '../src/style.css';

/** @type { import('@storybook/vue3').Preview } */
const preview = {
  parameters: {
    backgrounds: {
      default: 'dark',
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
