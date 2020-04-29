import Vue from 'vue';
import App from './App';
import router from './router';
import store from './store';

Vue.config.productionTip = false;

Vue.filter('currency', function(value) {
  if (value) {
    return `£${value.toLocaleString(undefined, {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    })}`;
  }
});

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
});
