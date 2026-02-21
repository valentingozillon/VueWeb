<template> 
    <div class="container">
        <iframe
            src="https://www.youtube.com/embed/1AiToLn3USQ"
            title="YouTube video player"
            frameborder="0"
            allowfullscreen
            class="video">
        </iframe>
    </div>
</template>

<script>
export default {
    name: 'HomePage'
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
    margin-top: 50px;
    padding-left: 10%;
}

</style>