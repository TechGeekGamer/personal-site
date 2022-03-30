<template>
  <div class="about">
    <h2>Projects</h2>
    <b-card-text>Projects I actively work on or have in the past</b-card-text>
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