let { buildSchema } = require("graphql")

module.exports = buildSchema(`
  input MessageInput {
    content: String,
    author: String
  }
  
  type Message {
    id: ID!,
    content: String,
    author: String
  }
  
  type Roller {
    roll(n: Int!): [Int]
  }
  
  type Query {
    hello: String
    random: Float!
    roll(scale: Int): Roller
    getMessage(id: ID!): Message
  }
  
  type Mutation {
    createMessage(input: MessageInput): Message
    updateMessage(id: ID!, input: MessageInput): Message
  }
`)
