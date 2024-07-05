<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <div id="resume">
          <h1 class="display-1">Resume</h1>

          <!-- Education Section -->
          <section>
            <h3 class="display-3">Education</h3>
            <div class="row gap-4" v-if="education?.length">
              <div
                v-for="item in education"
                :key="item.id"
                data-aos="flip-right"
              >
                <div class="card poject-card">
                  <img :src="item.image" alt="education-img" />
                  <div class="">
                  <p class="heading">{{ item.place }}</p>
                  <p>{{ item.year }}</p>
                  <p>{{ item.description }}</p>
                </div>
                </div>
            </div>
            </div>
            <Spinner v-else />
          </section>

          <!-- Skills Section -->
          <section>
            <h3 class="display-3">Skills</h3>
            <div class="row gap-4" v-if="skills?.length">
              <div class="card project-card skill-card"
                v-for="item in skills"
                :key="item.title"
                data-aos="flip-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2000"
              >
                <div>
                  <p>{{ item.title }}</p>
                </div>
                <div>
                  <p>{{ item.explanation }}</p>
                </div>
            </div>
            </div>
            <Spinner v-else />
          </section>

          <!-- Experience Section -->
          <section>
            <h3 class="display-3">Experience</h3>
            <div v-if="experiences?.length">
              <CardComp
                v-for="(item, index) in experiences"
                :key="index"
                data-aos="flip-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2000"
              >
                <template #cardHeader>
                  <img
                    src="https:mbalentlediko.github.io/Images/static/lca.jpg"
                    alt="experience-img"
                  />
                </template>
                <template #cardBody>
                  <p class="heading">{{ item.name }}</p>
                  <p>{{ item.duty }}</p>
                </template>
              </CardComp>
            </div>
            <Spinner v-else />
          </section>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import CardComp from "@/components/Card.vue";
import Spinner from "./spinner.vue";
import { computed, onMounted } from "vue";
import { useStore } from "vuex";

const store = useStore();
const education = computed(() => store.state.education);
const skills = computed(() => store.state.skills);
const experiences = computed(() => store.state.experiences);

onMounted(() => {
  store.dispatch("fetchEducation");
  store.dispatch("fetchSkills");
  store.dispatch("fetchExperiences");
});
</script>

<style scoped>
.container {
  padding: 10px;
}

.skill-card{
  height: 15rem;
}

.card{
  width: 25rem;
}

h1.display-1,
h2.display-2 {
  margin-bottom: 20px;
}

.row {
  margin-bottom: 40px;
}

.heading {
  font-weight: bold;
}


</style>
