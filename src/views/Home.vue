<template>
  <div class="home">

<nav-bar url="/"  img="https://www.socialplace.com.br/images/logo.png" imgWidth="120" imgHeight="80">
    <li>gr</li>
    <li>gr</li>
    <li>gr</li>
    <li>gr</li>

   
</nav-bar>
<button ></button>
     

  </div>
</template>

<script>
// @ is an alias to /src
import NavBar from '@/components/navbars/navbar'


export default {
  name: 'home',
  components: {
    'NavBar': NavBar,
    //here I can add some others child components
  },
    data() {
      return {
     
      };      
    }
  }

</script>
