const characters = require("./harrypotter.json");
const resolvers = {
    Character: {
        __resolveType(character, context, info) {
            console.log(info);
            if (!!character.species) {
                return "NonHuman" // is must be exact same as the type name
            }
            if (!character.species) {
                return "Human";
            }
            return null;
        }
    },
    Query: {
        human: () => characters.filter(character => !character.species),
        nonHuman: () => characters.filter(character => !!character.species),
        characters: () => characters,
    },
};

module.exports = resolvers;
