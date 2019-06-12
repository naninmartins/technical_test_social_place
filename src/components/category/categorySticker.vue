<template>
  <div class="sticker">
    <a  :href="url">
      <img width="120" height="90" :src="img">
      <div class="card">
        <b>{{ type }}</b>
      </div>
    </a>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: 'categorySticker',
  props:['url','img','type'],
  data () {
    return {

    }    
  },
  methods: {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

  .sticker {
    display: inline-block;
    //float: left;    
    position: relative;    
  }  

  .sticker:hover {
    transform: scale(1.1);  
  }
  
  .sticker:hover .card {
    box-shadow: 0 14px 20px 0 rgba(0,0,0,0.2);
  }

   .card {
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);    
    width: 90px;
    border-radius: 5px;
    text-align: center;
    color: black;
    bottom: 20px;
    left: 13px;
  }

  a {
    text-decoration: none;
  }
</style>
