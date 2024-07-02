<template>
  <div class="container">
    <div class="row vh-100 align-items-center">
      <div class="col">
        <img
          src="https://mbalentlediko.github.io/Images/static/20240422_100655.jpg"
          alt="portfolio"
          loading="lazy"
          class="img-fluid w-75 shadow rounded-top"
        />
      </div>
      <div class="col">
        <div class="details">
          <h1 class="display-1">Mbalentle Diko</h1>
          <p v-if="jobTitles?.length">
            I am an
            <span>{{ jobTitles[0].title }} </span>
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
const jobTitles = computed(() => store.state.jobTitle);

onMounted(() => {
  store.dispatch("fetchJobTitle");
});
</script>

<style scoped></style>
