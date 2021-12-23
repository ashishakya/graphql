# Installation

Run `yarn` or `npm install` command.

# Server
- Run server using `node server.js` from root directory.

# References
https://www.youtube.com/watch?v=SzLOE1VBYRU&t=3s&ab_channel=Bitfumes

# Some Theory Stuffs:

## GraphQL Types:
Graphql is fully typed. Different types of graphql types are:

1. Scalar Type
   - Can store only a single value
   - There are 5 difference Scalar Types:
     - Int 
     - Float
     - String 
     - Boolean
     - ID: Unique Identifier
2. Object
   - Represents the group of fields
   - Composed of multiple scalar types or object types
   - ```
        Syntax:
        -------
            type object_name {
                field1: scalar_data_type
                field2: scalar_date_type
            }
     
        Example:
        --------
            type Student {
                name: String
                age: Int
            }
     ```
3. Query
4. Mutation
5. Enum
