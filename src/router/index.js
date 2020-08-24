import Vue from 'vue';

import router from 'vue-router';

// import index from '@/components/index.vue';
import detail from '@/components/detail.vue';

import index from '@/views/index';
import home from '@/views/home/index';

import login from '@/views/account/login';
import users from '@/views/account/users';

import companyEchart from '@/views/company/companyEchart';

Vue.use(router);


// moudul.exports = fun
// export default new router({
//   mode: 'history',
//   routes: [
//     // {
//     //   path: '/',
//     //   component: index
//     // },
//     {
//       path: '/',
//       component: index,
//       children: [
//         {
//           path: 'home',
//           component: home
//         }
//       ]
//     },
//     {
//       path: '/detail',
//       component: detail
//     },
//     {
//       path: '/login',
//       component: login
//     }
//   ]
// })
// 每次用户请求都需要创建一个 router 实例
export default function createRouter() {
  return new router({
    mode: 'history',
    routes: [
      // {
      //   path: '/',
      //   component: index
      // },
      {path: '/', redirect: '/login'},
      {
        path: '/',
        component: index,
        children: [
          {
            path: 'home',
            name: 'home',
            component: home
          },
          {
            path: 'users',
            name: 'users',
            component: users
          },
          {
            path: 'companyEchart',
            name: 'companyEchart',
            component: companyEchart
          },
        ]
      },
      {
        path: '/detail',
        component: detail
      },
      {
        path: '/login',
        component: login
      },
    ]
    // routes: [
    //   // {
    //   //   path: '/',
    //   //   component: index
    //   // },
    //   {
    //     path: '/',
    //     component: index,
    //     children: [
    //       {
    //         path: 'home',
    //         component: home
    //       }
    //     ]
    //   },
    //   {
    //     path: '/detail',
    //     component: detail
    //   },
    //   {
    //     path: '/login',
    //     component: login
    //   }
    // ]
  })
}