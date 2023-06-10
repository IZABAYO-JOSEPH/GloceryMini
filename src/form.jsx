import React from 'react'
import { useState } from 'react'
import {toast} from "react-toastify"
const Form = ({addItems}) => {
    const [formData, setFormData] = useState('')
     const handleSubmit = (e)=>{
        e.preventDefault()
        if(!formData) {
        toast.error('Provide values please')
        return
      }
       
        addItems(formData)
        setFormData('')
     }
  
    return (
    <form onSubmit={handleSubmit}>
        <h4>Glocery mini</h4>
        <div className='form-control'>
        <input type="text" className='form-input'value={formData} onChange={(e) =>setFormData(e.target.value)}/>
        <button className='btn' type='submit'>Add Item</button>
        </div>
    </form>
  )
}

export default Form