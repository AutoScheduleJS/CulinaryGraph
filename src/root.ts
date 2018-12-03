import * as bodyParser from 'body-parser';
import * as express from 'express';
import { router as apiRouter } from './api/router';
import { graphqlHandler } from './graphql/index';

const app = express();

export const appFactory = _ => {
  app.options('*', (_, res) => res.sendStatus(200));
  app.post('*', bodyParser.json());

  app.use('/api', apiRouter({}));

  app.use('/graphql', graphqlHandler({}))

  app.use((err, _, res, next) => {
    if (res.headersSent) {
      return next(err);
    }
    console.error(err);
    res.sendStatus(500);
  });

  return app;
};
