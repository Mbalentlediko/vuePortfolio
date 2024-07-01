<template>
    <div class="container">
      <div class="row">
          <div class="col">
              <div id="details">
                  <h1 class="display-1">Experience</h1>
                  <div v-if="experience?.length">
                      <p>{{ experience[0].name }}</p>
                      <p>Duties: {{ experience[0].duty }}</p>
                  </div>
                  <Spinner v-else/>
              </div>
          </div>
      </div>
    </div>
  </template>
  
  <script setup>
  //Displays job title within an array , just like an animatuon
  import Spinner from "./spinner.vue";
  import { computed, onMounted } from "vue"
  import { useStore } from "vuex"
  const store = useStore()
  const experience = computed(() => store.state.experiences);

  onMounted(() => {
    store.dispatch("fetchExperience");
  });
  </script>
  
  <style>
  
  </style>