<script setup lang="ts">
import { IonSpinner, IonCard } from '@ionic/vue';
import { onMounted } from '@vue/runtime-core';
import { computed, ref } from 'vue';
// import sleep from "../../utils/sleep";
import { getBooks, sendData } from '../../../src/composable/useApi';
import { CFA_STUDENTS_HOST } from '../../stores/host';
// import BookCard from '../base/BookCard.vue';
/* INITIAL VARIABLE */
const isLoading = ref(true);
let booksData: any;

/* ----------- MOUNTED ---------- */
onMounted(async () => {
  isLoading.value = true;
  try {
    booksData = await sendData(CFA_STUDENTS_HOST + '/suggestion', {
      last_search: localStorage.getItem('last_search'),
    });
    isLoading.value = false;
  } catch (e: any) {
    console.log(e);
  }
});

/* ----------- COMPUTED ----------- */
const suggestionData = computed(() => {
  if (!isLoading.value) {
    return booksData;
  }
  return [];
});
</script>

<template>
  <div>
    <div class="book-loading" v-if="isLoading">
      <ion-spinner name="lines-sharp"></ion-spinner>
    </div>
    <div v-else>
      <div>
        <!-- <h3>Suggestion</h3> -->
        <div class="book-cards" v-if="suggestionData.length !== 0">
          <ion-card v-for="item in suggestionData" :key="item.id">
            <BookCard :data="item" />
          </ion-card>
        </div>
        <div v-else class="error-search">
          <h4>No suggestion for now.</h4>
        </div>
      </div>
    </div>
  </div>
</template>
