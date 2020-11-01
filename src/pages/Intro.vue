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
    <div v-if="transition4">
      <Transition4 />
    </div>
    <div v-if="home">
      <Home />
    </div>
  </div>
</template>

<script>

import Transition1 from '../components/Transition1'
import Transition2 from '../components/HelloTransition'
import Transition3 from '../components/Presentation'
import Transition4 from '../components/Transition2'
import Home from '../pages/Home'

export default {
  name: 'Intro',
  components: {
      Transition1,
      Transition2,
      Transition3,
      Transition4,
      Home
  },
  data(){
    return{
      transition1: true,
      transition2: false,
      transition3: false,
      transition4: false,
      home: false,
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

            if(transition.transition3 === true){
              setTimeout(function(){
                transition.transition3 = false
                transition.transition4 = true

                if(transition.transition4 === true){
                  setTimeout(function(){
                    transition.transition4 = false
                    transition.home = true
                  }, 3000);
                }
                
              }, 7000);
            }

          }, 4000);
        }

      }, 2000);
    }
  }
}
</script>