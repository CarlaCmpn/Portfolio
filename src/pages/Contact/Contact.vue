<template>
	<div class="container">
		<div class="title-block">
			<div class="title">
				<h2>Contact</h2>
				<div class="block">
				<p>f</p>
				<p>o</p>
				<p>r</p>
				<p>c</p>
				<p>o</p>
				<p>l</p>
				<p>l</p>
				<p>a</p>
				<p>b</p>
				<p>s</p>
				</div>
			</div>
			<div class="image">
				<img src=../../assets/ellipse.svg>
			</div>
		</div>
		<div class="description">
			<div class="description-content">
				<p>I recently embarked on the adventure of freelance assignments. <br> I am available to discuss with you on the technical realization of your projects. <br> Please do not hesitate to contact me for any information. <br> You can contact me with the form or by email at : carla.compan@hetic.net</p>
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