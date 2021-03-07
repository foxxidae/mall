<template>
  <div id="app">
  	<keep-alive exclude="items">
  			<router-view></router-view>
  	</keep-alive>
	  <maintabbar></maintabbar>
  </div>
</template>

<script>
	import maintabbar from 'components/content/tabbar/maintabbar'
	
export default {
  name: 'App',
  components:{
  	maintabbar
  }
}
</script>

<style scoped>
@import url("assets/css/base.css");
</style>
