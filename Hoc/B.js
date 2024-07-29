import React from 'react'
import Hoc from './Hoc';

function B(props) {
    const {count,handleFunction} = props;
    return (
      <div>
        <h1>{count}</h1>
        <button onMouseOver={handleFunction}>mouse over</button>
      </div>
    )
}
export default Hoc(B)
