<template>
  <div class="home">
    <span>Count: {{ count }}</span>
  </div>
</template>

<script>
import { useStore } from "vuex";
import { computed } from "vue";
export default {
  name: "Home",
  setup() {
    const store = useStore();

    const count = computed(() => store.state.count);

    return {
      count
    };
  }
};
</script>
