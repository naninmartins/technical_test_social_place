<template>
  <div> 
    <router-view/> 
    <!-- The line above call vue router to link pages, it's where all happens -->
  </div>
</template>

<script>
export default {
  name: 'app',
  components: {

  },
  data() {
    return {
        
    };      
  },
  methods: {

    setScreen () {
      return this.$store.commit('setSizeScreen');
    },

  },
  created() {  

      this.setScreen();
          
      window.onresize = () => {
        this.setScreen(); 
      }
     
      window.onscroll = () => {
        this.$store.commit('setScrollPosition');
      }
  },
  destroyed() {
    window.onresize = null;
    window.onscroll = null;
  },  
}
 


</script>

<style lang="scss">
</style>
