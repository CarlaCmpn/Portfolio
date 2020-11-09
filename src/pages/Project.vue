<template>
	<div class="container">
		<div class="title-info">
			<h2>My travel diary</h2>
			<img src=../assets/ellipse.svg>
		</div>
		<div class="presentation-info">
			<h3>Share my travel</h3>
		</div>
		<div class="triptych">
			<div class="triptych-image"></div>
			<div class="triptych-image"></div>
			<div class="triptych-image"></div>
		</div>
		<div class="description">
			<div class="description-intro">
				<h4>Presentation</h4>
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
				<div class="discover">
					<div class="ligne"></div>
					<a href="">Discover</a>
				</div>
			</div>
			<div class="description-category">
				<div class="description-category-block">
					<p>Date</p>
					<p>2020</p>
				</div>
				<div class="description-category-block">
					<p>Role</p>
					<p>Design 	& developement</p>
				</div>
				<div class="description-category-block">
					<p>Type</p>
					<p>Personnal project</p>
				</div>
			</div>
		</div>
		<div class="second-image">
			<h2>Photo</h2>
		</div>
		<div class="content">
			<div class="content-intro">
				<h4>Reflexion & <br> creation</h4>
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
			</div>
			<div class="content-text">
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
			</div>
		</div>
		<div class="quotes">
			<p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. “</p>
		</div>
		<div class="video">
			<div class="video-container"></div>
		</div>
		<div class="conclusion">
			<div class="conclusion-intro">
				<h4>Conclusion & <br> impressions</h4>
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
			</div>
			<div class="conclusion-text">
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
			</div>
		</div>
		<div class="next-project">
			<div class="next-project-button">
				<div class="ligne"></div>
				<a href="">Next</a>
			</div>
		</div>
		<footer>
			<p>Code & design by me</p>
		</footer>
	</div>
</template>

<script>
  export default {
    name: 'Home',
    data() {
      return {

      }
    }
  }
</script>

<style scoped>
  @import '../styles/project.min.css';
  @import '../styles/reset.css'
</style>