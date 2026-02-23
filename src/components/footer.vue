<template>
  <div class="footer">
    <div class="righter">
        <a href="https://github.com/valentingozillon/VueWeb" target="_blank" class="but">
            <Button icon="pi pi-github" style="color: white;" rounded text></Button>
        </a>
        <a href="https://www.linkedin.com/in/valentin-gozillon-184b7020a/" target="_blank" class="but">
            <Button icon="pi pi-linkedin" style="color: white;" rounded text></Button>
        </a>
    </div>
  </div>
</template>

<script>
import 'primeicons/primeicons.css'
import { Button } from 'primevue';

export default {
  name: 'Footer-comp',
  components: {
    Button,
  }
}
</script>

<style scoped>

.footer {
  font-family: Arial, Helvetica, sans-serif;
  overflow: hidden;
  background-color: #CE6A6B;
  padding: 20px 10px;
  display: flex;
  align-items: center;
  margin-top: 50px;
}

.righter {
    margin-left: auto;
}

.but {
    width: 50px;
}

</style>

