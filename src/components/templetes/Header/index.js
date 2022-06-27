import React from 'react';
import {} from 'antd';
import { useNavigate } from 'react-router-dom';

import Logo from '../../atoms/logo';
import MenuSelect from '../../atoms/menuSelect';

export default function Header() {
  let navigate = useNavigate();

  /**
   * 메뉴 선택 시 화면 넘어가는 함수
   * @param {*} value
   */
  const selectMenu = (value) => {
    // value값으로 화면 넘기는 api
    navigate(`/${value}`);
  };

  return (
    <div>
      <Logo />
      <MenuSelect
        menus={[
          { label: '메일', value: 'mail' },
          { label: '게시판', value: 'board' },
          { label: '메시징', value: 'message' },
          { label: '일정', value: 'schedule' },
          { label: '공용메일', value: 'publicMail' },
          { label: '주소록', value: 'addressBook' },
          { label: '예약', value: 'reservation' },
          { label: '인사', value: 'member' },
          { label: '전자결재', value: 'payment' },
          { label: '스토어', value: 'store' },
          { label: '그룹', value: 'group' },
        ]}
        selectMenu={selectMenu}
      />
    </div>
  );
}
