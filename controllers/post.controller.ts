import Router from 'koa-router';

const router = new Router();
router.get('/', (ctx) => {
  ctx.body = {
    message: 'Post controller',
  };
});

export default router;
