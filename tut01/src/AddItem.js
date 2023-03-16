import React, { useRef } from 'react'
import {FaPlus} from 'react-icons/fa'



const AddItem = ({newitem,setnewitem,handlesubmit}) => {
    const inputRef=useRef();
  return (
    <form className='addForm' onSubmit={handlesubmit}>
      <label htmlFor="addItem">Add Item</label>
      <input 
      type="text"
      autoFocus
      id='addItem'
      ref={inputRef}
      placeholder='add Item'
      required
      value={newitem}
      onChange={(e)=>{
        setnewitem(e.target.value)
      }} />
      <button
      type='submit'
      aria-label='add item'
      onClick={()=>inputRef.current.focus()}
      >
       <FaPlus/>
      </button>
    </form>
  )
}

export default AddItem
