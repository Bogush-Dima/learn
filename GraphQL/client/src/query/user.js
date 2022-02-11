import {gql} from "@apollo/client"

export const getAllUsersQuery = gql`
  query {
    getAllUsers{
      id,
      username,
      age
    }
  }
`

export const getUserQuery = gql`
  query getUser($id: ID) {
    getUser(id: $id) {
      id,
      username,
      age,
      posts {
        id,
        title,
        content
      }
    }
  }
`