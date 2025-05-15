<script setup lang="ts">
const props = defineProps<{
  label: string;
  value: string;
}>();
</script>

<template>
  <div
    class="flex h-[4.5rem] w-[5rem] flex-col items-center justify-center rounded-[0.25rem] bg-linear-to-t from-gray-300 from-0% to-white to-100% py-[0.625rem] drop-shadow-[0_3px_3px_rgba(0,0,0,0.1967)] sm:h-[7.125rem] sm:w-[9.375rem] sm:py-4"
  >
    <div
      class="display__label font-barlow text-[0.625rem] font-semibold tracking-[0.0975rem] text-blue-200 uppercase sm:text-[1rem] sm:tracking-[0.1563rem]"
    >
      {{ label }}
    </div>
    <Transition name="slide-up" mode="out-in">
      <span
        :key="value"
        class="display__value font-barlow text-[2.5rem] leading-[2.5rem] font-bold tracking-normal text-gray-400 sm:text-[4rem] sm:leading-[4rem]"
      >
        {{ value }}
      </span>
    </Transition>
  </div>
</template>

<style scoped>
.slide-up-enter-active,
.slide-up-leave-active {
  transition: all 100ms ease-out;
}

.slide-up-enter-from {
  opacity: 0;
  transform: translateY(50%);
}

.slide-up-leave-to {
  opacity: 0;
  transform: translateY(-50%);
}
</style>
