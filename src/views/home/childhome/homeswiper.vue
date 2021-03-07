<template>
	<swiper>
			<swiper-item v-for="item in banners">
				
			</swiper-item>
	</swiper>
</template>

<script>
		import {Swiper, SwiperItem} from  'components/common/swiper'
		
		export default {
			data() {
				return {
					isload:false
				}
			},
			props:{
				banners:{
					type:Array
				}
			},
  components:{
  	Swiper,
  	SwiperItem
  },
  methods:{
  	imgload(){
  		if(!this.isload){
  			this.$emit('imageload')
  			this.isload = true
  		}
  	}
  }
}
</script>

<style>
</style>