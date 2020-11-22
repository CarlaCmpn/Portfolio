<template>
	<div class="container">
		<div class="text">
			<div class="block">
				<div class="cache"></div>
				<p>I'm Carla</p>
			</div>
			<div class="block">
				<div class="cache"></div>
				<p>a full stack developper</p>
			</div>
			<div class="block">
				<div class="cache"></div>
				<p>and french student at Hetic</p>
			</div>
		</div>
		<div class="image">
			<img src="../assets/square.svg" alt="">
		</div>
		<div class="image">
			<img src="../assets/square.svg" alt="">
		</div>
		<div class="image">
			<img src="../assets/circle.svg" alt="">
		</div>
		<div class="image">
			<img src="../assets/circle.svg" alt="">
		</div>
		<div class="image">
			<img src="../assets/triangle.svg" alt="">
		</div>
		<div class="image">
			<img src="../assets/triangle.svg" alt="">
		</div>
	</div>
</template>

<style scoped>
	.container{
		width: 100vw;
		height: 100vh;
		display: flex;
		justify-content: center;
		align-items: flex-start;
		flex-direction: column;
		overflow-x: hidden;
		overflow-y: hidden;
	}

	.block{
		display: flex;
		padding: 0;
		margin: 0;
		/* background-color: teal; */
		height: 70px;
		align-items: center;
	}

	.cache{
		position: absolute;
		width: 1000px;
		height: 80px;
		background-color: #252525;
		transform: scaleX(1);
		animation: cache 5s 1 forwards;
	}

	.block:nth-of-type(2) .cache{
		animation-delay: 1s;
	}

	.block:nth-of-type(3) .cache{
		animation-delay: 2s;
	}

	@keyframes cache {
		0% {
			width: 1000px;
			transform-origin: 100% 50%;
			transform: scaleX(1);
		}
		85% {
			transform-origin: 100% 50%;
			transform: scaleX(0);
		}
		100% {
			width: 1000px;
			transform-origin: 100% 50%;
			transform: scaleX(1);
		}
	}

	.text{
		margin-left: 170px;
		/* line-height: 0px; */
		padding: 0;
	}

	p{
		font-size: 58px;
		color: #ffffff;
	}

	.image{
		position: absolute;
		opacity: 0;
		width: 140px;
		height: 140px;
		animation: form 1s 1 forwards;
	}

	@keyframes form {
		0% {
			opacity: 0;
		}
		90% {
			transform: translateX(100px);
			opacity: 1;
		}
		100%{
			opacity: 0;
		}
	}


	.image:nth-of-type(2){
		top: 5vh;
		animation-delay: 0s;
	}

	.image:nth-of-type(3){
		top: 60vh;
		animation-delay: .5s;
	}

	.image:nth-of-type(4){
		top: 80vh;
		left: 60vw;
		animation-delay: 1s;
	}

	.image:nth-of-type(5){
		top: 30vh;
		left: 60vw;
		animation-delay: 1.5s;	
	}

	.image:nth-of-type(6){
		top: 50vh;
		left: 80vw;
		animation-delay: 2s;	
	}

	.image:nth-of-type(7){
		top: 10vh;
		left: 70vw;
		animation-delay: 2.5s;
	}
</style>