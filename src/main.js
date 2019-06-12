import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

//import bootstrap
import 'bootstrap'; 
import 'bootstrap/dist/css/bootstrap.min.css';

//global Components
import globalComponents from '@/globalComponents'
globalComponents.forEach(component => {
  Vue.component(component.name, component);
}); 

import axios from 'axios'
Vue.prototype.$http = axios


// @ is an alias to /src
new Vue({
  
  components: { 
   },
  router,
  store,  
  render: h => h(App)
}).$mount('#app')
 