module.exports = (parent: any, args: { id: any; }, context: { req: { isAuthenticated: any; user: { _id: any; }; }; }, info: any) => {
    if(!context.req || !context.req.isAuthenticated) throw new GraphQLError('Unauthorised', { extensions: { http: { status: 401}}});
    usersData.map((user: { _id: any; todo: any[]; }, index: string | number) => {
        if(user._id == context.req.user._id){
            usersData[index].todo = user.todo.filter((todo) => todo._id != args.id);
        }
    })
    return args.id;
}