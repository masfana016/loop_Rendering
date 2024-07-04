import React from 'react'

function page() {
  const listofdirectors = ["Masfa", "Nasrullah", "Ulfat", "Musab"]
  return (
    <div>
      <h1>List of Directors</h1>
      {listofdirectors.map((items, i)=>{
        return (
          <h2>{i+1}-{items}</h2>
        )
      }

      )}
    </div>
  )
}

export default page