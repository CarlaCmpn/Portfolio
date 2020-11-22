<template>
	<div class="container">
		<div class="text">
			<span>H</span>
			<span>e</span>
			<span>l</span>
			<span>l</span>
			<span>o</span>
			<span>!</span>
		</div>
	</div>
</template>

<script>
export default {
  name: 'HelloTransition',
  data(){
	return{
	
	}
  }
}
</script>

<style scoped>
	.container{
		display: flex;
		justify-content: center;
		/* align-items: center; */
		width: 100vw;
		height: 100vh;
		overflow: hidden;
		background-color: #252525;
	}
	.text{
		display: flex;
		justify-content: center;
		align-items: center;
		width: 500px;
		height: 100px;
		/* background-color: red; */
	}
	span{
		font-size: 100px;
		color: #ffffff;
		opacity: 0;
		animation: letter 3s ease-in-out 1 backwards;
	}

	span:nth-of-type(2){
		animation-delay: .2s;
	}
	span:nth-of-type(3){
		animation-delay: .4s;
	}
	span:nth-of-type(4){
		animation-delay: .6s;
	}
	span:nth-of-type(5){
		animation-delay: .8s;
	}
	span:nth-of-type(6){
		animation-delay: 1s;
	}

	@keyframes letter {
		0% {
			opacity: 1;
			transform: translateY(50vh);
		}
		25% {
			opacity: 1;
			transform: translateY(40vh);
		}
		50% {
			opacity: 1;
			transform: translateY(50vh);
		}
		75% {
			opacity: 1;
			transform: translateY(40vh);
		}
		100% {
			transform: translateY(50vh);
		}
	}

</style>