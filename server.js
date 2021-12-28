// import {buildSchema, graphql} from 'graphql';
// import express from 'express';
// import { graphqlHTTP } from 'express-graphql';

const {buildSchema, graphql} = require('graphql');
const express = require('express');
const {graphqlHTTP} = require('express-graphql');
const users = require('./db/users.json')
const characters = require("./db/harrypotter.json")


const app = express();

const PORT = 8000;
let fakeDB = [
    {id: 1, name: 'office', rent: 25},
    {id: 2, name: 'school', rent: 35},
];

let students = [
    {id:1, name:'ram', age:15, status: "available"},
    {id:2, name:'shyam', age:25, status: "not_available"}
];

const schema = buildSchema(`
     type Person{
        id: Int!,
        name:String,
        email:String,
        pet:String,
        petName:String
     }
     type Character {
        id: Int
        name: String
        gender: String
        dateOfBirth: String
        actor: String
        image: String
    }
     type Space {
        name:String,
        rent: Int
     }
     input SpaceInput{
        name:String
        rent:Int
     }
     input StudentInput{
        name:String,
        age:Int,
        status: STUDENT_STATUS
     }
     enum STUDENT_STATUS{
        available
        not_available
     }
     type Mutation {
        addMessage(message:String): String,
        createSpace(input: SpaceInput): Space
        updateSpace(id:ID!, input: SpaceInput): Space!
        createStudent(input: StudentInput):Student
        updateStudent(id:ID, input: StudentInput): Student
     }
     type Student{
        id: ID,
        name:String,
        age:Int,
        status: String
     }
     type Query {
        users: [Person],
        user(id:Int): Person,
        getMessage: [String]  
        getSpace(id:Int!):Space!,
        students:[Student],
        filterStudents(status: STUDENT_STATUS):[Student] 
        characters: [Character]
   
     }
`);

const root = {
    users: () => users,
    user: ({id}) => users.find(user => user.id === id),
    addMessage: ({message}) => fakeDB.push(message),
    getMessage: () => fakeDB,
    createSpace: ({input}) => fakeDB[fakeDB.length] = ({id: fakeDB.length + 1, name:input.name, rent:input.rent}),
    getSpace: ({id}) => {
        return fakeDB.find(space => space.id === id)
    },
    updateSpace: ({id, input}) => {
        const index = id - 1
        fakeDB[index] = {id: Number(id), name: input.name, rent: input.rent}
        return fakeDB[index];
    },
    students:()=>students,
    createStudent:({input})=> {
        students.push({id: students.length +1 , name:input.name, age:input.age, status: input.status})
        return students[students.length-1]
    },
    updateStudent:({id, input})=>{
        const index = id-1;
        students[index] = {...students[id-1], name:input.name,age:input.age, status: input.status}
        return students[index];
    },
    filterStudents:({status})=>students.filter(student=>student.status===status),
    characters: () => characters

};

app.use('/graphql', graphqlHTTP({
    schema,
    rootValue: root,
    graphiql: true
}));

app.listen(PORT, () => console.log(`Server is running at http://localhost:${PORT}/graphql`));

// Run the GraphQL query '{ hello }' and print out the response
// graphql(schema, '{name, email}', root).then((response) => {
//     console.log(response);
// }).catch(error=>console.log(error));
