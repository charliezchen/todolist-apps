<template>
    <div class="project-list">
      <h2>Projects</h2>
      <ul>
        <project-item
          v-for="project in projects"
          :key="project.id"
          :project="project"
          @click="selectProject(project)"
        ></project-item>
      </ul>
    </div>
  </template>
  
  <script>
  import ProjectItem from './ProjectItem.vue';
  
  export default {
    name: 'ProjectList',
    components: {
      ProjectItem,
    },
    props: {
      projects: Array,
    },
    methods: {
      selectProject(project) {
        this.$emit('select-project', project);
      },
    },
  };
  </script>
  