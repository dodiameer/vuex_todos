<template>
  <div class="home">
    <counter class="count" />
    <todo-list />
  </div>
</template>

<script>
import Counter from "@/components/Counter.vue";
import { useStore } from "vuex";
import TodoList from "@/components/TodoList.vue";
export default {
  name: "Home",
  components: {
    Counter,
    TodoList
  },
  setup() {
    const store = useStore();
    store.dispatch("todos/fetchFromApi");
  }
};
</script>

<style scoped>
.home {
  width: 100vw;
  height: 50vh;
  display: grid;
  padding: 1rem;
}

.count {
  width: 160px;
  margin: 0 auto;
}
</style>
