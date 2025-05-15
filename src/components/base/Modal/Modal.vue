<script setup lang="ts">
import CloseIcon from '../../../assets/svg/close.vue';

const { visible } = defineProps<{
  visible: boolean;
}>();

const emit = defineEmits(['toggle']);
</script>

<template>
  <Transition name="fade">
    <div
      v-if="visible"
      class="fixed top-0 left-0 z-30 flex h-screen w-screen items-center justify-center bg-transparent-black"
    >
      <div
        class="z-40 mx-auto grid h-full w-full bg-white sm:h-[25.9375rem] sm:w-[25rem] sm:rounded-[0.5rem]"
      >
        <slot />
        <button
          class="mb-[4.125rem] self-end justify-self-center hover:cursor-pointer sm:absolute sm:mt-[2.375rem] sm:mr-[2rem] sm:self-start sm:justify-self-end"
          @click="emit('toggle')"
        >
          <CloseIcon />
        </button>
      </div>
    </div>
  </Transition>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 150ms ease-out;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
