import Vue from 'vue'
import App from './App.vue'
import Home from './Home'
import Users from './Users'
import store from './store'
import VueRouter from  'vue-router'


Vue.config.productionTip = false

const  routes=[

  {path:'/',component:Home},
  {path:'/users/:teamId',component:Users}
];
const  router=new VueRouter({

  routes,
  mode:'history'
});
Vue.use(VueRouter);
new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
