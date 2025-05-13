import React from 'react'
import { MorphingDialogBasicOne } from './Components/viewdialog'

function Body({data}: {data:any}) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4 place-items-center">
     {data.map((x:any, index:number) =>  <div className='my-8' key={index}>
     <MorphingDialogBasicOne data={x}/>
     </div>)}
    </div>
  )
}

export default Body
