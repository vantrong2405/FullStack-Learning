<template>
  <div class="wrapper-mainlayout">
    <div class="wrapper clearfix">
      <popup :isPopup='isPopup' @handleChangePopupEvent='handleChangePopupEvent' />
      <player :currentScore='currentScore' :accumulatedScore="accumulatedScore" :dice="dice"
        :isPlayerActive="isPlayerActive" :isWinner="isWinner" />
      <control :isPlaying="isPlaying" @handleChangNewGameEvent='handleChangNewGameEvent'
        @handleChangDice="handleChangDice" :isPlayerActive="isPlayerActive" @handleClickHoldEvent="handleClickHoldEvent"
        @handleChangeWinScoreEvent="handleChangeWinScoreEvent" :isDisabled="isDisabled" />
      <dice :dice="dice" />
    </div>
    <router-view />
  </div>
</template>
<script>
import control from '../components/control.vue';
import dice from '../components/dice.vue';
import player from '../components/player.vue';
import popup from '../components/popup.vue';
export default {
  name: 'main-layout',
  components: {
    player,
    control,
    dice,
    popup
  },
  data() {
    return {
      dice: [1, 1],
      accumulatedScore: [0, 0],
      currentScore: [0, 0],
      isPlaying: false,
      isPopup: false,
      isPlayerActive: 0,
      winScore: 100,
      isWinner: false,
      isDisabled: false
    };
  },
  methods: {
    nextPlayer() {
      this.isPlayerActive = (this.isPlayerActive == 1 ? 0 : 1)
    },
    handleChangePopupEvent() {
      this.isPopup = false
      this.isPlaying = true
    },
    handleChangNewGameEvent(data) {
      this.isPopup = true
      this.isPlayerActive = 0
      this.dice = [1, 1]
      this.accumulatedScore = [0, 0]
      this.currentScore = [0, 0]
      this.winScore = Number(data)
      this.isWinner = false
      this.isDisabled = true

    },
    handleChangDice(data) {
      this.dice = [...data]
      let currentScoreClone = [...this.currentScore]

      if (this.dice[0] == 1 || this.dice[1] == 1) {
        setTimeout(() => {
          alert("Rất tiếc bạn đã lắc trúng số 1 !")
        }, 300)
        currentScoreClone[this.isPlayerActive] = 0
        this.nextPlayer()
      } else {
        currentScoreClone[this.isPlayerActive] += this.dice[0] + this.dice[1]
        console.log(this.accumulatedScore[this.isPlayerActive]);
        if (this.accumulatedScore[this.isPlayerActive] += currentScoreClone[this.isPlayerActive] >= this.winScore) {
          this.isWinner = true
          this.isDisabled = false
          setTimeout(() => {
            alert("Player " + (this.isPlayerActive + 1) + " đã chiến thắng ")
            this.isPlaying = false
          }, 300)
        }
      }
      this.currentScore = currentScoreClone

    },
    handleIsWinner() {
      return this.accumulatedScore[this.isPlayerActive] >= this.winScore
    },
    handleClickHoldEvent(data) {
      if (data != 0) {
        let accumulatedScoreClone = [...this.accumulatedScore]
        accumulatedScoreClone[this.isPlayerActive] += this.currentScore[this.isPlayerActive]
        this.accumulatedScore = accumulatedScoreClone
        this.currentScore = [0, 0]
        // console.log(this.accumulatedScore[this.isPlayerActive]);
        // console.log(this.winScore);
        if (this.handleIsWinner()) {
          // console.log('Có người win');
          this.isWinner = true
          this.isDisabled = false
          setTimeout(() => {
            alert("Player " + (this.isPlayerActive + 1) + " đã chiến thắng ")
            this.isPlaying = false
          }, 300)
        } else {
          this.nextPlayer()
        }


      } else {
        alert('Bạn chưa xoay lần nào ! ')
      }
    },
    handleChangeWinScoreEvent(data) {
      console.log(data);
      this.winScore = Number(data)
    },

  },
  computed: {
    renderisPopup() {
      return this.isPopup
    },

  }
};
</script>
<style>
/**********************************************
*** GENERAL
**********************************************/
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.clearfix::after {
  content: "";
  display: table;
  clear: both;
}

html,
body {
  width: 100%;
  height: 100%;
}

body {
  height: 100vh;
  width: 100vw;
  background-image: linear-gradient(rgba(62, 20, 20, 0.4), rgba(62, 20, 20, 0.4)), url(../assets/back.jpg);
  background-size: 100% 100%;
  background-position: center;
  font-family: Lato;
  font-weight: 300;
  position: relative;
  color: #555;
  z-index: 1000;
}

.wrapper {
  width: 1000px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  box-shadow: 0px 10px 50px rgba(0, 0, 0, 0.3);
  overflow: hidden;
}
</style>
