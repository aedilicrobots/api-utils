import { NextFunction, Request, Response } from "express";

import { Logger } from "@root/types";

type makeBenchmarkMiddlewareParams = { logger: Logger };
type MakeBenchmarkMiddleware = (
  options: makeBenchmarkMiddlewareParams
) => (req: Request, res: Response, next: NextFunction) => void;

const makeBenchmarkMiddleware: MakeBenchmarkMiddleware = function makeBenchmarkMiddleware({ logger }) {
  return async function benchmarkMiddleware(req: Request, res: Response, next: NextFunction) {
    const start = Date.now();

    res.on("finish", () => {
      const duration = Date.now() - start;
      logger.info(`${req.method} ${req.originalUrl} ${res.statusCode} ${duration}ms`);
    });

    next();
  };
};

export default makeBenchmarkMiddleware;
