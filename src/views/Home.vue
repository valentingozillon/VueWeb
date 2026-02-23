<template> 
    <div class="container">
        <Video video="https://www.youtube.com/embed/1AiToLn3USQ" />
    </div>
    <!-- <div class="container" style="background-color: #BED3C3;">
        <Git url="https://api.github.com/repos/valentingozillon/VueWeb"/>
    </div> -->
    <div class="container" style="background-color: #4A919E;">
        <Json/>
    </div>
</template>

<script>
//import Git from '@/components/git.vue';
import Json from '@/components/json.vue';
import Video from '@/components/video.vue';

export default {
    name: 'HomePage',
    components: {
        Video,
        //Git
        Json
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

.video {
    margin-left: 20%;
    align-items: center;
    margin-top: 50px;
    margin-bottom: 50px;
    width: 60%;
    height: 400px;
}

</style>