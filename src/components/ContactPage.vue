<template>
    <div class="container">
      <div class="row">
        <div class="col">
          <div id="contact">
            <h1 class="display-1">Get in Touch with me </h1>
            <p v-if="ContactInfo">
              <span>
                {{ ContactInfo.address }}<br>
                {{ ContactInfo.phone }}<br>
                {{ ContactInfo.email }}
              </span>
            </p>
            <Spinner v-else/>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import Spinner from "./spinner.vue";
  import { computed, onMounted, ref } from "vue";
  import { useStore } from "vuex";
  
  const store = useStore();
  const ContactInfo = computed(() => store.state.ContactInfo);
  
  onMounted(() => {
    store.dispatch("fetchContactInfo");
  });
  </script>
  
  <style>
  
  </style>
  