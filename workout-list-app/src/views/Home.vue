<template>
  <div class="home">
    <img alt="Workout background" src="../assets/exercises.jpg"/>    
    <Workout 
      :workouts="workouts"
    />
  </div>
</template>

<script>
import Workout from '../views/workout/Workout.vue';
import workouts from '../data/workouts.js';
export default {
  name: 'Home',
  components: {
    Workout
  },
  data() {
    return {
      workouts: workouts,
    }
  }
}
</script>

<style lang="scss">
.home {
  position: relative;
}

img {
  width: 100%;
  opacity: 0.2;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  position: absolute;
  z-index: -1;   
}

</style>
