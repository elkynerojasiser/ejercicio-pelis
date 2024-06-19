<template>
  <header-app :title="title"/>
  <ion-title size="large">
    Géneros
  </ion-title>
  <ion-row>
    <ion-col v-for="genre in genres">
      <ion-card>
        <ion-card-content>
          {{ genre.name }}
        </ion-card-content>
      </ion-card>
    </ion-col>
  </ion-row>
</template>

<script lang="ts">
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/vue';
import HeaderApp from '@/components/HeaderApp.vue'
import MovieServices from '@/services/MovieServices'
export default {
  name: 'HomePage',
  components: {
    IonTitle,HeaderApp
  },
  data(){
    return {
      title: 'Home',
      genres: []
    }
  },
  async created() {
    this.genres = await MovieServices.getGenrers()
    console.log(this.genres)
  }
}
</script>

<style scoped>

</style>
