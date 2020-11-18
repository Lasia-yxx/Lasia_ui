<template>
  <div :class="['ls-container','ls-center','ls-switch-'+size,isActive]">
    <div class="ls-switcher ls-center" @click="lsToSwitch()" ref="lsCircule">
      <div :class="[lsSwitchUpStatus,'ls-center','ls-switch_up']" style="border-radius: 50000px 50000px 0 0;">{{inActive}}</div>
      <div :class="[lsSwitchDownStatus,'ls-center','ls-switch_down']" style="border-radius: 0 0 50000px 50000px;">{{unActive}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name:"ls-switch",
  data(){
    return{
      status:this.isActive,
      lsSwitchUpStatus:"ls-switch_up",
      lsSwitchDownStatus:"ls-switch_down"
    }
  },
  mounted(){
    this.lsChangeStyle(this.status)
  },
  props: {
    size: {
      type:String,
      default:"normal"
    },
    unActive:{
      type:String,
      default:"OFF"
    },
    inActive:{
      type:String,
      default:"ON"
    },
    isActive: {
      type:Boolean,
      default:"none",
      required: true
    }
  },
  model: {
    prop:"isActive",
    event:"change"
  },
  methods:{
    lsToSwitch(){
      this.status = !this.status
      this.$emit('input',this.status)
      this.$emit("change",this.status)
    },
    lsChangeStyle(param){
      if(param){
          this.lsSwitchUpStatus = "ls-switch-up-on"
          this.lsSwitchDownStatus = "ls-switch-down-off"
          this.$refs.lsCircule.style.backgroundColor = "rgb(72, 255, 66)"
        }else{
          this.lsSwitchUpStatus = "ls-switch-up-off"
          this.lsSwitchDownStatus = "ls-switch-down-on"
          this.$refs.lsCircule.style.backgroundColor = "black"
        }
    }
  },
  watch:{
    status:{
      handler:function(e){
        this.lsChangeStyle(e)
      }
    },
    isActive:{
      handler:function(e){
        this.lsChangeStyle(e)
      }
    }    
  }
}
</script>
<style lang="scss" scoped>
  .none{
    display: none !important;
  }
  .ls-center{
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .ls-switch-small{
    width: 120px;
    height: 120px;
    font-size: 18px;
  }
  .ls-switch-normal{
    width: 140px;
    height: 140px;
    font-size: 20px;
  }
  .ls-switch-large{
    width: 160px;
    height: 160px;
    font-size: 24px;
  }
  .ls-container{
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #f9f9f9;
    box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.4);
    border-radius: 100%;
  }
  .ls-switcher{
    flex-direction: column;
    width: 90%;
    height: 90%;
    border-radius: 100%;
    background-color: rgba(0, 0, 0, 0.904);
  }
  .ls-switch_up,.ls-switch_down{
    width: 90%;
    height: 45%;
    text-align: center;
    font-weight: bold;
    user-select: none;
  }
  .ls-switch-up-on{
    background-color: #f1f1f1;
    color :rgb(72, 255, 66);
    border-top:none
  }
  .ls-switch-up-off{
    border-top:4px solid rgb(124, 124, 124);
    background-color:white;
    color:black
  }
  .ls-switch-down-off{
    background-color:white;
    color:black;
    border-bottom: 4px solid rgb(124, 124, 124);
  }
  .ls-switch-down-on{
    background-color:#f1f1f1;
    color:gray;
    border-bottom: none;
  }
</style>