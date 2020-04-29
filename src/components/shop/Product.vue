<template>
    <div class="thumbnail">
        <img :src="product.image" :alt="product.title" />
        <div class="caption">
            <h3>{{ product.title }} - {{ product.price | currency }}</h3>
            <p>{{ product.description }}</p>
            <div class="row">
                <div class="col-xs-12 form-group">
                    <button
                        class="btn btn-success btn-block"
                        role="button"
                        @click="addToCart({ product, quantity: numberQuantity })"
                    >
                        Add to cart
                    </button>
                </div>
                <div class="col-xs-12">
                    <input class="form-control" type="number" min="1" v-model="quantity" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { mapActions } from 'vuex';
    export default {
        data() {
            return {
                quantity: 1
            };
        },
        props: {
            product: Object
        },
        methods: {
            ...mapActions({
                addToCartAction: 'shop/addToCart'
            }),
            addToCart(product) {
                this.addToCartAction(product);
                this.quantity = 1;
            }
        },
        computed: {
            numberQuantity() {
                const parsed = parseInt(this.quantity);
                if (isNaN(parsed)) {
                    return 1;
                }
                return parsed;
            }
        }
    };
</script>
