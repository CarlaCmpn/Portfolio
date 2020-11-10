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
					<div v-if="selectedWork" class="circle"></div>
					<router-link to="/">
						<p>Works</p>
						<div class="underligne"></div>
					</router-link>
					<div v-if="selectedWork" class="circle"></div>
				</div>
				<div class="list-link" v-on:click="isActive = false">
					<div v-if="selectedAbout" class="circle"></div>
					<router-link to="/about">
						<p>About</p>
						<div class="underligne"></div>
					</router-link>
					<div v-if="selectedAbout" class="circle"></div>
				</div>
				<div class="list-link" v-on:click="isActive = false">
					<div v-if="selectedContact" class="circle"></div>
					<router-link to="/contact">
						<p>Contact</p>
						<div class="underligne"></div>
					</router-link>
					<div v-if="selectedContact" class="circle"></div>
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
	data(){
		return {
			isActive: false,
			selectedWork: false,
			selectedAbout: false,
			selectedContact: false,
		}
	},
	methods:{
		hamburger: function(){
			this.isActive = !this.isActive
		},
	},
	updated(){
		let currentUrl = window.location.pathname;
		console.log(currentUrl);

		if(currentUrl === "/"){
			this.selectedWork = true
		}else{
			this.selectedWork = false
		}

		if(currentUrl === "/about"){
			this.selectedAbout = true
		}else{
			this.selectedAbout = false
		}

		if(currentUrl === "/contact"){
			this.selectedContact = true
		}else{
			this.selectedContact = false
		}
	}
}
</script>

<style scoped>
	@import '../styles/header.min.css';
	@import '../styles/reset.css';
</style>