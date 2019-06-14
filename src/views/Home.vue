<template>

  <div>   
    <nav-bar url="/" img="https://www.socialplace.com.br/images/logo.png" imgWidth="100" imgHeight="60"/>   
        
        <row-category :categories="apiCategories"/>      
          
     <navbar-phone-footer v-if="$store.getters.getSizeScreen == 'sm'"/>
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
      // criar código para bloquear o processamento aqui                   

    }).catch( () =>{
      // //some else error code such as 404 code or anything else api can be return
    
      // criar código para desbloquear processamento aqui
    });
    // criar código para desbloquear processamento aqui
  }

}
</script>

