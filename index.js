let express = require("express")
let gqlHttp = require("express-graphql")
let { buildSchema } = require("graphql")

let schema = buildSchema(`
  type Query {
    hello: String
  }
`)

let root = {
  hello: () => "hello world"
}

let app = express()

app.use("/graphql", gqlHttp({
  schema: schema,
  rootValue: root,
  graphiql: true
}))

app.listen(process.env.PORT, process.env.IP)
console.log("up")