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

module.exports = types;
