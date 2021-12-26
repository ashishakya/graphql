// import {buildSchema, graphql} from 'graphql';
// import express from 'express';
// import { graphqlHTTP } from 'express-graphql';

const {buildSchema, graphql} = require('graphql');
const express = require('express');
const {graphqlHTTP} = require('express-graphql');
const users = require('./users.json')

const app = express();

let fakeDB = [
    {id:1, name:'office', rent:25},
    {id:2, name:'school', rent:35},
];

const schema = buildSchema(`
     type Person{
        name:String,
        email:String
     }
     type Space {
        name:String,
        rent: Int
     }
     type Mutation {
        addMessage(message:String): String,
        createSpace(name: String, rent:Int): Space
     }
     type Query {
        users: [Person],
        user(id:Int): Person,
        getMessage: [String]  
        getSpace(id:Int!):Space!   
     }
`);

const root = {
    users: () => users,
    user: ({id}) => users.find(user=>user.id===id),
    addMessage: ({message}) => fakeDB.push(message),
    getMessage: ()=>fakeDB,
    createSpace:({name, rent})=>fakeDB[fakeDB.length]=({id:fakeDB.length+1, name, rent}),
    getSpace:({id})=>fakeDB.find(space => space.id === id),
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
