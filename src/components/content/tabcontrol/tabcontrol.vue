<template>
	<div class="tabcontrol">
		<div class="tablist" :class="{actived: index === currentIndex}" 
			v-for="(item,index) in tabtext" @click="itemclick(index)">
			<span>{{item}}</span>
		</div>
	</div>
</template>

<script>
	export default {
			props:{
				tabtext:{
					type:Array
				}
		},
		data(){
			return{
				currentIndex: 0
			}
		},
		methods:{
			itemclick(index){
				this.currentIndex= index;
				this.$emit('tabclick',index)
			}
		}
}
</script>

<style scoped>
	.tabcontrol{
		display: flex;
		text-align: center;
		background: #fff;
	}
	.tabcontrol .tablist{
		flex: 1;
		height: 40px;
		line-height: 40px;
		font-size: 15px;
		color: #555;
	}
	.actived span{ 
		color: #F06008;
		padding: 5px;
		border-bottom: 2px solid #F06008;
		}
</style>