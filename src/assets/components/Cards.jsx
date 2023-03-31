import React from 'react'




function Cards({text}) {
  
  console.log(text)
    return (
    <div className='max-w-[280px] min-h-[300px] border-4 border-[#0b444d] rounded-xl bg-[#78d0f0] shadow-[7px_7px_4px_#000] cursor-pointer relative'>
      
      <div className='absolute top-3 bg-[#3bdddd] w-[120px]  flex justify-evenly items-center rounded-tr-3xl'>
        <h3 className='text-[black] font-extrabold'>{text.status}</h3>
       <div className={` rounded-full w-[15px] h-[15px] ${text.status === 'Alive' ? "bg-[#23ff1b]" : "bg-[#ff0000]" } `}></div>
        
        
      </div>

        <img className='rounded-xl' src={text.image} />
        
        <h2 className='my-2 px-2 font-extrabold'>Nombre: <span className='text-[#108a5d]'>{text.name}</span></h2>
        
        <h4 className='my-2 px-2 font-extrabold'>Especie: {text.species}</h4>
        <h3 className='my-2 px-2 font-extrabold'>Ubicacion: {text.gender}</h3>
        <h2 className='my-2 px-2 font-extrabold'>Origen: {text.origin.name}</h2>
       
        
    </div>
  )
}

export default Cards