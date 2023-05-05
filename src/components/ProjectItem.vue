<template>
    <li class="project-item" @click="$emit('click')">
      <div class="project-name">{{ project.name }}</div>
      <progress-bar :progress="progress"></progress-bar>

    </li>
  </template>
  
  <script>
  import ProgressBar from './ProgressBar.vue';
  
  export default {
    name: 'ProjectItem',
    components: {
      ProgressBar,
    },
    props: {
      project: Object,
    },
    computed: {
        progress() {
        if (!this.project || this.project.todos.length === 0) {
            return 0;
        }

        const completedTodos = this.project.todos.filter((todo) => todo.completed).length;
        console.log("Complete todos");
        console.log((completedTodos / this.project.todos.length) * 100);
        return (completedTodos / this.project.todos.length) * 100;
        },
    },
    watch: {
        'project.todos': {
        handler() {
            console.log("todo changed");
            const t = this.project.todos.filter((todo) => todo.completed).length;
            console.log(t);
            this.$forceUpdate();
        },
        deep: true,
        },
    },
  };
  </script>
  