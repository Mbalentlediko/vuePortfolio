<template>
    <div class="container">
      <div class="row">
          <div class="col">
              <div id="details">
                  <h1 class="display-1">Projects</h1>
                  <p v-if="projects">
                      <span>{{ projects }}</span>
                  </p>
                  <Spinner v-else/>
              </div>
          </div>
      </div>
    </div>
</template>
  
  <script setup>

  //Displays job title within an array , just like an animatuon
  import Spinner from "./spinner.vue";
  import { computed, onMounted, ref } from "vue"
  import { useStore } from "vuex"
  
  const store = useStore()
  const projects = 
  computed(() => store.state.projects);
  // const title = ref("a software developer");
  const cnt = ref(-1);
   
  function repeat() {
    try {
      if (cnt.value == projects.value?.length) cnt.value = 0;
      projects.value = 
          projects.value?.at(cnt.value)?.projects;
          setTimeout(repeat, 2000);
      cnt.value++;
    } catch (e) {
      //
    }

  }
  onMounted(() => {
    store.dispatch("fetchProjects");
    repeat();
  });
  </script>
  
  <style>
  
  </style>