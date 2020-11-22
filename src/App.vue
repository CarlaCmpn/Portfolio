<template>
  <div id="app">
    <div v-if="intro">
       <Intro />
    </div>
    <div v-if="home">
      <Header />
      <router-view/>
    </div>
  </div>
</template>

<script>

import Header from './components/Header/Header'
import Loading from './pages/Loading'
import Intro from './pages/Intro'

export default {
  name: 'App',
  components:{
    Header,
    Loading,
    Intro,
  },
  data(){
    return{
      intro: false,
      home: true
    }
  },
  mounted(){
    let t = this

    if(t.intro === true){
      setTimeout(function(){
        t.intro = false
        t.home = true
      }, 9500);
    }
  }
}
</script>

<style>
body{
  margin: 0;
  padding: 0;
  top: 0;
  background: #252525;
  font-family: "Didot";
}

</style>