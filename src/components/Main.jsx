import React from 'react'

function Main({users, handleDelete}) {
  return (
    <div className='row'>
        
        {users.map((user)=> {
            return (
                <div className="col-4 mb-2" key={user.id}>
                    <div className="card">
                        <img src={user.image} className="card-img-top" alt="..." width={200} height={200}/>
                        <div className="card-body">
                            <h5 className="card-title">{user.title}</h5>
                            <p className="card-text">{user.desc}</p>
                            <button onClick={() => {handleDelete(user.id)}} className='btn btn-danger'>Delete</button>
                        </div>
                    </div>
                </div>
                    )
                })}
    </div>
  )
}

export default Main
