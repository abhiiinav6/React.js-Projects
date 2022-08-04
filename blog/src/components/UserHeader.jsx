import React from 'react'
import { useSelector } from 'react-redux'

function UserHeader({ userId }) {
  const user = useSelector(state => {
    const users = state.users
    const user = users.find(u => u.id === userId)
    return user;
  })


  return (
    <div className="header">
        {user?.name}
    </div>
  )
}

export default UserHeader