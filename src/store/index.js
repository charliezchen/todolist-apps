import { createStore } from 'vuex';

export default createStore({
  state: {
    projects: [], // Sample projects data
    todos: [], // Sample todos data
  },
  mutations: {
    // Define your mutations to update the state here
  },
  actions: {
    // Define your actions to commit mutations or perform async tasks here
  },
  getters: {
    // Define your getters to access derived state or filtered data here
  },
});
