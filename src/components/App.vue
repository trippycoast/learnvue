<template>
  <section class="section">
    <div class="container">
      <button class="button is-primary" @click="isActive=true">Click me!</button>
      <div class="modal" :class="{'is-active': isActive}">
        <div class="modal-background" @click="isActive=false"></div>
        <div class="modal-content">
          <p class="image is-4by3">
            <img src="https://placekitten.com/1280/960" alt="">
          </p>
        </div>
        <button class="modal-close is-large" aria-label="close" @click="isActive=false"></button>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data(){
    return {
      isActive: false
    }
  }
}
</script>

<style>
  html, body {
    background-color:rgb(36, 36, 36)!important;
  }
</style>