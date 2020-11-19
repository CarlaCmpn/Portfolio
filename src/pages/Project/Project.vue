<template>
	<div>
		<div class="container">
			<div class="title-info">
				<h2>{{data[this.id].title}}</h2>
				<!-- <img src=../assets/ellipse.svg> -->
			</div>
			<div class="presentation-info">
				<h3>{{data[this.id].description}}</h3>
			</div>
			<div class="triptych">
				<div class="triptych-image"></div>
				<div class="triptych-image"></div>
				<div class="triptych-image"></div>
			</div>
			<div class="description">
				<div class="description-intro">
					<h4>{{data[this.id].subtitle_presentation}}</h4>
					<p>{{data[this.id].text_presentation}}</p>
					<div class="discover">
						<div class="ligne"></div>
						<a href="">Discover</a>
					</div>
				</div>
				<div class="description-category">
					<div class="description-category-block">
						<p>Date</p>
						<p>{{data[this.id].date}}</p>
					</div>
					<div class="description-category-block">
						<p>Role</p>
						<p>{{data[this.id].role}}</p>
					</div>
					<div class="description-category-block">
						<p>Type</p>
						<p>{{data[this.id].type_of_project}}</p>
					</div>
				</div>
			</div>
			<div class="second-image">
				<h2>Photo</h2>
			</div>
			<div class="content">
				<div class="content-intro">
					<h4>{{data[this.id].title_roadmap_word_1}}<br>{{data[this.id].title_roadmap_word_2}}</h4>
					<p>{{data[this.id].text_roadmap_1}}</p>
				</div>
				<div class="content-text">
					<p>{{data[this.id].text_roadmap_2}}</p>
					<p>{{data[this.id].text_roadmap_3}}</p>
				</div>
			</div>
			<div class="quotes">
				<p>“{{data[this.id].quote}}“</p>
			</div>
			<div class="video">
				<div class="video-container"></div>
			</div>
			<div class="conclusion">
				<div class="conclusion-intro">
					<h4>{{data[this.id].title_conclusion_word_1}}<br>{{data[this.id].title_conclusion_word_2}}</h4>
					<p>{{data[this.id].text_conclusion_1}}</p>
				</div>
				<div class="conclusion-text">
					<p>{{data[this.id].text_conclusion_2}}</p>
					<p>{{data[this.id].text_conclusion_3}}</p>
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
	</div>
</template>

<script>
import json from '../../../json/project.json'
  export default {
    name: 'Home',
    data() {
      return {
		data: json,
		id: 1,
      }
	},
	mounted(){
		let currentUrl = window.location.pathname;
		console.log(currentUrl);

		// if(currentUrl === "/project/portfolio"){
		// 	this.id = 0
		// }else if(currentUrl === "/project/travel_diary"){
		// 	this.id = 1
		// }else if(currentUrl === "/project/space_game"){
		// 	this.id = 2
		// }
	}
}
</script>

<style scoped>
  @import 'project.css';
  @import '../../styles/reset.css'
</style>