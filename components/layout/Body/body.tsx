import React from 'react'

function Body({data}: {data:any}) {
  return (
    <div>
     {data.map((x:any) => x.name)}
    </div>
  )
}

export default Body
