import React from 'react';
import DisplayEntry from './DisplayEntry.jsx';

var Display = (props) => {
  return(
   <div className = "KL-container">
    {/* {props.elements.map((element, index) => ( */}
      <DisplayEntry element={props.element}/>
    {/* ))} */}
  </div>
  )
}

export default Display;