<template>
	<div class="recommend-wrap">
		<div class="recommend-list" v-for="item in recommends">
			<a :href="item.link">
				<img :src="item.image">
				<div class="tittle">{{item.title}}</div>
			</a>
		</div>
	</div>
</template>

<script>
	export default {
			props:{
				recommends:{
					type:Array
				}
		}
}
</script>

<style>
	.recommend-wrap{
		display: flex;
		padding: 10px 0 20px;
		border-bottom:8px solid #F6F6F6;
	}
	.recommend-wrap .recommend-list{
			flex: 1;
		}
	.recommend-wrap .recommend-list a{
		display: block;
		width: 90%;
		margin: 5px 5%;
	}
	.recommend-wrap .recommend-list img{
		width: 100%;
		border-radius:50%;
	}
	.tittle{
		width: 100%;
		height: 30px;
		line-height: 30px;
		color: #333;
		text-align: center;
		font-size: 12px;
	}
</style>