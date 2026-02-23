<template> 
    <div v-if="repo">
        <h1 class="title">Github API</h1>
        <div style="display: flex;">
            <div style="width: 50%;">
                <div class="descri">
                    <h2 class="name" v-if="repo" style="padding-top: 25px;">  Nom du repo :{{ repo.name }} </h2>
                    <h2 class="name" v-if="repo"> Pseudo du dev: {{ repo.owner.login }} </h2>
                    <h2 class="name" v-if="repo"> Description: {{ repo.description }} </h2>
                </div>
                <Chart v-if="chartData" type="doughnut" :data="chartData" class="doug"/>
            </div>
            <div class="push">
                <h1>Dernier push</h1>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import Lang from '../assets/lang.json'
import Repo from '../assets/repo.json'
import Com from '../assets/commit.json'
import Chart from 'primevue/chart';

export default {
    name: 'Git-api',
    props: {
        url: String
    },
    components: {
        Chart,
    },
    data() {
        return {
            repo: Repo,
            langs: Lang,
            com: Com,
            chartData: null,
        };
    },
    computed: {
        chartData() {
            if (!this.langs) return null

            return {
                labels: Object.keys(this.langs),
                datasets: [{
                    label: 'Utilisation',
                    data: Object.values(this.langs)
                }]
            }
        }
    },
    /*created: function() {
        axios.get(this.url).then((result) => {
            this.repo = result.data
        }).catch((err) => {
            console.log(err)
        });
        axios.get((this.url + "/languages")).then((result2) => {
            this.langs = result2.data
        }).catch((err) => {
            console.log(err)
        });
    },*/
}
</script>

<style scoped>

.title {
    padding-top: 25px;
    padding-bottom: 25px;
    text-align: center;
}

.descri {
    background-color: #CE6A6B;
    padding-left: 7%;
    padding-bottom: 50px;
    width: 86%;
    margin-left: 5%;
    border-radius: 25px;
}

.push {
    margin-left: 10%;
    padding-left: 7%;
    width: 33%;
    background-color: #CE6A6B;
    border-radius: 25px;

}

.doug {
    margin-top: 25px;
    margin-left: 25%;
    width: 50%;
    margin-bottom: 50px;
}

</style>