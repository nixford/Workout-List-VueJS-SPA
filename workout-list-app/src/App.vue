<template>
  <div id="nav">    
    <h1>Workout List App</h1>    
      <button v-if="$route.name === 'AddWorkout'" class="btn-back">
        <router-link to="/">Back to workout list</router-link>
      </button>    
  </div>      
  <router-view/>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;  
}
#nav {
  margin: 3% 0% 0% 0%;
  color: #2c3e50;
  font-weight: 800;  
  display: flex;
  flex-direction: column;

  .btn-back {
    align-self: center;
    height: 50px;
    width: 200px;
    border-radius: 12px;
    background-color: #44a9f9;    
    font-weight: 800;

    a {
      color: white;
      text-decoration: none;
    }
  }
}
</style>
