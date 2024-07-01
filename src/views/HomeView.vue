<template>
  <div class="container">
    <section class="row" id="landing">
      <LandingPage/>
    </section>
    <section class="row" id="about">
      <AboutSection/>
    </section>
    <section class="row" id="education">
      <EducationSection/>
    </section>
    <section class="row" id="experience">
      <ExperienceSection/>
    </section>
    <section class="row" id="project"></section>
    <section class="row" id="testimonial"></section>
    <section class="row" id="contact"></section>
   </div>
</template>

<script>
import LandingPage from '@/components/LandingPage.vue';
import AboutSection from '@/components/AboutSection.vue';
import EducationSection from '@/components/EducationSection.vue';
import ExperienceSection from '@/components/ExperienceSection.vue'
export default {
  name: 'HomeView',
  components: {
    LandingPage,
    AboutSection,
    EducationSection,
    ExperienceSection
  }
}
</script>

<style>

</style>