<template>
  <div id="app">
    <app-top-header></app-top-header>
    <app-message></app-message>
    <div class="container-fluid">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  import TopHeader from '@/components/common/TopHeader';
  import Message from '@/components/common/Message';
  export default {
    name: 'app',
    components: {
      'app-top-header': TopHeader,
      'app-message': Message
    },
    created() {
      this.$store.commit('shop/getOnLoadCart');
    }
  };
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    color: #2c3e50;
  }
</style>
