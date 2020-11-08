<template>
	<div>
		<div v-if="openTransition">
			<Transition />
		</div>
		<div class="navbar">
			<div class="name">
				<h1>Carla.</h1>
			</div>
			<div v-on:click="open = true" class="menu">
				<div class="line-menu"></div>
				<div class="line-menu"></div>
				<div class="line-menu"></div>
			</div>
		</div>
		<div v-if="open" class="navbar-open">
			<div v-on:click="open = false" class="cross">
				<img src="../assets/cross.svg" alt="">
			</div>
			<kinesis-container class="list" :animationDuration="duration" :easing="easing">
				<kinesis-element tag="p" :type="type" :parallaxStrength="10">
					<p>Works</p>
					<p>About</p>
					<p>Contact</p>
				</kinesis-element>
				<div class="image">
					<kinesis-element :type="type" :parallaxStrength="10">
						<img src="../assets/square.svg" alt="">
					</kinesis-element>
				</div>
				<div class="image">
					<kinesis-element :type="type" :parallaxStrength="10">
						<img src="../assets/square.svg" alt="">
					</kinesis-element>
				</div>
				<div class="image">
					<kinesis-element :type="type" :parallaxStrength="10">
						<img src="../assets/circle.svg" alt="">
					</kinesis-element>
				</div>
				<div class="image">
					<kinesis-element :type="type" :parallaxStrength="10">
						<img src="../assets/circle.svg" alt="">
					</kinesis-element>
				</div>
				<div class="image">
					<kinesis-element :type="type" :parallaxStrength="10">
						<img src="../assets/triangle.svg" alt="">
					</kinesis-element>
				</div>
				<div class="image">
					<kinesis-element :type="type" :parallaxStrength="10">
						<img src="../assets/triangle.svg" alt="">
					</kinesis-element>
				</div>
			</kinesis-container>
		</div>
	</div>
</template>

<script>
import Vue from 'vue'
import VueKinesis from 'vue-kinesis'
import Transition from './Transition3'
Vue.use(VueKinesis)

export default {
	name: 'Header',
	components:{
		Transition
	},
	data() {
		return {
			openTransition: false,
			open: false,
		}
	},
	mounted(){
		let transition = this

		// if(transition.openTransition = true){
		// 	setTimeout(function(){
		// 		alert("tttt")
		// 		// transition.openTransition = false
		// 		// transition.open = true
        //     }, 1000);
		// }
	}
}
</script>

<style scoped>

	.name{
		margin-top: 67px;
		padding-left: 75px;
		left: 0;
		position: absolute;
		z-index: 2;
		/* background-color: tomato; */
	}

	.menu{
		margin-top: 67px;
		padding-right: 75px;
		right: 0;
		position: absolute;
		cursor: pointer;
	}

	h1{
		color: white;
		font-size: 30px;
		font-style: italic;
		text-decoration: underline;
	}

	.line-menu{
		height: 1px;
		background-color: #ffffff;
		margin: 10px 0;
	}

	.menu .line-menu:nth-child(1){
		width: 33px;
	}

	.menu .line-menu:nth-child(2){
		width: 17px;
	}

	.menu .line-menu:nth-child(3){
		width: 33px;
	}

	.navbar-open{
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		position: absolute;
		width: 100vw;
		height: 100vh;
		background-color: #252525;
		z-index: 1;
	}

	.list{
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		width: 80%;
		height: 80%;
		text-align: center;
		/* background-color: teal; */
	}

	.navbar-open .list p{
		font-size: 60px;
		color: #ffffff;
		text-decoration: underline;
		font-style: italic;
		cursor: pointer;
	}

	.image{
		position: absolute;
		opacity: 1;
		width: 140px;
		height: 140px;
	}

	.image:nth-of-type(1){
		top: 300px;
		left: 0px;
		animation-delay: 0s;
	}

	.image:nth-of-type(2){
		top: 60px;
		left: 420px;
		animation-delay: 0s;
	}

	.image:nth-of-type(3){
		top: 300px;
		right: 100px;
		animation-delay: .5s;
	}

	.image:nth-of-type(4){
		top: 636px;
		right: 165px;
		animation-delay: 1s;
	}

	.image:nth-of-type(5){
		top: 600px;
		left: 139px;
		animation-delay: 1.5s;	
	}

	.image:nth-of-type(6){
		top: 100px;
		right: 300px;
		animation-delay: 2s;	
	}

	.cross{
		display: flex;
		align-items: center;
		justify-content: flex-end;
		width: 100%;
		height: 50px;
		margin-right: 75px;
		cursor: pointer;
	}

	.cross img{
		width: 30px;
		height: auto;
	}
</style>