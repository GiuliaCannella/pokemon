<script>
import { API_URLS } from '../services/apiUrls.js';
import apiService from '../services/apiService.js';
import CardPokemon from './CardPokemon.vue';

export default {
    data() {
        return {
            pokemons: [],
            page: 1,
            totalPages: null,
            pagesToShow: 10
        }
    },
    components: {
        CardPokemon
    },
    methods: {
        async getPokemonList(page) {
            let params = {
                page: page,
            }
            const response = await apiService.get(API_URLS.getList, params);
            this.pokemons = response.docs;
            this.page = response.page;
            this.totalPages = response.totalPages;
        },
        changePage(pageNumber) {
            this.getPokemonList(pageNumber);
        },
    },
    created() {
        this.getPokemonList();
    },
    computed: {
        displayedPages() {
            const startPage = Math.max(1, this.page - Math.floor(this.pagesToShow / 2));
            const endPage = Math.min(this.totalPages, startPage + this.pagesToShow - 1);
            const pages = [];
            for (let i = startPage; i <= endPage; i++) {
                pages.push(i);
            }
            return pages;
        },
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
            <div class="col-12 d-flex justify-content-center mt-3">
                <nav aria-label="Page navigation example">
                    <ul class="pagination">
                        <li class="page-item">
                            <a class="page-link" @click="changePage(page - 1)" :disabled="page == 1" href="#"
                                aria-label="Previous">
                                <span aria-hidden="true">&laquo;</span>
                            </a>
                        </li>
                        <li class="page-item" v-for="pageNumber in displayedPages" :key="pageNumber">
                            <a class="page-link" href="#" @click="changePage(pageNumber)">{{ pageNumber }}</a>
                        </li>
                        <li class="page-item">
                            <a class="page-link" href="#" @click="changePage(page + 1)" :disabled="page == totalPages"
                                aria-label="Next">
                                <span aria-hidden="true">&raquo;</span>
                            </a>
                        </li>
                    </ul>
                </nav>
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