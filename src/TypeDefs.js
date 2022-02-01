const { gql } = require("apollo-server-express");

exports.typeDefs = gql`
  scalar Upload
  type Book {
    _id: String
    title: String
    author: String
    image: String
  }

  type Query {
    getBooks: [Book]
    getBookDetail(id: ID!): Book
  }

  type Mutation {
    createBook(title: String!, author: String!, image: Upload!): Book
  }

  type File{
    filename: String!
    mimetype: String!
    encoding: String!
  }
`;
