<template>
	<div class="container">
		<div class="title-block">
			<div class="title">
				<h2>Contact</h2>
				<div class="block">
				<p>m</p>
				<p>e</p>
				</div>
			</div>
			<div class="image">
				<img src=../../assets/ellipse.svg>
			</div>
		</div>
		<div class="description">
			<div class="description-content">
				<p>Lorem ipsum dolor sit amet, consectetur <br> adipiscing elit, sed do eiusmod tempor <br> incididunt ut labore et dolore magna aliqua. <br>Ut enim ad minim veniam, quis nostrud <br>exercitation ullamco laboris nisi ut <br>aliquip ex ea commodo consequat.</p> 
				<!-- <p>My email : carla.compan@hetic.net</p> -->
			</div>
		</div>
		<div class="form">
			<form method="POST" name="contact" data-netlify="true">
				<input type="text" name="name" placeholder="Name"/>
				<input type="email" name="email" placeholder="Email"/>
				<textarea name="message" placeholder="Message"/> 
				<button type="submit">Send</button>
			</form>
		</div>
	</div>
</template>

<script>
  export default {
    name: 'Home',
    data() {
      return {

      }
    },
  }
</script>

<style scoped>
  @import 'contact.css';
</style>