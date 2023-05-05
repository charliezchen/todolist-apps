<template>
    <div class="progress-bar">
      <div class="progress" :style="{ width: progress + '%' }"></div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ProgressBar',
    props: {
      progress: Number,
    },
  };
  </script>
  
  <style scoped>
  .progress-bar {
    width: 100%;
    height: 10px;
    background-color: #f3f3f3;
    border-radius: 3px;
    overflow: hidden;
  }
  
  .progress {
    height: 100%;
    background-color: #4caf50;
  }
  </style>
  