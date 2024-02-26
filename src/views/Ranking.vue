<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-title>BIBLIOTHEQUE DE DAT ET WASSIM</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <RankingPage />
    </ion-content>
    <ion-foot>
      <ion-toolbar>
        <TheMenu></TheMenu>
      </ion-toolbar>
    </ion-foot>
  </ion-page>
</template>

<script setup lang="ts">
import { computed, defineComponent } from 'vue';
import { IonContent, IonPage } from '@ionic/vue';
import { useStore } from 'vuex';
import TheMenu from '../components/Menu.vue';
import RankingPage from '@/components/rankingPage/RankingPage.vue';
const store = useStore();
const articles = computed(() => store.getters.getArticles);
defineComponent({
  components: {
    TheMenu,
  },
});
</script>

<style scoped>
#container {
  text-align: center;

  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}

#container strong {
  font-size: 20px;
  line-height: 26px;
}

#container p {
  font-size: 16px;
  line-height: 22px;

  color: #8c8c8c;

  margin: 0;
}

#container a {
  text-decoration: none;
}
</style>
