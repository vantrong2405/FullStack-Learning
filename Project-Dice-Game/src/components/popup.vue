<template>
  <div v-if="isPopup === true" class="wraper-popup">
    <div class="content-popup">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim vitae, omnis nisi esse perferendis architecto facere
      placeat aut inventore commodi, quos officiis voluptatibus deserunt rem unde. Maiores molestiae itaque vel?
      <div><button class="btn-popup" @click="handleChangePopup">Đã hiểu</button></div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'popup',
  props: {
    isPopup: {
      type: Boolean,
      default: false
    },



  },
  data() {
    return {

    }
  },
  mounted() {
    // eslint-disable-next-line no-console
  },
  methods: {
    handleChangePopup() {
      this.$emit('handleChangePopupEvent')
    }
  },
}
</script>

<style>
.wraper-popup {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.247);
  z-index: 1000;
}

.wraper-popup .content-popup {
  position: absolute;
  top: 50%;
  left: 50%;
  text-align: justify;
  width: 500px;
  padding: 20px;
  background-color: white;
  transform: translate(-50%, -50%);
  font-size: 17px;

}

.content-popup .btn-popup {
  padding: 4px 8px;
  margin-top: 10px;
}

.content-popup .btn-popup:hover {
  color: white;
  background-color: black;
  cursor: pointer;
}
</style>
