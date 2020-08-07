import KoaRouter from 'koa-joi-router'

const route = KoaRouter()

route.prefix('/simple-api')
route.route({
  method: 'get',
  path: '/',
  handler: (ctx) => {
    ctx.body = {
      "hello": "world"
    }
  },
})

export default route
