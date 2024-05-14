import React, { useState } from 'react'

function Navbar({usersLength, showModalFunc}) {

  return (
    
      <div className='navbar bg-light px-5 mb-5 mt-2'>
        <a className='navbar-brand' href="/">TitleJSX</a>
        <button className='btn btn-success navbar-brand' onClick={() => showModalFunc()}>Add Title</button>
        <a className='navbar-brand text-dark'>{usersLength > 0 ? `You have ${usersLength} title` : 'Not title'}</a>
      </div>
  )
}

export default Navbar
