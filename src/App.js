import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Layout } from 'antd';
import styled from 'styled-components';

import MenuList from './components/atoms/menuList';

import menuListData from './assets/menulist.json';

function App() {
  return (
    <div className="App">
      <Layout>
        <AppHeader>
          <MenuList data={menuListData} />
        </AppHeader>

        <AppContent>
          <AboutMeDiv>AboutMe</AboutMeDiv>
          <SkillsDiv>Skills</SkillsDiv>
          <TimelineDiv>Timeline</TimelineDiv>
          <ProjectDiv>Project</ProjectDiv>
        </AppContent>
      </Layout>
    </div>
  );
}
const { Header, Content, Footer } = Layout;

const AppHeader = styled(Header)`
  background: #eee;
  height: 64px;
  padding: 0 15px;
  text-align: center;
`;

const AppContent = styled(Content)`
  background: #fff;
`;

const AboutMeDiv = styled.div`
  background: #f59a86;
  height: 300px;
`;

const SkillsDiv = styled.div`
  background: #a8fea1;
  height: 300px;
`;

const TimelineDiv = styled.div`
  background: #a9fffe;
  height: 300px;
`;

const ProjectDiv = styled.div`
  background: #edd3ff;
  height: 300px;
`;

export default App;
