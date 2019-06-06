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
  data () {
    return {
      //size : `col-xd-${this.xg} col-xd-${this.lg} col-xd-${this.md} col-xd-${this.sm} col-xd-${this.xm}`
    }
  },
  methods: {
  
  },
  computed: {
    mountSize : function() {
      //let sizeArray = `col-xg-${$vm0._props.xm} col-lg-${$vm0._props.xm} col-md-${$vm0._props.xm} col-sm-${$vm0._props.xm} col-xm-${$vm0._props.xm}`;
      let sizeArray = '';
     
    Object.keys(this.size).forEach( (key) => {
      //console.log(key, this.size[key]);
      sizeArray+= `col-${key}-${this.size[key]} `;
      
    });
      console.dir(sizeArray);
    
      return sizeArray;
    }
  },
}
</script>


