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
        <button 
          class="btn-delete-exercise"
          @click="deleteExercise(exercise.id, workout.id)" 
          >DELETE          
        </button>
      </span>
    </div>
  </div>
</template>

<script>
import Slider from "../../node_modules/vue-toggle-component";
import WorkoutRouter from '../../server/routes/workout.js';
export default {  
  props: ['workout'],
  emits: ["status-workout"],
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

      this.$emit('status-workout', eventIndexObj);
    },
    deleteExercise(eId, wId) {
      let idObj = {
        eId,
        wId,
        isDeleteExercise: true,
      }
      WorkoutRouter.delete(idObj);
    }      
  },    
}
</script>

<style lang="scss" scoped>
.exercise-current,
.exercise-slider {
  display: flex;
}

.exercise-current {
  margin-left: 30px;
  align-items: center;
}

.exercise-text {
  flex-basis: 65%;
  text-align: start;

  &.completed {
    text-decoration: line-through 3px solid;
  }
}

.exercise-slider {
  flex-basis: 35%;
  justify-content: flex-end;
  align-items: center;
  margin-bottom: 10px;
}

.result-slider {
  margin-right: 10px;
}

.btn-delete-exercise {
  background-color: grey;
  color: white;
  width: 80px;
  height: 30px;
  border-radius: 12px;
  font-weight: 500;
  margin-right: 36px;
  cursor: pointer;
}
</style>
