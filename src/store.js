import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    sizeScreen: ''
    
  },
  getters: {
    getSizeScreen: state => {
      return state.sizeScreen;
    }
  },
  mutations: {

    setSizeScreen (state) {
      if (window.innerWidth >= 992) {
        return state.sizeScreen = 'lg';
      }
      else if (window.innerWidth >= 768) {
        return state.sizeScreen = 'md';
      }
      else {
        return state.sizeScreen = 'sm';
      }  
    } 
     
  },
  actions: {

  }
})
