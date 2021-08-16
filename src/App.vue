<template>
  <div id="app">
    <div class="header">
      <select v-model="locale">
        <option value="en">en</option>
        <option value="vi">vi</option>
      </select>
    </div>
    <div class="content">
      <img class="logo" alt="Vue logo" src="./assets/logo.png" />
      <div class="text-welcome">{{ $t("hello") }}</div>
      <div class="cards">
        <div class="card-header">
          <input type="text" name="task" id="task" />
          <button>{{ $t("Add Task") }}</button>
        </div>
        <div class="card-main">
          <task-list :tasks="tasks"></task-list>
        </div>
        <div class="card-footer">
          <div class="item-count">{{ 5 + " " + $t("items left") }}</div>
          <div class="list-filter">
            <div class="item-filter">
              <a>{{ $t("All") }}</a>
            </div>
            <div class="item-filter">
              <a>{{ $t("Active") }}</a>
            </div>
            <div class="item-filter">
              <a>{{ $t("Completed") }}</a>
            </div>
          </div>
        </div>
      </div>
      <div class="text-help">
        <p>Written by truongdk</p>
        <p>Todo use vuex and vue-i18n</p>
      </div>
    </div>
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
      tasks: [
        { name: "Do Homework", done: false },
        { name: "Do Homework", done: false },
        { name: "Do Homework", done: false },
        { name: "Do Homework", done: false },
        { name: "Do Homework", done: false },
      ],
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
  flex-direction: row-reverse;
  margin: 0.5rem 1.25rem;
}
.header > select {
  font-size: 0.8125rem;
  border: 1px solid #e6e6e6;
  padding: 0.125rem;
}
.card-header {
  border-bottom: 1px solid #e6e6e6;
  display: flex;
  align-items: center;
  padding: 1rem 0.25rem;
}
.card-header input {
  border: 1px solid #e6e6e6;
  padding: 0.5rem;
  margin-left: 1rem;
}
.card-header button {
  cursor: pointer;
  border: 0;
  font-size: 0.875rem;
  background: #48bb78;
  color: white;
  padding: 0.5rem;
  margin-left: 1rem;
}
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.logo {
  width: 8rem;
  height: 8rem;
}
.text-welcome {
  font-size: 1.5rem;
}
.cards {
  width: 30rem;
  background: #fff;
  margin: 4rem 0rem;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
}
.card-header {
  padding: 1rem 0.25rem;
}

.card-footer {
  border-top: 1px solid #e6e6e6;
  display: flex;
  align-items: center;
  padding: 1rem 0.25rem;
  color: rgba(0, 0, 0, 0.8);
}
.item-count {
  margin: 0rem 4rem 0rem 0.25rem;
}
.list-filter {
  display: flex;
  align-items: center;
}
.item-filter {
  margin: 0.25rem 0.5rem;
}
.item-filter > a {
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 0.25rem;
}
.selected {
  border: 1px solid #e6e6e6;
}
.item-filter > a:hover {
  border: 1px solid #e6e6e6;
}
.text-help {
  text-align: center;
  color: #bfbfbf;
  font-size: 0.8125rem;
}
.text-help > p {
  margin: 0.625rem 0rem;
}
</style>
