<template> 
    <div v-if="repo && langs && com">
        <h1 class="title">Github API</h1>
        <div style="display: flex;">
            <div style="width: 50%; margin-top: 75px;">
                <div class="descri">
                    <h2 class="name" v-if="repo" style="padding-top: 25px;">  Nom du repo :{{ repo.name }} </h2>
                    <h2 class="name" v-if="repo"> Pseudo du dev: {{ repo.owner.login }} </h2>
                    <h2 class="name" v-if="repo"> Description: {{ repo.description }} </h2>
                </div>
                <Chart v-if="chartData" type="doughnut" :data="chartData" class="doug"/>
            </div>
            <div class="push">
                <div style="display: flex; justify-content: center;">
                    <h1>Dernier push</h1>
                </div>
                <template v-for="value in com.slice(0,3)">
                    <Panel toggleable style="margin-bottom: 25px;">
                        <template #header>
                            <div class="flex items-center gap-2">
                                <span class="font-bold">{{ value.commit.message.split('\n\n')[0] }}</span>
                            </div>
                        </template>
                        <Divider/>
                        <template #footer>
                            <Divider/>
                            <div class="foot">
                                <div class="flex items-center gap-2">
                                    <a :href="value.html_url" target="_blank">
                                        <Button icon="pi pi-github" style="color: white;" rounded text></Button>
                                    </a>
                                </div>
                                <span style="margin-left: auto; margin-right: 5px;">{{ formatDate(value.commit.committer.date) }}</span>
                            </div>
                        </template>
                        <p>
                            {{ value.commit.author.name }} :
                        </p>
                        <p>
                            {{ value.commit.message.split('\n\n')[1] }}
                        </p>
                    </Panel>
                </template>
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
import { Button, Divider, Panel } from 'primevue';
import 'primeicons/primeicons.css'

export default {
    name: 'Git-api',
    props: {
        url: String
    },
    components: {
        Chart,
        Panel,
        Button,
        Divider
    },
    data() {
        return {
            repo: null,
            langs: null,
            com: null,
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
    methods: {
        formatDate(dateString) {
            const date = new Date(dateString)

            return date.toLocaleDateString('fr-FR', {
                day: 'numeric',
                month: 'long',
                year: 'numeric',
                hour: 'numeric'
            })
        }
    },

    created: function() {
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
        axios.get((this.url + "/commits")).then((result3) => {
            this.com = result3.data
        }).catch((err) => {
            console.log(err)
        });
    },
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
    margin-left: 5%;
    margin-right: 5%;
    width: 50%;
    border-radius: 25px;
}

.doug {
    margin-top: 25px;
    margin-left: 25%;
    width: 50%;
    margin-bottom: 50px;
}

.foot {
    display: flex;
    align-items: center;
}

</style>