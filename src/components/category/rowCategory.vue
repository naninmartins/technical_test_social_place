<template>
  <div>     
    <button class="buttonLeft" @click="leftScroll"><i class="fas fa-chevron-left fa-md"></i></button>       
    <button class="buttonRight" @click="rightScroll"><i class="fas fa-chevron-right fa-md"></i></button>
    <div class="rowCategory" >
      <category-sticker url="#" img="https://api.socialplace.com.br:443/static/type/c06ccd418b124ad7ef68c8305fd5e88cb1350319.jpg" type="Set0"/>
      <category-sticker url="#" img="https://api.socialplace.com.br:443/static/type/eb92c178bc627bbe55b21b750054618471309b65.jpg" type="Podrão"/>
      <category-sticker url="#" img="https://api.socialplace.com.br:443/static/type/6e993122ea206f2603276b0503b2bbda2cce14e3.jpg" type="Brasileiro"/>
      <category-sticker url="#" img="https://api.socialplace.com.br:443/static/type/c06ccd418b124ad7ef68c8305fd5e88cb1350319.jpg" type="Lanche"/>
      <category-sticker url="#" img="https://api.socialplace.com.br:443/static/type/eb92c178bc627bbe55b21b750054618471309b65.jpg" type="Podrão"/>
      <category-sticker url="#" img="https://api.socialplace.com.br:443/static/type/6e993122ea206f2603276b0503b2bbda2cce14e3.jpg" type="Brasileiro"/>
      <category-sticker url="#" img="https://api.socialplace.com.br:443/static/type/c06ccd418b124ad7ef68c8305fd5e88cb1350319.jpg" type="Lanche"/>
      <category-sticker url="#" img="https://api.socialplace.com.br:443/static/type/6e993122ea206f2603276b0503b2bbda2cce14e3.jpg" type="Brasileiro"/>
      <category-sticker url="#" img="https://api.socialplace.com.br:443/static/type/eb92c178bc627bbe55b21b750054618471309b65.jpg" type="Podrão"/>
      <category-sticker url="#" img="https://api.socialplace.com.br:443/static/type/6e993122ea206f2603276b0503b2bbda2cce14e3.jpg" type="Brasileiro"/>
      <category-sticker url="#" img="https://api.socialplace.com.br:443/static/type/c06ccd418b124ad7ef68c8305fd5e88cb1350319.jpg" type="Lanche"/>
     
    </div>
  </div>

</template>

<script>
// @ is an alias to /src
export default {
  name: 'rowCategory',
  props:[],

  data () {
    return {
      pos : 0,
      range : 50, 
      cssRoot : document.documentElement,
      firstSticker : document.querySelector('.sticker')
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
