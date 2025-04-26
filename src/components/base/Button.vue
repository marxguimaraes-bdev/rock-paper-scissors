<script setup>
import { ref } from 'vue'

defineProps({
  label: String,
  onClick: Function,
  disabled: Boolean,
  variant: 'primary' | 'secondary',
})
</script>

<template>
  <button type="button" @click="onClick">{{ label }}</button>
</template>

<style scoped>

</style>
