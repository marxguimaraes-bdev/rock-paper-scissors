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
    class="grid grid-cols-2 items-center justify-center gap-x-[50px] gap-y-[17px] text-center font-barlow text-[15px] leading-[32px] font-bold tracking-[1.88px] text-white uppercase sm:text-[24px] sm:tracking-[3px] xl:grid-cols-3 xl:gap-x-[72.39px] xl:gap-y-[63px]"
  >
    <div class="row-start-2 xl:col-start-1 xl:row-start-1">You picked</div>
    <div class="row-start-2 xl:col-start-3 xl:row-start-1">
      The house picked
    </div>
    <ButtonRound
      class="justify-self-center xl:col-start-1"
      :variant="move1.type"
      size="large"
      @click="() => {}"
    >
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
    <ButtonRound
      class="justify-self-center xl:col-start-3"
      :variant="move2.type"
      size="large"
      @click="() => {}"
    >
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
      class="col-span-2 self-center text-[56px] leading-[67px] tracking-normal xl:absolute xl:col-span-1 xl:col-start-2 xl:row-start-1 xl:mt-[160px] xl:self-start xl:justify-self-center"
    >
      {{ winnerLabel }}
    </div>
    <Button
      class="col-span-2 mr-[78px] ml-[77px] xl:col-span-1 xl:col-start-2 xl:row-start-2 xl:mb-[104px] xl:self-end"
      label="Play again"
      variant="primary"
      size="large"
      @click="() => {}"
    />
  </section>
</template>
