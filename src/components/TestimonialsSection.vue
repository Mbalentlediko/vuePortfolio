<template>
    <div class="container">
      <div class="row">
        <div class="col">
          <div id="details">
            <h1 class="display-1">Testimonials</h1>
            <div class="row gap-4" v-if="testimonials?.length">
              <CardComp v-for="(item, index) in testimonials" :key="index" >
                <template #cardHeader>
                  <img :src="item.profile" alt="testimonial-img" />
                </template>
                <template #cardBody>
                  <p class="heading">{{ item.name }} {{ item.surname }}</p>
                  <p>{{ item.quotes }}</p>
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
  const testimonials = computed(() => store.state.testimonials);
  
  onMounted(() => {
    store.dispatch("fetchTestimonials");
  });
  </script>
  
  <style></style>
  