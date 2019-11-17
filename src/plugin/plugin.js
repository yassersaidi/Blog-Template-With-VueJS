import Vue from "vue";
import LoadingBar from "vue-ins-progress-bar";
import StarRating from 'vue-star-rating';
import { DropdownPlugin } from "bootstrap-vue";
import  BootstrapVue from "bootstrap-vue";


const options = {
  position: "fixed",
  show: true,
  height: "3px"
};

Vue.use(LoadingBar, options);
Vue.use(StarRating);
Vue.use(DropdownPlugin);
Vue.use(BootstrapVue);

Vue.component('star-rating', StarRating);
