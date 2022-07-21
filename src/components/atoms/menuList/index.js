import React from 'react';
import styled from 'styled-components';

export default function MenuList({ data = [] }) {
  return (
    <div>
      <Menu>
        {data.map((item) => {
          return (
            <li>
              <a className="item" href={item?.value}>
                {item?.menuNm}
              </a>
            </li>
          );
        })}
      </Menu>
    </div>
  );
}

const Menu = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-around;

  .item {
    cursor: pointer;
    color: #000000;
  }
`;
