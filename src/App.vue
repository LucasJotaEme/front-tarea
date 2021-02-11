<template>
  <div id="app">
    <Header></Header>
    <router-view></router-view>
  </div>

</template>

<script>  

import Header from './components/Header.vue'
import jQuery from 'jquery';

let $ = jQuery;


export default {
  name: 'App',
  components: {
    Header
  },
  mounted: function () {
    var marginDiv = $('.marginDiv').hide();
    var test = $('#test').hide();
    var navbar = $('nav').hide();
    marginDiv.slideDown(800);
    navbar.slideDown(200);
    test.hide();

  }
}

</script>

<style>
  @import './assets/css/styles.css';
</style>
