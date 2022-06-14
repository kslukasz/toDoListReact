import React from 'react';
import src from './angle-down.svg'

function Button(props) {
  // const src = "./data/angle-down.svg";
  let buttonClass=null;
  let icoClass=null;
  if (props.copyButtons[props.kindOfButton] !== null) {buttonClass="active"}
  if (props.kindOfButton === "noFilter") {icoClass="nodisplay"};  
  if (props.copyButtons[props.kindOfButton] === "down") {icoClass=null};
  if (props.copyButtons[props.kindOfButton] === "up") {icoClass="rotate"};
  // console.log(icoClass, props.kindOfButton)
  return ( 
    <button className={`filter ${buttonClass}`} onClick={() => props.handleFilterButton(props.kindOfButton)}><span>{props.content}</span><img src={src} className={`ico ${icoClass}`} alt="?" /></button>
   );
}

export default Button;