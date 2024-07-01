<template>
  <div class="wrapper">
   <NavBar/>
   <main class="container-fluid">
      <router-view/> 
      </main>
     <Footer/>
   </div>
 </template>
 
 <script>
 import NavBar from '@/components/NavBar'
 import Footer from '@/components/Footer.vue'
 export default {
   components:{
     NavBar,
     Footer
   },
   computed:{
     jobTitle() {
      return this.$store.state.jobTitle
     },
     about() {
       return this.$.store.state.about
     },
     education() {
       return this.$.store.state.education
     }
   },
 }
 </script>
 <style>
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
