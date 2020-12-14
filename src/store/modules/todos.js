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
    },
    async updateTodo({ commit }, todo) {
      const response = await axios.put(`${API_URL}/${todo.id}`, todo);
      commit("updateTodo", { todo: response.data });
    },
    async deleteTodo({ commit }, id) {
      await axios.delete(`${API_URL}/${id}`);
      commit("deleteTodo", { id: id });
    }
  },
  mutations: {
    fetchFromApi(state, { data }) {
      state.todos = data;
    },
    addTodo(state, { todo }) {
      state.todos = [todo, ...state.todos];
    },
    updateTodo(state, { todo }) {
      const todoIdx = state.todos.findIndex(t => t.id === todo.id);
      if (todoIdx === -1) {
        return;
      }
      state.todos.splice(todoIdx, 1, todo);
    },
    deleteTodo(state, { id }) {
      state.todos = state.todos.filter(todo => todo.id !== id);
    }
  }
};
