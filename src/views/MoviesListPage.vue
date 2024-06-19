<template>
    <header-app title="Listado"/>
    <ion-title size="large">Listado</ion-title>
</template>
<script lang="ts">
import HeaderApp from '@/components/HeaderApp.vue'
import { useRoute } from 'vue-router'
import MovieServices from '@/services/MovieServices'
import {IonTitle} from '@ionic/vue'
export default {
    name: 'MoviesListPage',
    components: {
        HeaderApp,
        IonTitle
    },
    data() {
        return {
            genre_id : 1,
            page: 1,
            movies: []
        }
    },
    async created(){
        const route = useRoute()
        this.genre_id = route.params.genre_id
        await this.getMovies()
    },
    methods: {
        async getMovies(){
            this.movies = await MovieServices.getMoviesFilteredByGenre(this.genre_id,this.page)
            console.log('movies', this.movies)
        }
    }
    
}

</script>
<style></style>