<template>
  <div class="home">
    <add-todo class="form" />
    <todo-list />
  </div>
</template>

<script>
import TodoList from "@/components/TodoList.vue";
import AddTodo from "@/components/AddTodo.vue";
export default {
  name: "Home",
  components: {
    TodoList,
    AddTodo
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

.form {
  width: 260px;
  margin: 0 auto;
}
</style>
