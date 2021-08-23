<template>
    <form id="add">
        <div class="input-row">
          <label>Workout type:</label>
          <input type="text" v-model="workoutType">
        </div>  
        <div class="add-exercise-btn">
          <h3>Add exercises:</h3>     
        </div>        
        <div class="input-row-exercises"> 
          <div>
            <label>Exercise name:</label>      
            <input type="text" v-model="excersiceName">
          </div>   
          <div>
            <label>Repets count:</label>
            <input type="number" v-model="repeats">
          </div>
          <div> 
            <label>Sets count:</label>
            <input type="number" v-model="sets">
          </div>        
        </div>
        <div class="exercises-div" v-for="(e, i) in exercises" :key="e.id"> 
          <p>
            <span class="exercises-count">{{i + 1}}. </span>
            <span>Exercise name: {{e.excersiceName}} </span>
            <span> - </span>
            <span>Repets count: {{e.repeats}} </span>
            <span> / </span>
            <span>Sets count: {{e.sets}} </span>
          </p>
        </div>
        <button submit.prevent @click="addExercise" class="btn-add-exercise">ADD EXERCISE</button> 
    </form>
    <button @click="save" class="btn-save">SAVE WORKOUT</button> 
</template>

<script>
import uniqueId from 'lodash/uniqueId';
export default {
  data(){
    return {
      workoutType: '',
      exercises: [],
      excersiceName: '',
      repeats: null,
      sets: null,
    }
  },
  methods: {
    addExercise(e) {
      e.preventDefault();
      let exercise = {
        id: uniqueId(),
        excersiceName: this.excersiceName,
        repeats: this.repeats,
        sets: this.sets,
        isCompleted: false,
      }
      this.exercises.push(exercise);
      exercise = {};
      this.excersiceName = '';
      this.repeats = null;
      this.sets = null;
    },
    save() {
      let workout = {
        id: uniqueId(),
        workoutType: this.workoutType,
        exercises: this.exercises,
      }
      this.$store.commit('addToList', workout);
      this.$router.push('/');
    }
  },  
}
</script>

<style lang="scss" scoped>
#add {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 3%;
}

.input-row {
  display: flex;
  flex-direction: column;
  width: 60%;
  margin-top: 3%;
}

input {
  height: 25px;
}

.add-exercise-btn {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 3% 3% 3% 3%;

  button {
    margin-left: 30px;
  }
}

.btn-add-exercise {
  width: 180px;
  height: 30px;
  border-radius: 12px;
  background-color: orange;
  color: white;
  font-weight: 700;
  margin-top: 3%;
}

.input-row-exercises {
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  width: 80%;
}

.btn-save {
  margin-top: 5%;
  width: 50%;
  height: 50px;
  border-radius: 12px;
  background-color: green;
  color: white;
  font-weight: 700;
}
</style>