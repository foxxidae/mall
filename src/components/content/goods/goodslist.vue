<template>
	<div class="goodslist">
			<goodsitem v-for="item in goods" :goodsitem="item"></goodsitem>
	</div>
</template>

<script>
	import goodsitem from  './goodsitem'
	
	export default {
		props:{
			goods:{
				type:Array
			}
		},
		components:{
			goodsitem
		}
	}
</script>

<style scoped>
	.goodslist{
		 display: flex;
   flex-wrap: wrap;
   justify-content: space-around;
   background-color:#F6F6F6;
   padding: 2px;
	}
</style>