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
        getAllUsers: [User!]
        myUserLogin(input: AuthInput!): String!
        getAllTodos: [Todo!]
        getThisTodo(id: ID!): Todo
    }
    type Mutation {
        userSignup(input: AuthInput!): User!
        createTodo(input: String!): Todo!
        updateTodo(id: ID!, input: String!): Todo
        deleteTodo(id: ID!): ID!
    }

    input AuthInput {
        username: String!
        password: String!
    }
`
module.exports = typeDefs;