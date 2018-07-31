import Koa from 'koa';
import Router from 'koa-router';

const port = 3000;
const app = new Koa();
const router = new Router();

router.get('/', (ctx, next) => {
    ctx.body = "home";
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
