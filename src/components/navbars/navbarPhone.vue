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
      <div class="row containerNav-content">

        <grid-vue :size="{col:[8,0,0],offset:[0,0,0], opts:''}">
          <span class="star"><i class="fas fa-star"></i></span><span class="star"><i class="fas fa-star"></i></span><span class="star"><i class="fas fa-star"></i></span><span class="star"><i class="fas fa-star"></i></span><span class="star"><i class="fas fa-star"></i></span>
          
          <div id="nameStatus">
            <span><i class="fas fa-circle"></i></span>
            Fabricio Lanches
          </div>
          <div id="address">            
            Av. Cula Mangabeira 837 Santo Expedito
          </div>
          <div id="card">
            Elo, MasterCard, Visa, Elo
          </div>          
          <div id="contact">
            Quinta à Terça Feira 18:00 às 00:30 Contato: (038) 3216-2313
          </div>
        </grid-vue>

        <grid-vue :size="{col:[3,0,0],offset:[0,0,0], opts:''}">
          <button class="heartButton"><i class="far fa-heart"></i></button>
          <!-- <button class="heartButton"><i class="fas fa-heart"></i></button> -->
          <img  id="imgCardRight" src="https://www.socialplace.com.br/images/logo.png" >
        </grid-vue>
        <input-search/>

      </div> 
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
        document.getElementById("imgCardRight").style.opacity = "0"; 
      } else {
        document.getElementById("cardImg").style.opacity = "0";
        document.getElementById("imgCardRight").style.opacity = "1";
      }
      prevScrollpos = currentScrollPos;
    }
  },
  
  destroyed() {
    window.onscroll = null;
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">



  #imgBrightness {
    position: relative;
    background-color: white; 
    height: 110px;
  }

  #imgBrightness > img {
    -webkit-filter: blur(10px);
    filter:blur(10px);
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 290px;
    height: auto;
  }

  .arrowBack {
    position: absolute;
    top: 5%;
    padding: 5%;
    color: darkgray;
  }

  #cardImg {
    width: 100px;
    height: 100px;
    background-color: white; 
    position: relative;
    bottom: 115%;
    margin: 0 auto;
    box-shadow: 0 5px 8px 0 rgba(0, 0, 0, 0.3);
    z-index: 3;  
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

  #imgCardRight {
    opacity: 0;
    transition: opacity 0.6s;
    width: 90px;
    margin-top: 30%;
    margin-left: 30%;
  }

  .containerNav-content {
    width: 100% !important; //bootstrap row affect the width
    padding: 2%;
    
  }

  #containerNav {
    width: 100%;
    height: auto;
    position: relative;
    background-color: white;  
    box-shadow: 0px 5px 8px 0 rgba(0, 0, 0, 0.3);
    border-right: 0;
  }

  .heartButton  {
    border: 0;
    background-color: white;
    margin-left: 135%;
    
  }

  .heartButton > i {
    color: blue;
    font-size: 150%;  
  }

  .star {
    margin-top: 20%;
  }

  .star .fa-star {
    border-color: orange;
    color:yellow;  
  }

  .fa-circle {
    color: green;
  }

  #nameStatus {
    font-weight: bold;
  }

  #address {
    color: grey;
    font-weight: bold;
    font-size: 80%;
  }

  #card {
    font-weight: bold;
    font-size: 60%;

  }

  #contact {
    font-style: italic;
    font-weight: bold;
    font-size: 85%;
  }





  

</style>
