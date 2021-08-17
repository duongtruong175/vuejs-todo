export default {
  getDoneTasks: (state) => {
    return state.tasks.filter((task) => task.done == true);
  },
  getNotDoneTasks: (state) => {
    return state.tasks.filter((task) => task.done == false);
  },
  getAllTasks: (state) => {
    return state.tasks;
  },
};
