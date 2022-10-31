var userData = require('../../FakeData');
const {GraphQLError} = require('graphql');

module.exports = (parent: any, args: { input: { username: any; password: any; }; }, context: any, info: any) => {
    const {username, password} = args.input;
    var user: USER = userData.filter((user: USER) => user.username == username)[0];
    if(user) throw new GraphQLError('User already exists', { extensions: { http: { status: 403}}});
    user = {
        _id:  Math.random().toString(36).slice(2),
        username, 
        password, 
        todo: []
    };
    userData.push(user);
    return user;
}