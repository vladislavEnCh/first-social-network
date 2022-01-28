import React from 'react';

function Post({ text, tittle, onClick, id }) {
  // console.log(id);
  return (
    <div className="card">
      <img src="./images/assassins.png" alt="" />
      <div className="card-info">
        <h2>{tittle}</h2>
        <p>{text}</p>

        <div className="progress"></div>
      </div>

      <h2 className="percentage">60%</h2>
      <span onClick={() => onClick(id)} className="close"></span>
    </div>
  );
}

export { Post };
