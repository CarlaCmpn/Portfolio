<template>
	<div>
		<div class="navbar">
			<div class="name" v-on:click="isActive = false">
				<router-link to="/">
					<h1 v-bind:class="[isActive ? 'open-title' : null]">Carla.</h1>
					<div class="underligne" v-bind:class="[isActive ? 'open-title' : null]"></div>
				</router-link>
			</div>
			<div class="menu" v-bind:class="[isActive ? 'menu_open' : null]" @click="hamburger()">
				<div class="line-menu"></div>
				<div class="line-menu"></div>
				<div class="line-menu"></div>
			</div>
		</div>
		<div class="navbar-open" v-bind:class="[isActive ? 'transition-open' : 'transition-close']">
			<div class="list">
				<div class="list-link" v-on:click="isActive = false">
					<router-link to="/">
						<p>Works</p>
						<div class="underligne"></div>
					</router-link>
				</div>
				<div class="list-link" v-on:click="isActive = false">
					<router-link to="/about">
						<p>About</p>
						<div class="underligne"></div>
					</router-link>
				</div>
				<div class="list-link" v-on:click="isActive = false">
					<router-link to="/contact">
						<p>Contact</p>
						<div class="underligne"></div>
					</router-link>
				</div>
			</div> 
		</div>
	</div>
</template>

<script>
import Vue from 'vue'

export default {
	name: 'Header',
	components:{
		
	},
	data() {
		return {
			isActive: false,
		}
	},
	methods: {
		hamburger: function() {
			this.isActive = !this.isActive
		}
  	}
}
</script>

<style scoped>
	@import '../styles/header.min.css';
	@import '../styles/reset.css';
</style>