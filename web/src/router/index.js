import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);
let childrouter = [
  { path: '/web', name: '前端', childname: '前端内容' },
  { path: '/server', name: '后端', childname: '后端内容' },
  { path: '/alg', name: '算法结构', childname: '算法结构内容' },
  { path: '/mode', name: '设计模式', childname: '设计模式内容' },
  { path: '/build', name: '构建工具', childname: '构建工具内容' }
]
let childary = []
childrouter.map(item => childary.push(
  {
    path: item.path, name: item.name, component: () => import('../views/children/template.vue'),
    children: [{
      path: `${item.path}/:id`, name: item.childname, component: () => import('../views/children/context.vue')
    }]
  }
))
const createRouter = () => {
  const routes = [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/Index',
      name: '博客主页面',
      component: () => import('../views/Index.vue'),
      children: childary
    }
  ];
  const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
  });
  return router;
};
export { createRouter,childrouter };
