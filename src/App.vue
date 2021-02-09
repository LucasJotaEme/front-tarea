<template>
  <div id="app">
    <Header></Header>
    <Home></Home>
  </div>

</template>

<script>

import Header from './components/Header.vue'
import Home from './components/Home.vue'
import jQuery from 'jquery';


let $ = jQuery;

export default {
  name: 'App',
  components: {
    Header,
    Home    
  },
  mounted: function () {
    var marginDiv = $('.marginDiv').hide();
    var navbar = $('nav').hide();
    marginDiv.slideDown(800);
    navbar.slideDown(200);
  }
}

</script>

<style>
  @import './assets/css/styles.css';
</style>
