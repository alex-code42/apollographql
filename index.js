import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { typeDefs } from './schema.js';
import _db from './_db.js';

console.log(_db);



const resolvers = {
    Query: {
      games: () => _db.games,
      reviews: () => _db.reviews,
      authors: () => _db.authors,
      review: (parent, args, context, info) => {
        return _db.reviews.find((review) => review.id === args.id);
      },
      game: (parent, args, context, info) => {
        return _db.games.find((game) => game.id === args.id);
      },
    },
  };
  
  
  
  
  
  



const server = new ApolloServer({
    typeDefs,
    resolvers,
  });
  

  const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
  });
  
  console.log(`🚀  Server ready at: ${url}`);