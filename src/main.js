import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
//import bootstrap
import 'bootstrap'; 
import 'bootstrap/dist/css/bootstrap.min.css';


new Vue({

  components: { 
   },
  router,
  store, 
  render: h => h(App)
}).$mount('#app')
