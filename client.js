require("es6-promise").polyfill()
require("isomorphic-fetch")

let url = `http://localhost:${process.env.PORT}/graphql`

let headers = new Headers()
headers.append("Content-Type", "application/json")
headers.append("Accept", "application/json")

let requestBody = { query: `
{
  hello
  random
  roll
}
` }

let options = {
  method: "POST",
  body: JSON.stringify(requestBody),
  headers
}

fetch(url, options).then(res => res.json()).then(console.log)
