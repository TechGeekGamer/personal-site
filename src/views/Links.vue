<template>
  <div class="about">
    <h2>Links</h2>
    <b-card-text>Links to my online accounts</b-card-text>
    <Links/>
  </div>
</template>

<script>
import Links from '../components/LinkDecks.vue'
export default {
  name:"LinksView",
  components:{
    Links
  }
}
</script>