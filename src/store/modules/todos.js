import axios from "axios";

const API_URL = "https://jsonplaceholder.typicode.com/todos";

export default {
  namespaced: true,
  state: {
    todos: []
  },
  getters: {
    allTodos: state => state.todos,
    completeTodos: state => state.todos.filter(todo => todo.complete === true),
    completeTodoCount: (_, getters) => getters.completeTodos.length,
    incompleteTodos: state =>
      state.todos.filter(todo => todo.complete === false),
    incompleteTodoCount: (_, getters) => getters.incompleteTodos.length
  },
  actions: {
    async fetchFromApi({ commit }) {
      const response = await axios.get(API_URL);
      commit("fetchFromApi", { data: response.data });
    },
    async addTodo({ commit }, todo) {
      const response = await axios.post(API_URL, todo);
      commit("addTodo", { todo: response.data });
    }
  },
  mutations: {
    fetchFromApi(state, { data }) {
      state.todos = data;
    },
    addTodo(state, { todo }) {
      state.todos = [todo, ...state.todos];
    }
  }
};