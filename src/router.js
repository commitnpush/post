import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import View from "./views/View.vue";
import NotFound from "./views/NotFound.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/view/:no",
      name: "view",
      component: View
    },
    {
      path: "*",
      name: "NotFound",
      component: NotFound
    }
  ]
});
