import React from "react";
import "./App.css";

const Visual = (props) => {
   return (
      <div className={props.div1Class}>
         <h3 className={props.h3Class}>{props.h3}</h3>
         <div className={props.div2Class}>{props.divText}</div>
      </div>
   );
}

export default Visual;