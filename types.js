const {gql} = require("apollo-server");

const types = gql`
    type Wand{
        wood: String!
        core: String!
        length: Float
    }
    
    enum CHARACTER_GENDER {
        male
        female
    }
    
    interface Character {
        id: ID
        name: String
        gender: CHARACTER_GENDER
    }
    
    type Human implements Character{
        id: ID
        name: String
        gender: CHARACTER_GENDER
        dateOfBirth: String
        actor: String
        image: String
        wand: Wand,
    }
    
    type NonHuman implements Character{
        id: ID
        name: String
        gender: CHARACTER_GENDER
        species:String
    }
    
    type Query {
        human: [Human!]!
        nonHuman: [NonHuman!]!
        characters: [Character!]!
    }
`;

module.exports = types;
