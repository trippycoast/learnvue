let Vue = require('vue/dist/vue.common.dev');

new Vue({
    el: '#app',
    data: {
        message: '',
        items: [
            {name:'apples', isDone: false},
            {name:'milk', isDone: true},
            {name:'brownies', isDone: true},
        ]
    },
    methods: {
        clicked(){
            if(this.message.trim() != ''){
                this.items.push({name: this.message, isDone: false})   
            }
            this.message = '';
        }
    }
});


// let input = document.getElementById('input');
// let text = document.getElementById('text');
// input.addEventListener('input', (event)=> {
//     text.innerHTML = input.value;
// })