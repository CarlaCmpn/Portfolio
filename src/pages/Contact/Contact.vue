<template>
	<div class="container">
		<div class="block-left">
			<div class="block-left__title">
				<h2>Contact</h2>
				<div class="block-left__subtitle">
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
			<div class="block-left__icon">
				<img src=../../assets/ellipse.svg>
			</div>
			<footer class="block-left__footer--big">
				<p>Code & design by me ✨</p>
			</footer>
		</div>
		<div class="block-description">
			<div class="block-description__content">
				<p>I recently embarked on the adventure of freelance assignments. I am available to discuss with you on the technical realization of your projects. Please do not hesitate to contact me for any information. You can contact me with the form or by email at : carla.compan@hetic.net</p>
			</div>
		</div>
		<div class="block-form">
			<form name="contact" action="" method="post" netlify>
				<input type="hidden" name="form-name" value="contact" />
				<input type="text" name="name" placeholder="Name"/>
				<input type="email" name="email" placeholder="Email"/>
				<textarea name="message" placeholder="Message"/> 
				<button type="submit">Send</button>
			</form>
		</div>
		<footer class="block-footer--small">
			<p>Code & design by me ✨</p>
		</footer>
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
  @import 'contact.min.css';
   @import '../../styles/reset.css';
</style>