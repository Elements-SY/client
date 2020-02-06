/**
 * nuxt的路由菜单配置
 * @description 仅仅只用于侧边栏的菜单显示和权限,其它的不做任何功能
 */
const menus = [
  {
    path: "/404",
    name: "404",
    meta: { "requireAuth": true }
  }, {
    path: "/login",
    name: "login"
  }, {
    path: "/register",
    name: "register"
  }, {
    path: "/restAccount",
    name: "restAccount"
  }, {
    path: "/",
    name: "index",
    meta: { "requireAuth": true }
  }
];


/**
* 递归查询路由权限
* @param {*} 
 
* @param {*} menu
*/
const router_genner = (list) => {
  for (var item in list) {
    for (const m in menus) {
      if ((list[item].name === menus[m].name) && (list[item].path === menus[m].path)) {
        console.log('true!!!!!!')
        list[item].meta = menus[m].meta;
        console.log(list[item].meta)
      }
    }

  }

};

export default (routes, resolve) => {
  routes = router_genner(routes);
  console.log(routes);
};
