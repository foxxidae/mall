<template>
	<div class="goodsinfo">
			<div class="title">{{goods.title}}</div>
			<div class="price">
					<span class="newprice">¥{{goods.realprice}}</span>
					<span class="oldprice">{{goods.oldprice}}</span>
					<span class="discount">{{goods.discount}}</span>
			</div>
	</div>
</template>

<script>
	export default {
		data(){
			return {

			}
		},
		props:{
				goods:{
					type:Object
				}
			},
	}
</script>

<style>
	.goodsinfo{
		margin:10px;
	}
	.title{
		max-height: 60px;
		line-height: 20px;
		overflow: hidden;
  font-size: 14px;
	}
	.price{
		height: 30px;
		line-height: 30px;
	}
	.newprice{
		font-size: 20px;
		color: #F06008;
		padding-right: 3px;
	}
	.oldprice{
		 text-decoration:line-through;
		 font-size: 12px;
		 
	}
	.discount{
		display: inline-block;
		height: 15px;
		line-height: 15px;
		background: #F06008;
		border-radius: 5px;
		margin-left: 7px;
		color: #fff;
		font-size: 12px;
		padding: 3px 10px;
	}
</style>