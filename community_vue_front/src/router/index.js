import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("@/views/Home"),
  },
  {
    path: "/register",
    name: "Register",
    component: () => import("@/views/auth/register"),
    meta: { title: "注册" },
  },
  {
    path: "/login",
    name: "login",
    component: () => import("@/views/auth/login"),
    meta: { title: "登录" }
  },
  {
    path: "/404",
    name: "404",
    component: () => import("@/views/error/404"),
    meta: { title: "界面404" },
  },
  {
    path: "*",
    redirect: "/404",
    hidden: true,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
