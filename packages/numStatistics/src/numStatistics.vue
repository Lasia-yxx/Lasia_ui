<template>
	<div class="ls-numStatistics-warp">
		<div class="ls-numStatistics-container">
			<span class="ls-span">0</span>
			<span class="ls-span">1</span>
			<span class="ls-span">2</span>
			<span class="ls-span">3</span>
			<span class="ls-span">4</span>
			<span class="ls-span">5</span>
			<span class="ls-span">6</span>
			<span class="ls-span">7</span>
			<span class="ls-span">8</span>
			<span class="ls-span">9</span>
		</div>
	</div>
</template>
<script>
export default {
	name:"ls-statistics",
	data(){
		return{
			nums:23,
			temp:'<div class="ls-dom">\
            <span class="ls-span">0</span>\
            <span class="ls-span">1</span>\
            <span class="ls-span">2</span>\
            <span class="ls-span">3</span>\
            <span class="ls-span">4</span>\
            <span class="ls-span">5</span>\
            <span class="ls-span">6</span>\
            <span class="ls-span">7</span>\
            <span class="ls-span">8</span>\
            <span class="ls-span">9</span>\
        </div>'
		}
	},	
	mounted(){
		setTimeout(function(){
			document.getElementsByClassName("ls-numStatistics-container")[0].style.transform = "translateY(-160px)"
		},2000)
		// let len = this.nums.toString().length
		// let temp = ""
		// for(let i = 0;i<len;i++){
		// 	temp += this.temp
		// }
		// this.$refs.numRoot.innerHTML = temp
	}		
}
</script>
<style lang="scss" scoped>
.ls-numStatistics-warp{
	font-family: '微软雅黑';
	line-height: 40px;
	height: 40px;
	/*设置数字显示高度*/
	font-size: 25px;
	/*设置数字大小*/
	overflow: hidden;
	display: inline-block;
	position: relative;
}
.ls-numStatistics-container{
	width: 20px;
	/*设置单个数字宽度*/
	text-align: center;
	float: left;
	transition: 1.5s ease-in-out;
}
.ls-span{
	width: 100%;
	display: block;
}
</style>
