import { defineConfig } from 'umi';

export default defineConfig({
  layout: {},
  nodeModulesTransform: {
    type: 'none',
  },
  extraBabelPresets: [
    [
      '@babel/preset-typescript',
      {
        allowDeclareFields: true,
      },
    ],
  ],
  routes: [
    { path: '/', component: '@/pages/index' },
    { path: '/DoLabel', component: '@/pages/LabelImage/DoLabel/index' },
    {
      path: '/LabelTaskManage',
      component: '@/pages/LabelImage/LabelTaskManage/index',
    },
  ],
  fastRefresh: {},
});
