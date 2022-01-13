const Koa = require("koa");
const path = require("path");
const proxy = require("http-proxy-middleware");
const static = require("koa-static");
const fs = require("fs");
const app = new Koa();
const url = "http://127.0.0.1/"; // 后端服务器地址
// const { web3, contract } = require("./contracts/createContracts");
// console.log(web3);
// contract.methods.setName("新名字").call().then(console.log);

// contract.methods.getName().call().then(console.log);

app.use(async (ctx, next) => {
  if (ctx.url.startsWith("/api")) {
    // 以api开头的异步请求接口都会被转发
    ctx.respond = false;
    return proxy({
      target: url, // 服务器地址
      changeOrigin: true,
      secure: false,
    })(ctx.req, ctx.res, next);
  }
  // ...这里省略N个接口
  return next();
});

// 指定静态资源文件夹
app.use(static(path.join(__dirname, "../web2/dist")));

// 指定首页
app.use(async (ctx) => {
  ctx.body = fs.readFileSync("../web2/dist/index.html");
});

// 监听
app.listen(3200, () => {
  console.log("Listening on http://localhost:3200...");
});
