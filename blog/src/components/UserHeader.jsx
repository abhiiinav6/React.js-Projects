import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUser } from '../actions'

function UserHeader({ userId }) {
  const dispatch = useDispatch()
  const user = useSelector(state => {
    const users = state.users
    const user = users.find(u=>u.id===userId)
    return user;
  })
  useEffect(() => {
    dispatch(fetchUser(userId))
  }, [])


  return (
    <div className="header">
      {user.name} hii
    </div>
  )
}

export default UserHeader