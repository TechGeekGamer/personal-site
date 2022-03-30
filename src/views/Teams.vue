<template>
  <div class="about">
    <h2>Teams</h2>
    <b-card-text>Teams I'm actively a part of or have been previously</b-card-text>
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