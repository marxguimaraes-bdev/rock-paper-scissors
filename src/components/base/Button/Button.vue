<script setup lang="ts">
const { label, onClick, disabled, variant, size } = defineProps<{
  label: string;
  onClick: () => void;
  disabled?: boolean;
  variant: 'primary' | 'secondary';
  size: 'large' | 'small';
}>();
</script>

<template>
  <button
    type="button"
    @click="onClick"
    :class="{
      'linear-ease cursor-pointer rounded-[0.5rem] border font-barlow text-[1rem] leading-[1rem] font-semibold tracking-[2.5px] uppercase transition-colors duration-300': true,
      'border-blue-100 bg-white text-blue-100 hover:border-red-100 hover:text-red-100':
        variant === 'primary',
      'border-white bg-blue-100 text-white hover:border-blue-100 hover:bg-white hover:text-blue-100':
        variant === 'secondary',
      'px-[3.75rem] pt-[0.9375rem] pb-[0.875rem]': size === 'large',
      'px-[2.25rem] pt-[0.6875rem] pb-[0.625rem]': size === 'small',
    }"
    :disabled="disabled"
  >
    {{ label }}
  </button>
</template>

<style scoped></style>
