const characters = require("./db/harrypotter.json");
const wands = require("./db/wands.json");
const resolvers = {
    Character: {
        __resolveType(character, context, info) {
            if (!!character.species) {
                return "NonHuman" // is must be exact same as the type name
            }
            if (!character.species) {
                return "Human";
            }
            return null;
        }
    },
    Human:{
        // it overrides the wand key of Human type
        wand:(parent)=>{
            return wands.find(wand=>wand.character_id ===parent.id)
        },
    },
    Wand:{
        wood:(parent)=>`${parent.wood} @override`,
        length: (parent)=>parent.length ? parent.length : 0
    },
    Query: {
        human: () => characters.filter(character => !character.species),
        nonHuman: () => characters.filter(character => !!character.species),
        characters: () => characters,
    },
};

module.exports = resolvers;
