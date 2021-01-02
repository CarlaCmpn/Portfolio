<template>
	<div>
		<div class="navbar">
			<div class="navbar-name" v-on:click="isActive = false">
				<router-link to="/">
					<h1 v-bind:class="[isActive ? 'navbar-name--open' : null]">Carla.</h1>
					<div class="navbar-name--underligne" v-bind:class="[isActive ? 'navbar-name--open' : null]"></div>
				</router-link>
			</div>
			<div class="navbar-menu" v-bind:class="[isActive ? 'navbar-menu--open' : null]" @click="hamburger()">
				<div class="navbar-menu--line"></div>
				<div class="navbar-menu--line"></div>
				<div class="navbar-menu--line"></div>
			</div>
		</div>
		<div class="navbar-open" v-bind:class="[isActive ? 'navbar-open__transition--open' : 'navbar-open__transition--close']">
			<div class="navbar-open__list">
				<div class="navbar-open__list__link" v-on:click="isActive = false">
					<div v-if="selectedWork" class="navbar-open__list__link__circle"></div>
					<router-link to="/works">
						<p>Works</p>
						<div class="navbar-open__list__link__circle--underline"></div>
					</router-link>
					<div v-if="selectedWork" class="navbar-open__list__link__circle"></div>
				</div>
				<div class="navbar-open__list__link" v-on:click="isActive = false">
					<div v-if="selectedAbout" class="navbar-open__list__link__circle"></div>
					<router-link to="/about">
						<p>About</p>
						<div class="navbar-open__list__link__circle--underline"></div>
					</router-link>
					<div v-if="selectedAbout" class="navbar-open__list__link__circle"></div>
				</div>
				<div class="navbar-open__list__link" v-on:click="isActive = false">
					<div v-if="selectedContact" class="navbar-open__list__link__circle"></div>
					<router-link to="/contact">
						<p>Contact</p>
						<div class="navbar-open__list__link__circle--underline"></div>
					</router-link>
					<div v-if="selectedContact" class="navbar-open__list__link__circle"></div>
				</div>
			</div> 
		</div>
	</div>
</template>

<script>
export default {
	name: 'Header',
	components:{
		
	},
	data(){
		return {
			isActive: false,
			selectedHome: false,
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
			this.selectedHome = true
		}else{
			this.selectedHome = false
		}

		if(currentUrl === "/works"){
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

<style>
	@import '../../styles/reset.css';
</style>

<style>
	@import 'header.min.css';
</style>