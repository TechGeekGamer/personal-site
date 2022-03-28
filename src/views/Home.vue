<template>
  <div class="home">
    <b-row class="justify-content-md-center">
      <transition name="fade">
        <b-col v-show="showAboutMeMain" col lg="2">
          <transition name="fade">
            <div v-show="showAboutMeMain">
              <b-img v-bind="pfp" rounded="circle" alt="Circle image"></b-img>
              <h1>Daniel💻</h1>
            </div>
          </transition>
        </b-col>
      </transition>
      <transition name="fade">
        <b-col v-show="showAboutMeAbout" col lg="2"><About/></b-col>
      </transition>
      <transition name="fade">
        <b-col v-show="showAboutMeLinks" col lg="3"><Links/></b-col>
      </transition>
    </b-row>
    <br>
    <transition name="fade">
          <Projects v-show="showProjects"/>
    </transition>
    <br>
  </div>
</template>

<script>
import About from '../views/About.vue'
import Projects from '../views/Projects.vue'
import Links from '../views/Links.vue'
export default {
  name: 'Home',
  components:{
    About,
    Projects, 
    Links
  },
  data() {
    return {
        pfp: { blankColor: '#777', width: 150, height: 150, class: 'm1', src:"https://avatars.githubusercontent.com/u/46201432?v=2" },
        showAboutMeMain:false,
        showAboutMeAbout:false,
        showAboutMeLinks:false,
        showProjects:false
      }
  },
  mounted(){
    setTimeout(() => {
      this.showAboutMeMain = true;
    }, 300)
    setTimeout(() => {
      this.showAboutMeAbout = true;
    }, 500)
    setTimeout(() => {
      this.showAboutMeLinks = true;
    }, 600)
    setTimeout(() => {
      this.showProjects = true;
    }, 700)
  }
}
</script>
