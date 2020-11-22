<template>
	<div class="container">
		<div class="block1"></div>
		<div class="block2"></div>
	</div>
</template>

<script>
export default {
  name: 'Transition2',
  data(){
	return{
	
	}
  }
}
</script>

<style scoped>
	.container{
		display: flex;
		width: 100vw;
		height: 100vh;
		background-color: #252525;
		overflow: hidden;
	}

	.block1{
		width: 0px;
		height: 100vh;
		animation: block 2s 1 ease-in-out forwards;
		background-color: #ffffff;
	}

	.block2{
		position: absolute;
		width: 0px;
		height: 100vh;
		animation: block 2s 1 ease-in-out forwards;
		background-color: #252525;
		animation-delay: .2s;
	}

	@keyframes block {
		0% {
			width: 0px;
		}
		100% {
			width: 100%;
		}
	}
</style>