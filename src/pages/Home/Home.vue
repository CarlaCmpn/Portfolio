<template>
  <div class="container">
    <div class="title-block">
      <div class="title">
        <h2>All my<br><span>works</span></h2>
      </div>
      <div class="image">
        <img src="@/assets/ellipse.svg">
      </div>
    </div>
    <div class="projects">
      <div class="block-project" v-for="data in dataHome" :key="data.title">
        <div class="main-project">
          <div class="text-left">
              <p>{{data.description}}</p>
          </div>
          <div class="cover-project">
            <div class="image-project">
              <img src="#">
            </div>
            <div class="text-project">
              <h3>{{data.title}}</h3>
              <router-link :to="data.link">
                <div class="see-more">
                  <p>See the project</p>
                  <div class="line"></div>
                </div>
              </router-link>
            </div>
          </div>
          <div class="text-right">
              <p></p>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
  import json from "../../../json/data.json"

  export default {
    name: 'Home',
    data() {
      return {
        dataHome: json.home,
      }
    },
  }
</script>

<style>
  @import 'home.css';
</style>