<template>
  <div class="container">
    <section class="row" id="landing">
      <LandingPage/>
    </section>
    <section class="row" id="about">
      <AboutSection/>
    </section>
    <section class="row" id="resume">
      <ResumeSection/>
    </section>
    <section class="row" id="project">
      <Projects/>
    </section>
    <section class="row" id="testimonials">
      <TestimonialsSection />
    </section>
    <section class="row" id="reachMe">
      <ContactPage />
    </section>
   </div>
</template>

<script>
import LandingPage from '@/components/LandingPage.vue';
import AboutSection from '@/components/AboutSection.vue';
import ResumeSection from '@/components/ResumeSection.vue';
import Projects from '@/components/ProjectsSection.vue';
import TestimonialsSection from '@/components/TestimonialsSection.vue'
import ContactPage from '@/components/ContactPage.vue'
export default {
  name: 'HomeView',
  components: {
    LandingPage,
    AboutSection,
    ResumeSection,
    Projects,
    TestimonialsSection,
    ContactPage
  }
}
</script>

<style>

</style>