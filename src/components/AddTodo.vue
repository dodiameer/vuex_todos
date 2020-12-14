<template>
  <form @submit.prevent="submitHandler">
    <h2>Add Todo</h2>
    <label for="todoTitle">
      <span>Title:</span>
      <input
        type="text"
        v-model="todoTitle"
        name="todoTitle"
        id="todoTitle"
        @input="errorMEssage = ''"
      />
      <span v-if="errorMessage !== ''" class="errorMessage">
        {{ errorMessage }}
      </span>
    </label>
    <button type="submit">Add Todo</button>
  </form>
</template>

<script>
import { ref } from "vue";
import { useStore } from "vuex";
export default {
  name: "AddTodo",
  setup() {
    const store = useStore();
    let todoTitle = ref("");
    let errorMessage = ref("");

    const submitHandler = () => {
      if (todoTitle.value.trim() === "") {
        errorMessage = "Title must not be blank";
        return;
      }
      const todo = {
        title: todoTitle.value,
        completed: false
      };
      store.dispatch("todos/addTodo", todo);
      todoTitle.value = "";
    };
    return {
      todoTitle,
      errorMessage,
      submitHandler
    };
  }
};
</script>

<style scoped>
form {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
h2 {
  font-size: 1.85rem;
}
form * {
  margin: 10px 0;
}
label {
  display: flex;
  width: 100%;
}
label span {
  margin-right: 8px;
}
label input {
  flex: 1;
  border: 1px solid var(--primary-contrast);
  color: var(--primary-contrast);
  border-radius: 6px;
  padding: 4px 8px;
}
span.errorMessage {
  color: rgb(250, 58, 58);
}
button {
  width: 100%;
  border: 2px solid var(--primary-contrast);
  border-radius: 6px;
  background: var(--primary-color);
  color: var(--primary-contrast);
  padding: 4px 8px;
  font-size: 0.9rem;
  cursor: pointer;
}
</style>
