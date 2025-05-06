<script setup lang="ts">
import Display from '../../base/Display/Display.vue';
import Button from '../../base/Button/Button.vue';
import MoveSelection from '../MoveSelection/MoveSelection.vue';
</script>

<template>
  <div
    class="h-screen w-full bg-radial from-blue-400 from-0% to-blue-500 to-100%"
  >
    <main
      class="mx-auto flex h-full max-w-[1366px] flex-col justify-between pt-8 pb-[56px] sm:pt-12 sm:pb-8"
    >
      <section
        name="Header"
        class="mx-8 flex h-[96px] items-center justify-between rounded-[5px] border border-gray-400 sm:mx-auto sm:h-[150px] sm:w-[700px]"
      >
        <LogoSvg
          class="mt-[24px] mb-[24px] ml-[23px] sm:mb-[30px] sm:ml-[32px]"
        />
        <Display
          class="mx-3 my-3 sm:mx-6 sm:my-[18px]"
          label="Score"
          value="0"
        />
      </section>
      <MoveSelection class="mx-auto" />
      <section name="Footer" class="mx-auto w-fit self-end sm:mx-8">
        <Button
          label="Rules"
          variant="secondary"
          size="small"
          @click="() => {}"
        />
      </section>
    </main>
  </div>
</template>

<style scoped></style>
