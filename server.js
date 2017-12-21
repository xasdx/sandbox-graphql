let express = require("express")
let gqlHttp = require("express-graphql")
let { buildSchema } = require("graphql")

let schema = buildSchema(`
  type Query {
    hello: String
    random: Float!
    roll: [Int]
  }
`)

let random = () => Math.random()

let root = {
  hello: () => "hello world",
  random,
  roll: () => Array.from(Array(1).keys()).map(random).map(n => n * 100).map(Math.floor)
}

let app = express()

app.use("/graphql", gqlHttp({
  schema: schema,
  rootValue: root,
  graphiql: true
}))

app.listen(process.env.PORT, process.env.IP)
console.log("up")