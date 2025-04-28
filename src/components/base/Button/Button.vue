<script setup lang="ts">
const props = defineProps<{
  label: string;
  onClick: () => void;
  disabled: boolean;
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
      'border-blue bg-white text-blue hover:border-red hover:text-red':
        props.variant === 'primary',
      'border-white bg-blue text-white hover:border-blue hover:bg-white hover:text-blue':
        props.variant === 'secondary',
      'px-[3.75rem] pt-[0.9375rem] pb-[0.875rem]': props.size === 'large',
      'px-[2.25rem] pt-[0.6875rem] pb-[0.625rem]': props.size === 'small',
    }"
    :disabled="disabled"
  >
    {{ label }}
  </button>
</template>

<style scoped></style>
