import Router from 'koa-router';
import userService from '../services/user.service';
import checkParamsHelper from '../helpers/check-params-helper';
import hashHelper from '../helpers/hash-password.helper';

const router = new Router();
router.post('/get-users', async (ctx): Promise<void> => {
  try {
    const datas = ctx.request.body;
    const users = await userService.getUsers(datas);
    ctx.status = 200;
    ctx.body = {
      result: true,
      datas: users,
    };
  } catch (err) {
    ctx.throw(500, err);
  }
});
router.post('/add-new-user', async (ctx): Promise<void> => {
  try {
    const datas = ctx.request.body;
    const paramsCheckResult = await checkParamsHelper(datas, ['account', 'password']);
    if (!paramsCheckResult) {
      ctx.throw(400, 'Missing params');
    }
    const checkIfUserAccountExistRsult = await userService.checkIfUserAccountExist(datas.account);
    if (checkIfUserAccountExistRsult) {
      ctx.throw(400, 'User account exist');
    }
    datas.password = await hashHelper(datas.password);
    const addNewUserResult = await userService.addNewUser(datas);
    ctx.status = addNewUserResult ? 200 : 400;
    ctx.body = {
      result: addNewUserResult,
    };
  } catch (err) {
    ctx.throw(500, err);
  }
});

export default router;
