const routes = [
  {
    path: '/',
    component: '@/layouts/BasicLayout/index',
    routes: [
      {
        path: '/home',
        component: '@/pages/home/index',
        title: '首页',
        hiddenNav: true,
      },
      {
        path: '/organ',
        component: '@/pages/organ/index',
        title: '机构',
        hiddenNav: true,
      },
      {
        path: '/organDetail',
        component: '@/pages/organDetail/index',
        title: '机构详情',
      },
      {
        path: '/message',
        component: '@/pages/message/index',
        title: '消息',
        hiddenNav: true,
      },
      {
        path: '/login',
        component: '@/pages/login/index',
        title: '登录',
        hiddenNav: true,
      },
      {
        path: '/',
        component: '@/layouts/SecurityLayout/index',
        routes: [
          {
            path: '/mine',
            component: '@/pages/mine/index',
            title: '我的',
            hiddenNav: true,
          },
          {
            path: '/member',
            component: '@/pages/member/index',
            title: '选择接种人',
          },
          {
            path: '/orderList',
            component: '@/pages/order/index',
            title: '预约信息',
          },
          {
            path: '/orderDetail',
            component: '@/pages/orderDetail/index',
            title: '预约详情',
          },
        ],
      },
    ],
  },
];

export default routes;
