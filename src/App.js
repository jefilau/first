import React from 'react';

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import Firstpage from './Firstpage';
import Question from './Question';
import Test from './Test';
import Game from './Game';
import Trial from './Trial';
import Trial2 from './Trial2';
import Aboutus from './Aboutus'
function App() {
  return (
  <BrowserRouter>

    <Routes>
      
      <Route path="/" element={<Firstpage/>} />
      <Route path="/question" element={<Question/>} />
      <Route path="/test" element={<Test/>} />
      <Route path="/game" element={<Game/>} />
      <Route path="/trial" element={<Trial/>} />
      <Route path="/trial2" element={<Trial2/>} />
      <Route path="/aboutus" element={<Aboutus/>} />
      
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  </BrowserRouter>
   
  );
}
//下面果句係event Handler: 打錯link 一律redirect 去home
      
export default App;
