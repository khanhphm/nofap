import Vue from "vue";
import VueRouter from "vue-router";
import Home from '../views/Home.vue'
import History from '../views/History.vue'
import Rankings from '../views/Rankings.vue'
import SignIn from '../views/SignIn.vue'
import SignUp from '../views/SignUp.vue'

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      val: 0,
      auth: true
    }
  },
  {
    path: "/history",
    name: "History",
    component: History,
    meta: {
      val: 1,
      auth: true
    }
  },
  {
    path: "/rankings",
    name: "Rankings",
    component: Rankings,
    meta: {
      val: 2,
      auth: true
    }
  },
  {
    path:'/signin',
    name: "SignIn",
    component: SignIn,
    meta: {
      auth: false
    }
  },  
  {
    path:'/signup',
    name: "SignUp",
    component: SignUp,
    meta:{
      auth:false
    }
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
