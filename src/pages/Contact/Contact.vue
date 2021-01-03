<template>
	<div class="container-contact">
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
			<form name="ask-question" method="post" data-netlify="true" data-netlify-honeypot="bot-field">
				<input type="hidden" name="form-name" value="ask-question" />
				<input type="text" name="name" placeholder="Name"/>
				<input type="email" name="email" placeholder="Email"/>
				<textarea name="message" placeholder="Message"/> 
				<button>Send</button>
			</form>
		</div>
		<footer class="block-footer--small">
			<p>Code & design by me ✨</p>
		</footer>
	</div>
</template>

<script>
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
export default {
  name: "Contact",
  data () {
    return {
      form: {
        askPerson: ''
      }
    }
  },
  methods: {
    // handleSubmit() {
	// 	fetch("/contact", {
    //     	method: "POST",
    //   	})
    //     .then(() => {
    //       this.$router.push("thanks");
    //     })
    //     .catch(() => {
    //       this.$router.push("404");
    //     });
    // }
  }
}
</script>

<style>
   @import '../../styles/reset.css';
</style>

<style>
	@import 'contact.min.css';
</style>