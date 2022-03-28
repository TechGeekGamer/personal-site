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
    name:"Links",
    components:{
      LinkCard
    },
    data(){
      return {
        links:[]
      }
    },
    computed:{
      linksRowOne(){
        return this.links.filter(p => p.row === 1)
      },
      linksRowTwo(){
        return this.links.filter(p => p.row === 2)
      },
      linksRowThree(){
        return this.links.filter(p => p.row === 3)
      }
    },
    created(){
      this.links = require("../assets/links.json");
    }
}
</script>