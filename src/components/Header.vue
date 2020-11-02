<template>
	<div>
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
		<div class="navbar-open">
			<div class="list">
				<p>Works</p>
				<p>About</p>
				<p>Contact</p>
			</div>
			<div class="image">
				<img src="../assets/square.svg" alt="">
			</div>
			<div class="image">
				<img src="../assets/square.svg" alt="">
			</div>
			<div class="image">
				<img src="../assets/circle.svg" alt="">
			</div>
			<div class="image">
				<img src="../assets/circle.svg" alt="">
			</div>
			<div class="image">
				<img src="../assets/triangle.svg" alt="">
			</div>
			<div class="image">
				<img src="../assets/triangle.svg" alt="">
			</div>
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
		z-index: 2;
		/* background-color: tomato; */
	}

	.menu{
		margin-top: 67px;
		padding-right: 75px;
		right: 0;
		position: absolute;
		/* cursor: pointer; */
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

	.navbar-open{
		display: flex;
		justify-content: center;
		align-items: center;
		position: absolute;
		width: 100vw;
		height: 100vh;
		background-color: #252525;
		z-index: 1;
	}

	.list{
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		width: 300px;
		height: 500px;
		/* background-color: teal; */
	}

	.navbar-open .list p{
		font-size: 60px;
		color: #ffffff;
		text-decoration: underline;
		font-style: italic;
	}

	.image{
		position: absolute;
		opacity: 1;
		width: 140px;
		height: 140px;
	}

	.image:nth-of-type(2){
		top: 700px;
		left: 420px;
		animation-delay: 0s;
	}

	.image:nth-of-type(3){
		top: 300px;
		right: 188px;
		animation-delay: .5s;
	}

	.image:nth-of-type(4){
		top: 636px;
		right: 165px;
		animation-delay: 1s;
	}

	.image:nth-of-type(5){
		top: 300px;
		left: 139px;
		animation-delay: 1.5s;	
	}

	.image:nth-of-type(6){
		top: 100px;
		right: 600px;
		animation-delay: 2s;	
	}

	.image:nth-of-type(7){
		top: 500px;
		left: 300px;
		animation-delay: 2.5s;	
	}
</style>