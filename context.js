const characters = require("./db/harrypotter.json");
const wands = require("./db/wands.json");
const models =require("./models");

const context = {
    characters,
    wands,
    ...models
}

module.exports = context
