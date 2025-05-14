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
const animateRipple = ref(false);
onMounted(() => {
  setTimeout(() => {
    animate.value = true;

    setTimeout(() => {
      animateRipple.value = true;
    }, 1000);
  }, 500); // slight delay for transition
});
</script>

<template>
  <section
    class="grid grid-cols-2 items-center justify-center gap-x-[3.125rem] gap-y-[1.0625rem] text-center font-barlow text-[0.9375rem] leading-[2rem] font-bold tracking-[0.1175rem] text-white uppercase sm:text-[1.5rem] sm:tracking-[0.1875rem] xl:grid-cols-3 xl:gap-x-[4.5244rem] xl:gap-y-[3.9375rem]"
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
        'z-10 self-start justify-self-center transition-transform duration-400 xl:col-start-1',
        animate ? 'slide-to-position' : 'start-center-right',
      ]"
      :variant="move1.type"
      size="large"
      @click="() => {}"
    >
      <RockSvg
        v-if="move1.type === 'rock'"
        class="h-[3.125rem] w-[3.125rem] place-self-center sm:h-[6.875rem] sm:w-[6.875rem]"
      />
      <PaperSvg
        v-if="move1.type === 'paper'"
        class="h-[3.125rem] w-[3.125rem] place-self-center sm:h-[7.8125rem] sm:w-[6.75rem]"
      />
      <ScissorsSvg
        v-if="move1.type === 'scissors'"
        class="h-[3.125rem] w-[3.125rem] place-self-center sm:h-[8.8669rem] sm:w-[8.8669rem]"
      />
    </ButtonRound>
    <div
      v-if="!animate"
      :class="[
        'absolute mt-[0.9375rem] mr-[1.0938rem] h-[6.875rem] w-[6.875rem] self-start justify-self-end rounded-full bg-[rgba(0,0,0,0.1)]',
        'sm:mt-[2.5rem] sm:mr-[2.5rem] sm:h-[14.0625rem] sm:w-[14.0625rem] lg:mb-[2.5rem] xl:mr-[11rem] xl:self-end',
      ]"
    />
    <ButtonRound
      :class="[
        'z-10 self-start justify-self-center transition-all duration-400 xl:col-start-3',
        animate
          ? 'slide-to-position opacity-100'
          : 'start-center-left opacity-0',
      ]"
      :variant="move2.type"
      size="large"
      @click="() => {}"
    >
      <RockSvg
        v-if="move2.type === 'rock'"
        class="h-[3.125rem] w-[3.125rem] place-self-center sm:h-[6.875rem] sm:w-[6.875rem]"
      />
      <PaperSvg
        v-if="move2.type === 'paper'"
        class="h-[3.125rem] w-[3.125rem] place-self-center sm:h-[7.8125rem] sm:w-[6.75rem]"
      />
      <ScissorsSvg
        v-if="move2.type === 'scissors'"
        class="h-[3.125rem] w-[3.125rem] place-self-center sm:h-[8.8669rem] sm:w-[8.8669rem]"
      />
    </ButtonRound>
    <div
      :class="[
        'col-span-2 self-end text-[3.5rem] leading-[4.1875rem] tracking-normal transition-opacity duration-1000 xl:absolute xl:col-span-1 xl:col-start-2 xl:row-start-1 xl:mt-[10rem] xl:self-start xl:justify-self-center',
        animate ? 'opacity-100' : 'opacity-0',
      ]"
    >
      {{ getWinnerLabel() }}
    </div>
    <Button
      :class="[
        'z-10 col-span-2 mr-auto ml-auto self-start transition-opacity duration-1000 xl:col-span-1 xl:col-start-2 xl:row-start-2 xl:mr-0 xl:mb-[6.5rem] xl:ml-0 xl:self-end',
        animate ? 'opacity-100' : 'opacity-0',
      ]"
      label="Play again"
      variant="primary"
      size="large"
      @click="() => emit('play-again')"
    />
    <span
      v-if="animateRipple && (move1.winner || move2.winner)"
      v-for="ripple in 4"
      :key="ripple"
      :style="{ animationDelay: `${(ripple - 1) * 750}ms` }"
      :class="[
        'ripple absolute z-0 h-[8.3125rem] w-[8.125rem] self-start rounded-full bg-white opacity-5 sm:h-[18.75rem] sm:w-[18.2881rem] xl:mt-[5.9375rem] xl:self-center',
        move1.winner ? 'ml-[0.4375rem] justify-self-start sm:ml-0' : '',
        move2.winner ? 'mr-[0.4375rem] justify-self-end sm:mr-0' : '',
      ]"
    />
  </section>
</template>

<style scoped>
@media (min-width: 80rem) {
  .start-center-left {
    transform: translateX(-8.5rem);
  }
  .start-center-right {
    transform: translateX(9rem);
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
