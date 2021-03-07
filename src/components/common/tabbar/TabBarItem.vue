<template>
	<div class="bar-wrap" @click='itemclick'>
				<div v-if="!isactived"><slot name='item-icon'></slot></div>
				<div v-else><slot name='item-icon-actived'></slot></div>
				<div :class='{actived:isactived}'><slot  name='item-text'></slot></div>
	</div>
</template>

<script>
	export default {
		props:{
			path:String
		},
		data(){
			return{
//				isactived:false
			}
		},
		methods:{
			itemclick() {
//				console.log('dddd')
				this.$router.replace(this.path)
			}
		},
		computed:{
			isactived(){
				return this.$route.path.indexOf(this.path) !== -1
			}
		}
	}
</script>

<style>
	#tabbar{
		height: 49px;
		background: #f6f6f6;
		position: fixed;
		left: 0;
		right: 0;
		bottom: 0;
		display: flex;
	}
.bar-wrap{
		flex: 1;
		box-shadow: 0 -2px 1px rgba(100,100,100,.1);
		text-align: center;
		font-size: 14px;
}
.bar-wrap img{
		width: 24px;
		height: 24px;
		margin-top: 3px;
		vertical-align: middle;
		margin-bottom: 2px;
}
.actived{
	color:#f06008;
}
</style>