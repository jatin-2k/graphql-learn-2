const usersData = require('../FakeData');
const resolvers = {
    Query: {
        users: () => {
            return usersData;
        },
        login: (parent, args) => {
            const {username, password} = args.input;
            var user = usersData.filter((user) => user.username == username && user.password == password)[0];
            if(user) return `user ${username} successfully logged in`;
            else return `invalid credentials, login failed...`;
        },
        todos: (parent, args) => {
            const { username } = args.input;
            var user = usersData.filter((user) => user.username == username)[0];
            if(!user) return `invalid credentials, login failed...`;
            var todos = user.todo;
            return todos; 
        }
    }
}
module.exports = resolvers;