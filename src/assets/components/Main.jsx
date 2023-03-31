import React, { useEffect, useState } from 'react'
import Cards from './Cards'
import Pagination from './Pagination'





function Main() {
  
  const [primer, setPrimer] = useState()
  const [pagina, setPagina] = useState({})

  const initUrl= 'https://rickandmortyapi.com/api/character'

   const personajes = (url) =>{
    fetch(url)
    .then((res) => res.json())
    .then((data) =>{
        setPrimer(data.results);
      setPagina(data.info);
    })

      
   };

   useEffect(() => {
    personajes(initUrl);
   }, [])
   
   
   const sigues = ()=>{
   personajes(pagina.next)
}
    const atra = ()=>{
      personajes(pagina.prev)
    }
  
 
    return (
      <div>
<Pagination next={pagina.next} prev={pagina.prev} onSigue={sigues} Back={atra}/>
    
    <div className='flex flex-wrap gap-3 py-5 justify-center bg-[#292929] '>
        {
          primer?.map(item => <Cards text={item} />)
        }
    </div>
    
    <Pagination next={pagina.next} prev={pagina.prev} onSigue={sigues} Back={atra}/>
        </div>
  )
}

export default Main