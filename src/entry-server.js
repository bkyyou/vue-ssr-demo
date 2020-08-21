import createApp from './app.js';

export default  context => {
  return new Promise((resolve, reject) => {
    const {app, router} = createApp();
    // 进入首屏
    router.push(context.url);
    router.onReady(() => {
      resolve(app);
    }, reject);
  })
} 