<template>
	<div class="ls-numStatistics-warp">
		<div v-for="item in numsArr" :key="item.index" class="ls-numStatistics-container">
			<span v-for="item in 10" :key="item" class="ls-span">{{item-1}}</span>
			<span class="ls-span">0</span>
		</div>
	</div>
</template>
<script>
export default {
	name:"ls-statistics",
	data(){
		return{
			numsArr:[]
		}
	},
	watch:{
		numsArr:function(){
			this.$nextTick(function(){
				this.computeSliderHeight()
			})
		}
	},
	props:{
		nums:{
			type:Number,
			require:true
		}
	},
	mounted(){
		if(typeof this.nums !== "number"){throw new Error("nums的数据类型必须为number")}
		for(let i of parseInt(this.nums).toString()){this.numsArr.push(i)} // initialize numsArr for render
	},
	methods:{
		computeSliderHeight(){ // compute how heigt need slider to reache target number  
			let arr = this.numsArr
			setTimeout(()=>{
				for(let i = 0;i<arr.length;i++){
					let height = arr[i] == 0 ? 20 : arr[i] * 2
					document.getElementsByClassName("ls-numStatistics-container")[i].style.transform = "translateY("+(-height)+"em)"
				}
			},200) // make sure animation will be execute
		}
	}	
}
</script>
<style lang="scss" scoped>
.ls-numStatistics-warp{
	display: flex;
	overflow: hidden;
}
.ls-numStatistics-container{
	line-height: 2em;	
	height: 2em;
	transition: 1.5s transform ease-in-out;
}
.ls-span{
	display: block;
	font-size: 2em;
}
</style>
