<template>
  <div class="about">
    <h2>Projects I've worked on</h2>
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