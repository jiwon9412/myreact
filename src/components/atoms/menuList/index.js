import React from 'react';
import styled from 'styled-components';

export default function MenuList({ data = [] }) {
  return (
    <div>
      <MenuUl>
        {data.map((item) => {
          return (
            <li>
              <a className="item" href={item.value}>
                {item.menuNm}
              </a>
            </li>
          );
        })}
      </MenuUl>
    </div>
  );
}

const MenuUl = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-around;

  .item {
    cursor: pointer;
    color: #000000;
  }
`;
