const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const { graphqlUploadExpress } = require("graphql-upload");
const path = require("path");
const { makeExecutableSchema } = require("@graphql-tools/schema");
const { typeDefs } = require("./TypeDefs");
const dbConnect = require("./Connect");
const resolvers = require("./Resolvers");

const startServer = async () => {
  const server = new ApolloServer({
    schema: makeExecutableSchema({ typeDefs, resolvers }),
  });

  await server.start();

  const app = express();

  app.use(graphqlUploadExpress());

  app.use(express.static(path.join(__dirname, "./Uploads")));

  server.applyMiddleware({ app });

  await dbConnect();

  await new Promise((r) => app.listen({ port: 4000 }, r));

  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`);
};

startServer();
