<template>
  <div class="content">
    <img class="logo" alt="Vue logo" src="../assets/logo.png" />
    <div class="text-welcome">{{ $t("hello") }}</div>
    <div class="cards">
      <div class="card-header">
        <input
          type="text"
          autocomplete="off"
          v-model="newTask"
          @keyup.enter="addTask"
        />
        <button @click="addTask">{{ $t("Add Task") }}</button>
      </div>
      <div class="card-main">
        <p class="card-empty" v-if="!allTasksCount">
          {{ $t("No tasks yet") }}
        </p>
        <Task
          v-for="(task, index) in filteredTasks"
          :key="index"
          :task="task"
        />
      </div>
      <div class="card-footer">
        <div class="item-count">
          {{ (allTasksCount ? allTasksCount : "0") + " " + $t("items left") }}
        </div>
        <div class="list-filter">
          <div class="item-filter">
            <a
              :class="{ selected: visibility == 'all' }"
              @click="visibility = 'all'"
              >{{ $t("All") }}</a
            >
          </div>
          <div class="item-filter">
            <a
              :class="{ selected: visibility == 'active' }"
              @click="visibility = 'active'"
              >{{ $t("Active") }}</a
            >
          </div>
          <div class="item-filter">
            <a
              :class="{ selected: visibility == 'completed' }"
              @click="visibility = 'completed'"
              >{{ $t("Completed") }}</a
            >
          </div>
        </div>
      </div>
    </div>
    <div class="text-help">
      <p>{{ $t("Double-click to edit a task") }}</p>
      <p>{{ $t("Written by truongdk") }}</p>
      <p>{{ $t("Todo app use vuex and vue-i18n") }}</p>
    </div>
  </div>
</template>

<script>
import Task from "./Task.vue";
const LOCAL_STORAGE_KEY = "todo-app";
export default {
  components: {
    Task,
  },
  data: function () {
    return {
      tasks: this.$store.state.tasks,
      newTask: "",
      visibility: "all",
    };
  },
  methods: {
    addTask() {
      //map `this.addTask()` to `this.$store.dispatch('addTask', newTask)`
      let newTask = this.newTask && this.newTask.trim();
      if (!newTask) {
        return;
      }
      this.$store.dispatch("addTask", newTask);
      this.newTask = "";
    },
  },
  computed: {
    filteredTasks: function () {
      if (this.visibility == "all") {
        return this.$store.getters.getAllTasks;
      } else if (this.visibility == "completed") {
        return this.$store.getters.getDoneTasks;
      } else if (this.visibility == "active") {
        return this.$store.getters.getNotDoneTasks;
      }
      // default
      return this.$store.getters.getAllTasks;
    },
    allTasksCount() {
      return this.$store.getters.getAllTasks.length;
    },
  },
  watch: {
    //watch tasks change, so save into localStorage
    tasks: {
      deep: true,
      handler: function (newTasks) {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newTasks));
      },
    },
  },
};
</script>

<style>
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
.card-empty {
  margin: 1rem 0rem 1rem 1rem;
  font-size: 1.125rem;
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