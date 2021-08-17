export default {
  addTask({ commit }, newTask) {
    commit("addTask", newTask);
  },
  deleteTask({ commit }, task) {
    commit("deleteTask", task);
  },
};
