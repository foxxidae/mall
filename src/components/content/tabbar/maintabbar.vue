<template>
<tab-bar>
		<tab-bar-item path='/home'>
			<img slot='item-icon' src="@/assets/img/tabbar/home.png" />
			<img slot='item-icon-actived' src="@/assets/img/tabbar/home-actived.png" />
	  <div slot='item-text'>首页</div>
		</tab-bar-item>
		<tab-bar-item path='/category'>
			<img slot='item-icon' src="@/assets/img/tabbar/action.png" />
			<img slot='item-icon-actived' src="@/assets/img/tabbar/action-actived.png" />
	  <div slot='item-text'>分类</div>
		</tab-bar-item>
		<tab-bar-item path='/shopcar'>
			<img slot='item-icon' src="@/assets/img/tabbar/shopcar.png" />
			<img slot='item-icon-actived' src="@/assets/img/tabbar/shopcar-actived.png" />
	  <div slot='item-text'>购物车</div>
		</tab-bar-item>
		<tab-bar-item path='/profile'>
			<img slot='item-icon' src="@/assets/img/tabbar/profile.png" />
			<img slot='item-icon-actived' src="@/assets/img/tabbar/profile-actived.png" />
	  <div slot='item-text'>我的</div>
		</tab-bar-item>
</tab-bar>
</template>

<script>
	import TabBar from '@/components/common/tabbar/TabBar'
	import TabBarItem from '@/components/common/tabbar/TabBarItem'
	
	export default {
  components:{
  	TabBar,
  	TabBarItem
  }
}
</script>

<style>
</style>