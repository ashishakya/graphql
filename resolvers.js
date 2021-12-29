// const characters = require("./db/harrypotter.json");
// const wands = require("./db/wands.json");
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
        wand:(parent, _, {wands})=>{
            return wands.find(wand=>wand.character_id ===parent.id)
        },
    },
    Wand:{
        // wood:(parent)=>`${parent.wood} @override`,
        length: (parent)=>parent.length ? parent.length : 0
    },
    Query: {
        humans: (_, __, {characters}) => characters.filter(character => !character.species),
        nonHumans: (_, __, {characters}) => characters.filter(character => !!character.species),
        characters: (_, __, context) => context.characters,
        human:(_, {id}, {characters})=> characters.find(character=>character.id === Number(id))
        // synatax: query:(parent, params, context)
    },
    Mutation:{
        createHumanCharacter(_, {input}, {characters}){
            const data  = {...input, id:characters.length + 1}
            characters.push(data);
            return data;
        }
    }
};

module.exports = resolvers;
