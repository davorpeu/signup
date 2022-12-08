<template>
  
  <div id="app">
   
    <router-view/>
  </div>
</template>



<style>
.home {     min-height: 100vh; 
  display: grid; 
  grid-template-columns: 1fr 1fr; 
  grid-template-rows: 1fr; 
  gap: 0px 0px; 
  grid-template-areas: 
    "media signup"
    "media signup";  }

.media { grid-area: media; }
.signup { grid-area: signup; }
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
