<template>
    <div id="app">
      <router-view></router-view>
    </div>
  </template>
  
  <script>
  export default {
    name: 'App',
  };
  </script>
  
  <style>
  #app {
    /* Add your global CSS styles here */
    height: 100vh;
    display: flex;
    flex-direction: column;
  }
  </style>
  