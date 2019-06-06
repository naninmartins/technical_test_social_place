<template>
  <div class="row  border-bottom">
    <div class="col-md-2">
      <a class="navbar-brand" :href="url">
          <img :src="img" :width="imgWidth" :height="imgHeight" class="d-inline-block align-top" alt="">
      </a>
    </div>
    <div class="col-md-4 navbar offset-md-4">         
      <div class="input-group">
        <div class="input-group-addon">            
          <button :class="buttonBoostrapStyle">
            <i class="fas fa-search fa-lg"></i>
          </button>            
        </div>
        <input v-model="message" class="form-control border-0 rounded" placeholder=" Procure por uma delícia..."> 
      </div>

    </div>
    <div class="col-md-2 btn btn-group navbar">
      <button @click="notDeveloped" :class="buttonBoostrapStyle" >
        <i class="fas fa-user fa-lg" @click="notDeveloped"></i> 
      </button>    
      <button @click="notDeveloped" :class="buttonBoostrapStyle" >
        <i class="fas fa-user-cog fa-lg" @click="notDeveloped"></i> 
      </button>   
    </div>
  </div>
  
</template>

<script>
// @ is an alias to /src
export default {
  name: 'NavBar',
  props:['img','imgWidth','imgHeight','url','cor'],
  data () {
    return {
      message : "",
      buttonBoostrapStyle : "btn btn-outline-dark btn-lg border-0 rounded"
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
