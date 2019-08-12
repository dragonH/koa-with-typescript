import Router from 'koa-router';
import userService from '../services/user.service';

const router = new Router();
router.post('/get-users', async (ctx): Promise<void> => {
  const datas = ctx.request.body;
  console.log(datas);
  await userService.getUsers(datas)
    .then((res): void => {
      ctx.status = 200;
      ctx.body = {
        result: true,
        datas: res,
      };
    })
    .catch((err): void => ctx.throw(500, err));
});

export default router;
