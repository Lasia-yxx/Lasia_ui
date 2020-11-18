<template>
  <div id="app">
    <ls-switch v-model="isActive" size="small" unActive = "off" inActive="on" @change="doSwitch"></ls-switch>
    <ls-switch v-model="isActive" size="normal"></ls-switch>
    <ls-switch v-model="isActive2" size="large"></ls-switch>
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
      isActive2:false
    }
  },
  mounted(){
  },
  methods:{
    doSwitch(value){
      console.log("switch status now!",value);
    }
  }
}
</script>

<style lang="scss">
</style>
