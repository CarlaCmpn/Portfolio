<template>
  <div class="container-home">
    <div class="block-left">
      <div class="block-left__title">
        <h2>All my</h2>
        <div class="block-left__subtitle">
          <p>w</p>
          <p>o</p>
          <p>r</p>
          <p>k</p>
          <p>s</p>
        </div>
      </div>
      <div class="block-left__icon">
        <img src="@/assets/ellipse.svg">
      </div>
      <footer class="block-left__footer--big">
				<p>Code & design by me ✨</p>
			</footer>
    </div>
    <div class="project">
      <div class="block-project" v-for="data in dataHome" :key="data.title">
        <div class="block-project-main">
          <div class="block-project-main__header">
            <p>{{data.id}}</p>
            <p>{{data.description}}</p>
          </div>  
          <div class="block-project-main__cover">
            <div class="block-project-main__cover__image" :class="data.class_reveal">
              <img :src="require('@/assets/images/'+`${data.img}`)">
            </div>
            <div class="block-project-main__cover__content" :class="data.class_reveal_title">
              <p>{{data.title}}</p>
              <a :href="data.link">
                <div class="block-project-main__cover__link">
                  <p>See the project</p>
                  <div class="block-project-main__cover__line"></div>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div class="block-project__next">
          <div :class="data.class_arrow"></div>
        </div>
      </div>
      <footer class="block-project__footer--small">
				<p>Code & design by me ✨</p>
			</footer>
    </div>
  </div>
</template>

<script>
 
</script>

<script>
  import json from "../../../json/data.json"

  export default {
    name: 'Home',
    data() {
      return {
        dataHome: json.home,
      }
    },
    methods: {
      scrollTrigger(){
        const ratio = .1

        const options = {
          root: null,
          rootMargin: '0px',
          threshold: .1
        }

        const handleIntersect =  function(entries, observer){
          entries.forEach(function(entry) {
            if(entry.intersectionRatio > ratio){
              entry.target.classList.add('reveal-visible')
              console.log('visible')
            }else{
              console.log('invisible')
            }
          })
        }

        const observer = new IntersectionObserver(handleIntersect, options)
        observer.observe(document.querySelector('.reveal-1'))
        observer.observe(document.querySelector('.reveal-2'))
        observer.observe(document.querySelector('.reveal-3'))
        observer.observe(document.querySelector('.reveal-title-1'))
        observer.observe(document.querySelector('.reveal-title-2'))
        observer.observe(document.querySelector('.reveal-title-3'))
      }
    },
    mounted(){
      this.scrollTrigger()
    }
  }
</script>

<style>
  @import '../../styles/reset.css';
</style>

<style>
  @import 'home.min.css';
</style>