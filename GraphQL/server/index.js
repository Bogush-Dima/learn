const express = require("express")
const {graphqlHTTP} = require("express-graphql")
const cors = require("cors")
const schema = require("./schema")

const users = [
  {
    id: 1,
    username: "Vasya",
    age: 24
  },

  {
    id: 2,
    username: "Dima",
    age: 26
  },
]

const app = express()

app.use(cors())

const root = {
  getAllUsers: () => {
    return users
  },

  getUser: ({id}) => {
    return users.find(user => user.id == id)
  },

  createUser: ({input}) => {
    const id = Date.now()
    users.push({id, ...input})
    return {id, ...input}
  }
}

app.use("/graphql", graphqlHTTP({
  graphiql: true,
  schema,
  rootValue: root
}))

app.listen(5000, () => console.log("Server started on port 5000"))