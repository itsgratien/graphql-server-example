const { ApolloServer, gql, ApolloError } = require("apollo-server");

const typeDefs = gql`
  type Book {
    id: String
    title: String
    author: String
  }

  type Query {
    books: [Book]
    getBook(id: Int!): Book
  }
`;

const books = [
  {
    title: "The Awakening",
    author: "Kate Chopin",
    id: 1,
  },
  {
    title: "City of Glass",
    author: "Paul Auster",
    id: 2,
  },
];

const resolvers = {
  Query: {
    books: () => books,
    getBook: (_, args) => {
      const findBook = books.find((item) => item.id === args.id);
      if (findBook) {
        return findBook;
      } else {
        return new ApolloError("Book not found");
      }
    },
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then((serverInfo) => {
  console.log(`🚀 server is listening on port ${serverInfo.url}`);
});
