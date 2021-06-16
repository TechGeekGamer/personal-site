<template>
  <div class="home">
    <b-img v-bind="pfp" rounded="circle" alt="Circle image"></b-img>
    <br><br>
    <About/>
    <br>
    <Projects/>
    <br>
    <OtherProjects/>
    <br>
    <Links/>
    <br>
  </div>
</template>

<script>
import About from '../views/About.vue'
import Projects from '../views/Projects.vue'
import OtherProjects from '../views/OtherProjects.vue'
import Links from '../views/Links.vue'
export default {
  name: 'Home',
  components:{
    About,
    Projects, 
    OtherProjects,
    Links
  },
  data() {
    return {
        pfp: { blankColor: '#777', width: 150, height: 150, class: 'm1', src:"https://avatars.githubusercontent.com/u/46201432?v=2" }
      }
    }
}
</script>
