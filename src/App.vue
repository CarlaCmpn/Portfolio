<template>
  <div id="app">
    <Intro />
    <!-- <Loading /> -->
    <!-- <Header />
    <router-view/> -->
  </div>
</template>

<script>

import Header from './components/Header'
import Loading from './pages/Loading'
import Intro from './pages/Intro'

export default {
  name: 'App',
  components:{
    Header,
    Loading,
    Intro
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