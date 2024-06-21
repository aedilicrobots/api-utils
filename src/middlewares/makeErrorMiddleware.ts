import { Request, Response, NextFunction } from "express";

import APIError from "@root/errors/APIError";
import ServerError from "@root/errors/ServerError";
import type { Logger } from "@root/types";

type ErrorMiddleware = (
  err: APIError | Error,
  req: Request,
  res: Response,
  next: NextFunction
) => Response<any, Record<string, any>>;

type MakeErrorMiddlewareParams = { logger?: Logger };
type MakeErrorMiddleware = (options?: MakeErrorMiddlewareParams) => ErrorMiddleware;

/**
 * Creates a middleware for handling API errors.
 * @param param0 - The options for the middleware.
 * @param param0.logger - The logger to use.
 * @returns The middleware.
 */
const makeErrorMiddleware: MakeErrorMiddleware = function makeErrorMiddleware({ logger } = {}) {
  return function errorMiddleware(err, _, res, __) {
    if (err instanceof APIError) {
      logger?.debug(`Received an API error: ${err.message} (${JSON.stringify(err.response)}).`);

      return err.expressResponse(res);
    }

    logger?.error(`Received an unexpected ${err.name} error: ${err.message}.\nStack trace: ${err.stack}`);

    return new ServerError().expressResponse(res);
  };
};

export default makeErrorMiddleware;
