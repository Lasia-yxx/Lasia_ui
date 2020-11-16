<template>
  <div @click="sss()" :class="['button',type]" >
    点我{{count}}
  </div>
</template>
<script>
export default {
  name: 'ls-button',
  data(){
    return{
      count:0
    }
  },
  props: {
    type: String,
    default:'sdadwadad'
  },
  methods:{
    sss(){
      this.count++
      this.$emit("hahahah",123)
    }
    
  },
  watch:{
    count:{
      // immediate:true,
      handler:function(e,d){
        console.log("dddd",e,d);
      }
    }
  }
}
</script>
 
<style lang="scss" scoped>
  .button {
      display: inline-block;
      padding: 3px 6px;
  }
  .primary{
      background: rgb(77, 255, 211);
      color: #fff;
  }
</style>
 