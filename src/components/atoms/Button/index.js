import React from 'react';
import { Button, Input } from 'antd';
import './Button.css';

function MyButton({ className, onClick, buttonName, size }) {
  //console.log(className);

  return (
    <Button type="primary" className={className} onClick={onClick} size={size}>
      {buttonName && buttonName}
    </Button>
  );
}

function MySearch({ placeholder, onSearch, className }) {
  const { Search } = Input;

  console.log('placeholder ==> ', placeholder);
  console.log('onSearch ==> ', onSearch);
  console.log('className ==> ', className);

  return (
    <Search
      placeholder={placeholder}
      onSearch={onSearch}
      style={{
        width: 200,
        position: 'relative',
        right: '100%',
      }}
    />
  );
}

export { MyButton, MySearch };
