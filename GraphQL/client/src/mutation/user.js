import {gql} from "@apollo/client"

export const createUserMutation = gql`
  mutation createUser($input: UserInput) {
    createUser(input: $input) {
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