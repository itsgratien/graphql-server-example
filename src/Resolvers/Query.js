const { ApolloError } = require("apollo-server-express");
const BookModel = require("../Model/Book");

module.exports = {
  getBooks: async () => {
    try {
      return await BookModel.find({});
    } catch (error) {
      return new ApolloError(
        "Unable to fetch books due to internal server error"
      );
    }
  },
  getBookDetail: async (_, args) => {
    try {
      const findBook = await BookModel.findById(args.id);
      if (findBook) {
        return findBook;
      } else {
        return new ApolloError(`Book with id ${args.id} could not be found`);
      }
    } catch (error) {
      return new ApolloError(
        "Unable to fetch book due to internal server error"
      );
    }
  },
};
