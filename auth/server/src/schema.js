const { gql } = require('apollo-server-express')

const typeDefs = gql`
  type User {
    id: ID!
    name: String!
  }

  type Query {
    user(id: ID!): User,
    users: [User]
  }

  type Mutation {
    createUser(name: String): User
  }

`

module.exports = {
  typeDefs
}
