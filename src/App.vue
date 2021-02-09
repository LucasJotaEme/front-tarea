<template>
  <div id="app">
    <Header></Header>
    <Sidebar></Sidebar>
    <router-view></router-view>
  </div>

</template>

<script>

import Header from './components/Header.vue'
import Sidebar from './components/Sidebar.vue'
import jQuery from 'jquery';

let $ = jQuery;


export default {
  name: 'App',
  components: {
    Header,
    Sidebar
    
  },
  mounted: function () {
    var marginDiv = $('.marginDiv').hide();
    var navbar = $('nav').hide();

    marginDiv.slideDown(500);
    navbar.slideDown(200);
  }
}

</script>

<style>
  @import './assets/css/styles.css';
</style>
