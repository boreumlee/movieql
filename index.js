import { GraphQLServer} from "graphql-yoga";
import resolvers from "./graphql/resolvers.js";

//여기에 환경설정 넣으면됨 schema means just scribe (what r u goin to get.)
const server = new GraphQLServer({
    typeDefs:"graphql/schema.graphql",
    resolvers
})

server.start(()=>console.log("graphql server running!"))