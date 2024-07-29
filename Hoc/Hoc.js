import React, { useState } from 'react'
const Hoc = (WrappedComponents) =>{
    return function Hoc(props){
        const [count,setCount] = useState(0);
        function handleFunction(){
        setCount(count+1)
            }
            return(
                <div>
                <WrappedComponents count={count} handleFunction={handleFunction} />
                </div>
            )
      
  }
}

export default Hoc
