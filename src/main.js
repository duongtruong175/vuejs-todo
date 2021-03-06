import Vue from "vue";
import App from "./App.vue";
import i18n from "./lang/i18n";
import store from "./store/store";

Vue.config.productionTip = false;

new Vue({
  store,
  i18n,
  render: (h) => h(App),
}).$mount("#app");
