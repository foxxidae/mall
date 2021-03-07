<template>
	<div>
		<navbar class="home-nav">
			<div slot="left" class="nav-left" @click="back">
					<img src="@/assets/img/tabbar/back.png" />
			</div>
			<div slot="center" class="center">
				<div class="nav-tittle" v-for="(item,index) in itemstitle" 
					:class="{actived:index===curryindex}" @click="tittle(index)">{{item}}</div>
			</div>
		</navbar>
	</div>
</template>

<script>
	import navbar from  'components/common/navbar/NavBar'
	
	export default{
		data(){
			return{
				itemstitle:['商品','参数','评论','推荐'],
				curryindex:0
			}
			},
			components:{
				navbar
			},
			methods:{
				tittle(index){
					this.curryindex =index
				},
				back(){
					this.$router.back()
				}
			}
	 }
</script>

<style>
	.home-nav{
		background: #fff;
	}
	.center{
		display: flex;
	}
	.nav-tittle{
		flex: 1;
		color: #333;
	}
	.actived{
		color: #F06008;
	}
	.nav-left img{
		width: 20px;
		height: 20px;
		margin-left:15px;
		}
</style>