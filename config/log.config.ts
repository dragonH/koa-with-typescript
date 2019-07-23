import log4js from 'log4js';

log4js.configure({
  appenders: {
    console: {
      type: 'console',
    },
    mylogger: {
      type: 'dateFile',
      filename: 'logs/log',
      pattern: 'yyyy-MM-dd.log',
      alwaysIncludePattern: true,
    },
  },
  categories: { default: { appenders: ['mylogger', 'console'], level: 'all' } },
});

export default log4js;
