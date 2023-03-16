
import Header from './Header';
import  Content  from './Content';
import Footer from './Footer';
import { useState,useEffect } from 'react';
import AddItem from './AddItem';
import SearchItem from './SearchItem';



function App() {
  const API_URL ='http://localhost:3500/items';



  const [items,setitems]=useState([]);
  const [newitem,setnewitem]=useState('');
  const [search,setsearch]=useState('');
  const [fetcherror,setfetcherror]=useState(null);
  const [isloading,setisloading]=useState(true);

   useEffect(()=>{
    const fetchitems = async()=>{
      try{
        const response=await fetch(API_URL);
        if(!response.ok) throw  Error('Did not received expected data')
        const listitems =await response.json();
        console.log(listitems);
        setitems(listitems);
        setfetcherror(null);
      }catch(err){
      console.log(err.message);
      setfetcherror(err.message);
      }finally{
        setisloading(false);
      }
    }
    setTimeout(()=>{
      (async ()=> await fetchitems())();
    },2000)
    
  },[])





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
        setsearch={setsearch}
      />
      <main>
        {
          isloading && <p>Loading Items....</p>
        }
        {fetcherror && <p style={{color:'red'}}>{`Error:${fetcherror}`}</p>}
    { !fetcherror && !isloading && < Content 
    items={items.filter(item=>((item.item).toLowerCase()).includes(search.toLowerCase()))}
    setitems={setitems}
    handlecheck={handlecheck}
    handledelete={handledelete}
    />}
      </main>
      <Footer 
        length={items.length}
      />
    </div>


  );
}

export default App;
