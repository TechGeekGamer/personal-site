<template>
  <div class="about">
    <h2>Projects</h2>
    <b-card-text>Projects I'm either a part of or was affiliated with at one point in time</b-card-text>
    <Projects/>
  </div>
</template>

<script>
import Projects from '../components/ProjectDecks.vue'
export default {
  name:"ProjectsView",
  components:{
    Projects
  }
}
</script>