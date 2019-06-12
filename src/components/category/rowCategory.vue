<template>
  <div>  
    <button class="buttonLeft" @click="leftScroll"><i class="fas fa-chevron-left fa-md"></i></button>       
    <button class="buttonRight" @click="rightScroll"><i class="fas fa-chevron-right fa-md"></i></button>
    <div class="rowCategory"> 
      <category-sticker  v-for="category in categories" :key="category.id" url="#" :img="$store.getters.getUrlApi + category.image"  :name="category.name"/>
     </div>
  </div>

</template>

<script>
// @ is an alias to /src
export default {
  name: 'rowCategory',
  props:['categories'],

  data () {
    return {
      pos : 0,
      range : 70, 
      cssRoot : document.documentElement,
    }
  },

  methods: {
    rightScroll : function () {
      let categoryWidth = document.querySelector('.rowCategory').offsetWidth;     
      let lastSticker = document.querySelector('.sticker:last-child').offsetLeft;      
      if (lastSticker+10 > categoryWidth) this.cssRoot.style.setProperty('--pos-right',`${this.pos+=this.range}px`);       
    },

    leftScroll : function () {    
      let categoryLeft = document.querySelector('.rowCategory').offsetLeft;
      let firstSticker= document.querySelector('.sticker').offsetLeft;
      if (firstSticker < categoryLeft) this.cssRoot.style.setProperty('--pos-right',`${this.pos-=this.range}px`);     
    }, 
  },

  created() {
    window.addEventListener('resize', () =>{
      this.cssRoot.style.setProperty('--pos-right',`0px`); 
    });
  },

  destroyed() {
     window.removeEventListener('resize');
  },     
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  
  :root {
    --pos-right: 0px;
    --width: 0px;    
  }

  .rowCategory {   
    white-space: nowrap;    
    overflow: hidden;
    //margin: 0 auto;   
  }

  .sticker {
    right: var(--pos-right);
  }

  button {
    opacity: 0.5;
    padding: 30px 15px;
    z-index: 2;
    position: relative; 
    border: none;
    bottom: 0px;
  
  }

  button:hover {
    opacity: 0.9;   
    border: 1px;
  }

  .buttonLeft { 
    float: left;
  }
    
  .buttonRight {
    float: right;
  } 



</style>
