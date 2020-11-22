<template>
  <div class="container">
    <div class="title-block">
      <div class="title">
        <h2>All my</h2>
        <div class="block">
          <p>w</p>
          <p>o</p>
          <p>r</p>
          <p>k</p>
          <p>s</p>
        </div>
      </div>
      <div class="image">
        <img src="@/assets/ellipse.svg">
      </div>
    </div>
    <div class="projects">
      <div class="block-project" v-for="data in dataHome" :key="data.title">
        <div class="main-project">
          <div class="text-left" :class="data.class_reveal_description">
              <p>{{data.description}}</p>
          </div>
          <div class="cover-project">
            <div class="image-project" :class="data.class_reveal">
              <img :src="require('@/assets/images/'+`${data.img}`)">
            </div>
            <div class="text-project" :class="data.class_reveal_title">
              <h3>{{data.title}}</h3>
              <a :href="data.link">
                <div class="see-more">
                  <p>See the project</p>
                  <div class="line"></div>
                </div>
              </a>
            </div>
          </div>
          <div class="text-right" :class="data.class_reveal_id">
            <p>{{data.id}}</p>
          </div>
        </div>
        <div class="next-project">
          <div :class="data.class_arrow"></div>
        </div>
      </div>
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
              entry.target.classList.remove('reveal-visible')
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
        observer.observe(document.querySelector('.reveal-description-1'))
        observer.observe(document.querySelector('.reveal-description-2'))
        observer.observe(document.querySelector('.reveal-description-3'))
        observer.observe(document.querySelector('.reveal-id-1'))
        observer.observe(document.querySelector('.reveal-id-2'))
        observer.observe(document.querySelector('.reveal-id-3'))
      }
    },
    mounted(){
      this.scrollTrigger()
    }
  }
</script>

<style>
  @import 'home.css';
</style>