<template>
    <transition name="fade">
        <b-card :title="name" class="shadow projectCard" v-show="isCardVisible">
            <b-icon-question-circle-fill v-show="isQuestionMark" class="mb-2 mt-3" scale="3"/>
            <b-button v-show="links && !isQuestionMark" @click="toggleDropdown" variant="primary" class="mb-2">{{showDropdown?'Hide':'View'}} Links</b-button>
            <b-button v-show="singleLink && !isQuestionMark" variant="primary" class="mb-2" :href="singleLink" target="_blank">Jump to {{name}}</b-button>
            <br>
            <b-card-img v-show="!isQuestionMark" :src="image" class="w-25 rounded-circle mb-1"/>
            <b-collapse v-model="showDetails" class="mb-2">
                <b-card-text>
                    <slot/>
                </b-card-text>
            </b-collapse>
            <b-collapse v-model="showDropdown" class="mt-2">
                <b-card class="mb-2">
                    <div v-for="linkData in links" :key="linkData.title" class="mb-2">
                        <b-button :target="linkData.link?'_blank':''" size="sm" :to="linkData.to" :href="linkData.link">{{linkData.title}}</b-button>
                        <br>
                    </div>
                </b-card>
            </b-collapse>
            <template #footer>
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
        questionMark:Boolean,

        /** Bots */
        links:Array,
        singleLink:String,
        alerts:Array,

        indexNumber:Number
    },
    data(){
        return {
            showDropdown:false,
            showDetails:true,
            showCard:false,
            overwriteSetName:"",
            overwriteSetAlerts:[]
        }
    },
    computed:{
        isProjectInTeam(){
            return this.team && this.team != ""
        },
        currentAlerts(){
            return this.overwriteSetAlerts || this.alerts;
        },
        currentSetName(){
            return this.overwriteSetName || this.name;
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
            
        },
        setCurrentName(name){
            this.overwriteSetName = name;
        },
        setCurrentAlerts(alerts){
            this.overwriteSetAlerts = alerts;
        }
    },
    created(){
        if(this.isQuestionMark){
            this.setCurrentName("");
            if(this.alerts.length > 0){
                this.setCurrentAlerts([
                    // {
                    //     type:"info",
                    //     text:""
                    // },
                    ...this.alerts
                ])
            }else {
                this.setCurrentAlerts([
                    {
                        type:"info",
                        text:""
                    }
                ])
            }
        }
        setTimeout(() => {
            this.showCard = true;
        }, 500+(Number(this.indexNumber) * 100));
    }
}
</script>
<style scoped>
    .projectCard {
        min-height: 400px;
    }
</style>