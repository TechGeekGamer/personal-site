<template>
  <div class="about">
    <h2>Teams</h2>
    <b-card-text>Teams I'm either a part of or was affiliated with</b-card-text>
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