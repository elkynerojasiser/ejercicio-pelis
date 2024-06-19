<template>
  <header-app :title="title"/>
  <ion-title size="large">Home</ion-title>
</template>

<script lang="ts">
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/vue';
import HeaderApp from '@/components/HeaderApp.vue'
export default {
  name: 'HomePage',
  components: {
    IonTitle,HeaderApp
  },
  data(){
    return {
      title: 'Home'
    }
  }
}
</script>

<style scoped>

</style>
