import { BaseContext } from 'koa';
import log4js from '../config/log.config';


const logger = log4js.getLogger();

export default async (ctx: BaseContext, next: Function): Promise<void> => {
  const userIp = ctx.get('HTTP_X_REAL_IP')
    || ctx.get('X-Read-IP')
    || ctx.get('HTTP_X_FORWARDED_FOR')
    || ctx.get('X-Forwarded-For')
    || ctx.get('Remote_Addr')
    || ctx.ip;
  const data:{[key: string]:string} = {
    ip: userIp,
  };
  try {
    await next();
    if (ctx.status === 404) {
      ctx.throw(404, 'Route not exist');
    } else {
      data.url = ctx.url;
      logger.info(JSON.stringify(data));
    }
  } catch (error) {
    ctx.status = error.status;
    data.url = ctx.url;
    data.message = error.message;
    logger.error(JSON.stringify(data));
    ctx.body = error;
  }
};
