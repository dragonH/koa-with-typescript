import Router from 'koa-router';
import userController from './user.controller';
import postController from './post.controller';

const router = new Router();

router.use('/user', userController.routes());
router.use('/post', postController.routes());

export default router;
