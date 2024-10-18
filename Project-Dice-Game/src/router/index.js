import Vue from 'vue';
import Router from 'vue-router';
import mainLayout from '../layout/mainLayout.vue'
Vue.use(Router);
export default new Router({
  routes: [
    {
      path: '/',
      component: mainLayout
    }
  ]
});
