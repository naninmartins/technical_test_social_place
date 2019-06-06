<template> 
  <div :class="size">
    <slot/>
  </div>  
</template>

<script>
// @ is an alias to /src
export default {
  name: 'gridVue',
  props:['xm','sm','md','lg','xg'],
  data () {
    return {
      size : `col-xd-${this.xg} col-xd-${this.lg} col-xd-${this.md} col-xd-${this.sm} col-xd-${this.xm}`
    }
  },
  methods: {
  
  }
}
</script>


