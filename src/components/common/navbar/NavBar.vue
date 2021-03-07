<template>
	<div class="navwrap">
		<div class="left"><slot name="left"></slot></div>
		<div class="center"><slot name="center"></slot></div>
		<div class="right"><slot name="right"></slot></div>
	</div>
</template>

<script>
</script>

<style>
	.navwrap{
		position: fixed;
		left: 0;
		right: 0;
		top: 0;
		z-index: 10;
		display: flex;
		height: 44px;
		line-height: 44px;
		box-shadow: 0 1px 1px rgba(100,100,100,.1);
	}
	.navwrap .left,.navwrap .right{
		width: 60px;
	}
	.navwrap .center{
		flex: 1;
		text-align: center;
		
	}
</style>