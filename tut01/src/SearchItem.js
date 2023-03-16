import React from 'react'
import { useRef } from 'react'
const SearchItem = ({search,setsearch}) => {
 
  return (
    <form  className='searchForm'    onSubmit={(e)=>e.preventDefault}>
        <label htmlFor="search">Search</label>
        <input 
        type="text"
        id='search'
        role='searchbox'
        placeholder='Search'
        onChange={(e)=>setsearch(e.target.value)}

        />

    </form>
  )
}

export default SearchItem
