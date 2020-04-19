const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const chalk = require('chalk');
const freePort = require('./free-port');
const clientConfig = require('../webpack.dev.config');
const getWdsConfig = require('../webpack-dev-server.config');
const proConfig = require('../../src/share/pro-config');

const WDS_PORT = proConfig.wdsPort; // wds 服务端口

const HOST = 'localhost';

// 释放wds端口
freePort(proConfig.wdsPort);

function getWebpackCompiler() {
  return webpack(clientConfig);
}

function createWdsServer(port) {
  let compiler = getWebpackCompiler();
  compiler.hooks.done.tap('done', function (data) {
    console.log('\n wds server compile done'); // 编译完成时的提示
  });

  return new WebpackDevServer(compiler, getWdsConfig(port, clientConfig.output.publicPath));
}

function runWdsServer() {
  let devServer = createWdsServer(WDS_PORT)
  devServer.listen(WDS_PORT, HOST, err => {
    if (err) {
      return console.log(err)
    }
    console.log(chalk.cyan('🚀 Starting the development node server,please wait....\n'));
  })
}

runWdsServer()
