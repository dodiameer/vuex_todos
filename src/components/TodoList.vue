<template>
  <div>
    <label for="showDoneOnly">
      Show completed tasks only?
      <input
        type="checkbox"
        name="showDoneOnly"
        id="showDoneOnly"
        v-model="showDoneOnly"
      />
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
    const showDoneOnly = ref(false);
    const todos = computed(() => {
      if (showDoneOnly.value) {
        return store.getters["todos/completeTodos"];
      }
      return store.getters["todos/allTodos"];
    });
    return {
      todos,
      showDoneOnly
    };
  }
};
</script>

<style scoped>
div.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  margin: 1rem 0;
  gap: 0.5rem;
}
</style>
