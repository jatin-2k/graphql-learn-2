const {ApolloServer} = require('apollo-server');
const {GraphQLError} = require('graphql');
const typeDefs = require('./schema/typedefs');
const resolvers = require('./schema/resolvers');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

dotenv.config();

//Functions ----------------------
const createContext = ({req}) => {
    if(!req.headers.authorization) return {};
    const token = req.headers.authorization.split(' ')[1];
    if(!token) return {};
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
        if(err){
             throw new GraphQLError('Please generate a new token', { extensions: { http: { status: 403}}});
        }
        else{
            req.isAuthenticated = true;
            req.user = user;
        }
    });
    return {req};
}


//Server Settings
const server = new ApolloServer({
    typeDefs, 
    resolvers, 
    context: createContext
});

server.listen().then(({url}) => {
    console.log(`Api is running at ${url}`);
});