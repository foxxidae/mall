<template>
		<div id="home">
			<navbar class="home-nav"><div slot="center">购物街</div></navbar>
			<tabcontrol class="tabfixd" :tabtext="['流行','最新','推荐']" @tabclick="tabclick" 
				ref="tabcontrol1" v-show="istabfixd"></tabcontrol>
			<scroll class="scroll-wrapper" ref="scroll" :probetype="3" @scroll="contentscroll"
				 :pullupload="true" @pullupload="loadmore">
	  	<homeswiper :banners='banners' @imageload="imageload"></homeswiper>
	  	<recommendview :recommends='recommends'></recommendview>
	  	<feature></feature>
	  	<tabcontrol class="tabfix" :tabtext="['流行','最新','推荐']" @tabclick="tabclick" 
	  		ref="tabcontrol2"></tabcontrol>
	  	<goodslist :goods="goods[currenttype].list"></goodslist>
  	</scroll>
  	<backtop @click.native="backtop" v-show="isbacktop"></backtop>
		</div>
</template>

<script>
	import navbar from  'components/common/navbar/NavBar'
	import scroll from  'components/common/scroll/scroll'
	import tabcontrol from  'components/content/tabcontrol/tabcontrol'
	import goodslist from  'components/content/goods/goodslist'
	import backtop from  'components/content/backtop/backtop'
	
	import homeswiper from  './childhome/homeswiper'
	import recommendview from  './childhome/recommendview'
	import feature from  './childhome/feature'
	import {getHomeData,getGoodsData} from  '@/network/home'
	
export default {
  components:{
  	navbar,
  	scroll,
  	backtop,
  	tabcontrol,
  	goodslist,
  	homeswiper,
  	recommendview,
  	feature
  },
  data(){
  	return {
  		banners:[],
  		recommends:[],
  		goods:{
  			'pop': { page:0, list: []},
  			'new': { page:0, list: []},
  			'sell': { page:0, list: []}
  		},
  		currenttype:'pop',
  		isbacktop:false,
  		istabfixd:false
  	}
  },
		created() {
			this.getHomeMultiData()
			this.getHomeGoodsData('pop')
			this.getHomeGoodsData('new')
			this.getHomeGoodsData('sell')
		},
		mounted(){
			this.$bus.$on('itemImageLoad', () => {
				this.$refs.scroll.scroll.refresh()
			})
		},
		methods:{
			tabclick(index){
				switch(index) {
					case 0:
					this.currenttype = 'pop'
					break
					case 1:
					this.currenttype = 'new'
					break
					case 2:
					this.currenttype = 'sell'
					break
				}
				this.$refs.tabcontrol1.currentIndex = index;
				this.$refs.tabcontrol2.currentIndex = index;
			},
			//网络请求代码
			getHomeMultiData(){
				getHomeData().then(res => {
				this.banners=res.data.banner.list;
				this.recommends=res.data.recommend.list
			})
			},
			getHomeGoodsData(type){
				const page = this.goods[type].page + 1
     getGoodsData(type, page).then(res => {
         this.goods[type].list.push(...res.data.list)
         this.goods[type].page += 1
         this.$refs.scroll.finishPullup()
     })
			},
			backtop(){
				this.$refs.scroll.scrollTo(0,0)
			},
			contentscroll(position) {
				//回到顶部显示
				this.isbacktop = (-position.y) > 1000
				//吸顶效果显示
				this.istabfixd = (-position.y)>this.$refs.tabcontrol2.$el.offsetTop
			},
			loadmore(){
				this.getHomeGoodsData(this.currenttype)
			},
			imageload(){
				
			}
		}
}
</script>

<style scoped>
	#home{
		padding-top: 44px;
		height: 100vh;
  position: relative;
	}
	.scroll-wrapper{
		overflow: hidden;
  position: absolute;
  top: 44px;
  bottom: 49px;
  right: 0;
  left: 0;
	}
	.home-nav{
		background: #F06008;
		color: #fff;
		}
		.tabfixd{
			background: #fff;
			position:fixed;
			top: 44px;
			left: 0;
			right: 0;
			z-index: 10;
		}
</style>