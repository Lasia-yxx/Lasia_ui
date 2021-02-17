<template>
  <div id="app">
    <ls-switch v-model="isActive" size="small" unActive = "off" inActive="on" @change="doSwitch"></ls-switch>
    <ls-switch v-model="isActive" size="normal"></ls-switch>
    <ls-switch v-model="isActive2" size="large"></ls-switch>
    <!-- <ls-text :data="data"></ls-text> -->
    
    <div style="font-size:24px"><ls-statistics :nums=3121></ls-statistics></div>
    <router-view />
  </div>
</template>

<script>
export default {
  name:"app",
  data(){
    return{
      isActive:false,
      isActive1:true,
      isActive2:false,
      data:2313
    }
  },
  mounted(){
  },
  methods:{
    doSwitch(value){
      // console.log("switch status now!",value);
      this.data = this.data - 100
    }
  }
}
</script>

<style lang="scss">
</style>
