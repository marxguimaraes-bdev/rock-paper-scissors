<script setup lang="ts">
import ButtonRound from '../../base/ButtonRound/ButtonRound.vue';
import RockSvg from '../../../assets/svg/rock.vue';
import PaperSvg from '../../../assets/svg/paper.vue';
import ScissorsSvg from '../../../assets/svg/scissors.vue';

type Move = {
  type: 'rock' | 'paper' | 'scissors';
  winner: boolean;
};

const { moves } = defineProps<{
  moves: Move[];
}>();

const [move1, move2] = moves;
</script>

<template>
  <section
    class="grid grid-cols-2 items-center justify-center gap-x-[50px] gap-y-[17px] text-center font-barlow text-[15px] leading-[32px] font-bold tracking-[1.88px] text-white uppercase sm:gap-x-[72.39px] sm:gap-y-[63px] sm:text-[24px] sm:tracking-[3px]"
  >
    <div class="row-start-2 sm:row-start-1">You picked</div>
    <div class="row-start-2 sm:row-start-1">The house picked</div>
    <ButtonRound :variant="move1.type" size="large" @click="() => {}">
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
    <ButtonRound :variant="move2.type" size="large" @click="() => {}">
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
  </section>
</template>
