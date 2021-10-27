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
  <section class="section"></section>
    <component :is="items[active].componentName"></component>
    <api-example>
</div>
</template>

<script>
import ApiExample from './apiExample.vue'
import ClickerExample from './ClickerExample.vue'
import ModalExample from './ModalExample.vue'
import ToDoExample from './ToDoExample.vue'

export default {
  components: { ModalExample, ToDoExample, ClickerExample, ApiExample},
    data(){
      return {
        active: 0,
        items: [
           {title:'Api Example', componentName:'ApiExample'},
          {title:'Clicker Example', componentName:'ClickerExample'},
          {title:'Modal Example', componentName:'ModalExample'},
          {title:'ToDo Example', componentName:'ToDoExample'},
        ]
      }
    }
}
</script>

<style>

</style>