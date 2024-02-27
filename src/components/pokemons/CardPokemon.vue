<script>

export default {
    data() {
        return {
        }
    },
    props: {
        pokemon: Object
    },
    methods: {
    },
}
</script>


<template>
    <div class="card-pokemon text-center">
        <img :src="pokemon.imageUrl" alt="">
        <p class="number ">{{ pokemon.number }}</p>
        <p class="nome">{{ pokemon.name }}</p>
        <p class="categoria">{{ pokemon.type1 }}</p>
    </div>
</template>



<style lang="scss">
.card-pokemon {
    width: 100%;
    height: 250px;
    margin-bottom: 2em;
    padding: 1em;
    border-radius: 5px;
    background-color: white;

    &:hover {
        cursor: pointer;
        scale: 1.1;
    }

    img {
        border-radius: 50%;
        width: 80%;
    }

}
</style>