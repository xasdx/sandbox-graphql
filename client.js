require("es6-promise").polyfill()
require("isomorphic-fetch")

let url = `http://localhost:${process.env.PORT}/graphql`

let headers = new Headers()
headers.append("Content-Type", "application/json")
headers.append("Accept", "application/json")

let query = `query Roll($num: Int!, $scale: Int!) {
  roll(n: $num, scale: $scale)
}`

let options = {
  method: "POST",
  body: JSON.stringify({ query, variables: { num: 5, scale: 100 }}),
  headers
}

fetch(url, options).then(res => res.json()).then(console.log)
