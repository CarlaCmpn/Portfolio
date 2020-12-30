<template>
  <div class="container" v-bind:class="[intro ? '' : 'transition-close']">
		<div class="text">
			<div class="block">
				<div class="cache"></div>
				<p>I'm Carla</p>
			</div>
			<div class="block">
				<div class="cache"></div>
				<p>a full stack developer</p>
			</div>
			<div class="block">
				<div class="cache"></div>
				<p>and french student at Hetic</p>
			</div>
		</div>
		<div class="image">
			<img src="../../assets/square.svg" alt="">
		</div>
		<div class="image">
			<img src="../../assets/square.svg" alt="">
		</div>
		<div class="image">
			<img src="../../assets/circle.svg" alt="">
		</div>
		<div class="image">
			<img src="../../assets/circle.svg" alt="">
		</div>
		<div class="image">
			<img src="../../assets/triangle.svg" alt="">
		</div>
		<div class="image">
			<img src="../../assets/triangle.svg" alt="">
		</div>
		<div class="close-button">
			<router-link to="/works">
				<img src="../../assets/cross-black.svg" alt="">
			</router-link>
		</div>
	</div>
</template>

<script>
export default {
  name: 'Intro',
  components: {

  },
  data(){
    return{
		intro: true
    }
  },
}
</script>

<style scoped>
	@import 'intro.min.css'
</style>