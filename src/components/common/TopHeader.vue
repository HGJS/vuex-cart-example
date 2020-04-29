<template>
    <header class="header">
        <div class="container-fluid">
            <div class="row">
                <div class="col-sm-6">
                    <p>
                        <strong>Vuex Shopping Cart</strong>
                    </p>
                </div>
                <div class="col-sm-6">
                    <p class="text-right" v-if="cartTotalItems !== 0">
                        {{ cartTotalItems }} item{{ cartTotalItems === 1 ? '' : 's' }} in cart ({{
                            cartTotal | currency
                        }})
                    </p>
                </div>
            </div>
        </div>
    </header>
</template>

<script>
    import { mapGetters } from 'vuex';
    export default {
        name: 'top-header',
        computed: {
            ...mapGetters({
                cartTotalItems: 'shop/getCartItemCount',
                cartTotal: 'shop/getCartTotal'
            })
        }
    };
</script>

<style>
    .header {
        background-color: #222;
        color: #fff;
        padding: 20px;
        margin-bottom: 80px;
    }

    .header p {
        margin-bottom: 0;
    }
</style>
