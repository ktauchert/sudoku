import React from "react";

function BigGrid(props) {
  const { indexBig } = props;
  return (
    <div id={indexBig} className='game-grid__big-nine'>
      {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((indexSmall) => (
        <div
          id={`${indexBig}${indexSmall}`}
          className='game-grid__big-nine__small-nine'
        ></div>
      ))}
    </div>
  );
}

export default BigGrid;
