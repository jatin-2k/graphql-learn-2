"use strict";
module.exports = (parent, args, context, info) => {
    if (!context.req || !context.req.isAuthenticated)
        throw new GraphQLError('Unauthorised', { extensions: { http: { status: 401 } } });
    var newTodo = null;
    usersData.map((user, index) => {
        if (user._id == context.req.user._id) {
            const newId = (user.todo.length == 0) ? 0 : user.todo[user.todo.length - 1]._id + 1;
            newTodo = { _id: newId, title: args.input };
            usersData[index].todo.push(newTodo);
        }
    });
    return newTodo;
};
