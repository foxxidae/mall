<template>
	<swiper class="items-wrapper">
			<swiper-item v-for="item in topimage">
				<img :src="item">
			</swiper-item>
	</swiper>
</template>

<script>
import {Swiper, SwiperItem} from  'components/common/swiper'

export default {
			data() {
				return {

				}
			},
			props:{
				topimage:{
					type:Array
				}
			},
  components:{
  	Swiper,
  	SwiperItem
  },
  methods:{
  }
}
</script>

<style>
	.items-wrapper{
		height: 300px;
		overflow: hidden;
		margin-top: 44px;
		}
		.items-wrapper img{
			width: 100%;
		}
</style>