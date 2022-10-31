module.exports = (parent: any, args: { input: any; }, context: { req: { isAuthenticated: any; user: { _id: any; }; }; }, info: any) => {
    if(!context.req || !context.req.isAuthenticated) 
        throw new GraphQLError('Unauthorised', { extensions: { http: { status: 401}}});

    var newTodo: TODO | null = null;
    usersData.map((user: USER, index: string | number) => {
        if(user._id == context.req.user._id){
            const newId = (user.todo.length == 0) ? 0 : user.todo[user.todo.length - 1]._id + 1;
            newTodo = {_id: newId, title: args.input};
            usersData[index].todo.push(newTodo);
        }
    })

    return newTodo;
}