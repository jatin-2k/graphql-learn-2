"use strict";
module.exports = (parent, args, context, info) => {
    if (!context.req || !context.req.isAuthenticated)
        throw new GraphQLError('Unauthorised', { extensions: { http: { status: 401 } } });
    const user = usersData.filter((user, index) => user._id == context.req.user._id)[0];
    if (!user)
        throw new GraphQLError('User dose not exist', { extensions: { http: { status: 404 } } });
    const todo = user.todo.filter((todo) => todo._id == args.id)[0];
    return todo;
};
