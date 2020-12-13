<template>
  <div>
    <todo v-for="todo in todos" :key="todo.id" :todo="todo" />
  </div>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";
import Todo from "@/components/Todo";
export default {
  name: "TodoList",
  components: {
    Todo
  },
  setup() {
    const store = useStore();
    const todos = computed(() => store.getters["todos/allTodos"]);
    return {
      todos
    };
  }
};
</script>

<style scoped>
div {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  margin: 1rem 0;
  gap: 0.5rem;
}
</style>
