import Koa from 'koa';
import Router from 'koa-router';
import env from './config/env';
import routes from './controllers/index.controller';
import logMiddleware from './middleware/log.middleware';

const app = new Koa();
const router = new Router();
app.use(logMiddleware);
router.use('/api/v1', routes.routes());
app.use(router.routes());
app.listen(env.port, () => {
  console.log(`Server is running at http://127.0.0.1:${env.port}`);
});
