// 创建 vue 实例

import Vue from 'vue';
import App from './App.vue';
import createRouter from './router/index.js';

export default function createApp() {
  const router = createRouter();
  const app = new Vue({
    router,
    render: h => h(App)
  });
  return { app, router};
}