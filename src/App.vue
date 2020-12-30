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