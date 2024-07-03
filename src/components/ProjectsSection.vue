<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <div id="details">
          <h1 class="display-1">Projects</h1>
          <div class="row gap-4" v-if="projects?.length">
            <CardComp v-for="(item, index) in projects" :key="index">
              <template #cardHeader>
                <img :src="item.image" alt="project-img" />
              </template>
              <template #cardBody>
                <p>{{ item.name }}</p>
                <p>{{ item.description }}</p>
                <div class="d-flex justify-content-around buttons-box">
                  <a class="btn" :href="gitHub" target="_blank" type="button"><i class="bi bi-github"></i></a>
                  <a class="btn" :href="netlify" target="_blank" type="button">Visit site</a>
                </div>
              </template>
            </CardComp>
          </div>
          <Spinner v-else />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
//Displays job title within an array , just like an animatuon
import CardComp from '@/components/Card.vue'
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
img[alt="project-img"]{
  aspect-ratio: 1;
  width: 100%;
  object-fit: contain;

}
</style>
