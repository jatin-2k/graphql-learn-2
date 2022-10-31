module.exports = (parent: any, args: any, context: { req: { isAuthenticated: any; user: { _id: any; }; }; }, info: any) => {
    if(!context.req || !context.req.isAuthenticated) 
        throw new GraphQLError('Unauthorised', { extensions: { http: { status: 401}}});
        
    const todos = usersData.filter((user: USER) => user._id == context.req.user._id)[0].todo;
    return todos;
}