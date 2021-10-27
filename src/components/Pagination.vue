<template>
  <nav class="pagination is-small" role="navigation" aria-label="pagination">
  <a class="pagination-previous">Previous</a>
  <a class="pagination-next">Next page</a>
  <ul class="pagination-list">
    <li v-for="(page,index) in pages" :key="index">
      <a
      v-if="page!='...'"
      class="pagination-link"
      :class="{'is-active': page==current}"
      @click="$emit('paginate', page)"
      aria-label="Goto page 1">{{page}}</a>
      <span v-else class="pagination-ellipsis">&hellip;</span> 
    </li>
  </ul>
</nav>
</template>

<script>
export default {
    props: ['current', 'pages'],
    computed:{
        pages(){
            let pages = [];
            pages[1] = '1';
            pages[2] = '2';
            pages[3] = '3';

            if(this.current-2>0 && !pages[this.current-2]){
                pages[this.current-2] = '...';
            }

            for(let i = this.current-1;i<=this.current+1;i++){
                if(i>=1){
                    pages[i] = ''+i;
                }
                 if(this.current+2>0 && !pages[this.current+2]){
                pages[this.current-2] = '...';
            }
            pages[this.count-2] = this.count-2;
            pages[this.count-1] = this.count-1;
            pages[this.count] = this.count;
            return pages;
        }
      }
    }
}
</script>
<style>

</style>