import React, { useState } from 'react';
import TopBar from './components/TopBar';
import MainPage from './components/MainPage/MainPage';
import UXDesign from './components/Layers/UXDesign';
import Website from './components/Layers/Website';
import ContentWriting from './components/Layers/ContentWriting';
import Avatars from './components/Avatars';
import SideBar from './components/SideBar';
import './App.css';

function App() {
  let counts = useState(false);
  console.log(counts[0]);
  return (
    <div className="main">
      {counts[0] ? <SideBar counts={counts} /> : null}
      <TopBar counts={counts} />
      <MainPage />
      <div className="layers">
        <UXDesign />
        <Website />
        <ContentWriting />
      </div>
      <Avatars />
    </div>
  );
}

export default App;
