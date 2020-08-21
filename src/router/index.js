import Vue from 'vue';

import router from 'vue-router';

import index from '@/components/index.vue';
import detail from '@/components/detail.vue';

Vue.use(router);


// moudul.exports = fun
// 每次用户请求都需要创建一个 router 实例
export default function createRouter() {
  return new router({
    mode: 'history',
    routes: [
      {
        path: '/',
        component: index
      },
      {
        path: '/detail',
        component: detail
      },
    ]
  })
}