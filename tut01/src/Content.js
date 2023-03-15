
import {useState} from 'react';
import React from 'react'
import { FaTrashAlt } from 'react-icons/fa';

export const Content = () => {
    const [items,setitems]=useState(
     [
        {
            id:1,
            checked:true,
            item:'potato'
        },
        {
            id:2,
            checked:false,
            item:'potato'
        },
        {
            id:3,
            checked:false,
            item:'potato'
        }
     ]
    );
    const handlecheck= (id) =>{
        const listitems=items.map((item)=>
            item.id===id?{...item,checked:!item.checked}:item);
            setitems(listitems);    
            localStorage.setItem('shoppinglist',JSON.stringify(listitems))
    }
    const handledelete =(id)=>{
        const listitems =items.filter((item)=>item.id!==id);
        setitems(listitems);
        localStorage.setItem('shoppinglist',JSON.stringify(listitems))

    }
   
  return (

    <main>
        {items.length?(
        <ul>

            {items.map((item)=>(

                
                    <li className='item' key={item.id}>
                    <input 
                    type="checkbox" 
                    checked={item.checked}
                    onChange={
                        ()=>handlecheck(item.id)
                    }
                    />

                    <label
                    style={(item.checked)?{
                        textDecoration:'line-through'
                    }:null}
                     onDoubleClick={()=>handlecheck(item.id)}
                    >
                        {item.item}
                    </label>
                    <FaTrashAlt 
                    onClick={()=> handledelete(item.id)}
                    role='button' 
                    tabIndex='0'/>
                </li>

            ))}
        </ul>
        ):(
            <p style={{marginTop:'2rem'}}>Empty List</p>
        )}
    
    </main>
  )
}
export default Content;