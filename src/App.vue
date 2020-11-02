<template>
  <div id="app">
    <!-- <Transition /> -->
    <!-- <Loading /> -->
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

import Header from './components/Header'
import Loading from './pages/Loading'
import Intro from './pages/Intro'
import Transition from './components/Transition3'

export default {
  name: 'App',
  components:{
    Header,
    Loading,
    Intro,
    Transition
  },
  data(){
    return{
      intro: true,
      home: false,
    }
  },
  mounted(){
    let t = this

    if(t.intro === true){
      setTimeout(function(){
        t.intro = false
        t.home = true
      }, 16000);
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
  overflow-y: none;
}

</style>