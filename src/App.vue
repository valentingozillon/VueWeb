<template>
  <div class="header">
    <a class="logo">Company logo</a>
    <div class="header-right">
      <router-link to="/" class="marg">Home</router-link>
      <router-link to="/About" class="marg">About</router-link>
    </div>
  </div>
  <router-view />
</template>



<style scoped>

.header {
  font-family: Arial, Helvetica, sans-serif;
  overflow: hidden;
  background-color: #f1f1f1;
  padding: 20px 10px;
}

.header a {
  float: left;
  color: black;
  text-align: center;
  padding: 12px;
  text-decoration: none;
  font-size: 18px; 
  line-height: 25px;
  border-radius: 4px;
}

.header a.logo {
  font-size: 25px;
  font-weight: bold;
}

.header-right a:hover {
  background-color: #ddd;
  color: black;
}

.header a.router-link-exact-active {
  background-color: dodgerblue;
  color: white;
}

.header-right {
  float: right;
}

.marg {
  margin-right: 5px;
}

</style>
