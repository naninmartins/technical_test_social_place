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
    sizeScreen () {
      return this.$store.commit('setSizeScreen');
    }  
  },
  created() {  
    window.onresize = this.sizeScreen;    
  },
  beforeCreate() {     
    window.onresize = this.$store.commit('setSizeScreen');
  }  
  
}
 


</script>

<style lang="scss">
</style>
