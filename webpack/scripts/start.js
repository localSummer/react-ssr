const { spawn } = require('child_process');
const constantCode = require('./constant');
const chalk = require('chalk');
const proConfig = require('../../src/share/pro-config');

const log = console.log;
const nodeServerPort = proConfig.nodeServerPort;

log(chalk.red('servers starting....'));

// 前端代码构建 服务进程
const feCodeWatchProcess = spawn('npm', ['run', 'wds:watch'], {
  stdio: 'inherit',
});

// 服务端代码监控和编译进程
const svrCodeWatchProcess = spawn('npm', ['run', 'svr:watch']);

// node 服务进程
let nodeServerProcess = null;

// 启动node服务
const startNodeServer = () => {
  nodeServerProcess && nodeServerProcess.kill();
  nodeServerProcess = spawn('node', ['./webpack/scripts/svr-dev-server.js']);
  nodeServerProcess.stdout.on('data', print);
};

// 控制台输出信息
function print(data) {
  let str = data.toString();
  if (str.indexOf(constantCode.SVRCODECOMPLETED) > -1) {
    // 接收到服务端代码编译完成的通知
    startNodeServer(); //重启 node 服务
  } else {
    console.log(str);
  }
}

// 监听服务端代码构建服务的对外输出  stdout 事件
svrCodeWatchProcess.stdout.on('data', print);

// 杀掉子进程
const killChild = () => {
  svrCodeWatchProcess && svrCodeWatchProcess.kill();
  nodeServerProcess && nodeServerProcess.kill();
  feCodeWatchProcess && nodeServerProcess.kill();
};

// 主进程关闭退出子进程
process.on('close', (code) => {
  log('main process  close', code);
  killChild();
});
// 主进程关闭退出子进程
process.on('exit', (code) => {
  log('main process  exit', code);
  killChild();
});

// 非正常退出情况
process.on('SIGINT', function () {
  svrCodeWatchProcess.stdin.write('exit', (error) => {
    log('svr code watcher process exit!');
  });
  killChild();
});
