import Koa from 'koa';
import Router from 'koa-router';
import env from './config/env';
import routes from './controllers/index.controller';

const app = new Koa();
const router = new Router();
app.use(async (ctx, next) => {
  try {
    await next();
    if (ctx.status === 404) {
      ctx.throw(404, 'Route not exist');
    }
  } catch (error) {
    ctx.status = error.status;
    ctx.body = error;
  }
});
router.use('/api/v1', routes.routes());
app.use(router.routes());
app.listen(env.port, () => {
  console.log(`Server is running at http://127.0.0.1:${env.port}`);
});
