require("es6-promise").polyfill()
require("isomorphic-fetch")

let url = `http://localhost:${process.env.PORT}/graphql`

let headers = new Headers()
headers.append("Content-Type", "application/json")
headers.append("Accept", "application/json")

let query = `
{
  roll(scale: 1000) {
    roll(n: 5)
  }
}`

let options = {
  method: "POST",
  body: JSON.stringify({ query }),
  headers
}

fetch(url, options).then(res => res.json()).then(console.log)
