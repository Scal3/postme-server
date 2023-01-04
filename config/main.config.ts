import { appConfig } from './app/app.config';

export const mainConfig = () => ({
  NODE_ENV: process.env['NODE_ENV'],
  app: appConfig(),
});
