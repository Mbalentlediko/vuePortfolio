<template>
  <div class="container contact-container">
    <div class="row mt-5">
      <div class="col">
        <div id="contact">
          <h1 class="display-1">Get in Touch with me </h1>
          <div v-if="contact?.length">
            <p>{{ contact[0].address }}</p>
            <p>{{ contact[0].phone }}</p>
            <p>{{ contact[0].email }}</p>
            <h2>Or you can leave a message</h2>
            <div>
              <form action=" ">
                <input type="text" placeholder="name">
                <input type="text" placeholder="email">
                <input type="text" placeholder="Message">
                <button type="submit">Send</button>
              </form>
            </div>
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
  store.dispatch("fetchContactInfo");
});
</script>

<!-- <style scoped>
.contact-container {
  border: 5px solid lime; /* Outer container border */
  background-color: rgb(145, 225, 145); /* Background color of the outer container */
  border-radius: 4rem; /* Border radius of the outer container */
  padding: 0;
  margin-top: 20px;
}

#contact {
  border: 2px solid lime; /* Inner contact section border */
  padding: 10px; /* Padding inside the contact section */
}

#contact h1,
#contact p,
#contact h2,
#contact input,
#contact button {
  color: #32CD32; /* Different shade of lime for content */
}

#contact input,
#contact button {
  display: block;
  margin: 10px 0; /* Margin for form elements */
}
</style> -->
