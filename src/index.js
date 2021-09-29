let Vue = require('vue/dist/vue.common.dev');

new Vue({
    el: '#app',
    data: {
        message: ''
    },
    methods: {
        clicked(){
            alert('clicked');
        }
    }
});


// let input = document.getElementById('input');
// let text = document.getElementById('text');
// input.addEventListener('input', (event)=> {
//     text.innerHTML = input.value;
// })