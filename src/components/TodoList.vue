<template>
<div class="todo-list">
    <h2>Todo Items</h2>
    <form @submit.prevent="addTodo">
    <input v-model="newTodoTitle" placeholder="New todo item" required />
    <button type="submit">Add Todo</button>
    </form>
    <ul>
    <li v-for="todo in todos" :key="todo.id">
        <todo-item :todo="todo" @toggle="toggleTodo"></todo-item>
    </li>
    </ul>
</div>
</template>
  
  
<script>
import TodoItem from './TodoItem.vue';

export default {
  name: 'TodoList',
  components: {
    TodoItem,
  },
  props: {
    todos: Array,
  },
  data() {
    return {
      newTodoTitle: '',
    };
  },
  methods: {
    toggleTodo(todo, isChecked) {
      this.$emit('toggle-todo', todo, isChecked);
    },
    addTodo() {
        // You can replace this with a Vuex action or API call to create the new todo item
        const newTodo = {
        id: Date.now(),
        title: this.newTodoTitle,
        completed: false,
        };
        this.$emit('add-todo', newTodo);
        this.newTodoTitle = '';
    },
  },
};
</script>


<style scoped>
.todo-list {
/* Add your CSS styles here */
}
</style>
