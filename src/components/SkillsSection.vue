<template>
    <div class="container">
      <div class="row">
        <div class="col">
          <div id="details">
            <h1 class="display-1">Skills</h1>
            <div class="row gap-4" v-if="skills?.length">
              <CardComp v-for="item in skills" :key="item.id">
                <template #cardHeader>
                  <p>{{ item.title }}</p> 
                </template>
                <template #cardBody>
                  <p>{{ item.explanation }}</p>
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
  import CardComp from "@/components/Card.vue";
  import Spinner from "./spinner.vue";
  import { computed, onMounted } from "vue";
  import { useStore } from "vuex";
  const store = useStore();
  const skills = computed(() => store.state.skills);
  
  onMounted(() => {
    store.dispatch("fetchSkills");
  });
  </script>
  
  <style></style>
  