export default ({ app }) => {
  // console.log(app)
  var getToken = true
  app.router.beforeEach((to, from, next) => {
    if (process.client) {
      if (to.meta.requireAuth) {
        if (to.path == "/login") {
          next();
        } else {
          if (!getToken) {
            next("/login");
          } else {
            next();
          }
        }
      } else {
        if (to.path == "/home") {
          next("/home");
        } else {
          next();
        }
      }
      console.log('A', to)
    } else {
      next();
    }
  });
};