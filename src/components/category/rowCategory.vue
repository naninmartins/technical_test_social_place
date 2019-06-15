<template>
  <div> 
    <button v-if="$store.getters.getwidthScreen >= 492 " class="buttonLeft" @click="leftScroll"><i class="fas fa-chevron-left fa-md"></i></button>       
    <button v-if="$store.getters.getwidthScreen >= 492 " class="buttonRight" @click="rightScroll"><i class="fas fa-chevron-right fa-md"></i></button> 
    <div class="rowCategory" @touchstart="touchStart($event)" @touchend="touchEnd($event)" @touchmove="touching($event)"> 
      <category-sticker v-for="category in categories" :key="category.id" url="#" :img="$store.getters.getUrlApi + category.image"  :name="category.name"/>
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
      cssPos : 0,
      touchPos : 0,
      fingerTouch : 0,
      rangeClick : 70,
      velTouch : 0.5, // inversely proportional
      lastStickerOffSet : 45,
      lastStickerOffSetTouch : 120,
      cssRoot : document.documentElement,
    }
  },

  methods: {

    setCssPos: function (increment) {

      return this.cssRoot.style.setProperty('--pos-right',`${this.cssPos+=increment}px`);
    },

     maxLeft : function () {  //return if the element's offset is max

      let categoryLeft = document.querySelector('.rowCategory').offsetLeft;
      let firstSticker= document.querySelector('.sticker').offsetLeft;
      
      return firstSticker < categoryLeft;

    },

    maxRight : function () {

      let categoryWidth = document.querySelector('.rowCategory').offsetWidth;     
      let lastSticker = document.querySelector('.sticker:last-child').offsetLeft;      
      return (lastSticker+this.lastStickerOffSet) > categoryWidth;

    },
    
    maxTouchOffset : function (diff) { //The diff can't be bigger than Stickers offsets, if else must be set sticker offset

      let firstSticker= document.querySelector('.sticker').offsetLeft;
      let categoryWidth = document.querySelector('.rowCategory').offsetWidth;     
      let lastSticker = document.querySelector('.sticker:last-child').offsetLeft + this.lastStickerOffSetTouch; 

       if (diff < firstSticker) {

        diff = firstSticker;

       }

      if (diff > lastSticker - categoryWidth) {

        diff = lastSticker - categoryWidth;

      }
        return diff;

    },

    rightScroll : function () {        
     
      if (this.maxRight()) {
        this.setCssPos(this.rangeClick);
      } 

    },

    leftScroll : function () {
      
      if (this.maxLeft()) {
        this.setCssPos(this.rangeClick * -1);
      } 

    },
    
    touchStart: function (event) {  //set touch reference when is touchStart
  
      this.touchPos = event.touches[0].clientX;
      this.fingerTouch = event.timeStamp;

    },

    touchEnd: function () { 
      this.fingerTouch = 0;
      this.velTouch = 0.5;
    },
    
    touching: function (event) {  //set difference from touchStart
     
      if (this.velTouch < 70) this.velTouch = Math.pow ( (event.timeStamp - this.fingerTouch) / 100, 2) ; //done exponencial function to UI

      let diff = (this.touchPos - event.touches[0].clientX) / this.velTouch;     
     
      diff = this.maxTouchOffset(diff);

      this.setCssPos(diff);
    
    },
  },

  created() {

    window.addEventListener('resize', () =>{ 
      this.cssRoot.style.setProperty('--pos-right',`0px`); //set initial position when screen size change
    }); 

  },

  destroyed() {

     window.removeEventListener('resize', () =>{
      this.cssRoot.style.setProperty('--pos-right',`0px`); 
    });

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
    opacity: 1;
    padding: 37px 3px;
    z-index: 2;
    position: relative; 
    border: none;
    bottom: 0px;
  
  }

  button:hover {
    opacity: 1;   
    border: 1px;
  }

  .buttonLeft { 
    float: left;
  }
    
  .buttonRight {
    float: right;
  } 



</style>
