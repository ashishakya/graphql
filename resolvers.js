const characters = require("./harrypotter.json");
const resolvers = {
    Query: {
        human: () => characters.filter(character=>!character.species),
        nonHuman: () => characters.filter(character=>!!character.species),
    },
};

module.exports = resolvers;
