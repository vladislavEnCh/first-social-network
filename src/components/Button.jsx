import React from 'react';

function Button({ onClick, text, className }) {
  return (
    <div onClick={onClick} className="Button ">
      <button className={`Button-animat ${className}`}>
        {text}
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </button>
    </div>
  );
}

export { Button };
