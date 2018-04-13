import Vue from 'vue';
import VueRouter from 'vue-router';
import Index from './Index.vue';
import Actors from './Actors.vue';
import newActor from './newActor.vue';

import VueResource from 'vue-resource';
require("./style.scss");

import App from './App.vue';
Vue.use(VueRouter);
Vue.use(VueResource);
const routes = [
  { path: '/index', alias: '/', component: Index},
  { path:'/actors', component: Actors},
  { path:'/newActor', component:newActor }


]

// Create the router instance and pass the `routes` option
const router = new VueRouter({
  routes
})

var example1 = new Vue({
  el: '#example-1',
  data: {
      counter: 0
  }
  })

new Vue({
  el: '#app',
  router,	
  render: h => h(App)
})


