<template>
	<div class="wrapper" ref="wrapper">
		<div class="content">
			<slot></slot>
		</div>
	</div>
</template>

<script>
	import BScroll from 'better-scroll'
	
	export default {
		data(){
			return {
				scroll:null
			}
		},
		props:{
			probetype:{
				type:Number,
				default:0
			},
			pullupload:{
				type:Boolean,
				default:false
			}
		},
		methods:{
			scrollTo(x,y,time=300){
				this.scroll.scrollTo(x,y,time)
			},
			finishPullup(){
				this.scroll.finishPullUp()
			}
		},
		mounted(){
			this.scroll = new BScroll(this.$refs.wrapper,{
				observeDOM:true,
				click:true,
				probeType:this.probetype,
				pullUpLoad:this.pullupload
			})
			//监听滚动位置
			this.scroll.on('scroll',(position) => {
				this.$emit('scroll',position)
			})

			//监听滚动到底部
			this.scroll.on('pullingUp',() => {
			this.$emit('pullupload')
			})
		}
	}
</script>

<style scoped>
</style>