<template>
	<div class="navbar">
		<div class="name">
			<h1>Carla.</h1>
		</div>
		<div class="menu">
			<div class="line-menu"></div>
			<div class="line-menu"></div>
			<div class="line-menu"></div>
		</div>
	</div>
</template>

<script>
  export default {
    name: 'Header',
    data() {
      return {

      }
    }
  }
</script>

<style scoped>

.name{
	margin-top: 67px;
	padding-left: 75px;
	left: 0;
	position: absolute;
	/* background-color: tomato; */
}

.menu{
	margin-top: 67px;
	padding-right: 75px;
	right: 0;
	position: absolute;
	cursor: pointer;
}

h1{
	color: white;
	font-size: 30px;
	font-style: italic;
	text-decoration: underline;
}

.line-menu{
	height: 1px;
	background-color: #ffffff;
	margin: 10px 0;
}

.menu .line-menu:nth-child(1){
	width: 33px;
}

.menu .line-menu:nth-child(2){
	width: 17px;
}

.menu .line-menu:nth-child(3){
	width: 33px;
}

</style>