<template>

  <div>
    <!-- {{ $store.getters.getSizeScreen }} -->
    <nav-bar url="/" img="https://www.socialplace.com.br/images/logo.png" imgWidth="100" imgHeight="60"/>
    <!-- <nav-bar url="/" v-if="$store.getters.getSizeScreen == 'sm'"  img="https://www.socialplace.com.br/images/logo.png" imgWidth="100" imgHeight="60"/> -->
        <br> <br><br><br><br><br> 
        
        <row-category/>
      
      {{ menu }}
          
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
        menu : []
    };      
  },
  methods: {
  
  },
  computed: {
 
  },

  mounted () {
    // this.$http.get('https://api.socialplace.com.br:443/api/readrestaurantnotoken?restaurant_id=598c710ca58ad9338a66893d')
    //   .then(response => (this.info = response));

                 let url = 'https://api.socialplace.com.br:443/api/readrestaurantnotoken?restaurant_id=598c710ca58ad9338a66893d';

                this.$http.get(url).then(response=>{
                      this.menu = response.data.data.menu;
                      console.dir(response.data.data.menu);

                    // criar código para bloquear o processamento aqui                   

                }).catch( () =>{
                    // //some else error code such as 404 code tell us that postal code isn't valid
                  
                    // criar código para desbloquear processamento aqui
                });
                // criar código para desbloquear processamento aqui


  }

}
</script>

