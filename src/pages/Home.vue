<template>
  <div class="container">
    <div class="title-block">
      <div class="title">
        <h2>All my<br><span>works</span></h2>
      </div>
      <div class="number">
        <p>01</p>
        <div class="line-h"></div>
        <p>06</p>
      </div>
    </div>
    <div class="title-main-project">
      <div class="main-project">
        <div class="text">
          <div class="line-v"></div>
          <h3>Project name</h3>
          <p>Role</p>
        </div>
      </div>
    </div>
    <div class="title-projects">
      <div class="main-project">
        <div class="text">
          <div class="line-v"></div>
           <h3>Project name</h3>
          <p>Role</p>
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
  .container{
    display: flex;
    color: white;
    margin-left: 75px;
    height: 100vh;
    z-index: 60;
  }

  .title-block{
    display: flex;
    flex-direction: column;
    height: 100%;
    padding-right: 148px;
    border-right: 1px #ffffff solid;
    margin-right: 10px;
  }

  .title{
    display: flex;
    padding-top: 400px;
    /* align-items: center; */
    height: 80%;
  }

  h2{
    font-size: 60px;
  }

  span{
    font-style: italic;
  }

  .number{
    display: flex;
    align-items: center;
    justify-content: center;
    height: 20%;
  }

  .number p{
    font-size: 25px;
    color: #ffffff;
    opacity: 0.5;
  }

  .line-h{
    width: 100px;
    background-color: #ffffff;
    height: 1px;
    margin: 0 18px;
  }

  .title-main-project{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 400px;
    margin-left: 10px;
    border-left: 1px #ffffff solid;
    border-right: 1px #ffffff solid;
  }

  .title-projects{
    display: flex;
    justify-content: center;
      align-items: center;
    width: 400px;
    border-right: 1px #ffffff solid;
  }

  .main-project{
    width: 328px;
    height: 568px;
    border: 1px #ffffff solid;
  }

  .text{
    margin-top: 336px;
    margin-left: 20px;
  }

  .text .line-v{
    width: 49px;
    height: 1px;
    background: #ffffff;
  }

  .text h3{
    margin-top: 38px;
    font-size: 30px;
  }

  .text p{
    margin-top: 23px;
    font-size: 20px;
  }

</style>