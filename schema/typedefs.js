const {gql} = require('apollo-server');
const typeDefs = gql`
    type Todo {
        _id: ID!
        title: String!
    }
    type User {
        _id: ID!
        username: String!
        password: String!
        todo: [Todo!]
    }
    
    type Query {
        users: [User!]!
        myUserLogin(input: AuthInput!): String!
        getAllTodos(input: Credentials!): [Todo!]
        getThisTodo(input: Credentials! ,id: ID!): Todo
    }
    type Mutation {
        userSignup(input: AuthInput!): String!
        createTodo(input: Credentials!): Todo
        updateTodo(input: Credentials!, id: ID!): Todo
        deleteTodo(input: Credentials!, id: ID!): ID!
    }

    input Credentials {
        username: String!
    }
    input AuthInput {
        username: String!
        password: String!
    }
`
module.exports = typeDefs;