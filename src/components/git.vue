<template> 
    <div>
        <h1 class="title">Github API</h1>
        <div style="display: flex;">
            <div class="descri">
                <h2 class="name" v-if="repo" style="padding-top: 25px;">  Nom du repo :{{ repo.name }} </h2>
                <h2 class="name" v-if="repo"> Pseudo du dev: {{ repo.owner.login }} </h2>
                <h2 class="name" v-if="repo"> Description: {{ repo.description }} </h2>
                <div>
                    <table>
                        <thead>
                            <tr>
                                <th>Language</th>
                                <th>Utilisation</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(value, lang) in langs" :key="lang">
                                <td> {{ lang }} </td>
                                <td> {{  value }}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div class="push">
                <h1>Dernier push</h1>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'Git-api',
    props: {
        url: String
    },
    data() {
        return {
            repo: null,
            langs: null,
        };
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
    width: 33%;
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


















table {
  border-collapse: collapse;
  width: 30%;
}

td, th {
  border: 1px solid #ddd;
  padding: 8px;
}

tr:nth-child(even) {
    background-color: #EBACA2;
}

tr:nth-child(odd) {
    background-color: #CE6A6B;
}

tr:hover {
    background-color: #ddd;
}

th {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  background-color: #212E53;
  color: white;
}

</style>