import { graphql, buildSchema } from 'graphql';

// Construct a schema, using GraphQL schema language
const schema = buildSchema(`
  type Query {
    name: String,
    email: String
  }
`);

// The root provides a resolver function for each API endpoint
const root = {
    name: () => {
        return 'ashishakya';
    },
    email: () => {
        return 'ashishakya@outlook.com';
    },
};

// Run the GraphQL query '{ hello }' and print out the response
graphql(schema, '{name, email}', root).then((response) => {
    console.log(response);
}).catch(error=>console.log(error));



// const { buildSchema } = require('graphql');
// const { graphql } = require("gatsby");
//
// const schema = buildSchema(`
// type Query{
//     name: String
// }`);
//
// graphql(schema, "{name}").then((res)=>console.log(res));
