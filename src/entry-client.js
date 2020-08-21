// 挂载 激活当前app
import createApp from './app.js';

const { app, router } = createApp();

router.onReady(() => {
  app.$mount('#app');
})


