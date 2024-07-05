<!-- <template>
  <div class="container">
    <div class="row">
      <div class="col">
        <div id="details">
          <h1 class="display-1">Education</h1>
          <div class="row gap-4" v-if="education?.length">
            <CardComp v-for="item in education" :key="item.id">
              <template #cardHeader>
                <img src="" alt="education-img"> </template>
              <template #cardBody>
                <p class="heading">{{ item.place }}</p>
                <p>{{ item.year }}</p>
                <p>{{ item.description }}</p>
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
const education = computed(() => store.state.education);

onMounted(() => {
  store.dispatch("fetchEducation");
});
</script>

<style></style> -->