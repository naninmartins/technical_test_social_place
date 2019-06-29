<template>
  <div>      
    <input v-model="message" class="" placeholder="Pesquisar"> 
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: 'inputSearch',
  props:[],
  data () {
    return {

    }    
  },
  methods: {

    
  },
  
  created() {

 
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

  input {
    background-color: #FFFFFF;
    background-image: url("iconSearch.png");
    background-size: 35px; 
    background-position: 0px 10px; 
    background-repeat: no-repeat;
    border:0;
    width: 150%;
    padding: 12px 20px 12px 40px;
  }

  input::placeholder {
    //font-size: 100%;

  }

</style>
