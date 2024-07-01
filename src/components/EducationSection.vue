<template>
    <div class="container">
      <div class="row">
          <div class="col">
              <div id="details">
                  <h1 class="display-1">Education</h1>
                  <div v-if="education?.length">
                      <p>{{ education[0].place }}</p>
                      <p>Date: {{ education[0].year }}</p>
                      <p>{{ education[0].description }}</p>
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
  import { computed, onMounted} from "vue"
  import { useStore } from "vuex"
  const store = useStore()
  const education = 
  computed(() => store.state.education);

  onMounted(() => {
    store.dispatch("fetchEducation");
  });
  </script>
  
  <style>
  
  </style>