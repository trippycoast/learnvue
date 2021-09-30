let Vue = require('vue/dist/vue.common.dev');

new Vue({
    el: '#app',
    data: {
        message: '',
        items: [
            {name:'apples', isDone: false, id: 0},
            {name:'milk', isDone: true, id: 1},
            {name:'brownies', isDone: true, id: 2},
        ]
    },
    methods: {
        clicked(){
            if(this.message.trim() != ''){
                this.items.push({name: this.message, isDone: false, id: this.items.length})   
            }
            this.message = '';
        }
    },
    computed: {
        doneItems(){
            return this.items.filter(item => item.isDone);
        },
        notDoneItems(){
            return this.items.filter(item => !item.isDone);
        }
    }
});


// let input = document.getElementById('input');
// let text = document.getElementById('text');
// input.addEventListener('input', (event)=> {
//     text.innerHTML = input.value;
// })