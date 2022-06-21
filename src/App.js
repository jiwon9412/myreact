import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Main from './components/pages/main';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/main" element={<Main />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
