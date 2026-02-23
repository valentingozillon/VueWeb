<template>
  <HeaderComp Name="Valentin Gozillon" />
  <router-view />
  <FooterComp/>
</template>

<script>
import HeaderComp from "./components/Header.vue"
import FooterComp from "./components/footer.vue"

export default {
  name: 'App',
  components: {
    HeaderComp,
    FooterComp
  }
}
</script>

