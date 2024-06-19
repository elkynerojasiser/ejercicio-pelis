<template>
  <ion-app>
    <ion-page id="main-content">
      <ion-router-outlet />
    </ion-page>
  </ion-app>
</template>
<script lang="ts">
import { IonApp, IonRouterOutlet, IonPage } from "@ionic/vue";
export default {
  components: {
    IonApp, IonRouterOutlet, IonPage
  }
}
</script>
