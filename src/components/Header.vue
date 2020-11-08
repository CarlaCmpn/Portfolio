<template>
	<div>
		<!-- <div v-if="openTransition">
			<Transition />
		</div> -->
		<div class="navbar">
			<div class="name" v-on:click="open = false">
				<router-link to="/">
					<h1>Carla.</h1>
					<div class="underligne"></div>
				</router-link>
			</div>
			<div class="menu" v-on:click="open ? open = false : open = true" >
				<div class="line-menu"></div>
				<div class="line-menu"></div>
				<div class="line-menu"></div>
			</div>
		</div>
		<div class="navbar-open" v-if="open">
			<div class="list">
				<div class="list-link" v-on:click="open = false">
					<router-link to="/">
						<p>Works</p>
						<div class="underligne"></div>
					</router-link>
				</div>
				<div class="list-link" v-on:click="open = false">
					<router-link to="/about">
						<p>About</p>
						<div class="underligne"></div>
					</router-link>
				</div>
				<div class="list-link" v-on:click="open = false">
					<router-link to="/contact">
						<p>Contact</p>
						<div class="underligne"></div>
					</router-link>
				</div>
				<!-- <div class="image">
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
				</div> -->
			</div> 
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
	@import '../styles/header.min.css';
</style>