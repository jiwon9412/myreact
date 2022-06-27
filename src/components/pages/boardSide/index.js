import React from 'react';
import MyButton from '../../atoms/Button';
export default function BoardSide() {
  const handleClick = () => {
    //
  };

  return (
    <div>
      <MyButton
        className="sideFirstName"
        onClick={handleClick}
        buttonName="+ 글쓰기"
      />
    </div>
  );
}
