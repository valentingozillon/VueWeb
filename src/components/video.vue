<template> 
    <div class="container">
        <iframe
            :src="video"
            title="YouTube video"
            frameborder="0"
            allowfullscreen
            class="video">
        </iframe>
    </div>
</template>

<script>
export default {
    name: 'Video-you',
    props: {
        video: String
    }
}
</script>

<style scoped>

.container {
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