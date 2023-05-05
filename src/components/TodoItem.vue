<template>
    <div class="todo-item">
    <input type="checkbox" :id="todo.id" :checked="isChecked" @input="toggle" />

      <label :for="todo.id">{{ todo.title }}</label>
    </div>
  </template>
  
  <script>
  export default {
    name: 'TodoItem',
    props: {
      todo: Object,
    },
    data() {
      return {
        isChecked: this.todo.completed,
      };
    },
    watch: {
      todo: {
        handler(newVal) {
          this.isChecked = newVal.completed;
        },
        deep: true,
      },
    },
    methods: {
      toggle() {
        this.isChecked = !this.isChecked;
        this.$emit('toggle', this.todo, this.isChecked);
      },
    },
  };
  </script>
  
  
  <style scoped>
  .todo-item {
    display: flex;
    align-items: center;
  }
  
  input[type='checkbox'] {
    margin-right: 0.5rem;
  }
  </style>
  