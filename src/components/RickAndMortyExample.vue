<template>
  <div>
    <pagination :count="info.pages" :current="1" @pagination="getpage"></pagination>
    <button class="button is-primary is-rounded" @click="prev" :disabled="!info.prev">prev</button>
    <button class="button is-primary is-rounded" @click="prev" :disabled="!info.prev">next</button>
    <div class="columns is-multiline">
      <div class="column is-one-quarter" v-for="result in results" :key="result.id" :character="result">>
      <character-card :character="result">
      </character-card>
  </div>
    </div>
  </div>
</template>

<script>

import CharacterCard from './CharacterCard.vue'
import Pagination from './Pagination.vue';
const axios = require('axios')
export default {
  components: { CharacterCard, Pagination },
  created(){
      axios.get('https:rickandmortyapi.com/api/character').then(response => {
        console-log(response.data);
        this.info = response.data.info;
        this.results = response.data.results;
      });
  },
  data(){
    return {
      info: {
        next: null,
        prev: null,
        pages: 0,
        count: 0
      },
      results:[]
    }
  },
  methods: {
    next(){
        axios.get(this.info.next).then(Response => {
        console-log(Response.data);
        this.info = Response.data.info;
        this.results = Response.data.results;
      });
    },
    prev(){
        axios.get(this.info.prev).then(Response => {
        console-log(Response.data);
        this.info = Response.data.info;
        this.results = Response.data.results;
      });
    },
    getpage(){
      this.current=page;
      axios.get('https:rickandmortyapi.com/api/character?page=' +page).then(response =>{
      console.log(response.data);
      this.info = response.data.info
      this.results = response.data.results;
      });
    }
  }
}
</script>

<style>

</style>