import Koa from 'koa';
import path from 'path';
import Router from 'koa-router';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import views from 'koa-views';
import App from '../app/demo';

const port = 3000;
const app = new Koa();
const router = new Router();

app.use(require('koa-static')(__dirname + '/dist'));

app.use(views(path.resolve(__dirname, '../src/views'), {
    map: {
        html: 'ejs'
    }
}));

// router.get('/', async (ctx, next) => {
//     const content = ReactDOMServer.renderToString(<App />);
//     await ctx.render('index', {
//         root: content  // 将 html 字符串通过 ejs 模板渲染出来
//     });
// });
app.use(async (ctx, next) => {
    const content = ReactDOMServer.renderToString(<App />);
    await ctx.render('index', {
        root: content  // 将 html 字符串通过 ejs 模板渲染出来
    });
});

router.get('/create', (ctx, next) => {
    ctx.body = "create";
});

app.use(router.routes());
app.use(router.allowedMethods());

app.listen(port);

console.log(`\n==> Listening on port ${port}. Open up http://localhost:${port}/ in your browser.\n`)

export default app
