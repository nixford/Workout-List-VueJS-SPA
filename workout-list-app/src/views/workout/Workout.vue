<template>
  <div class="workout-wrapper">    
    <div class="workout-container">
      <ol
        v-for="(workout, i) in workouts"
        :key="i"
      >
      <h3 class="workout-type">{{workout.workoutType}}:</h3>
        <li
          v-for="(exercise, i) in workout.exercises"
          :key="i"
        >
          <span class="exercise-name">{{exercise.excersiceName}}:</span>
          <span>{{exercise.repeats}} repeats:</span> 
          <span> / </span>
          <span>sets: {{exercise.sets}}</span> 
          <span><Slider :isCompleted="exercise.isCompleted" /></span>
          <span>{{!exercise.isCompleted ? 'Not completed' : 'Completed'}}</span>       
        </li>        
      </ol>
    </div>
  </div>
</template>

<script>
import Slider from '../../components/Slider.vue';
export default {
  props: ['workouts'],
  components: {
    Slider,
  }, 
}
</script>

<style lang="scss" scoped>
.workout-wrapper {
  display: flex;
  justify-content: center;

  .workout-container {
    width: max-content;
    display: flex;
    flex-direction: column;
    justify-content: center;

    ol {
      li {
        text-align: left;
      }
    }
  }  
}



</style>