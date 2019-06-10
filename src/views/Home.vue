<template>

  <div>
    <!-- {{ $store.getters.getSizeScreen }} -->
    <nav-bar url="/" img="https://www.socialplace.com.br/images/logo.png" imgWidth="100" imgHeight="60"/>
    <!-- <nav-bar url="/" v-if="$store.getters.getSizeScreen == 'sm'"  img="https://www.socialplace.com.br/images/logo.png" imgWidth="100" imgHeight="60"/> -->
          <p>AQUI VAI O CONTEUDO DA BAGAÇA</p>
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
        tes : true
    };      
  },
  methods: {
  
  },
  computed: {
 
  },  
}
</script>
