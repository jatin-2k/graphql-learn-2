var usersData = require('../../FakeData');
module.exports = (parent: any, args: { id: any; input: any; }, context: { req: { isAuthenticated: any; user: { _id: any; }; }; }, info: any) => {
    if(!context.req || !context.req.isAuthenticated) throw new GraphQLError('Unauthorised', { extensions: { http: { status: 401}}});
    var newTodo = null;
    usersData.map((user: { _id: any; todo: any[]; }, uidx: string | number) => {
        if(user._id == context.req.user._id){
            user.todo.map((todo: { _id: any; }, tidx: string | number) => {
                if(todo._id == args.id){
                    newTodo = {_id: args.id, title: args.input};
                    usersData[uidx].todo[tidx] = newTodo;
                }
            })
        }
    })
    return newTodo;
}