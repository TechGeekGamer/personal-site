<template>
  <b-container fluid>
    <b-card-group deck>
        <ProjectCard v-for="(project, index) in projectsRowOne" :key="project.name" :name="project.name" :image="project.image" :team="project.team" :teamLink="project.teamLink" :botLinks="project.botLinks" :lgImage="project.lgImage" :alerts="project.alerts" :questionMark="project.hide" :indexNumber="index"><div v-html="project.description"></div></ProjectCard>
    </b-card-group>
    <br>
    <b-card-group deck>
      <ProjectCard v-for="(project, index) in projectsRowTwo" :key="project.name" :name="project.name" :image="project.image" :team="project.team" :teamLink="project.teamLink" :botLinks="project.botLinks" :lgImage="project.lgImage" :alerts="project.alerts" :questionMark="project.hide" :indexNumber="index"><div v-html="project.description"></div></ProjectCard>
    </b-card-group>
    <br>
    <b-card-group deck>
      <ProjectCard v-for="(project, index) in projectsRowThree" :key="project.name" :name="project.name" :image="project.image" :team="project.team" :teamLink="project.teamLink" :botLinks="project.botLinks" :lgImage="project.lgImage" :alerts="project.alerts" :questionMark="project.hide" :indexNumber="index"><div v-html="project.description"></div></ProjectCard>
    </b-card-group>
  </b-container>
</template>
<script>
import ProjectCard from './ProjectCard.vue'
export default {
    name:"Projects",
    components:{
      ProjectCard
    },
    data(){
      return {
        projects:[]
      }
    },
    computed:{
      projectsRowOne(){
        return this.projects.filter(p => p.row === 1)
      },
      projectsRowTwo(){
        return this.projects.filter(p => p.row === 2)
      },
      projectsRowThree(){
        return this.projects.filter(p => p.row === 3)
      }
    },
    created(){
      this.projects = require("../assets/projects.json");
    }
}
</script>