
 <template>
  <div class="container">
    <div class="row">
        <div class="col">
            <div id="details">
                <h1 class="display-1">About</h1>
                <p v-if="about?.length">
                    <span>{{ about[0] }}</span>
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
import { computed, onMounted} from "vue"
import { useStore } from "vuex"
const store = useStore()
const about = 
computed(() => store.state.about);

onMounted(() => {
  store.dispatch("fetchAbout");
});
</script>

<style>

</style>