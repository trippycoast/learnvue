<template>
<div>
  <div class="tabs is-centered is-large">
    <ul>
      <li v-for="(item,index) in items"
      :key="index"
      :class="{'is-active': index === active}"
      @click="active = index">
        <a>{{item.title}}</a>
      </li>
    </ul>
  </div>
  <section class="section">
    {{items[active].body}}
  </section>
</div>
</template>

<script>
export default {
    data(){
      return {
        active: 0,
        items: [
          {title:'Pictures', body: "Some Pictures Here!"},
          {title:'Music', body: "Some Music Here!"},
          {title:'Videos', body: "Some Videos Here!"},
          {title:'Documents', body: "Some Documents Here!"},
        ]
      }
    }
}
</script>

<style>

</style>