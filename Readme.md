# Installation

Run `yarn` or `npm install` command.

# Run Server 
Run any one of the following command to run local server:
- `node server.js` 
- `yarn serve`
- `npm run serve`

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
   - Query type is the request sent from client to graphql server
   - It is the root level type
   - It uses `Schema Definition Language (SDL)` to define a Query
   - ```
        Syntax:
        -------
            type Query {
                field1: any_data_type
                field2: any_data_type
            }
     
        Example:
        --------
            type Query {
                name: String
                age: Int
            }
     ```
4. List Type:
    - It can be used to represent an array of value of specific type
    - List are defined with a type modifier [] that wraps object types, scalars and enums.
5. Mutation
   - It is the operation send to server to Create, Update or Delete data
   - This is as simple as making the API endpoint part of the top-level mutation type instead of the top level query type
6. Enum

# Passing Arguments
- It is common to pass arguments to an endpoint in a graphql Api
- The argument in the schema language, typechecking happens automatically.
- Each argument must be named and have a type.

# Syntax:
### Fragments and Alias
```
type Person{
    name:String,
    email:String
 }
     
fragment userFields on Person{
    name,
    email
}

query{
  user1: user(id:1) {
    ...userFields
  },
  user2:user(id:2) {
    ...userFields
  },
}

```

### Passing variables with default values:

```
type Person{
    name:String,
    email:String
 }
 
fragment userFields on Person{
  name,
  email
}

query getUser($user1_id:Int=1, $user2_id:Int=2){
  user1: user(id:$user1_id) {
    ...userFields
  },
  user2:user(id:$user2_id) {
    ...userFields
  },
}

```
