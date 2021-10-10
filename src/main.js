import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import "material-design-icons-iconfont/dist/material-design-icons.css";

import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyC57MSYgboycgUjdXWxqWxGERfjOL0Rw08",
  authDomain: "nofap-ea433.firebaseapp.com",
  projectId: "nofap-ea433",
  storageBucket: "nofap-ea433.appspot.com",
  messagingSenderId: "411294699103",
  appId: "1:411294699103:web:711455d79d148bcb29d5ea",
  measurementId: "G-9SDQ561YYZ"
};

initializeApp(firebaseConfig);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
