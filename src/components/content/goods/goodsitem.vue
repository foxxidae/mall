<template>
	<div class="goodsitem" @click="goodslink">
			<img :src="goodsitem.show.img">
			<div class="info">
				<div>{{goodsitem.title}}</div>
				<span class="price">{{goodsitem.price}}</span>
				<span class="collect">{{goodsitem.cfav}}</span>
			</div>
	</div>
</template>

<script>
	export default {
		props:{
			goodsitem:{
				type:Object
			}
		},
		methods:{
			imgeload(){
				this.$bus.$emit('itemImageLoad')
			},
			goodslink(){
				this.$router.push('/items/' + this.goodsitem.iid)
			}
		}
	}
</script>

<style scoped>
	.goodsitem{
		padding-bottom: 40px;
  position: relative;
		width: 48%;
	}
	.goodsitem a{
		color: #333;
	}
.goodsitem img{
	width: 100%;
 border-radius: 5px;
 border:3px solid #F6F6F6;
}
.info{
	font-size: 12px;
 position: absolute;
 bottom: 5px;
 left: 0;
 right: 0;
 overflow: hidden;
 text-align: center;
}
.info div{
	 overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-bottom: 3px;
}
.info .price {
   color:#F06008;
   margin-right: 20px;
 }
.info .collect {
    position: relative;
}
</style>