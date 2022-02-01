const { ApolloServer } = require("apollo-server");
const { typeDefs } = require("./TypeDefs");
const dbConnect = require("./Connect");
const resolvers = require("./Resolvers");

const server = new ApolloServer({ typeDefs, resolvers });
server.listen().then((serverInfo) => {
  dbConnect();
  console.log(`🚀 server is listening on port ${serverInfo.url}`);
});
