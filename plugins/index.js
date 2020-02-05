const Index = () => import('@/pages') // 首页
const Login = () => import('@/pages/login') // 用户登录
const register = () => import('@/pages/register') // 账号注册
const restAccount = () => import('@/pages/restAccount') // 重置帐号信息(忘记密码)
const notFund = () => import('@/pages/404') // 404

export default [
  {
    path: "*",
    component: notFund,
    meta: {
      requireAuth: true
    }
  },
  {
    path: "/login",
    name: "login",
    component: Login
  },
  {
    path: "/register",
    name: "register",
    component: register,
    meta: {
      requireAuth: true
    }
  },
  {
    path: "/restAccount",
    name: "restAccount",
    component: restAccount
  },
  {
    path: "/",
    component: Index,
    meta: {
      requireAuth: true
    }
  }
]

// const iterator = (list) => {
//   for (let item in list) {
//     for (const m in menus) {
//       if ((list[item].name === menus[m].name) && (list[item].path === menus[m].path)) {
//         console.log((list[item].name === menus[m].name) && (list[item].path === menus[m].path));
//         list[item].meta = menus[m].meta;
//         list[item].meta.requireAuth = true;
//       }
//     }
//     if (list[item].children && list[item].children.length > 0) {
//       iterator(list[item].children);
//     } else {
//       return list;
//     };
//   }
// };

// export default (routes, resolve) => {
//   routes = iterator(routes);
//   console.log(routes);
// }