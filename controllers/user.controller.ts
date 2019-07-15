import Router from 'koa-router';

const router = new Router();
router.get('/', (ctx) => {
  ctx.body = {
    message: 'User controller',
  };
});

export default router;
