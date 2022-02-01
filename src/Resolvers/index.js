const { GraphQLUpload } = require("graphql-upload");
const mutation = require("./Mutation");
const query = require("./Query");

module.exports = {
  Upload: GraphQLUpload,
  Query: query,
  Mutation: mutation,
};
