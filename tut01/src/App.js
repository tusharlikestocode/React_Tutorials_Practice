
import Header from './Header';
import  Content  from './Content';
import Footer from './Footer';
import { useState } from 'react';
import AddItem from './AddItem';
import SearchItem from './SearchItem';



function App() {
  const [items,setitems]=useState(
    JSON.parse(localStorage.getItem('shoppinglist'))
   );
      
   const [newitem,setnewitem]=useState('');
   const [search,setsearch]=useState('')

  const setandsaveitems =(newitems)=>{
    setitems(newitems);
    localStorage.setItem('shoppinglist',JSON.stringify(newitems));

  }



   const additem=(item)=>{
    const id=items.length?items[items.length-1].id +1:1;
    const mynewitem={id,checked:false,item};
    const listitems=[...items,mynewitem]
    setandsaveitems(listitems)
   }
   const handlecheck= (id) =>{
    const listitems=items.map((item)=>
        item.id===id?{...item,checked:!item.checked}:item);
        setandsaveitems(listitems)

}
    const handledelete =(id)=>{
        const listitems =items.filter((item)=>item.id!==id);
        setandsaveitems(listitems)

    }
    const handlesubmit = (e)=>{
      e.preventDefault();
      if(!newitem) return;
      //addditem
      additem(newitem)
      setnewitem('');
    }
  return (
    <div className="App">
      <Header title='Groceries'/>
     
      <AddItem
      newitem={newitem}
      setnewitem={setnewitem}
      handlesubmit={handlesubmit}
      />
       <SearchItem
      search={search}
      setsearch={setsearch}/>
      <Content 
      items={items.filter(item=>((item.item).toLowerCase()).includes(search.toLowerCase()))}
      setitems={setitems}
      handlecheck={handlecheck}
      handledelete={handledelete}
      />
      <Footer length={items.length}/>
    </div>


  );
}

export default App;
