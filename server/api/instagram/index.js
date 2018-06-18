const axios = require("axios");
const Router = require("koa-router");
const jsdom = require("jsdom");
const { JSDOM } = jsdom;

const router = new Router({ prefix: "/api" });

router.get("/instagram", async (ctx) => {
    const {username} =  ctx.request.query;
    const url =  `https://www.instagram.com/${username}`;
    const user = await axios.get(url).then(response =>{
        // use safe val here
        const dom = new JSDOM(response.data, { runScripts: "dangerously" });
        const user = dom.window._sharedData.entry_data.ProfilePage[0].graphql.user;
        return user;
    }).catch((e)=>{
        console.log(e);
        ctx.status = 404;
        ctx.body = {error:e}
    });

    ctx.status = 200;
    ctx.body = { result: user };

});

module.exports = router;
