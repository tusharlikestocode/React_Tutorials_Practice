
import Header from './Header';
import  Content  from './Content';
import Footer from './Footer';
import { useState } from 'react';

function App() {
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
    <div className="App">
      <Header title='Groceries'/>
      <Content 
      items={items}
      setitems={setitems}
      handlecheck={handlecheck}
      handledelete={handledelete}
      />
      <Footer length={items.length}/>
    </div>


  );
}

export default App;
