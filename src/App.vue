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
  background: #252525;
  font-family: "Didot";
}

/* .fade-enter, .fade-leave-to{
  opacity: 0;
  transform: translateX(2em);
}

.fade-enter-active, .fade-leave-active{
  transition: all .3s ease;
} */
</style>