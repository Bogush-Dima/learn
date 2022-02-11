import React, { useEffect, useState } from "react";
import { useLazyQuery, useMutation, useQuery } from "@apollo/client";
import { getAllUsersQuery, getUserQuery } from "./query/user";
import { createUserMutation } from "./mutation/user";

export const Content = () => {
  const [users, setUsers] = useState([])
  const [user, setUser] = useState(null)
  const [userId, setUserId] = useState("")
  const [username, setUsername] = useState("")
  const [createdUser, setCreatedUser] = useState(null)
  const [age, setAge] = useState(0)

  const {
    data: usersData, 
    loading: usersLoading,
    error: usersError
  } = useQuery(getAllUsersQuery)

  const [
    getUser,
    {
      data: userData, 
      loading: userLoading, 
      error: userError
    }
  ] = useLazyQuery(getUserQuery)

  const [addNewUser] = useMutation(createUserMutation)

  useEffect(() => {
    if(!usersLoading) {
      setUsers(usersData.getAllUsers)
    }
  }, [usersData])

  useEffect(() => {
    if(!userLoading) {
      setUser(userData?.getUser);
    }
  }, [userData])

  const handleGetUser = (e) => {
    e.preventDefault()

    getUser({
      variables: {
        id: userId
      }
    })
  }

  const addUser = (e) => {
    e.preventDefault()

    addNewUser({
      variables: {
        input: {
          username,
          age: parseInt(age)
        }
      }
    }).then(({data}) => {
      setCreatedUser(data.createUser)
    })
  }

  return (
    <>
    <form>
      <input 
        type="number" 
        placeholder="ID" 
        value={userId} 
        onChange={(e) => setUserId(e.target.value)} 
      />

      <input 
        type="text" 
        placeholder="Name"
        value={username} 
        onChange={(e) => setUsername(e.target.value)} 
      />

      <input 
        type="number" 
        placeholder="Age" 
        value={age} 
        onChange={(e) => setAge(e.target.value)} 
      />

      <div>
        <button onClick={addUser}>Create</button>
        <button onClick={handleGetUser}>Get User</button>
      </div>

    </form>
    <div>
      <p>All users</p>
      {users.map(user => (
        <p>{user.id}; {user.username}; {user.age}</p>
      ))}
    </div>
    {user && (
      <>
        <p>User</p>
        <p>{user.id}; {user.username}; {user.age}</p>
      </>
    )}
    {createdUser && (
      <>
        <p>Created User</p>
        <p>{createdUser.id}; {createdUser.username}; {createdUser.age}; {createdUser.posts}</p>
      </>
    )}
  </>
  )
}