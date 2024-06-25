// import './assets/main.css'

import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import { routes } from "vue-router/auto-routes";
import { createPinia } from "pinia";
import App from "./App.vue";

import "./index.css";
import "element-plus/theme-chalk/dark/css-vars.css";

const router = createRouter({
    history: createWebHistory(),
    routes,
});

createApp(App).use(createPinia()).use(router).mount("#app");
