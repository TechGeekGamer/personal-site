<template>
  <b-container fluid>
    <b-card-group deck>
        <LinkCard v-for="(link, index) in linksRowOne" :key="link.title" :name="link.title" :image="link.image" :links="link.links" :singleLink="link.link" :alerts="link.alerts" :questionMark="link.hide" :indexNumber="index"><div v-html="link.description"></div></LinkCard>
    </b-card-group>
  </b-container>
</template>
<script>
import LinkCard from './LinkCard.vue'
export default {
    name:"TeamsDeck",
    components:{
      LinkCard
    },
    data(){
      return {
        teams:[]
      }
    },
    computed:{
      linksRowOne(){
        return this.teams.filter(p => p.row === 1)
      },
      linksRowTwo(){
        return this.teams.filter(p => p.row === 2)
      },
      linksRowThree(){
        return this.teams.filter(p => p.row === 3)
      }
    },
    created(){
      this.teams = require("../assets/teams.json");
    }
}
</script>