const { ApolloServer } = require("apollo-server");
const { typeDefs } = require("./schema/type-defs");
const { resolvers } = require("./schema/resolvers");

/* context is usually used for auth or getting the request
context: () => {
    return { userModel };
  },
*/
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({req}) => {
    return { req };
  },
});

server.listen().then(({ url }) => {
  console.log(`API RUNNING AT ${url}`);
});
