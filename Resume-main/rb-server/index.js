const jsonServer = require('json-server');
const rbserver = jsonServer.create();
const router = jsonServer.router('db.json');
const middleware = jsonServer.defaults();

const PORT = 3000;
rbserver.use(middleware);
rbserver.use(router);
rbserver.listen(PORT, () => {
  console.log(`RB Server is running on port ${PORT} successfully`);
});