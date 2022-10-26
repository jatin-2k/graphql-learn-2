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
        login(input: LoginInput!): String!
        todos(input: GetTodosInput!): [Todo!]
    }

    input GetTodosInput {
        username: String!
    }
    input LoginInput {
        username: String!
        password: String!
    }
`
module.exports = typeDefs;