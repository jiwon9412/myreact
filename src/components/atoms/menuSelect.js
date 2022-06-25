import React from 'react';
import { Select } from 'antd';

export default function MenuSelect({ menus = [], selectMenu }) {
  const { Option } = Select;

  const handleChange = (value) => {
    selectMenu && selectMenu(value);
  };

  return (
    <Select
      defaultValue="board"
      style={{ width: 120, marginLeft: 30 }}
      onChange={handleChange}
    >
      {menus.map((menu) => {
        return (
          <Option key={menu?.value} value={menu?.value}>
            {menu?.label || ''}
          </Option>
        );
      })}
    </Select>
  );
}
