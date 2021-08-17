<template>
  <div class="task">
    <div :class="{ hidden: editedTask }">
      <div class="view">
        <input class="check" type="checkbox" v-model="task.done" />
        <label @dblclick="editTask(task)" :class="{ done: task.done }">
          {{ task.name }}
        </label>
        <div class="destroy" @click="deleteTask(task)">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </div>
      </div>
    </div>
    <input
      :class="{ hidden: !editedTask }"
      class="edit"
      type="text"
      v-model="task.name"
      v-task-focus="task == editedTask"
      @blur="doneEdit(task)"
      @keyup.enter="doneEdit(task)"
      @keyup.esc="cancelEdit(task)"
    />
  </div>
</template>

<script>
export default {
  props: ["task"],
  data: function () {
    return {
      editedTask: null,
      beforeEditCache: "",
    };
  },
  methods: {
    deleteTask(task) {
      this.$store.dispatch("deleteTask", task);
    },
    editTask(task) {
      this.beforeEditCache = task.name;
      this.editedTask = task;
    },
    doneEdit: function (task) {
      if (!this.editedTask) {
        return;
      }
      // if input change -> update data
      this.editedTask = null;
      task.name = task.name.trim();
      // if input empty -> delete task
      if (!task.name) {
        this.deleteTask(task);
      }
    },
    cancelEdit: function (task) {
      this.editedTask = null;
      task.name = this.beforeEditCache;
    },
  },
  directives: {
    // custom directive
    "task-focus": function (el, binding) {
      if (binding.value) {
        el.focus();
      }
    },
  },
};
</script>

<style>
.task {
  margin: 1.125rem 1rem;
  font-size: 1.25rem;
}
.hidden {
  display: none;
}
.edit {
  margin-left: 1.5rem;
  padding: 0.5rem;
  border: 1px solid #e6e6e6;
}
.view {
  display: flex;
  align-items: center;
  position: relative;
}
.check {
  cursor: pointer;
  margin-right: 0.5rem;
  height: 1rem;
  width: 1rem;
}
.destroy {
  position: absolute;
  right: 1rem;
  top: 0;
  width: 1rem;
  height: 1rem;
  color: red;
  cursor: pointer;
}
.done {
  color: rgba(0, 0, 0, 0.3);
  text-decoration: line-through;
}
</style>