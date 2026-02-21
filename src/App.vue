<template>
  <HeaderComp Name="Valentin Gozillon" />
  <router-view />
</template>

<script>
import HeaderComp from "./components/Header.vue"

export default {
  name: 'App',
  components: {
    HeaderComp
  }
}
</script>
