import Vue from "vue";
import App from "./App.vue";
import VueI18n from "vue-i18n";
import Vuex from "vuex";

Vue.use(Vuex);
Vue.use(VueI18n);
Vue.config.productionTip = false;

const store = new Vuex.Store({
  state: {
    tasks: [],
  },
  getters: {
    getDoneTasks: (state) => {
      return state.tasks.filter((task) => task.done);
    },
    getActiveTasks: (state) => {
      return state.tasks.filter((task) => !task.done);
    },
    getAllTasks: (state) => {
      return state.tasks;
    },
  },
  mutations: {
    addTask(state, task) {
      state.tasks.push(task);
    },
  },
});

const i18n = new VueI18n({
  locale: "en",
  messages: {
    en: {
      hello: "Welcome to todo application!",
    },
    vi: {
      hello: "Chào mừng đến với ứng dụng todo!",
      "items left": "việc còn lại",
      All: "Tất cả",
      Active: "Chưa làm",
      Completed: "Đã hoàn thành",
    },
  },
});

new Vue({
  store,
  i18n,
  render: (h) => h(App),
}).$mount("#app");
