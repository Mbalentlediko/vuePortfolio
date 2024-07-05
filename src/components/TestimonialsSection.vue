<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <div id="details">
          <h1 class="display-1">Testimonials</h1>
          <div class="row gap-4" v-if="testimonials?.length">
            <div
              class="card project-card"
              v-for="(item, index) in testimonials"
              :key="index"
              data-aos="fade-up"
            >
              <div>
                <img :src="item.profile" alt="testimonial-img" />
              </div>
              <div>
                <p class="heading">{{ item.name }} {{ item.surname }}</p>
                <p>{{ item.quotes }}</p>
              </div>
            </div>
          </div>
          <Spinner v-else />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
//Displays job title within an array , just like an animatuon
import Spinner from "./spinner.vue";
import { computed, onMounted } from "vue";
import { useStore } from "vuex";

const store = useStore();
const testimonials = computed(() => store.state.testimonials);

onMounted(() => {
  store.dispatch("fetchTestimonials");
});
</script>

<style scoped>
.project-card{
    height:30rem;
}
.card{
    width:15rem;
    background-color: lightblue;
}
/* h1{
    color: powderblue;
} */
</style>
