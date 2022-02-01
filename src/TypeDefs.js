const { gql } = require("apollo-server");

exports.typeDefs = gql`
  type Book {
    id: String
    title: String
    author: String
  }

  type Query {
    getBooks: [Book]
    getBookDetail(id: Int!): Book
  }

  type Mutation{
    createBook(title: String!, author: String!): Book
  }
`;
