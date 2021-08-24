
import Store from '../../src/store'

export default { 
  post(workout) {
    Store.commit('addToList', workout);
  },

  get() {
    return Store.state.workouts;
  },

  delete(input) {   
    if (input.isDeleteExercise) {
      Store.commit('deleteExercise', input)
    } else {
      Store.commit('removeFromList', input);
    }
  }
}

