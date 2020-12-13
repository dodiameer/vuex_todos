<template>
  <div class="home">
    <counter />
  </div>
</template>

<script>
import Counter from "@/components/Counter.vue";
export default {
  name: "Home",
  components: {
    Counter
  }
};
</script>

<style scoped>
.home {
  width: 100%;
  height: 50vh;
  display: grid;
  place-items: center;
}
</style>
