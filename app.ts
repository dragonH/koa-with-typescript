import Koa from 'koa';
import koaBody from 'koa-body';
import Router from 'koa-router';
import env from './config/env';
import routes from './controllers/index.controller';
// import logMiddleware from './middlewares/log.middleware';
import errorMiddleware from './middlewares/error.middleware';

const app = new Koa();
const router = new Router();
// app.use(logMiddleware);
router.use('/api/v1', routes.routes());
app.use(errorMiddleware);
app.use(koaBody({
  multipart: true,
}));
app.use(router.routes());
app.use(router.allowedMethods());
app.listen(env.port, (): void => {
  console.log(`Server is running at http://127.0.0.1:${env.port}`);
});
