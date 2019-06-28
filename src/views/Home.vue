<template>

  <div>   
    <!-- <nav-bar url="/" img="https://www.socialplace.com.br/images/logo.png" imgWidth="100" imgHeight="60"/>    -->
    <navbar-phone v-if="$store.getters.getSizeScreen == 'sm'"/>    
  
    
     <div id="cardImg">
        <img src="https://www.socialplace.com.br/images/logo.png">
    </div>
    <div id="cardImg">
        <img src="https://www.socialplace.com.br/images/logo.png">
    </div>
    <div id="cardImg">
        <img src="https://www.socialplace.com.br/images/logo.png">
    </div>
    <div id="cardImg">
        <img src="https://www.socialplace.com.br/images/logo.png">
    </div>
    <div id="cardImg">
        <img src="https://www.socialplace.com.br/images/logo.png">
    </div>
    <div id="cardImg">
        <img src="https://www.socialplace.com.br/images/logo.png">
    </div>
    <div id="cardImg">
        <img src="https://www.socialplace.com.br/images/logo.png">
    </div>
    <div id="cardImg">
        <img src="https://www.socialplace.com.br/images/logo.png">
    </div>
    <div id="cardImg">
        <img src="https://www.socialplace.com.br/images/logo.png">
    </div>
    <div id="cardImg">
        <img src="https://www.socialplace.com.br/images/logo.png">
    </div>
    <div id="cardImg">
        <img src="https://www.socialplace.com.br/images/logo.png">
    </div>
    <div id="cardImg">
        <img src="https://www.socialplace.com.br/images/logo.png">
    </div>
    <div id="cardImg">
        <img src="https://www.socialplace.com.br/images/logo.png">
    </div>
     
  </div> 

</template>

<script>
// @ is an alias to /src
export default {
  name: 'home',
  components: {

  },
  data() {
    return {        
        apiCategories : []
    };      
  },
  methods: {
  
  },
  computed: {
 
  },

  mounted () { 

    let url = 'https://api.socialplace.com.br:443/api/readrestaurantnotoken?restaurant_id=598c710ca58ad9338a66893d';

    this.$http.get(url).then(response=>{

      this.apiCategories = response.data.data.menu;
      //console.log(response.data.data.menu)
      // criar código para bloquear o processamento aqui                   

    }).catch( () =>{
      // //some else error code such as 404 code or anything else api can be return
    
      // criar código para desbloquear processamento aqui
    });
    // criar código para desbloquear processamento aqui
  }

}
</script>

<style scoped lang="scss">

body {
  margin:0;
  padding:0;
  height:100%;
  min-height: 100%;
}

</style>

