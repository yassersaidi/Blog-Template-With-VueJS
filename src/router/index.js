import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/pages/Home.vue";
import About from "../views/pages/About.vue";
import Cod from "../views/pages/Coding.vue";
import Tuto from "../views/pages/Tuto.vue";
import Contact from "../views/pages/Contact.vue";
import Profile from "../views/pages/Profile.vue";
import SignIn from "../views/Auth/SignIn.vue";
import SignUp from "../views/Auth/SignUp.vue";
import Search from "../views/pages/Search.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    title: 'I Love Coding | Home',
    component: Home,
  },
  {
    path: "/about",
    name: "about",
    component: About
  },
  {
    path: "/coding",
    name: "coding",
    component: Cod
  },
  {
    path: "/tuto",
    name: "tuto",
    component: Tuto
  },
  {
    path: "/contact",
    name: "contact",
    component: Contact
  },
  {
    path: "/profile/*",
    name: "profile",
    component: Profile
  },
  {
    path: "/sign_in",
    name: "sign_in",
    component: SignIn
  },
  {
    path: "/sign_up",
    name: "sign_up",
    component: SignUp
  },
  {
    path: "/search",
    name: "search",
    component: Search
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
