var userData = require('../../FakeData');
const {GraphQLError} = require('graphql');

module.exports = (parent: any, args: { input: { username: any; password: any; }; }, context: any, info: any) => {
    const {username, password} = args.input;
    var user = userData.filter((user: { username: any; }) => user.username == username)[0];
    if(user) throw new GraphQLError('User already exists', { extensions: { http: { status: 403}}});
    user = {username, password};
    user._id = Math.random().toString(36).slice(2);
    user.todo = [];
    userData.push(user);
    return user;
}