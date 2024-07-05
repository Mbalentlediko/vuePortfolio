<template>
  <div class="container">
    <div class="row vh-100 align-items-center">
      <div class="col">
        <img
          src="https://mbalentlediko.github.io/Images/static/20240422_100655.jpg"
          alt="portfolio"
          loading="lazy"
          class="img-fluid w-75 shadow rounded-top"
          data-aos='flip-left'
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
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
import AOS from 'aos'
import 'aos/dist/aos.css'

const store = useStore();
const jobTitles = computed(() => store.state.jobTitle);

onMounted(() => {
  store.dispatch("fetchJobTitle");
  AOS.init()
});
</script>

<style scoped>
h1{
  color: white;
}
.img-fluid {
  animation: fadeIn 3s;
}

@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

.details:hover h1 {
  animation: zoom 2s;
  color: #3891c8; 
  
}

@keyframes zoom {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
}
/* span{
  animation:flip 2s;
} */
</style>
