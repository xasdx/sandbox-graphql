let express = require("express")
let gqlHttp = require("express-graphql")
let { buildSchema } = require("graphql")

let app = express()

let schema = buildSchema(`
  type Query {
    hello: String
    random: Float!
    roll(n: Int!, scale: Int!): [Int]
  }
`)

let arrayOfSize = (n) => Array.from(Array(n).keys())

let roll = ({ n, scale }) => arrayOfSize(n)
                      .map(Math.random)
                      .map(num => num * scale)
                      .map(Math.floor)

let root = { hello: () => "hello", random: () => Math.random(), roll }

app.use("/graphql", gqlHttp({
  schema: schema,
  rootValue: root,
  graphiql: true
}))

app.listen(process.env.PORT, process.env.IP)
console.log("server is up")
