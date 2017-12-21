let { graphql, buildSchema } = require("graphql")

let schema = buildSchema(`
  type Query {
    hello: String
  }
`)

let root = {
  hello: () => "hello world"
}

graphql(schema, "{ hello }", root).then(console.log)