import { Context } from 'koa';

export const errorHandler = async (
  ctx: Context,
  next: () => any
): Promise<any> => {
  try {
    await next();
  } catch (error) {
    return (ctx.body = {
      error: error.message
    });
  }
};
