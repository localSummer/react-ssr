const webpack = require('webpack');
const config = require('../webpack.server.config');
const constantCode = require('./constant');

config.mode = 'development';

const compiler = webpack(config);

const watching = compiler.watch(
  {
    aggregateTimeout: 300,
    ignored: /node_modules/,
    poll: 2000,
    'info-verbosity': 'verbose', // 在增量构建的开始和结束时，向控制台发送消息
  },
  (err, stats) => {
    let json = stats.toJson('minimal');
    if (json.errors) {
      json.errors.forEach((item) => console.log(item));
    }
    if (json.warnings) {
      json.warnings.forEach((item) => console.log(item));
    }
    //定一个常量，编译完成后 通知主进程来重启node 服务，主进程通过此标志来进行判断是否重启
    console.log(constantCode.SVRCODECOMPLETED);
  }
);

compiler.hooks.done.tap('done', (data) => {
  console.log('\n svr code done'); //编译完成动作
});

//收到退出信号 退出自身进程
process.stdin.on('data', (data) => {
  if (data.toString() === 'exit') {
    process.exit();
  }
});
