// import './assets/main.css'

import { createApp, Fragment, h } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import { routes } from "vue-router/auto-routes";
import { createPinia } from "pinia";
import { SpeedInsights } from "@vercel/speed-insights/vue";
import App from "./App.vue";

import "./index.css";
import "element-plus/theme-chalk/dark/css-vars.css";

const router = createRouter({
    history: createWebHistory(),
    routes,
});

createApp({
    render() {
        return h(Fragment, null, [h(SpeedInsights), h(App)]);
    },
})
    .use(router)
    .use(createPinia())
    .mount("#app");