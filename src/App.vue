<template>
  <div id="app">
    <b-collapse v-model="showImageTop">
    <b-row class="justify-content-md-center">
      <transition name="fade">
        <b-col col lg="5">
          <transition name="fade">
            <div v-show="showImageTop">
              <b-img v-bind="pfp" rounded="circle" alt="Circle image"></b-img>
              <h1>Daniel💻</h1>
              <h5 class="text-muted">[he/him]</h5>
            </div>
          </transition>
        </b-col>
      </transition>
    </b-row>
    </b-collapse>
    <br>
    <transition name="fade">
      <b-row align-h="center">
        <b-col cols="auto"/>
        <b-col cols="auto">
          <b-nav pills v-show="showNavButtons" class="mb-2">
            <b-nav-item :active="isOnAboutMePage" to="about"><b-icon-arrow-left-circle-fill v-show="!showImageTop" class="mr-2" />About Me</b-nav-item>
            <b-nav-item :active="isOnProjectsPage" to="projects">Projects</b-nav-item>
            <b-nav-item :active="isOnSocialsPage" to="links">Links</b-nav-item>
            <b-nav-item :active="isOnTeamsPage" to="teams">Teams</b-nav-item>
          </b-nav>
        </b-col>
        <b-col cols="auto"/>
      </b-row>
    </transition>
    <!-- <transition name="fade"> -->
      <router-view v-show="showPage"/>
    <!-- </transition> -->
  </div>
</template>

<script>
export default {
  data(){
    return {
      pfp: { blankColor: '#777', width: 150, height: 150, class: 'm1', src:"https://avatars.githubusercontent.com/u/46201432?v=2" },
      showAboutMeMain:false,
      showNavButtons:false,
      showPage:false
    }
  },
  computed:{
    isOnAboutMePage(){
      return this.$route.fullPath.startsWith('/about')
    },
    isOnProjectsPage(){
      return this.$route.fullPath.startsWith('/projects')
    },
    isOnSocialsPage(){
      return this.$route.fullPath.startsWith('/links')
    },
    isOnTeamsPage(){
      return this.$route.fullPath.startsWith('/teams')
    },
    showImageTop(){
      return (this.isOnProjectsPage || this.isOnSocialsPage || this.isOnTeamsPage) === false
    }
  },
  mounted(){
    setTimeout(() => {
      this.showAboutMeMain = true;
    }, 300)
    setTimeout(() => {
      this.showNavButtons = true;
    }, 500)
    setTimeout(() => {
      this.showPage = true;
    }, 590)
  }
}
</script>

<style>
body {
  background-color: rgba(211, 197, 197, 0.5);
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 10px;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.fade-enter-active, .fade-leave-active {
  transition-property: opacity;
  transition-duration: .25s;
}

.fade-enter-active {
  transition-delay: .25s;
}

.fade-enter, .fade-leave-active {
  opacity: 0
}
</style>
