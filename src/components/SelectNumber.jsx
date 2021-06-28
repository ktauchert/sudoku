import React from "react";

function SelectNumber() {
  return (
    <React.Fragment>
      {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((selectIndex) => (
        <div id={`s${selectIndex}`} className='select-number'>
          {selectIndex}
        </div>
      ))}
    </React.Fragment>
  );
}

export default SelectNumber;
