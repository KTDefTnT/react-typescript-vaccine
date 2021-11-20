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
        path: '/message',
        component: '@/pages/message/index',
        title: '消息',
        hiddenNav: true,
      },
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
];

export default routes;
