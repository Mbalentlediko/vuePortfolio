<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <div id="details">
          <h1 class="display-1">Projects</h1>
          <div class="row gap-4" v-if="projects?.length">
            <div class="card project-card" v-for="(item, index) in projects" :key="index" data-aos="fade-up">
              <div>
                <img :src="item.image" alt="project-img" />
              </div>
              <div>
                <p>{{ item.name }}</p>
                <p>{{ item.description }}</p>
                <div class="d-flex justify-content-around buttons-box">
                  <a
          class="contact-icon"
          target="_blank"
          href="https://github.com/Mbalentlediko"
          ><i class="bi bi-github mx-2"></i> GitHub</a
        >
                  <a class="btn" :href="netlify" target="_blank" type="button"
                    >Visit site</a
                  >
                </div>
              </div>
            </div>
          </div>
          <Spinner v-else />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
//Displays job title within an array , just like an animatuon
// import CardComp from '@/components/Card.vue'
import Spinner from "./spinner.vue";
import { computed, onMounted } from "vue";
import { useStore } from "vuex";

const store = useStore();
const projects = computed(() => store.state.projects);

onMounted(() => {
  store.dispatch("fetchProjects");
});
</script>

<style scoped>
img[alt="project-img"] {
  aspect-ratio: 1;
  width: 100%;
  object-fit: contain;
  width:18rem
}

.card{
  width: 19rem;
}

.project-card{
  height: 35rem;
}
</style>
