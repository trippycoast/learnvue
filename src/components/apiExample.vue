<template>
  <ul>
      <li></li>
  </ul>
</template>

<script>
const axios =  require('axios');
export default {
    created(){
        axios.get('https://rickandmortyapi.com/api/character').them(Response => {
        console.log(Response.data);
        this.info = Response.data.info;
        this.results = Response
    });
},
data(){
    return {
        info: {
            next: null,
            Prev: null,
            pages: 0,
            count: 0,
            }
        }
    }
}
</script>

<style>

</style>