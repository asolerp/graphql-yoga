const { ApolloServer } = require('apollo-server')
const { ApolloGateway } = require('@apollo/gateway')


const port = 4000

const gateway = new ApolloGateway({
  serviceList: [
    { name: 'auth', url: process.env.SERVICE1_URL }
  ]
})

const server = new ApolloServer({
  gateway,
  subscriptions: false
})

server.listen({ port }).then(({ url }) => {
  console.log(`Server ready at ${url}`)
})