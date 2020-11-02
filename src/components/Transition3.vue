<template>
	<div class="container">
		<div class="ligne"></div>
		<div class="ligne"></div>
		<div class="ligne"></div>
		<div class="ligne"></div>
		<div class="ligne"></div>
		<div class="ligne"></div>
	</div>
</template>

<script>
  export default {
    name: 'Transition3',
    data() {
      return {

      }
    }
  }
</script>

<style scoped>
	.container{
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: center;
		width: 100vw;
		height: 100vh;
		background-color: #ffffff;
	}

	.ligne{
		width: 100%;
		height: 0px;
		background: #252525;
		animation: ligne 2s 1 forwards;
	}

	@keyframes ligne {
		from {
			height: 0px;
		}

		to {
			height: 190px;
		}
	}
		
</style>