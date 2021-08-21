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
      if (workout) {
        state.workouts.push(workout);
        updateLocalStorage(state.workouts);
      }      
    }
  },
  actions: {
  },
  modules: {
  }
})
