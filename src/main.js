import Vue from "vue";
import App from "./App.vue";
import axios from "axios";

Vue.prototype.$http = axios;
Vue.prototype.$host =
  process.env.NODE_ENV === "development"
    ? "http://localhost:3500"
    : "http://13.125.112.232:3500";

import router from "./router";

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
