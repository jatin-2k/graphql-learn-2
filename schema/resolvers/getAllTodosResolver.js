const { GraphQLError } = require('graphql');
const usersData = require('../../FakeData');

module.exports = (parent, args, context, info) => {
    if(!context.req || !context.req.isAuthenticated) throw new GraphQLError('Unauthorised', { extensions: { http: { status: 401}}});
    const todos = usersData.filter((user) => user._id == context.req.user._id)[0].todo;
    return todos;
}