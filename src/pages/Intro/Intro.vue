<template>
  <div class="container-intro">
		<div class="block-text">
			<div class="block-text__content">
				<div class="block-text__content--cache"></div>
				<p>I'm Carla Compan</p>
			</div>
			<div class="block-text__content">
				<div class="block-text__content--cache"></div>
				<p>a full stack developer</p>
			</div>
			<div class="block-text__content">
				<div class="block-text__content--cache"></div>
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
		<div class="button">
			<a href="/works">
				<p>Discover</p>
				<div class="button--line"></div>
			</a> 
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

<style>
	@import 'intro.min.css';
</style>