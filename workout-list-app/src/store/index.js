import { createStore } from 'vuex'

function updateLocalStorage(workouts) {  
  localStorage.setItem('workouts', JSON.stringify(workouts))  
}

export default createStore({
  state: {
    workouts: JSON.parse(window.localStorage.getItem('workouts')) || [],
  },
  mutations: {
    addToList(state, workout){
      state.workouts.push(workout);
      updateLocalStorage(state.workouts);  
    },
    removeFromList(state, wId) {
      const workout = state.workouts.find(w => w.id === wId);
      const index = state.workouts.findIndex(w => w.id === wId);

      if (workout) {
        state.workouts.splice(index, 1)
        updateLocalStorage(state.workouts)
      }
    },
    deleteExercise(state, idObj) {
      const workout = state.workouts.find(w => w.id === idObj.wId);
      const index = state.workouts.findIndex(w => w.id === idObj.wId);

      if (workout) {
        const exercise = workout.exercises.find(e => e.id === idObj.eId);
        const indexExercise = workout.exercises.findIndex(e => e.id === idObj.eId);

        console.log(exercise)
        console.log(indexExercise)

        if (exercise) {
          state.workouts[index].exercises.splice(indexExercise, 1)
          updateLocalStorage(state.workouts)
        }
        
      }

    }    
  },
  actions: {
  },
  modules: {
  }
})
