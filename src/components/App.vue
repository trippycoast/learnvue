<template>
  <div class="tabs is-centered is-large">
    <ul>
      <li v-for="(item,index) in items"
      :key="index"
      :class="{'is-active': index === active}"
      @click="active = index">
        <a>{{item}}</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
    data(){
      return {
        active: 0,
        items: [
          'Pictures',
          'Music',
          'Videos',
          'Documents'
        ]
      }
    }
}
</script>

<style>

</style>