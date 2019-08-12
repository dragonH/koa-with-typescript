import { BaseContext } from 'koa';

export default async (ctx: BaseContext, next: Function): Promise<void> => {
  try {
    await next();
    if (ctx.status === 404) {
      ctx.body = {
        message: 'Route not exist',
      };
    }
    if (ctx.status === 405) {
      ctx.body = {
        message: 'Method not allowed',
      };
    }
  } catch (err) {
    ctx.status = err.status;
    if (err.status === 500) {
      ctx.body = {
        message: 'Server error',
      };
    } else {
      ctx.body = {
        message: err.message,
      };
    }
  }
};
