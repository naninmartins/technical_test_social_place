<template>
  <div class="row fixed-bottom border-top">          
    <grid-vue :size="{col:[3,0,0],offset:[0,0,0], opts:'btn btn-group navbar'}">
      <button @click="notDeveloped" :class="buttonBoostrapStyle" >
        <i class="fas fa-home fa-md" @click="notDeveloped"></i> 
      </button>
    </grid-vue>

    <grid-vue :size="{col:[3,0,0],offset:[0,0,0], opts:'btn btn-group navbar'}">
      <button @click="notDeveloped" :class="buttonBoostrapStyle" >
        <i class="fas fa-search fa-md" @click="notDeveloped"></i> 
      </button> 
    </grid-vue> 

    <grid-vue :size="{col:[3,0,0],offset:[0,0,0], opts:'btn btn-group navbar'}">
      <button @click="notDeveloped" :class="buttonBoostrapStyle" >
        <i class="fas fa-user fa-md" @click="notDeveloped"></i> 
      </button> 
    </grid-vue> 

    <grid-vue :size="{col:[3,0,0],offset:[0,0,0], opts:'btn btn-group navbar'}">
      <button @click="notDeveloped" :class="buttonBoostrapStyle" >
        <i class="fas fa-user-cog fa-md" @click="notDeveloped"></i> 
    </button> 
    </grid-vue>    
  </div>
  
</template>

<script>
// @ is an alias to /src
export default {
  name: 'navbarPhoneFooter',
  props:[],
  data () {
    return {
      message : "",
      buttonBoostrapStyle : "btn btn-outline-dark btn-md border-0 rounded"
    }
  },
  methods: {
    notDeveloped: function () {
      return alert('Desculpe, função ainda em desenvolvimento!');
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
button {
  margin: 20px 0 0;
}
input {
    margin: 23px 3px;
    padding: 20px;
}
</style>
