import { EggAppConfig, EggAppInfo, PowerPartial } from '@ali/midway';

export type DefaultConfig = PowerPartial<EggAppConfig>;

export default (appInfo: EggAppInfo) => {
  const config = {} as DefaultConfig;

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1594612374718_5405';

  // add your config here
  config.middleware = [
  ];

  config.htmlentry = {
    assassins: {
      css: 'http://localhost:1234/src.a2b27638.css',
      js: 'http://localhost:1234/src.a2b27638.js',
    },
    hello: {
      css: 'http://localhost:4000/main.css',
      js: 'http://localhost:4000/main.js',
    },
    world: {
      css: 'http://localhost:4001/main.css',
      js: 'http://localhost:4001/main.js',
    }
  };

  return config;
};
