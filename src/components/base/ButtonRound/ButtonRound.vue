<script setup lang="ts">
import { computed } from 'vue';

const {
  variant,
  size = 'small',
  onClick = () => {},
} = defineProps<{
  variant: 'rock' | 'paper' | 'scissors';
  size?: 'small' | 'large';
  onClick?: () => void;
}>();

const ariaLabel = computed(() => {
  return variant.charAt(0).toUpperCase() + variant.slice(1);
});
</script>

<template>
  <button
    :aria-label="ariaLabel"
    type="button"
    :class="{
      'flex items-center justify-center rounded-full': true,
      'border-red-300 bg-red-200': variant === 'rock',
      'border-blue-300 bg-blue-200': variant === 'paper',
      'border-yellow-300 bg-yellow-200': variant === 'scissors',
      'h-[8.3125rem] w-[8.125rem] cursor-pointer border-b-[0.4375rem] sm:h-[12.375rem] sm:w-[12.125rem] sm:border-b-[0.5625rem]':
        size === 'small',
      'h-[8.3125rem] w-[8.125rem] border-b-[0.4375rem] sm:h-[18.75rem] sm:w-[18.2881rem] sm:border-b-[0.8125rem]':
        size === 'large',
    }"
    @click="onClick"
  >
    <span
      v-if="size === 'small'"
      class="linear-ease absolute hidden h-[15.5rem] w-[15.75rem] rounded-full bg-white opacity-0 transition-opacity duration-300 hover:opacity-5 lg:flex"
    />
    <span
      :class="{
        'grid rounded-full border-gray-100 bg-linear-to-b from-gray-200 from-100% to-gray-200 to-0%': true,
        'h-[6.25rem] w-[6.25rem] border-t-[0.375rem] sm:h-[9.5rem] sm:w-[9.5rem] sm:border-t-[0.5rem]':
          size === 'small',
        'h-[6.25rem] w-[6.25rem] border-t-[0.375rem] sm:h-[14.0394rem] sm:w-[14.0394rem] sm:border-t-[0.75rem]':
          size === 'large',
      }"
    >
      <slot />
    </span>
  </button>
</template>

<style scoped></style>
