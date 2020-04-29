<template>
    <div class="row">
        <div class="col-sm-4 col-sm-push-8">
            <app-mini-cart></app-mini-cart>
        </div>
        <div class="col-sm-8 col-sm-pull-4">
            <app-products></app-products>
        </div>
    </div>
</template>

<script>
    // import axios from 'axios';
    import MiniCart from '@/components/common/MiniCart';
    import Products from '@/components/shop/Products';

    export default {
        name: 'home',
        components: {
            'app-mini-cart': MiniCart,
            'app-products': Products
        }
    };
</script>
