import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import Antd from "ant-design-vue";
import VueFullPage from "vue-fullpage.js";
import "fullpage.js/dist/fullpage.css";

// import { Empty } from "ant-design-vue";

Vue.use(Antd);
Vue.use(VueFullPage);
Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
