const jwt = require('jsonwebtoken');
module.exports = (parent: any, args: { input: { username: any; password: any; }; }, context: any, info: any) => {
    const {username, password} = args.input;
    const user = usersData.filter((user: USER) => user.username == username && user.password == password)[0];
    if(!user) 
        throw new GraphQLError('Invalid Credentials', { extensions: { http: { status: 404}}});
        
    const token = jwt.sign({ _id: user._id }, process.env.ACCESS_TOKEN_SECRET, {expiresIn: '1h'});
    return token;
}