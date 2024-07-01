<template>
    <div class="container">
      <div class="row vh-100 align-items-center">
        <div class="col">
          <img
            src="https://mbalentlediko.github.io/Images/static/you.jpg"
            alt="portfolio"
            loading="lazy"
            class="img-fluid w-75 shadow rounded-top"
          />
        </div>
        <div class="col">
          <div class="details">
            <h1 class="display-1">Mbalentle Diko</h1>
            <p v-if="JobTitle">
              I am an
              <span>{{ JobTitle[0].title }} </span>
            </p>
            <spinner v-else />
          </div>
        </div>
      </div>
    </div>
  </template>

<script setup>
//Displays job title within an array , just like an animatuon
import spinner from "./spinner.vue";
import { computed, onMounted } from "vue";
import { useStore } from "vuex";
const store = useStore();
const JobTitle = computed(() => store.state.jobTitle);

onMounted(() => {
  store.dispatch("fetchJobTitle");
});
</script>