<template>
    <div class="mini-cart">
        <h3>Cart</h3>
        <ul v-if="cart.length" class="list-group">
            <app-mini-cart-item v-for="item in cart" :item="item" :key="item.id"></app-mini-cart-item>
            <li v-if="cart.length" class="list-group-item">
                <a href="#" @click.prevent="clearCart">Clear cart</a>
            </li>
        </ul>
        <p v-if="!cart.length">No items in cart</p>
    </div>
</template>

<script>
    import MiniCartItem from './MiniCartItem';
    import { mapActions, mapGetters } from 'vuex';
    export default {
        name: 'mini-cart',
        components: {
            'app-mini-cart-item': MiniCartItem
        },
        methods: {
            ...mapActions({
                clearCart: 'shop/clearCart'
            })
        },
        computed: {
            ...mapGetters({
                cart: 'shop/getCart'
            })
        }
    };
</script>

<style scoped>
    h3 {
        margin-top: 0;
        margin-bottom: 24px;
    }
</style>
