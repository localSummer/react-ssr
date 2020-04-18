import Koa from 'koa2';
import koaStatic from 'koa-static';
import reactSsr from '../middlewares/react-ssr';
import proConfig from '../../share/pro-config.js';

const port = proConfig.nodeServerPort || process.env.PORT;

const app = new Koa();

app.use(koaStatic('./dist/static'));

app.use(reactSsr);

// 启动服务
app.listen(port);

console.log('server is start .',`http://localhost:${port}`);