<script setup lang="ts">
const props = defineProps<{
  variant: 'rock' | 'paper' | 'scissors';
  onClick: () => void;
}>();

const classes = {
  'flex justify-center items-center h-[8.125rem] sm:h-[12.375rem] w-[8.125rem] sm:w-[12.125rem] rounded-full border-b-[0.4375rem] sm:border-b-[0.5625rem] cursor-pointer':
    true,
  'bg-red-200 border-red-300': props.variant === 'rock',
  'bg-blue-200 border-blue-300': props.variant === 'paper',
  'bg-yellow-200 border-yellow-300': props.variant === 'scissors',
};
</script>

<template>
  <button type="button" :class="classes" @click="onClick">
    <span
      class="linear-ease absolute hidden h-[15.5rem] w-[15.75rem] rounded-full bg-white opacity-0 transition-opacity duration-300 hover:opacity-5 lg:flex"
    />
    <span
      class="grad h-[6.25rem] w-[6.25rem] rounded-full border-t-[0.375rem] border-gray-100 bg-linear-to-b from-gray-200 from-100% to-gray-200 to-0% sm:h-[9.5rem] sm:w-[9.5rem] sm:border-t-[0.5rem]"
    >
      <slot />
    </span>
  </button>
</template>

<style scoped></style>
