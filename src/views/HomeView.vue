<template>
  <div class="container">
    <section class="row" id="landing">
      <LandingPage/>
    </section>
    <section class="row" id="about">
      <AboutSection/>
    </section>
    <section class="row" id="education"></section>
    <section class="row" id="resume"></section>
    <section class="row" id="project"></section>
    <section class="row" id="testimonial"></section>
    <section class="row" id="contact"></section>
   </div>
</template>

<script>
import LandingPage from '@/components/LandingPage.vue';
import AboutSection from '@/components/AboutSection.vue'
export default {
  name: 'HomeView',
  components: {
    LandingPage,
    AboutSection,
  }
}
</script>

<style>

</style>