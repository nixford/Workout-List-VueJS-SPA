import { createStore } from 'vuex'

function updateLocalStorage(workouts) {  
  localStorage.setItem('workouts', JSON.stringify(workouts))  
}

export default createStore({
  state: {
    workouts: []
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
    }    
  },
  actions: {
  },
  modules: {
  }
})
