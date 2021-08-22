<template>
  <h3 class="workout-type">{{ workoutTypeLimitedLenght }}:</h3>
  <div
    class="exercise-current"    
    v-for="(exercise, index) in workout.exercises"
    :key="index"
  >
    {{ index + 1 }}.
    <div
      class="exercise-text"
      :class="{
        completed: exercise.isCompleted,
      }"
    >
      <span class="exercise-name">{{ exercise.excersiceName }}:</span>
      <span>{{ exercise.repeats }} repeats:</span>
      <span> / </span>
      <span>sets: {{ exercise.sets }}</span>
    </div>
    <div class="exercise-slider">
      <span class="result-slider">{{
        exercise.isCompleted ? "Completed" : "Not completed"
      }}</span>
      <span>
        <Slider
          :name="''"
          :title="''"
          :toggled="exercise.isCompleted"
          :darkTheme="true"
          @toggle="setStatus($event, index)"
        />
      </span>
      <span>
        <button class="btn-delete-exercise"></button>
      </span>
    </div>
  </div>
</template>

<script>
import Slider from "../../../node_modules/vue-toggle-component";
export default {  
  props: ['workout'],
  components: {
    Slider,
  },
  computed: {
    workoutTypeLimitedLenght() {
      return this.workout.workoutType.substring(0, 15);
    },    
  },
  data(){
    return {
    }
  },
  methods: {
    setStatus(event, index) {
      let eventIndexObj = {
        event,
        index
      }

      this.$emit('statusWorkout', eventIndexObj);
    },      
  },    
}
</script>

<style lang="scss" scoped>

</style>
