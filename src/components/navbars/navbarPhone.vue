<template>
  <div>
    
    <div  id="imgBrightness">
      <img  src="https://www.socialplace.com.br/images/logo.png">
      <a href="#"><i class="fas fa-arrow-left arrowBack"></i></a>  

      <div v-if="(this.toggleImg)" id="cardImg">
        <img src="https://www.socialplace.com.br/images/logo.png">
      </div>

    </div>

    <div id="containerNav">   
      <img  id="cardImg2" src="https://www.socialplace.com.br/images/logo.png" width="80px">
    </div> 

  </div>
  
</template>

<script>
// @ is an alias to /src
export default {
  name: 'navbarPhone',  
  props:[],
  data () {
    return {
      toggleImg : true,       
    }
  },
  methods: {
   
  },

  mounted() {   
     
    var prevScrollpos = window.pageYOffset;    
    window.onscroll = () => {
     
      var currentScrollPos = window.pageYOffset;
      if (prevScrollpos > currentScrollPos) {
        document.getElementById("cardImg").style.opacity = "1";
        document.getElementById("cardImg2").style.opacity = "0"; 
      } else {
        document.getElementById("cardImg").style.opacity = "0";
        document.getElementById("cardImg2").style.opacity = "1";
      }
      prevScrollpos = currentScrollPos;
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">



#imgBrightness {
  position: relative;
  background-color: white; 
  height: 100px;
}

.arrowBack {
  position: absolute;
  top: 5%;
  padding: 5%;
  color: darkgray;
}

#imgBrightness > img {
  filter:blur(10px);
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 250px;
  height: auto;
}

#containerNav {
  width: 100%;
  height: 100px;
  position: relative;
  background-color: white;  
  box-shadow: 0 5px 8px 0 rgba(0, 0, 0, 0.3);
}

#cardImg {
  width: 100px;
  height: 100px;
  background-color: white; 
  position: relative;
  bottom: 115px;
  margin: 0 auto;
  box-shadow: 0 5px 8px 0 rgba(0, 0, 0, 0.3);
  z-index: 3;  
  transition: opacity 0.6s;
}

#cardImg2 {
  opacity: 0;
  transition: opacity 0.6s;
}

#cardImg > img {
  display: block;
  margin-left: auto;
  margin-right: auto;
  padding-top: 30px;
  width: 70%;
  height: auto;  
}




</style>
