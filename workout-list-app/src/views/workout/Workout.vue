<template>
  <div class="workout-wrapper">
    <div class="workout-container">
      <div class="workout-current" 
        :class="{
          'inactive': workout.inactive === true,
        }"
        v-for="(workout, i) in workouts" 
        :key="i"
      >
        <Exercise 
          :workout="workout" 
          @status-workout="updateStatus($event, i)"
        />
        <div class="buttons-container">
          <button @click="remove(workout.id)" class="btn-remove">REMOVE WORKOUT</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Exercise from "../../components/Exercise.vue";
import workouts from '../../data/workouts.js';
import WorkoutRouter from '../../../server/routes/workout.js';
export default {
  components: {
    Exercise,
  },
  computed: {
  },
  watch: {
  },
  data() {
    return {
      workouts: {},
    };
  },
  methods: {
    getWorkout() {
      this.workouts = WorkoutRouter.get();      
    },
    updateStatus(event, i) {     
      this.workouts[i].exercises[event.index].isCompleted = event.event;
      this.workouts[i].inactive = false;

      let isThereExercises = this.workouts[i].exercises.some(e => e.isCompleted === false);      

      if (!isThereExercises) {
        this.workouts[i].inactive = true;
      }   
    },
    save() {
     workouts.forEach(w => {
       WorkoutRouter.post(w);
     });           
    },
    remove(wId) {
      WorkoutRouter.delete(wId);
    },
  },
  mounted() { 
    if (window.localStorage.getItem('workouts') === null) {    
      this.save();   
    }
    this.getWorkout();
  },
};
</script>

<style lang="scss">
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
  justify-content: center;
  margin-top: 15px;
  width: 90%;
  margin: auto;
  margin-bottom: 20px;
  margin-top: 10px;
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
