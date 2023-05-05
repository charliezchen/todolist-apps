<template>
<div class="home-page">
    <div class="project-panel">
    <h2>Projects</h2>
    <form @submit.prevent="addProject">
        <input v-model="newProjectName" placeholder="New project name" required />
        <button type="submit">Add Project</button>
    </form>
    <project-list :projects="projects" @select-project="selectProject"></project-list>
    </div>
    <div class="todo-panel">
    <todo-list
    v-if="selectedProject"
    :todos="selectedProject.todos"
    @toggle-todo="toggleTodo"
    @add-todo="addTodoToSelectedProject"
    ></todo-list>

    </div>
</div>
</template>
  
  
<script>
import ProjectList from '@/components/ProjectList.vue';
import TodoList from '@/components/TodoList.vue';

export default {
  name: 'HomePage',
  components: {
    ProjectList,
    TodoList,
  },
  data() {
    return {
      projects: [], // Fetch projects from your Vuex store or API
      selectedProject: null,
      newProjectName: '',
    };
  },
  
  methods: {
    selectProject(project) {
      this.selectedProject = project;
    },
    toggleTodo(todo, completed) {
        todo.completed = completed;
        // Update the todo item and progress in the Vuex store or API
    },
    addProject() {
      // You can replace this with a Vuex action or API call to create the new project
      const newProject = {
        id: Date.now(),
        name: this.newProjectName,
        percentage: 0,
        todos: [],
      };
      this.projects.push(newProject);
      this.newProjectName = '';
    },
    addTodoToSelectedProject(newTodo) {
        if (this.selectedProject) {
        this.selectedProject.todos.push(newTodo);
        }
    },
  },
};
</script>

  
  <style scoped>
  .home-page {
    display: flex;
    flex-direction: column;
    height: 100%;
  }
  
  .project-panel {
    flex: 1;
  }
  
  .todo-panel {
    flex: 1;
  }
  </style>
  