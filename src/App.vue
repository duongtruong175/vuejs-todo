<template>
  <div id="app">
    <div class="header">
      <select v-model="locale">
        <option value="en">en</option>
        <option value="vi">vi</option>
      </select>
    </div>
    <TaskList />
  </div>
</template>

<script>
import TaskList from "./components/TaskList.vue";
export default {
  name: "App",
  components: { TaskList },
  data() {
    return {
      locale: "en",
    };
  },
  watch: {
    // watch locale variable change
    locale(val) {
      this.$i18n.locale = val;
    },
  },
};
</script>

<style>
body {
  box-sizing: border-box;
  background: #eee;
}
#app {
  margin: 0.25rem;
}
.header {
  display: flex;
  align-items: center;
  flex-direction: row-reverse;
  margin: 0.5rem 1.25rem;
}
.header > select {
  font-size: 1rem;
  border: 1px solid #e6e6e6;
  padding: 0.125rem;
}
</style>
