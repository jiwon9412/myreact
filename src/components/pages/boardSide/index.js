import React from 'react';
import { MyButton } from '../../atoms/Button';
import '../page.css';

export default function BoardSide() {
  const handleClick = () => {
    // 글쓰기 페이지로 이동
  };

  return (
    <div className="side">
      <div
        style={{
          backgroundColor: '#EBF5FF',
          height: '100%',
        }}
      >
        <MyButton
          className="sideFirstName"
          onClick={handleClick}
          buttonName="+ 글쓰기"
          size="large"
        />
      </div>
    </div>
  );
}
