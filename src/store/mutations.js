export default {
  addTask(state, newTask) {
    state.tasks.push({
      name: newTask,
      done: false,
    });
  },
  deleteTask(state, task) {
    const index = state.tasks.indexOf(task);
    state.tasks.splice(index, 1);
  },
};
