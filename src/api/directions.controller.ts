
import { Request, Response } from 'express';

export const controller = _ => (req: Request, res: Response, _next) => {
  console.log(req.body);
  res.json([{ name: 'direction1', id: 1 }, { name: 'direction2', id: 2 }]);
};
