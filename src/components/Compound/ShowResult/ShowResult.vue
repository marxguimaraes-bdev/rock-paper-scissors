<script setup lang="ts">
import { ref, onMounted } from 'vue';
import ButtonRound from '../../base/ButtonRound/ButtonRound.vue';
import RockSvg from '../../../assets/svg/rock.vue';
import PaperSvg from '../../../assets/svg/paper.vue';
import ScissorsSvg from '../../../assets/svg/scissors.vue';
import Button from '../../base/Button/Button.vue';

export type Move = {
  type: 'rock' | 'paper' | 'scissors';
  winner: boolean;
};

const { moves } = defineProps<{
  moves: Move[];
}>();

const emit = defineEmits(['play-again']);

const [move1, move2] = moves;

const getWinnerLabel = () => {
  if (move1.winner) {
    return 'You win';
  }

  if (move2.winner) {
    return 'You lose';
  }

  return "It's a Draw";
};

const animate = ref(false);
onMounted(() => {
  setTimeout(() => {
    animate.value = true;
  }, 500); // slight delay for transition
});
</script>

<template>
  <section
    class="grid grid-cols-2 items-center justify-center gap-x-[50px] gap-y-[17px] text-center font-barlow text-[15px] leading-[32px] font-bold tracking-[1.88px] text-white uppercase sm:text-[24px] sm:tracking-[3px] xl:grid-cols-3 xl:gap-x-[72.39px] xl:gap-y-[63px]"
  >
    <div
      :class="[
        'row-start-2 transition-transform duration-400 xl:col-start-1 xl:row-start-1',
        animate ? 'slide-to-position' : 'start-center-right',
      ]"
    >
      You picked
    </div>
    <div
      :class="[
        'row-start-2 transition-transform duration-400 xl:col-start-3 xl:row-start-1',
        animate ? 'slide-to-position' : 'start-center-left',
      ]"
    >
      The house picked
    </div>
    <ButtonRound
      :class="[
        'justify-self-center transition-transform duration-400 xl:col-start-1',
        animate ? 'slide-to-position' : 'start-center-right',
      ]"
      :variant="move1.type"
      size="large"
      @click="() => {}"
    >
      <span
        v-if="move1.winner"
        v-for="ripple in 4"
        :key="ripple"
        :style="{ animationDelay: `${(ripple - 1) * 750}ms` }"
        :class="[
          'absolute h-[8.3125rem] w-[8.125rem] place-self-center rounded-full bg-white opacity-5 sm:h-[18.75rem] sm:w-[18.2881rem]',
          animate ? 'ripple' : '',
        ]"
      />
      <RockSvg
        v-if="move1.type === 'rock'"
        class="h-[3.125rem] w-[3.125rem] place-self-center sm:h-[110px] sm:w-[110px]"
      />
      <PaperSvg
        v-if="move1.type === 'paper'"
        class="h-[3.125rem] w-[3.125rem] place-self-center sm:h-[125px] sm:w-[108px]"
      />
      <ScissorsSvg
        v-if="move1.type === 'scissors'"
        class="h-[3.125rem] w-[3.125rem] place-self-center sm:h-[141.87px] sm:w-[141.87px]"
      />
    </ButtonRound>
    <div
      v-if="!animate"
      class="h-[110px] w-[110px] justify-self-center rounded-full bg-[rgba(0,0,0,0.1)] sm:-ml-[136px] sm:h-[225px] sm:w-[225px]"
    />
    <ButtonRound
      :class="[
        'justify-self-center transition-all duration-400 xl:col-start-3',
        animate
          ? 'slide-to-position opacity-100'
          : 'start-center-left opacity-0',
      ]"
      :variant="move2.type"
      size="large"
      @click="() => {}"
    >
      <span
        v-if="move2.winner"
        v-for="ripple in 4"
        :key="ripple"
        :style="{ animationDelay: `${(ripple - 1) * 750}ms` }"
        :class="[
          'absolute h-[8.3125rem] w-[8.125rem] place-self-center rounded-full bg-white opacity-5 sm:h-[18.75rem] sm:w-[18.2881rem]',
          animate ? 'ripple' : '',
        ]"
      />
      <RockSvg
        v-if="move2.type === 'rock'"
        class="h-[3.125rem] w-[3.125rem] place-self-center sm:h-[110px] sm:w-[110px]"
      />
      <PaperSvg
        v-if="move2.type === 'paper'"
        class="h-[3.125rem] w-[3.125rem] place-self-center sm:h-[125px] sm:w-[108px]"
      />
      <ScissorsSvg
        v-if="move2.type === 'scissors'"
        class="h-[3.125rem] w-[3.125rem] place-self-center sm:h-[141.87px] sm:w-[141.87px]"
      />
    </ButtonRound>
    <div
      :class="[
        'col-span-2 self-end text-[56px] leading-[67px] tracking-normal transition-opacity duration-1000 xl:absolute xl:col-span-1 xl:col-start-2 xl:row-start-1 xl:mt-[160px] xl:self-start xl:justify-self-center',
        animate ? 'opacity-100' : 'opacity-0',
      ]"
    >
      {{ getWinnerLabel() }}
    </div>
    <Button
      :class="[
        'z-10 col-span-2 mr-auto ml-auto self-start transition-opacity duration-1000 sm:mr-0 sm:ml-0 xl:col-span-1 xl:col-start-2 xl:row-start-2 xl:mb-[104px] xl:self-end',
        animate ? 'opacity-100' : 'opacity-0',
      ]"
      label="Play again"
      variant="primary"
      size="large"
      @click="() => emit('play-again')"
    />
  </section>
</template>

<style scoped>
@media (min-width: 1024px) {
  .start-center-left {
    transform: translateX(-136px);
  }
  .start-center-right {
    transform: translateX(144px);
  }
  .slide-to-position {
    transform: none;
  }
}
.opacity-0 {
  opacity: 0;
}
.opacity-100 {
  opacity: 1;
}

.ripple {
  animation: ripple 3s linear infinite;
}

@keyframes ripple {
  75%,
  100% {
    transform: scale(2.3);
    opacity: 0;
  }
}
</style>
