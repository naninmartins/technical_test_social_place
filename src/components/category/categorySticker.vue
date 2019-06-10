<template>
  <div class="row">
    
    <grid-vue class="distance" :size="{col:[1,1,1],offset:[0,0,0], opts:''}">
      <a  href="/#">
        <img v:if=""  width="120" height="90" src="https://api.socialplace.com.br:443/static/type/c06ccd418b124ad7ef68c8305fd5e88cb1350319.jpg">
        <div class="card">
          <b>Pizza</b>
        </div>
      </a>
    </grid-vue>

        <grid-vue class="distance" :size="{col:[1,1,1],offset:[0,0,0], opts:''}">
      <a  href="/#">
        <img v:if=""  width="120" height="90" src="https://api.socialplace.com.br:443/static/type/c06ccd418b124ad7ef68c8305fd5e88cb1350319.jpg">
        <div class="card">
          <b>Pizza</b>
        </div>
      </a>
    </grid-vue>

        <grid-vue class="distance" :size="{col:[1,1,1],offset:[0,0,0], opts:''}">
      <a  href="/#">
        <img v:if=""  width="120" height="90" src="https://api.socialplace.com.br:443/static/type/c06ccd418b124ad7ef68c8305fd5e88cb1350319.jpg">
        <div class="card">
          <b>Pizza</b>
        </div>
      </a>
    </grid-vue>

    
    
  </div>

</template>

<script>
// @ is an alias to /src
export default {
  name: 'categorySticker',
  props:['url','img','title'],
  data () {
    return {
     
    }
  },
  methods: {
    notDeveloped: function () {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

  .card {
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);    
    width: 90px;
    border-radius: 5px;
    text-align: center;
    color: black;
    bottom: 20px;
    left: 13px;
  }

  .distance {
    margin-right: 80px;    
  }

  .distance:hover {
    transform: scale(1.1);
    
  }

  .distance:hover .card {
    box-shadow: 0 14px 20px 0 rgba(0,0,0,0.2);
  }
</style>
