export default {
    // clear cart
    clearCart(state) {
        state.cart = [];
        sessionStorage.removeItem('cart');
    },
    // remove from cart
    removeFromCart(state, product) {
        // CHECK ITEM ALREADY IN CART
        const existing = state.cart.find((item) => {
            return item.id === product.id;
        });

        if (!existing) {
            return;
        }

        if (existing) {
            state.cart = state.cart.filter((item) => {
                return item.id !== product.id;
            });
        }

        sessionStorage.setItem('cart', JSON.stringify(state.cart));
    },
    // add to cart
    addToCart(state, { product, quantity }) {
        // CHECK ITEM ALREADY IN CART
        const existing = state.cart.find((item) => {
            return item.id === product.id;
        });

        if (existing) {
            // IF ALREADY IN CART ADD TO QUANTITY
            existing.quantity += quantity;
        } else {
            // CREATE NEW ITEM AND ADD TO TOP OF CART ITEMS LIST
            state.cart.push({
                ...product,
                quantity: quantity
            });
        }
        sessionStorage.setItem('cart', JSON.stringify(state.cart));
    },
    // update cart
    updateCart(state, { product, quantity }) {
        // CHECK ITEM ALREADY IN CART
        const existing = state.cart.find((item) => {
            return item.id === product.id;
        });

        if (!existing) {
            return;
        }

        // IF ALREADY IN CART ADD TO QUANTITY
        existing.quantity = quantity;

        sessionStorage.setItem('cart', JSON.stringify(state.cart));
    },
    getOnLoadCart(state) {
        const cart = JSON.parse(sessionStorage.getItem('cart'));
        if (cart) {
            state.cart = cart;
        } else {
            state.cart = [];
        }
    }
};
