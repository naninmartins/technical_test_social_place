<template>

  <nav class="navbar navbar-light bg-light">
    <a class="navbar-brand" :href="url">
        <img :src="img" :width="imgWidth" :height="imgHeight" class="d-inline-block align-top" alt="">
    </a>
   <slot/>
    </nav>   
 
</template>

<script>
// @ is an alias to /src
export default {
  name: 'NavBar',
  props:['img','imgWidth','imgHeight','url','cor'],
  data () {
    return {

    }
  }
}

</script>
