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
     resume() {
       return this.$.store.state.resume
     },
     testimonials() {
       return this.$.store.state.testimonials
     },
     projects() {
       return this.$.store.state.projects
     }
     },
     ContactInfo() {
       return this.$.store.state.ContactInfo
     }
    }
   
 
 </script>
 <style src="@/assets/css/styles.css">

</style>
