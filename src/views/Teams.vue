<template>
  <div class="about">
    <h2>Teams</h2>
    <TeamsDeck/>
  </div>
</template>

<script>
import TeamsDeck from '../components/TeamsDeck.vue'
export default {
  name:"Teams",
  components:{
    TeamsDeck
  }
}
</script>