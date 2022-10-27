var usersData = require('../../FakeData');
const {GraphQLError} = require('graphql');

module.exports = (parent, args, context, info) => {
    if(!context.req || !context.req.isAuthenticated) throw new GraphQLError('Unauthorised', { extensions: { http: { status: 401}}});
    var newTodo = null;
    usersData.map((user, uidx) => {
        if(user._id == context.req.user._id){
            user.todo.map((todo, tidx) => {
                if(todo._id == args.id){
                    newTodo = {_id: args.id, title: args.input};
                    usersData[uidx].todo[tidx] = newTodo;
                }
            })
        }
    })
    return newTodo;
}