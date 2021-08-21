<template>
  <div id="nav">    
    <h1>Workout List App</h1>
    <router-link to="/" v-if="$route.name === 'AddWorkout'">
      <button class="btn-back">Back to workout list</button>
    </router-link>
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
    height: 50px;
    width: 200px;
    border-radius: 12px;
    background-color: #44a9f9;
    color: white;
    font-weight: 800;
  }
}
</style>
