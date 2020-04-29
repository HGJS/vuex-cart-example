<template>
    <li class="list-group-item">
        <div class="list-top-wrap">
            <img :src="item.image" :alt="item.title" />
            <p>
                {{ item.quantity }} x {{ item.title }}<br />
                @ {{ item.price | currency }} each
            </p>
        </div>
        <div class="form-group">
            <input type="number" min="0" class="form-control" v-model="quantity" />
        </div>
        <div class="row">
            <div class="col-xs-6">
                <button
                    class="btn btn-primary btn-block"
                    @click="updateCart({ product: item, quantity: numberQuantity })"
                    :disabled="numberQuantity === item.quantity"
                >
                    Update
                </button>
            </div>
            <div class="col-xs-6">
                <button class="btn btn-danger btn-block" @click="removeFromCart(item)">Remove</button>
            </div>
        </div>
    </li>
</template>

<script>
    import { mapActions } from 'vuex';
    export default {
        data() {
            return {
                quantity: this.item.quantity
            };
        },
        props: {
            item: Object
        },
        methods: {
            ...mapActions({
                removeFromCart: 'shop/removeFromCart',
                updateCart: 'shop/updateCart'
            })
        },
        watch: {
            item: {
                immediate: true,
                deep: true,
                handler(updated) {
                    this.quantity = updated.quantity;
                }
            }
        },
        computed: {
            numberQuantity() {
                if (this.quantity === '') {
                    return 0;
                }

                const parsed = parseInt(this.quantity);

                if (isNaN(parsed)) {
                    return 1;
                }

                return parsed;
            }
        }
    };
</script>

<style scoped>
    .list-top-wrap {
        display: flex;
    }

    li img {
        margin-right: 15px;
        width: 60px;
        height: 60px;
        margin-bottom: 15px;
    }

    li p {
        font-size: 16px;
        margin-bottom: 15px;
    }
</style>
