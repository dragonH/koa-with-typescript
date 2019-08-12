import Router from 'koa-router';

const router = new Router();
router.get('/', async (ctx): Promise<void> => {
  ctx.body = {
    message: 'Post controller',
  };
});

export default router;
