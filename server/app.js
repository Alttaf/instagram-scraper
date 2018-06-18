const Koa = require("koa");
const bodyparser = require("koa-bodyparser");
const logger = require("koa-logger");

const healthCheck = require("./api/health-check/index");
const instagram = require("./api/instagram/index");

const application = new Koa();

application.use(logger());

application.use(bodyparser());

application
    .use(healthCheck.routes())
    .use(healthCheck.allowedMethods());

application
    .use(instagram.routes())
    .use(instagram.allowedMethods());

module.exports = application;
