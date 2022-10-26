const myUserLoginResolver = require('./resolvers/myUserLoginResolver');
const getAllTodosResolver = require('./resolvers/getAllTodosResolver');
const getThisTodoResolver = require('./resolvers/getThisTodoResolver');
const userSignupResolver = require('./resolvers/userSignupResolver');
const createTodoResolver = require('./resolvers/createTodoResolver');
const updateTodoResolver = require('./resolvers/updateTodoResolver');
const deleteTodoResolver = require('./resolvers/deleteTodoResolver');

const resolvers = {
    Query: {
        getAllUsers: (parent, args) => usersData,
        myUserLogin: (parent, args) => myUserLoginResolver,
        getAllTodos: (parent, args) => getAllTodosResolver,
        getThisTodo: (parent, args) => getThisTodoResolver
    },
    Mutation: {
        userSignup: (parent, args) => userSignupResolver,
        createTodo: (parent, args) => createTodoResolver,
        updateTodo: (parent, args) => updateTodoResolver,
        deleteTodo: (parent, args) => deleteTodoResolver
    }
}
module.exports = resolvers;