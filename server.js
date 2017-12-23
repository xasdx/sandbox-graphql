let express = require("express")
let gqlHttp = require("express-graphql")

let schema = require("./schema")
let root = require("./root")

let app = express()

app.use("/graphql", gqlHttp({
  schema: schema,
  rootValue: root,
  graphiql: true
}))

app.listen(process.env.PORT, process.env.IP)
console.log("server is up")
