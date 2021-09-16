import { defineConfig } from 'umi';

export default defineConfig({
  layout: {},
  theme: {
    '@primary-color': '#17C3D2',
  },
  nodeModulesTransform: {
    type: 'none',
  },
  favicon: '/assets/favicon.ico',
  extraBabelPresets: [
    [
      '@babel/preset-typescript',
      {
        allowDeclareFields: true,
      },
    ],
  ],
  routes: [
    // { path: '/', component: '@/pages/index' },
    // { path: '/DoLabel', component: '@/pages/LabelImage/DoLabel/index' },
    // {
    //   path: '/LabelTaskManage',
    //   component: '@/pages/LabelImage/LabelTaskManage/index',
    // },
    // {
    //   path: '/label_image',
    //   name: '标注系统',
    //   icon: 'TagsOutlined',
    //   routes: [
    //     {
    //       path: '/',
    //       redirect: '/do_label',
    //     },
    //     {
    //       name: '标注任务管理',
    //       path: '/label_image/label_task_manage',
    //       component: './LabelImage/LabelTaskManage',
    //     },
    //     {
    //       name: '蜗牛标注平台',
    //       path: '/label_image/do_label',
    //       component: './LabelImage/DoLabel',
    //     },
    //   ],
    // },
    {
      path: '/',
      redirect: '/label_task_manage',
    },
    {
      name: '图片标注平台',
      icon: 'TagsOutlined',
      path: '/do_label_image',
      component: './DoLabelImage',
    },
    {
      name: '标注任务管理',
      icon: 'BarsOutlined',
      path: '/label_task_manage',
      component: './LabelTaskManage',
    },
  ],
  fastRefresh: {},
});
