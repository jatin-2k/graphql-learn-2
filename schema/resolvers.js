const myUserLoginResolver = require('./resolvers/myUserLoginResolver');
const getAllTodosResolver = require('./resolvers/getAllTodosResolver');
const getThisTodoResolver = require('./resolvers/getThisTodoResolver');
const userSignupResolver = require('./resolvers/userSignupResolver');
const createTodoResolver = require('./resolvers/createTodoResolver');
const updateTodoResolver = require('./resolvers/updateTodoResolver');
const deleteTodoResolver = require('./resolvers/deleteTodoResolver');
const usersData = require('../FakeData');

const resolvers = {
    Query: {
        getAllUsers: () => usersData,
        myUserLogin: myUserLoginResolver,
        getAllTodos: getAllTodosResolver,
        getThisTodo: getThisTodoResolver
    },
    Mutation: {
        userSignup: userSignupResolver,
        createTodo: createTodoResolver,
        updateTodo: updateTodoResolver,
        deleteTodo: deleteTodoResolver
    }
}
module.exports = resolvers;