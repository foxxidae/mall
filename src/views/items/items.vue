<template>
	<div id="items">
			<itemsnav></itemsnav>
			<itemswiper :topimage='topimage'></itemswiper>
			<goodsinfo :goods="goods"></goodsinfo>
	</div>
</template>

<script>
	import itemsnav from  './itemschild/itemsnav'
	import itemswiper from  './itemschild/itemswiper'
	import goodsinfo from  './itemschild/goodsinfo'
	
	import {getitemsData,goods} from '@/network/items'
	export default {
		name:'items',
		data(){
			return {
				iid:null,
				topimage:[],
				goods:{}
			}
		},
		components:{
			itemsnav,
			itemswiper,
			goodsinfo
		},
		created() {
			this.iid = this.$route.params.iid
			
			getitemsData(this.iid).then(res => {
				this.topimage=res.result.itemInfo.topImages
				
				this.goods = new goods(res.result.itemInfo,res.result.columns,res.result.services)
							console.log(this.goods)
			})
		}
	}
</script>

<style>
</style>