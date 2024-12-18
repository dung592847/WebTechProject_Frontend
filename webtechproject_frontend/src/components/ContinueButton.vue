<template>
  <div class="Continue-button">
    <button class="continue-btn" @click="handleReturn">continue</button>
  </div>
  <div class="modal-container" v-if="showModal">
    <div class="modal">
      <div class="modal-content">
        <h1 class="title">Thank you for your purchase</h1>
        <img id="thumbsUp" src = "../assets/goodjob.jpg"> 
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ContinueButton',
  data() {
    return {
      showModal: false
    }
  },
  methods:{

    handleReturn () {
      this.showModal = true
      setTimeout(() => {
      this.$router.push('/');
   }, 5000);
     }

  }

}
</script>

<style scoped>
.Continue-button {
  width: 1400px;
  margin: 50px auto;
}

.continue-btn {
  background-color: #2c3855;
  color: white;
  border: none;
  padding: 15px 20px;
  border-radius: 8px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s;
  width: 100%;
}

.continue-btn:hover {
  background-color: #357abd;
}

.modal-container {
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal {
  background-color: #fefefe;
  padding: 20px;
  border: 1px solid #888;
  width: 30%;
}

.modal-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.title {
  font-size: 24px;
  margin-bottom: 20px;
}

.close-btn {
  background-color: #2c3855;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
  transition: background-color 0.3s;
}

.close-btn:hover {
  background-color: #357abd;
}
</style>