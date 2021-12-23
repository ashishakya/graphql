// import {buildSchema, graphql} from 'graphql';
// import express from 'express';
// import { graphqlHTTP } from 'express-graphql';

const {buildSchema, graphql} = require('graphql');
const express = require('express');
const {graphqlHTTP} = require('express-graphql');

const app = express();

const schema = buildSchema(`
     type Person {
         name: String,
         email: String,
     }
     
     type Developer {
         profile: Person,
         experience: Int,
     }
     
     type Query {
         ashishakya: Developer,
         isDeveloper: Boolean,
     }
`);

const root = {
    name: () => 'ashishakya',
    email: () => 'ashishakya@outlook.com',
    age: () => 2.1,
    isDeveloper: () => 0,
    ashishakya: () => {
        return {
            profile: {
                name: "ashishakya",
                email: "ashishakya@outlook.com"
            },
            experience: 3
        }
    }
};

app.use('/graphql', graphqlHTTP({
    schema,
    rootValue: root,
    graphiql: true
}));

app.listen(8000, () => console.log('Server is running at http://localhost:8000'));

// Run the GraphQL query '{ hello }' and print out the response
// graphql(schema, '{name, email}', root).then((response) => {
//     console.log(response);
// }).catch(error=>console.log(error));
