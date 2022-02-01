const { ApolloError } = require("apollo-server");
const BookModel = require("../Model/Book");

module.exports = {
  createBook: async (_, args) => {
    try {
      const add = await BookModel.create(args);
      return add;
    } catch (error) {
      return new ApolloError(
        "Unable to save book due to an internal server error"
      );
    }
  },
};
