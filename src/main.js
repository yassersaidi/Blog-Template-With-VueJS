import Vue from "vue";
import Index from "./index.vue";
import router from "./router";
import store from "./store";
import "./filter/filter";
import "./plugin/plugin";

import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import "normalize.css/normalize.css";

import "./assets/css/all.css";
import "./scss/main.scss";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(Index)
}).$mount("#app");
