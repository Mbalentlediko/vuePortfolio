<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <div id="details">
          <h1 class="display-1">Experience</h1>
          <div v-if="experiences?.length">
            <CardComp v-for="(item, index) in experiences" :key="index">
              <template #cardHeader>
                <img src="" alt="experience-img"> </template>
              <template #cardBody>
                <p class="heading">{{ item.name }}</p>
                <p>{{ item.duty }}</p>
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
const experiences = computed(() => store.state.experiences);

onMounted(() => {
  store.dispatch("fetchExperience");
});
</script>

<style></style>
