<template>
    <div class="container">
      <div class="row mt-5">
        <div class="col">
          <div id="contact">
            <h1 class="display-1">Get in Touch with me </h1>
            <div v-if="contact?.length">
              <p>{{ contact[0].address }}</p>
              <p>{{ contact[0].phone }}</p>
              <p>{{ contact[0].email }}</p>
            </div>
            <Spinner v-else/>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import Spinner from "./spinner.vue";
  import { computed, onMounted } from "vue";
  import { useStore } from "vuex";
  
  const store = useStore();
  const contact = computed(() => store.state.contactInfo);

  
  onMounted(() => {
    store.dispatch("fetchContactInfo")
  });
  </script>
  
  <style>
  
  </style>
  