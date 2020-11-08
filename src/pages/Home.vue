<template>
  <div class="container">
    <div class="title-block">
      <div class="title">
        <h2>All my<br><span>works</span></h2>
      </div>
      <div class="image">
        <img src=../assets/ellipse.svg>
      </div>
      <!-- <div class="number">
        <p>01</p>
        <div class="line-h"></div>
        <p>06</p>
      </div> -->
    </div>
    <div class="projects">
      <div class="block-project">
        <div class="main-project">
          <div class="text-left">
              <p>Personnal project</p>
          </div>
          <div class="cover-project">
            <div class="image-project">
              <!-- <img src="../assets/couv_travel_diary.jpeg" alt=""> -->
            </div>
            <div class="text-project">
              <h3>My portfolio v2</h3>
              <div class="see-more">
                <p>See the project</p>
                <div class="line"></div>
              </div>
            </div>
          </div>
          <div class="text-right">
              <p>01</p>
          </div>
        </div>
      </div>

      <div class="block-project">
        <div class="main-project">
          <div class="text-left">
              <p>Personnal project</p>
          </div>
          <div class="cover-project">
            <div class="image-project">
              <img src="../assets/couv_travel_diary.jpeg" alt="">
            </div>
            <div class="text-project">
              <h3>My travel diary</h3>
              <div class="see-more">
                <p>See the project</p>
                <div class="line"></div>
              </div>
            </div>
          </div>
          <div class="text-right">
              <p>02</p>
          </div>
        </div>
      </div>

      <div class="block-project">
        <div class="main-project">
          <div class="text-left">
              <p>School project</p>
          </div>
          <div class="cover-project">
            <div class="image-project">
              <!-- <img src="../assets/couv_travel_diary.jpeg" alt=""> -->
            </div>
            <div class="text-project">
              <h3>Space game</h3>
              <div class="see-more">
                <p>See the project</p>
                <div class="line"></div>
              </div>
            </div>
          </div>
          <div class="text-right">
              <p>03</p>
          </div>
        </div>
      </div>

    </div>
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
  @import '../styles/home.min.css';
</style>