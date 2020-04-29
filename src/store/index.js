import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import state from './state';
import getters from './getters';
import mutations from './mutations';
import actions from './actions';

import shop from './modules/shop';

export default new Vuex.Store({
    state,
    getters,
    mutations,
    actions,
    modules: {
        shop
    }
});
