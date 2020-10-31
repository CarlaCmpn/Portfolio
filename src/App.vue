<template>
  <div id="app">
    <Header />
    <router-view/>
  </div>
</template>

<script>
import Header from './components/Header'
export default {
  name: 'App',
  components:{
    Header
  }
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
  top: 0;
  background: #252525;
  font-family: "Didot";
  overflow-y: none;
}

</style>