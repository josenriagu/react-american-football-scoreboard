import React from "react";
import "./App.css";

import Visual from './Visual';
import elements from './Elements';

const BottomRow = () => {
  return (
    <div className="bottomRow">
      {
        elements.map(element =>
          <Visual
            div1Class={element.div1Class}
            div2Class={element.div2Class}
            h3Class={element.h3Class}
            h3={element.h3}
            divText={element.divText}
          />
        )
      }
    </div>
  );
};

export default BottomRow;
