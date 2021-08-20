<template>
  <div class="workout-wrapper">
    <div class="workout-container">
      <div class="workout-current" v-for="(workout, i) in workouts" :key="i">
        <h3 class="workout-type">{{ workout.workoutType }}:</h3>
        <div
          class="exercise-current"
          :class="{
            'inactive': '...'
          }"
          v-for="(exercise, i) in workout.exercises"
          :key="i"
        >
          {{ i + 1 }}.
          <div class="exercise-text"
            :class="{
              'completed': exercise.isCompleted,
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
                @toggle="exercise.isCompleted = $event"
              />
            </span>
          </div>
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
import Slider from "../../../node_modules/vue-toggle-component";
export default {
  props: ["workouts"],
  components: {
    Slider,
  },
  computed: {

  },
  data() {
    return {
      inactive: false,
    };
  },
  methods: {
  }
};
</script>

<style lang="scss" scoped>
.workout-wrapper,
.workout-container,
.workout-current,
.exercise-current,
.exercise-slider {
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
  height: fit-content;
  background-color: #44a9f9;
  margin-bottom: 2%;
  border-radius: 12px;

  &.inactive {
    background-color: #515e6e;
  }
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

.buttons-container {
  display: flex;
  justify-content: space-between;
  margin-top: 15px;
  width: 90%;
  margin: auto;
  margin-bottom: 20px;
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
  color: #44a9f9;
}
</style>
