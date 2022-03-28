<template>
    <transition name="fade">
        <b-card :title="name" class="shadow projectCard" v-show="isCardVisible">
            <b-icon-question-circle-fill v-show="isQuestionMark" class="mb-2 mt-3" scale="3"/>
            <b-card-img v-show="!isQuestionMark" :src="image" class="w-25 rounded-circle mb-2"/>
            <b-collapse v-model="showDetails" class="mb-2">
                <b-card-text>
                    <slot/>
                </b-card-text>
            </b-collapse>
            <b-collapse v-model="showDropdown" class="mt-2">
                <b-card class="mb-2">
                    <div v-for="linkData in botLinks" :key="linkData.title" class="mb-2">
                        <b-button size="sm" :href="linkData.link">{{linkData.title}}</b-button>
                        <br>
                    </div>
                </b-card>
            </b-collapse>
            <b-button v-show="botLinks && !isQuestionMark" @click="toggleDropdown" variant="primary" class="mb-2">{{showDropdown?'Hide':'View'}} Links</b-button>
            <template #footer>
                <b-alert :show="isProjectInTeam" variant="secondary" class="text-muted">Team Project • <a :href="teamLink">{{team}}</a></b-alert>
                <b-alert :show="true" v-for="alert in currentAlerts" :key="alert.text" :variant="alert.type">{{alert.text}}</b-alert>
            </template>
        </b-card>
    </transition>
</template>

<script>
export default {
    props:{
        name:String,
        image:String,
        lgImage:String,
        questionMark:Boolean,

        /** Teams */
        team:String,
        teamLink:String,
        /** Bots */
        botLinks:Array,
        alerts:Array,

        indexNumber:Number
    },
    data(){
        return {
            showDropdown:false,
            showDetails:true,
            showCard:false
        }
    },
    computed:{
        isProjectInTeam(){
            return this.team && this.team != ""
        },
        currentAlerts(){
            return this.alerts;
        },
        isQuestionMark(){
            return this.questionMark;
        },
        isCardVisible(){
            return this.showCard;
        }
    },
    methods:{
        toggleDropdown(){
            this.showDropdown == true?this.showDropdown = false:this.showDropdown = true
            this.showDetails == false?this.showDetails = true:this.showDetails = false
            
        }
    },
    created(){
        if(this.isQuestionMark){
            this.name = "Not Available";
            if(this.alerts.length > 0){
                this.alerts = [
                    {
                        type:"info",
                        text:"You can't see this project yet."
                    },
                    ...this.alerts
                ]
            }else {
                this.alerts = [
                    {
                        type:"info",
                        text:"You can't see this project yet."
                    }
                ]
            }
        }
        console.log(this.indexNumber)
        setTimeout(() => {
            this.showCard = true;
        }, 1000+(Number(this.indexNumber) * 100));
    }
}
</script>
<style scoped>
    .projectCard {
        min-height: 550px;
    }
</style>