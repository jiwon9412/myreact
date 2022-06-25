import React from 'react';
import { Select, Image } from 'antd';

export default function Header() {
  const { Option } = Select;

  const handleChange = (value) => {
    alert(`${value} 화면으로 넘어갑니다.`);
  };
  return (
    <div>
      <Image style={{ width: 50, marginLeft: 30 }} src="logo192.png" />
      <Select
        defaultValue="board"
        style={{ width: 120, marginLeft: 30 }}
        onChange={handleChange}
      >
        <Option value="mail">메일</Option>
        <Option value="board">게시판</Option>
        <Option value="message">메시징</Option>
        <Option value="schedule">일정</Option>
        <Option value="publicMail">공용메일</Option>
        <Option value="addressBook">주소록</Option>
        <Option value="reservation">예약</Option>
        <Option value="member">인사</Option>
        <Option value="payment">전자결재</Option>
        <Option value="store">스토어</Option>
        <Option value="group">그룹</Option>
      </Select>
    </div>
  );
}
