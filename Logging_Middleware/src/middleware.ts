import { Request, Response, NextFunction } from 'express';
import { Log } from './logger';

export async function requestLogger(req: Request, res: Response, next: NextFunction) {
  await Log('backend', 'info', 'middleware', `Incoming request: ${req.method} ${req.url}`);
  next();
}
