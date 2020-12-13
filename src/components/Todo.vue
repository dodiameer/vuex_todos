<template>
  <div :class="{ completed: todo.completed }">
    <span>{{ todo.title }}</span>
    <TrashcanIcon class="icon" />
  </div>
</template>

<script>
import trashcan from "@/assets/trashcan.svg";
import TrashcanIcon from "@/components/icons/TrashcanIcon.vue";
export default {
  name: "Todo",
  props: {
    todo: Object
  },
  components: {
    TrashcanIcon
  },
  setup() {
    return {
      trashcan
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
