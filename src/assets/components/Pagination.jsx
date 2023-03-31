import React from 'react'




function Pagination({next, prev,onSigue,Back}) {
const sigue = ()=>{
    onSigue()
}
    const atras = ()=>{
        Back()
    }
    return (
    
    <div className='bg-[#292929]  h-[100px] flex justify-center items-center'>
        <div className=''>
            {
                prev ? <button className='mx-5 px-5 py-2 rounded-xl text-white font-extrabold bg-[#0a7285] duration-300 hover:bg-[#17a2bb] hover:text-[black]' onClick={atras}>Preve</button> : null
            }
            {
                next ?  <button className='mx-5 px-5 py-2 rounded-xl text-white font-extrabold bg-[#0a7285] duration-300 hover:bg-[#17a2bb] hover:text-[black]' onClick={sigue}>Next</button> : null
            }
       
        
        </div>
    </div>
  )
}

export default Pagination