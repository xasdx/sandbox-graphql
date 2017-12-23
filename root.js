let crypto = require("crypto")

let Roller = require("./roller")
let Message = require("./message")

let db = {}

module.exports = {
  
  hello: () => "hello",
  
  random: () => Math.random(),
  
  roll: ({ scale }) => new Roller(scale || 100),
  
  getMessage: ({ id }) => {
    if (!db[id]) { throw new Error(`Could not find msg with id ${id}`) }
    return new Message(id, db[id])
  },
  
  createMessage: ({ input }) => {
    let id = crypto.randomBytes(10).toString("hex")
    db[id] = input
    return new Message(id, input)
  },
  
  updateMessage: ({ id, input }) => {
    if (!db[id]) { throw new Error(`Could not find msg with id ${id}`) }
    db[id] = input
    return new Message(id, input)
  }
}
