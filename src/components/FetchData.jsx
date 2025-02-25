import React, { useEffect, useState } from 'react'

const FetchData = () => {
    const [data,setData] =useState(null);
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then((response) => response.json())
        .then((data)=> setData(data))
    },[])
  return (
    <div>
      {
        data? (
            <div>
                 <h1>Title: {data.title} <br /> Id:{data.id}</h1>
            </div>
        ): (
            <p>
                Loading
            </p>
        )
      }
    </div>
  )
}

export default FetchData
