
import {useState} from 'react';
import React from 'react'
import ItemList from './ItemList';
export const Content = ({items,handlecheck,handledelete}) => {

   
  return (

    <main>
        {items.length?(
            <ItemList
                    items={items}
                    handlecheck={handlecheck}
                    handledelete={handledelete}
            />
        ):(
            <p style={{marginTop:'2rem'}}>Empty List</p>
        )}
    </main>
  )
}
export default Content;