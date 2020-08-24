// 创建 vue 实例

/**
 * 我们为每个请求创建一个新的根 Vue 实例。这与每个用户在自己的浏览器中使用新应用程序的实例类似。
 * 如果我们在多个请求之间使用一个共享的实例，很容易导致交叉请求状态污染
 */

import Vue from 'vue';
import App from './App.vue';
import createRouter from './router/index.js';
import element from 'element-ui';

// import '@/assets/style/common.css';
import './assets/style/common.css';
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(element);

export default function createApp() {
  const router = createRouter();
  const app = new Vue({
    router,
    render: h => h(App)
  });
  return { app, router};
}