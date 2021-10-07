let Vue = require('vue/dist/vue.common.dev');
require('bulma');

import App from './components/App.vue';

Vue.component('app', App);

new Vue({
    el: '#app'    
});
