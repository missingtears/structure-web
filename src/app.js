import Koa from 'koa';
import Router from 'koa-router';
import ReactDOMServer from 'react-dom/server';
import views from 'koa-views';
import App from './demo';

const port = 3000;
const app = new Koa();
const router = new Router();

app.use(views(__dirname + '/views', {
    map: {
        html: 'ejs'
    }
}));

router.get('/', async (ctx, next) => {
    const content = ReactDOMServer.renderToString(<App />);
    await ctx.render('demo', {
        html: content  // 将 html 字符串通过 ejs 模板渲染出来
    });
});

router.get('/create', (ctx, next) => {
    ctx.body = "create";
});

app.use(router.routes())
app.use(router.allowedMethods());

app.listen(port);

app.on('listening', () => {
   console.log('Listening on port: %d', port);
});

export default app
