export default {
    // products
    getProducts(state) {
        return state.products;
    },

    // cart
    getCart(state) {
        return state.cart;
    },

    // cart item count
    getCartItemCount(state) {
        return state.cart.reduce((total, currentCartItem) => {
            return total + currentCartItem.quantity;
        }, 0);
    },

    // cart total
    getCartTotal(state) {
        return state.cart.reduce((total, currentCartItem) => {
            return total + currentCartItem.price * currentCartItem.quantity;
        }, 0);
    }
};
