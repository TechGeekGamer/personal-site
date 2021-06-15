<template>
  <div class="home">
    <b-img v-bind="pfp" rounded="circle" alt="Circle image"></b-img>
    <br><br>
    <h5>Programmer | High Schooler</h5>
    <br>
    <p>Click in the navigation above to see more</p>
  </div>
</template>

<script>
//import Projects from '../components/Projects.vue'
export default {
  name: 'Home',
  data() {
    return {
        pfp: { blankColor: '#777', width: 150, height: 150, class: 'm1', src:"https://avatars.githubusercontent.com/u/46201432?v=2" }
      }
    }
}
</script>
