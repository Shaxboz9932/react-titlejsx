import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Main from './components/Main'
import UserAddForm from './components/UserAddForm'

function App() {

    const [users, setUsers] = useState([])

    const [showModal, setShowModal] = useState(false)

    const handleDelete = (id) => {
        const deleteUser = users.filter((user)=>{
            return user.id !== id
        })
        setUsers(deleteUser)
    }

    const showModalFunc = () => {
        setShowModal(true)
    }
    const NotShowModalFunc = () => {
        setShowModal(false)
    }

    const addTitle = (user) => {
        setUsers((prev)=>{
            return [...prev, user]
        })
        setShowModal(false)
    }

  return (
    <div className='container container-fluid'>
      <Navbar usersLength={users.length} showModalFunc={showModalFunc}/>
      {showModal && <UserAddForm NotShowModalFunc={NotShowModalFunc} addTitle={addTitle}/>}
      {users.length === 0 && <h2>Not Photos</h2>}
      <Main users={users} handleDelete={handleDelete}/>
    </div>
  )
}

export default App
