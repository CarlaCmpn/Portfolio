<template>
	<div class="container">
		<div class="ligne"></div>
		<div class="ligne"></div>
		<div class="ligne"></div>
		<div class="ligne"></div>
		<div class="ligne"></div>
		<div class="ligne"></div>
		<div class="ligne"></div>
		<div class="ligne"></div>
		<div class="ligne"></div>
	</div>
</template>

<script>
export default {
  name: 'Transition1',
  data(){
	return{
	
	}
  }
}
</script>

<style scoped>
	.container{
		display: flex;
		justify-content: space-between;
		width: 100vw;
		height: 100vh;
		background-color: #ffffff;
		overflow: hidden;
	}

	.ligne{
		width: 0px;
		height: 100vh;
		background: #252525;
		animation-name: ligne;
		animation-duration: 2s;
		transform-origin: center center;
	}

	@keyframes ligne {
		from {
			width: 0px;
		}

		to {
			width: 190px;
		}
	}
</style>