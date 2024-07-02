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
    <section class="row" id="skills">
      <SkillsSection />
    </section>
    <section class="row" id="projects">
      <Projects/>
    </section>
    <section class="row" id="testimonial">
      <TestimonialsSection />
    </section>
    <section class="row" id="contact">
      <ContactSection />
    </section>
   </div>
</template>

<script>
import LandingPage from '@/components/LandingPage.vue';
import AboutSection from '@/components/AboutSection.vue';
import EducationSection from '@/components/EducationSection.vue';
import ExperienceSection from '@/components/ExperienceSection.vue';
import Projects from '@/components/ProjectsSection.vue';
import TestimonialsSection from '@/components/TestimonialsSection.vue'
import SkillsSection from '@/components/SkillsSection.vue'
import ContactSection from '@/components/ContactPage.vue'
export default {
  name: 'HomeView',
  components: {
    LandingPage,
    AboutSection,
    EducationSection,
    ExperienceSection,
    Projects,
    TestimonialsSection,
    SkillsSection,
    ContactSection
  }
}
</script>

<style>

</style>