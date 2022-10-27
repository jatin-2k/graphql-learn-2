var userData = require('../../FakeData');
const {GraphQLError} = require('graphql');

module.exports = (parent, args, context, info) => {
    const {username, password} = args.input;
    var user = userData.filter((user) => user.username == username)[0];
    if(user) throw new GraphQLError('User already exists', { extensions: { http: { status: 403}}});
    user = {username, password};
    user._id = Math.random().toString(36).slice(2);
    user.todo = [];
    userData.push(user);
    return user;
}