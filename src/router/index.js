import Vue from "vue";
import VueRouter from "vue-router";
import BlankLayout from "@/views/BlankLayout.vue";
import PageLayout from "@/views/PageLayout.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "root",
    component: BlankLayout,
    children: [
      {
        path: "home",
        name: "홈",
        component: PageLayout,
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
