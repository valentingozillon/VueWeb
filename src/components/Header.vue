<template>
  <div class="header">
    <img src="../assets/logo.png" class="logo"/>
    <a>{{Name}}</a>
    <div class="header-right">
      <router-link to="/" class="marg">Accueil</router-link>
      <router-link to="/Library" class="marg">Information</router-link>
      <router-link to="/About" class="marg">À propos</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header-comp',
  props: {
    Name: String
  }
}
</script>

<style scoped>

.header {
  font-family: Arial, Helvetica, sans-serif;
  overflow: hidden;
  background-color: #CE6A6B;
  padding: 20px 10px;
  display: flex;
  align-items: center;
}

.header a {
  color: white;
  text-align: center;
  padding: 12px;
  text-decoration: none;
  font-size: 18px; 
  line-height: 25px;
  border-radius: 4px;
}

.logo {
  font-size: 25px;
  font-weight: bold;
  width: 5%;
}

.header-right a:hover {
  background-color: #EBACA2;
  color: black;
}

.header a.router-link-exact-active {
  background-color: #BED3C3;
  color: black;
}

.header-right {
  margin-left: auto;
}

.marg {
  margin-right: 5px;
}

</style>
