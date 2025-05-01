<script setup lang="ts">
import ButtonRound from '../../base/ButtonRound/ButtonRound.vue';
import TriangleSvg from '../../../assets/svg/triangle.vue';
import PaperSvg from '../../../assets/svg/paper.vue';
import ScissorsSvg from '../../../assets/svg/scissors.vue';
import RockSvg from '../../../assets/svg/rock.vue';
</script>

<template>
  <section
    name="Move selection"
    class="grid grid-cols-2 gap-x-[3.2269rem] gap-y-[0.9587rem] sm:gap-x-[5rem] sm:gap-y-[1.5rem]"
  >
    <ButtonRound
      variant="paper"
      @click="() => {}"
      class="z-10 justify-self-start"
    >
      <PaperSvg
        class="h-[3.5rem] w-[3rem] place-self-center sm:h-[5.375rem] sm:w-[4.5625rem]"
      />
    </ButtonRound>
    <ButtonRound
      variant="scissors"
      @click="() => {}"
      class="z-10 justify-self-end"
    >
      <ScissorsSvg
        class="h-[3.9375rem] w-[3.9375rem] place-self-center sm:h-[6rem] sm:w-[6rem]"
      />
    </ButtonRound>
    <ButtonRound
      variant="rock"
      @click="() => {}"
      class="z-10 col-span-2 justify-self-center"
    >
      <RockSvg
        class="h-[3.125rem] w-[3.125rem] place-self-center sm:h-[4.75rem] sm:w-[4.75rem]"
      />
    </ButtonRound>
    <TriangleSvg
      class="absolute -z-0 h-[11.75rem] w-[11.75rem] place-self-center fill-gray-500 opacity-20 sm:h-[17.9363rem] sm:w-[17.9363rem]"
    />
  </section>
</template>

<style scoped></style>
