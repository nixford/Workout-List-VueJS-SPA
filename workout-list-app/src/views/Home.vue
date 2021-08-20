<template>
  <div class="home">    
    <Workout />
  </div>
</template>

<script>
import Workout from '@/components/Workout.vue'
export default {
  name: 'Home',
  components: {
    Workout
  }
}
</script>

<style lang="scss">
#nav {
  padding: 30px;
  color: #2c3e50;
  font-weight: 800;  
}

</style>
