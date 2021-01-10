import { createRouter, createWebHistory } from "vue-router";
import Home from "./pages/Home.vue";
/*import PlanList from "../views/PlanList.vue";
import NewPlan from "../views/NewPlan.vue";
import Settings from "../views/Settings.vue";
import AccountSettings from "../views/AccountSettings.vue";
import Login from "../views/Login.vue";*/

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  }
 /*, {
    path: "/PlanList",
    name: "PlanList",
    component: PlanList
  },
  {
    path: "/NewPlan",
    name: "NewPlan",
    component: NewPlan
  },
  {
    path: "/Settings",
    name: "Settings",
    component: Settings
  },
  {
    path: "/AccountSettings",
    name: "AccountSettings",
    component: AccountSettings
  },
  {
    path: "/Login",
    name: "Login",
    component: Login
  }*/
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
