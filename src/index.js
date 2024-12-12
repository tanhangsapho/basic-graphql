import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

//type
import { typeDefs } from "./schema.js";
import { resolvers } from "./resolver.js";
//server setup
const PORT = 4000;
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const { url } = await startStandaloneServer(server, { listen: { port: PORT } });

console.log("Server ready listening at port", PORT);
