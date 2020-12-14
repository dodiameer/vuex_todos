<template>
  <div>
    <label for="showWhichTodos">
      Show which todos?
      <select
        name="showWhichTodos"
        id="showWhichTodos"
        v-model="showWhichTodos"
      >
        <option value="all">All Todos</option>
        <option value="completed">Completed Todos</option>
        <option value="incompleted">Incompleted Todos</option>
      </select>
    </label>
    <br />
    <br />
    <label for="limitTodos">
      Limit todos to
      <select name="limitTodos" id="limitTodos" v-model="limitTodos">
        <option value="25">25</option>
        <option value="10">10</option>
        <option value="5">5</option>
      </select>
      todo
    </label>
    <div class="grid">
      <todo v-for="todo in todos" :key="todo.id" :todo="todo" />
    </div>
  </div>
</template>

<script>
import { computed, ref } from "vue";
import { useStore } from "vuex";
import Todo from "@/components/Todo";
export default {
  name: "TodoList",
  components: {
    Todo
  },
  setup() {
    const store = useStore();
    const showWhichTodos = ref("all");
    const limitTodos = ref("25");

    const todos = computed(() => {
      switch (showWhichTodos.value) {
        case "all":
          return store.getters["todos/allTodos"].slice(
            0,
            parseInt(limitTodos.value)
          );
        case "completed":
          return store.getters["todos/completeTodos"].slice(
            0,
            parseInt(limitTodos.value)
          );
        case "incompleted":
          return store.getters["todos/incompleteTodos"].slice(
            0,
            parseInt(limitTodos.value)
          );
      }
    });
    return {
      todos,
      showWhichTodos,
      limitTodos
    };
  }
};
</script>

<style scoped>
div {
  margin-top: 1.5rem;
}
div.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  margin: 1rem 0;
  gap: 0.5rem;
}
select {
  border: 1px solid var(--primary-contrast);
  color: var(--primary-contrast);
  border-radius: 6px;
  padding: 4px 8px;
}
</style>
