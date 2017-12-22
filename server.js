let express = require("express")
let gqlHttp = require("express-graphql")
let { buildSchema } = require("graphql")

let app = express()

let schema = buildSchema(`
  type Roller {
    roll(n: Int!): [Int]
  }
  type Query {
    hello: String
    random: Float!
    roll(scale: Int): Roller
  }
`)

class Roller {
  
  constructor(scale) {
    this.scale = scale
  }
  
  arrayOfSize(n) { return Array.from(Array(n).keys()) }
  
  roll({ n }) {
    return this.arrayOfSize(n)
            .map(Math.random)
            .map(num => num * this.scale)
            .map(Math.floor)
  }
}

let root = {
  hello: () => "hello",
  random: () => Math.random(),
  roll: ({ scale }) => new Roller(scale || 100)
}

app.use("/graphql", gqlHttp({
  schema: schema,
  rootValue: root,
  graphiql: true
}))

app.listen(process.env.PORT, process.env.IP)
console.log("server is up")
