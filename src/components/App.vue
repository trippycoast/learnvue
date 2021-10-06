<template>
  <section class="section">
    <div class="container">
      <button class="button is-primary" @click="isActive=true">Click me!</button>
      <button class="button is-warning" @click="isActive2=true">Click me!</button>
      <modal 
      v-if="isActive"
      @close="isActive=false">
        <p class="image is-4by3">
          <img src="https://placekitten.com/1280/960" alt="">
        </p>      
      </modal>
      <modal 
      v-if="isActive2"
      @close="isActive2=false">
        <p class="image is-4by3">
          <img src="https://placebear.com/1280/960" alt="">
        </p>   
      </modal>

    </div>
  </section>
</template>

<script>
import Modal from './Modal.vue'
export default {
  components: { Modal },
  data(){
    return {
      isActive: false,
      isActive2: false
    }
  }
}
</script>

<style>
  html, body {
    background-color:rgb(36, 36, 36)!important;
  }
</style>