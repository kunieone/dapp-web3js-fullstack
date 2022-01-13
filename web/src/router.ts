// history模式
import {
  createRouter,
  createWebHashHistory,
  createWebHistory,
} from "vue-router";

const routes: any[] = [
  // 创建路由对象
  {
    path: "/",
    name: "home",
    component: () => import("./Page/MainPage.vue"),
  },

  {
    // 页面逻辑
    path: "/about",
    name: "about",
    component: () => import("./Page/About.vue"),
  },
  {
    // 页面逻辑
    path: "/blocks",
    name: "blocks",

    component: () => import("./Page/Blocks.vue"),
  },
  {
    // 页面逻辑
    path: "/fames",
    name: "fames",

    component: () => import("./Page/fames.vue"),
  },
  {
    path: "/r",
    redirect: "/r/register",
    name: "regi",
    children: [
      {
        path: "register",
        name: "register",
        component: () => import("./components/Register.vue"),
      },

      {
        path: "login",
        name: "login",
        component: () => import("./components/Login.vue"),
      },
    ],
    component: () => import("./Page/RegiLoPage.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
