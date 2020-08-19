const {prisma} = require('../generated/javascript-client');
const { ApolloServer, gql } = require('apollo-server-express')
const { buildFederatedSchema } = require('@apollo/federation')
const { typeDefs } = require('./schema')
const { app } = require('./app')

const port = 4001


const resolvers = {
  Query: {
    users: (parent, args, ctx, info) => ctx.prisma.users({}, info)
  },
  Mutation: {
    createUser: (parent, args, ctx, info) => ctx.prisma.createUser({
      name: args.name
    }, info)
  }
}


const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: req => ({
    ...req,
    prisma
  })
})

server.applyMiddleware({app})

app.listen(({port}), () => {
  console.log(`🚀 Server ready at port ${port}`)
})