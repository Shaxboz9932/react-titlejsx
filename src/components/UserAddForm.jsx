import React from 'react'
import {v4 as uuidv4} from 'uuid'

function UserAddForm({NotShowModalFunc, addTitle}) {
    const [title, setTitle] = React.useState({
        id: uuidv4(),
        image: '',
        title: '',
        desc: ''
    })
    const handleSubmit = (e) => {
        e.preventDefault()
        addTitle(title)
    }
  return (
    <div>
        <div className='position-relative pb-3'>
            <div className='position-absolute top-0 end-0'>
                <button onClick={()=> NotShowModalFunc()} className='btn btn-close'></button>
            </div>
        </div>
        
        <form onSubmit={handleSubmit} className='form-group'>
            <p>
                <span>Title:</span>
                <input onChange={(e) => setTitle((prev)=> {
                    return {...prev, title: e.target.value}
                })} type="text" className='form-control'/>
            </p>
            <p>
                <span>Image Url:</span>
                <input onChange={(e) => setTitle((prev)=> {
                    return {...prev, image: e.target.value}
                })} type="text" className='form-control'/>
            </p>
            <p>
                <span>Description:</span>
                <textarea onChange={(e) => setTitle((prev)=> {
                    return {...prev, desc: e.target.value}
                })} cols="30" rows="10" className='form-control'></textarea>
            </p>
            <p>
                <button className='form-control btn btn-primary'>Add Title</button>
            </p>
        </form>
      </div>
  )
}

export default UserAddForm
