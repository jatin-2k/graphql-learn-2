"use strict";
module.exports = (parent, args, context, info) => {
    if (!context.req || !context.req.isAuthenticated)
        throw new GraphQLError('Unauthorised', { extensions: { http: { status: 401 } } });
    usersData.map((user, index) => {
        if (user._id == context.req.user._id) {
            usersData[index].todo = user.todo.filter((todo) => todo._id != args.id);
        }
    });
    return args.id;
};
