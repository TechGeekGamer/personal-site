<template>
  <div class="about">
    <h2>Projects I've worked on</h2>
    <transition name="fade">
      <Projects v-show="show" />
    </transition>
  </div>
</template>

<script>
import Projects from '../components/ProjectDecks.vue'
export default {
  components:{
    Projects
  },
  data(){
    return {
      show:false
    }
  },
  mounted(){
    setTimeout(() => {
      this.show = true;
    }, 500)
  }
}
</script>