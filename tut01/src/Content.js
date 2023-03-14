
import {useState} from 'react';
import React from 'react'

export const Content = () => {
    const [name,setName]=useState('dave');
    const [count,setCount]=useState(0)
    const handlenamechange = ()=>{
        const names =['bob','kevin','dave'];
        const int =Math.floor(Math.random()*3)
        setName(names[int])

      }
    const handleonclick =()=>{
        console.log(count)
    }
    const handleonclick2 =(name) => {
        console.log(`${name} was clicked`)
    }
    const handleonclick3 =(e) => {
        console.log(e.target.innerText)
    }
  return (

    <main>
    <p onDoubleClick={handleonclick}>
        Hello {name}!
    </p>
    <button onClick={handleonclick}>
        Click me!
    </button>
    <button onClick={()=>handleonclick2("dave")}>
        click me
    </button>
    <button onClick={(e)=>handleonclick3(e)}>
        click me
    </button>

    </main>
  )
}
export default Content;