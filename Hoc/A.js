import React  from 'react'
import Hoc from './Hoc';
function A(props) {
    const {count,handleFunction} = props;
  
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={handleFunction}>click</button>
    </div>
  )
}
export default Hoc(A)
