<template>
  <div class="counter">
    <span>Count: {{ count }}</span>
    <button @click="incrementCount">+1</button>
  </div>
</template>

<script>
import { useStore } from "vuex";
import { computed } from "vue";
export default {
  name: "Counter",
  setup() {
    const store = useStore();
    const count = computed(() => store.state.count);
    const incrementCount = () => store.dispatch("incrementCount");

    return {
      count,
      incrementCount
    };
  }
};
</script>

<style scoped>
.counter {
  display: flex;
  flex-direction: column;
}
button {
  border: none;
  border-radius: 8px;
  background: var(--primary-color);
  color: var(--primary-contrast);
  padding: 4px 8px;
  margin-top: 8px;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.15);
  transition: box-shadow 0.2s ease;
}

button:hover {
  box-shadow: 0px 5px 8px rgba(0, 0, 0, 0.25);
}
</style>
