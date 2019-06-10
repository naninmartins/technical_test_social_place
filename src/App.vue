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
    getSizeScreen () {
      //console.log(window.innerWidth);
      if (window.innerWidth >= 1200) {
        return 'xl';
      }
      else if (window.innerWidth >= 992) {
        return 'lg';
      }
      else if (window.innerWidth >= 768) {
        return 'md';
      }
      else if (window.innerWidth >= 576) {
        return 'sm';
      }
      else {
        return 'xm';
      }
  
    }
  
  },
  created() {   
    window.onresize = this.getSizeScreen;
  }  
}
 


</script>

<style lang="scss">
</style>
