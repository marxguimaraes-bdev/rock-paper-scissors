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
        class="z-40 mx-auto grid h-full w-full bg-white sm:h-[415px] sm:w-[400px] sm:rounded-[8px]"
      >
        <slot />
        <button
          class="mb-[66px] self-end justify-self-center hover:cursor-pointer sm:absolute sm:mt-[38px] sm:mr-[32px] sm:self-start sm:justify-self-end"
          @click="() => emit('toggle')"
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
