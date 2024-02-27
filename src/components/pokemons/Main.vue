<script>
import { API_URLS } from '../services/apiUrls.js';
import apiService from '../services/apiService.js';
import CardPokemon from './CardPokemon.vue';

export default {
    data() {
        return {
            pokemons: [],
            page: 1,
            totalPages: null
        }
    },
    components: {
        CardPokemon
    },
    methods: {
        async getPokemonList() {
            const response = await apiService.get(API_URLS.getList, {});
            this.pokemons = response.docs;
            this.page = response.page;
            this.totalPages = response.totalPages;
        }
    },
    created() {
        this.getPokemonList();
    }
}
</script>


<template>
    <div class="bg-danger py-5">
        <div class="row">
            <div class="col-8 container-card offset-2">
                <div class="row flex-wrap">
                    <div class="col-2" v-for="pokemon in pokemons">
                        <CardPokemon :pokemon="pokemon" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>



<style lang="scss">
.container-card {
    background-color: gray;
    padding: 1.5em;
}
</style>