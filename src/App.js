import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import {Layout} from 'antd'
import styled from 'styled-components'

import MenuList from './components/atoms/menuList'

import menuListData from './assets/menulist.json'

function App() {
  
  return (

    <div className="App">
      <AppLayout>
        <AppHeader><MenuList data={menuListData}/></AppHeader>
      </AppLayout>
      
    </div>
  );
}
const {Header, Content, Footer} = Layout;

const AppLayout = styled(Layout)`
  
`;

const AppHeader = styled(Header)`
  background : #eee;
  height : 64px;
  padding : 0 15px;
  text-align : center;

`;

export default App;
