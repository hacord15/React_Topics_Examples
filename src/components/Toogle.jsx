import React, { useState } from 'react'

const Toogle = () => {
    const [isTrigger,setIsTrigger] =useState(false);

    const handleToggle =()=>{
        setIsTrigger(!isTrigger);
    }
  return (
    <div>
      <label>
        <input type="checkbox" onChange={handleToggle} />
      </label>
      <p>{isTrigger ? 'on':'off'}</p>
    </div>
  )
}

export default Toogle
