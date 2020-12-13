import { createStore } from "vuex";
import todos from "./modules/todos";

export default createStore({
  state: {
    count: 0
  },
  mutations: {
    incrementCount(state) {
      state.count++;
    }
  },
  actions: {
    incrementCount({ commit }) {
      commit("incrementCount");
    }
  },
  modules: {
    todos
  }
});
