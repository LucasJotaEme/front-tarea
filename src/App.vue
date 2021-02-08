<template>
  <div id="app">
    <Header></Header>
    <Sidebar></Sidebar>
  </div>

</template>

<script>

import Header from './components/Header.vue'
import Sidebar from './components/Sidebar.vue'
import './assets/js/home'

export default {
  name: 'App',
  components: {
    Header,
    Sidebar
    
  }
}

</script>

<style>
  @import './assets/css/styles.css';
</style>
