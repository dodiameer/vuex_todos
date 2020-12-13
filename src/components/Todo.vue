<template>
  <div :class="{ completed: todo.completed }" @dblclick="toggleTodo">
    <span>{{ todo.title }}</span>
    <TrashcanIcon class="icon" />
  </div>
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
    return {
      toggleTodo
    };
  }
};
</script>

<style scoped>
div {
  background: var(--primary-color);
  color: var(--primary-contrast);
  padding: 8px 12px;
  border-radius: 8px;
  position: relative;
  user-select: none;
}
.completed {
  background: var(--primary-contrast);
  color: var(--primary-color);
}
.icon {
  width: 22px;
  height: 22px;
  position: absolute;
  bottom: 4px;
  right: 4px;
  color: inherit;
  cursor: pointer;
}
</style>
