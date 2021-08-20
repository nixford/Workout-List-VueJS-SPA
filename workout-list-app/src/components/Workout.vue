<template>
  <div class="workout-wrapper">
    <img alt="Workout background" src="../assets/exercises.jpg"/>
    <div class="workout-container">

    </div>
  </div>
</template>

<script>
export default {
  name: 'Workout',
  props: {}
}
</script>

<style lang="scss" scoped>
.workout-wrapper {
  position: relative;
}
img {
  width: 100%;
  opacity: 0.2;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  position: absolute;
  z-index: -1;   
}
</style>