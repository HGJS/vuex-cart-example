<template>
    <div class="row">
        <div class="col-xs-6" v-for="product in products" :key="product.id">
            <app-product :product="product"></app-product>
        </div>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex';
    import Product from './Product';

    export default {
        name: 'products',
        components: {
            'app-product': Product
        },
        computed: {
            ...mapGetters({
                products: 'shop/getProducts'
            })
        }
    };
</script>

<style>
    .thumbnail img {
        width: 100%;
    }
</style>
