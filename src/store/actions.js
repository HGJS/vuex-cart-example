let timer;
export default {
    flashMessage({ commit }, message) {
        clearTimeout(timer);
        commit('setMessage', message);

        timer = window.setTimeout(() => {
            commit('clearMessage');
        }, 5000);
    }
};
