<template>
  <div>
    <div v-if="transition1">
      <Transition1 />
    </div>
    <div v-if="transition2">
      <Transition2 />
    </div>
    <div v-if="transition3">
      <Transition3 />
    </div>
  </div>
</template>

<script>

import Transition1 from '../components/Transitions/HelloTransition'
import Transition2 from '../components/Transitions/Presentation'
import Transition3 from '../components/Transitions/Curtain'

export default {
  name: 'Intro',
  components: {
      Transition1,
      Transition2,
      Transition3,
  },
  data(){
    return{
      transition1: true,
      transition2: false,
      transition3: false,
    }
  },
  mounted(){
   let transition = this

    if(transition.transition1 === true){
      setTimeout(function(){
        transition.transition1 = false
        transition.transition2 = true

        if(transition.transition2 === true){
          setTimeout(function(){
            transition.transition2 = false
            transition.transition3 = true

          }, 4000);
        }

      }, 4000);
    }
  }
}
</script>