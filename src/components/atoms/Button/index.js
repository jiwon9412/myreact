import React from 'react';
import { Button } from 'antd';
import './Button.css';

export default function MyButton({ className, onClick, buttonName }) {
  //console.log(className);

  return (
    <Button type="primary" className={className} onClick={onClick}>
      {buttonName && buttonName}
    </Button>
  );
}
