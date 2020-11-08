<template>
	<div class="container">
		<div class="border-ligne">
			<div class="loading">
				<h3>LOADING</h3>
				<span>.</span>
				<span>.</span>
				<span>.</span>
			</div>
		</div>
	</div>
</template>

<script>


export default {
  name: 'Loading',
  data(){
	return{
		show: true
	}
  }
}
</script>

<style scoped>
.container{
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100vw;
	height: 100vh;
	background: #ffffff;
}

.border-ligne{
	display: flex;
	justify-content: center;
	align-items: center;
	width: 20%;
	height: 10%;
	border: 1px solid #000000;
}

.loading{
	display: flex;
	justify-content: space-around;
	align-items: center;
	width: 200px;
	height: 30px;
}

h3, span{
	margin: 0;
	padding: 0;
	font-size: 30px;
}

span:nth-of-type(1){
	animation: bounce 1s ease infinite;
	animation-delay: 0;
}

span:nth-of-type(2){
	animation: bounce 1s ease infinite;
	animation-delay: .2s;
}

span:nth-of-type(3){
	animation: bounce 1s ease infinite;
	animation-delay: .4s;
}

@keyframes bounce {
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-5px);
  }
  100% {
    transform: translateY(0px);
  }
}
</style>