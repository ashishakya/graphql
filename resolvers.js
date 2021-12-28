const characters = require("./harrypotter.json");
const resolvers = {
    Query: {
        characters: () => characters,
    },
};

module.exports = resolvers;
