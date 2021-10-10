import Vue from "vue";
import VueRouter from "vue-router";
import Home from '../views/Home.vue'
import History from '../views/History.vue'

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      val: 0
    }
  },
  {
    path: "/history",
    name: "History",
    component: History,
    meta: {
      val: 1
    }
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
