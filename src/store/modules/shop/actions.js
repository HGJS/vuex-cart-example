export default {
    // add product to cart
    addToCart({ commit, dispatch }, { product, quantity }) {
        commit('addToCart', { product, quantity });
        // Show flash message
        const flashMessageContent = `Added ${product.title} to cart`;
        dispatch('flashMessage', flashMessageContent, { root: true });
    },
    // update cart
    updateCart({ commit, dispatch }, { product, quantity }) {
        commit('updateCart', { product, quantity });
        if (quantity === 0) {
            dispatch('removeFromCart', product);
        } else {
            // Show flash message
            const flashMessageContent = `Updated ${product.title} in cart`;
            dispatch('flashMessage', flashMessageContent, { root: true });
        }
    },
    // remove product from cart
    removeFromCart({ commit, dispatch }, product) {
        commit('removeFromCart', product);
        const flashMessageContent = `Removed ${product.title} from cart`;
        dispatch('flashMessage', flashMessageContent, { root: true });
    },
    // remove all products from cart
    clearCart({ commit, dispatch }) {
        commit('clearCart');
        const flashMessageContent = `Cleared cart`;
        dispatch('flashMessage', flashMessageContent, { root: true });
    },
    getCart({ commit }) {
        commit('getCart');
    }
};
