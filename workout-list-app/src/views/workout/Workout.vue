<template>
  <div class="workout-wrapper">    
    <div class="workout-container">
      <div class="workout-current"
        v-for="(workout, i) in workouts"
        :key="i"
      >
      <h3 class="workout-type">{{workout.workoutType}}:</h3>
        <div class="exercise-current"
          v-for="(exercise, i) in workout.exercises"
          :key="i"
        >
        {{i + 1}}.
          <span class="exercise-name">{{exercise.excersiceName}}:</span>
          <span>{{exercise.repeats}} repeats:</span> 
          <span> / </span>
          <span>sets: {{exercise.sets}}</span> 
          <span><Slider :isCompleted="exercise.isCompleted" /></span>            
        </div>      
        <div class="buttons-container">
          <button class="btn-update">UPDATE WORKOUT</button>  
          <button class="btn-remove">REMOVE WORKOUT</button>  
        </div>    
      </div>
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
.workout-wrapper,
.workout-container,
.workout-current,
.exercise-current {
  display: flex;
}

.workout-wrapper {
  justify-content: center;    
}

.workout-container {
  flex-direction: column;
  justify-content: center;
  width: 50%;
  margin-top: 3%;
}

.workout-current {
  width: 100%;
  flex-direction: column;
  min-height: 180px;
  background-color: #44A9F9;
  margin-bottom: 2%;
  border-radius: 12px;

  &.inactive {
    background-color: #515E6E;
  }
}     

.exercise-current {
  margin-left: 30px;
  
}

.buttons-container {
  display: flex;
  justify-content: space-between;
  margin-top: 15px;
  width: 90%;
  margin: auto;
}

.btn-update,
.btn-remove {
  width: 180px;
  height: 30px;
  border-radius: 12px;
  color: white;  
  font-weight: 700;
}

.btn-remove {
  background-color: orangered;
}

.btn-update {
  background-color: white;
  color: #44A9F9;
}

</style>