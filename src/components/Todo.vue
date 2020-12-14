<template>
  <button
    :class="{ completed: todo.completed }"
    @click="toggleTodo"
    class="container"
  >
    <span>{{ todo.title }}</span>
    <button @click="deleteTodo" class="icon">
      <TrashcanIcon />
    </button>
  </button>
</template>

<script>
import TrashcanIcon from "@/components/icons/TrashcanIcon.vue";
import { useStore } from "vuex";
export default {
  name: "Todo",
  props: {
    todo: Object
  },
  components: {
    TrashcanIcon
  },
  setup(props) {
    const store = useStore();

    const toggleTodo = () => {
      const newTodo = { ...props.todo };
      newTodo.completed = !newTodo.completed;
      store.dispatch("todos/updateTodo", newTodo);
    };

    const deleteTodo = () => {
      store.dispatch("todos/deleteTodo", props.todo.id);
    };

    return {
      toggleTodo,
      deleteTodo
    };
  }
};
</script>

<style scoped>
.container {
  background: var(--primary-color);
  color: var(--primary-contrast);
  padding: 12px;
  border-radius: 8px;
  position: relative;
  border: none;
  user-select: none;
  font-size: inherit;
  text-align: unset;
}
.completed {
  background: var(--primary-contrast);
  color: var(--primary-color);
}
span {
  margin-right: 8px;
}
.icon {
  width: 22px;
  height: 22px;
  position: absolute;
  bottom: 4px;
  right: 4px;
  color: inherit;
  cursor: pointer;
  border: none;
  background: none;
}
.completed .icon:focus {
  outline-color: var(--primary-color);
}
</style>
