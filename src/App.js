import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Row, Col } from 'antd';

import Main from './components/pages/main';
import Header from './components/templetes/Header';
import Footer from './components/templetes/Footer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Row>
          <Col span={24}>
            <Header />
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            <Routes>
              <Route path="/main" element={<Main />} />
            </Routes>
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            <Footer />
          </Col>
        </Row>
      </BrowserRouter>
    </div>
  );
}

export default App;
