<template>
    <div class="container" style="background-color: #BED3C3;">
        <Git url="https://api.github.com/repos/valentingozillon/VueWeb"/>
    </div>
</template>

<script>
import Git from '@/components/git.vue';

export default {
    name: 'HomePage',
    components: {
        Git
    }
}
</script>

<style scoped>

.container {
    font-family: Arial, Helvetica, sans-serif;
    width: 90%;
    margin-top: 50px;
    background-color: #4A919E;
    margin-left: 5%;
}



</style>