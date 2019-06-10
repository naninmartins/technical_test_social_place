<template> 
  <div :class="mountSize">
    <slot/>
  </div>  
</template>

<script>
// @ is an alias to /src
export default {
  name: 'gridVue',
  props:  
  {
    size : Object,  
  },
  computed: {
    //I need remember that scope in Vue to props and methods are a bit differents than JS, so keep aware when use function() or a anonimous function or arrow function
    mountSize : function() {
      // return a line to fit the bootstrap grid ie:
      //col-2 offset-2 col-sm-2 offset-sm-2 col-md-3 offset-md-3 col-lg-4 offset-lg-4 col-xl-4 offset-xl-4              
      return `col-${this.size['col'][0]} offset-${this.size['offset'][0]}
      col-sm-${this.size['col'][0]} offset-sm-${this.size['offset'][0]} 
      col-md-${this.size['col'][1]} offset-md-${this.size['offset'][1]}
      col-lg-${this.size['col'][2]} offset-lg-${this.size['offset'][2]}
      col-xl-${this.size['col'][2]} offset-xl-${this.size['offset'][2]}
      ${this.size['opts']}`;  
    }
  },
}
</script>


