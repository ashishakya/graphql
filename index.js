const {ApolloServer, gql} = require('apollo-server');
const characters = require('./harrypotter.json');

const typeDefs = gql`
    type Wand{
        wood: String!
        core: String!
        length: Float
    }
    
    enum CHARACTER_GENDER {
        male
        female
    }
    
    type Character{
        id: ID
        name: String
        gender: CHARACTER_GENDER
        dateOfBirth: String
        actor: String
        image: String
        wand: Wand
    }
    
    type Query {
        characters: [Character]
    }
`;

const resolvers = {
    Query: {
        characters: () => characters,
    },
};

const server = new ApolloServer({typeDefs, resolvers});

server.listen().then(({url}) => {
    console.log(`🚀  Server ready at ${url}`);
});
