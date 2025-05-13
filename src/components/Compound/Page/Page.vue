<script setup lang="ts">
import Display from '../../base/Display/Display.vue';
import Button from '../../base/Button/Button.vue';
import Modal from '../../base/Modal/Modal.vue';
import MoveSelection from '../MoveSelection/MoveSelection.vue';
import ShowResult, { Move } from '../ShowResult/ShowResult.vue';
import RulesSvg from '../../../assets/svg/rules.vue';
import { ref } from 'vue';

const moves = ref<Move[]>([]);
const score = ref<number>(0);
const isModalVisible = ref(false);

const makeMove = (type: 'rock' | 'paper' | 'scissors') => {
  const playerMove = {
    type,
    winner: false,
  };

  const randomizedNumber = Math.random();

  const computerMove: Move = {
    type: 'scissors',
    winner: false,
  };

  computerMove.winner = playerMove.type === 'paper';
  playerMove.winner = playerMove.type === 'rock';

  if (randomizedNumber <= 0.33) {
    computerMove.type = 'rock';
    computerMove.winner = playerMove.type === 'scissors';
    playerMove.winner = playerMove.type === 'paper';
  }

  if (randomizedNumber > 0.33 && randomizedNumber <= 0.66) {
    computerMove.type = 'paper';
    computerMove.winner = playerMove.type === 'rock';
    playerMove.winner = playerMove.type === 'scissors';
  }

  if (playerMove.winner) {
    setTimeout(() => {
      score.value++;
    }, 1000);
  }

  moves.value.push(playerMove);
  moves.value.push(computerMove);
};

const toggleModalVisibility = () => {
  isModalVisible.value = !isModalVisible.value;
};

const playAgain = () => {
  moves.value = [];
};
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
        <div
          class="mt-[24px] mb-[24px] ml-[23px] font-barlow text-[21px] leading-[16px] font-bold tracking-normal text-white uppercase sm:mb-[30px] sm:ml-[32px] sm:text-[40px] sm:leading-[32px]"
        >
          Rock<br />Paper<br />Scissors
        </div>
        <Display
          class="mx-3 my-3 sm:mx-6 sm:my-[18px]"
          label="Score"
          :value="score.toString()"
        />
      </section>
      <Transition name="fade" mode="out-in">
        <ShowResult
          v-if="moves.length > 0"
          @play-again="playAgain"
          :moves="moves"
          class="mx-auto"
        />
        <MoveSelection v-else @make-move="makeMove" class="mx-auto" />
      </Transition>
      <section name="Footer" class="mx-auto w-fit self-end sm:mx-8">
        <Button
          label="Rules"
          variant="secondary"
          size="small"
          @click="toggleModalVisibility"
        />
      </section>
    </main>
    <Modal :visible="isModalVisible" @toggle="toggleModalVisibility">
      <span
        class="mt-[95px] justify-self-center font-barlow text-[32px] leading-8 font-bold tracking-normal text-blue-100 uppercase sm:mt-8 sm:ml-8 sm:justify-self-start"
        >Rules</span
      >
      <RulesSvg class="mx-auto self-center sm:mb-8 sm:self-end" />
    </Modal>
  </div>
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
