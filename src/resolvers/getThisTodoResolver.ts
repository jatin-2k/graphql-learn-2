module.exports = (parent: any, args: { id: any; }, context: { req: { isAuthenticated: any; user: { _id: any; }; }; }, info: any) => {
    if(!context.req || !context.req.isAuthenticated) 
        throw new GraphQLError('Unauthorised', { extensions: { http: { status: 401}}});

    const user = usersData.filter((user: USER, index: any) => user._id == context.req.user._id)[0];
    if(!user) 
        throw new GraphQLError('User dose not exist', { extensions: { http: { status: 404}}});
        
    const todo = user.todo.filter((todo: TODO) => todo._id == args.id)[0];
    return todo;
}