<template>
  <div id="app">
    <Loading />
    <!-- <Header />
    <router-view/> -->
  </div>
</template>

<script>
import Header from './components/Header'
import Loading from './components/Loading'
export default {
  name: 'App',
  components:{
    Header,
    Loading
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