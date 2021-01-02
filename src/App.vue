<template>
  <div id="app">
    <Header />
    <router-view></router-view>
  </div>
</template>

<script>

import Header from './components/Header/Header'
import Loading from './pages/Loading'
import Intro from './pages/Intro/Intro'

export default {
  name: 'App',
  components:{
    Header,
    Loading,
    Intro,
  },
  data(){
    return{

    }
  },
}
</script>

<style>
body{
  margin: 0;
  padding: 0;
  top: 0;
}
</style>

<style>
  @import 'styles/reset.css';
  @import 'styles/variables/colors/_colors.min.css';
  @import 'styles/variables/fonts/_font.css';
</style>