<template>
	<div class="ls-numStatistics-warp">
		<div v-for="item in numsArr" :key="item.index" class="ls-dom">
			<span v-for="index of 10" :key="index" class="ls-span">{{index-1}}</span>
			<span class="ls-span">0</span>
		</div>
	</div>
</template>
<script>
export default {
	name:"ls-statistics",
	data(){
		return{
			numsArr: [],
		}
	},
	methods:{
		computeSlideHeight(){ //compute how height to slide to reach the target number
			let arr = this.numsArr			
			setTimeout(function(){
				for(let i = 0;i<arr.length;i++){
					let degree = arr[i] === 0 ? 20 : arr[i] * 2
					document.getElementsByClassName("ls-dom")[i].style.transform = "translateY( "+ (-degree) + "em)"
				}
			},500)
		}
	},
	props: {
		nums: {
			type:Number,
			require:true,
		}
	},
	mounted(){
		if(typeof this.nums !== "number"){// Make sure variable nums's data type is Number
			throw new Error("请传入Number类型")
		} 
		let temp = []
		for(let i of parseInt(this.nums).toString()){// initialize statistics number to ready for render
			temp.push(Number(i))
		}
		this.numsArr = temp
	},
	watch: {
		numsArr:function(){
			this.$nextTick(function(){ // wait dom render to complete and  executive computeSilderHeight function
				this.computeSlideHeight()
			})
		}
	}
}
</script>
<style lang="scss" scoped>
.ls-numStatistics-warp{
	overflow: hidden;
	height: 2em;
}
.ls-dom{
	height: 2em;
	line-height: 2em;
	transition: 1.5s all ease-in-out;
	float: left;
	position: relative;
	top: 0px;
}
.ls-span{
	font-size: 2em;
	display: block;
}
</style>
