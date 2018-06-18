const { HOST, PORT } = require("../config");

const application = require("./app");

application
    .listen(PORT, () => console.log(`Listening on ${HOST}:${PORT}`));

module.exports = application;
