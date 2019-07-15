import React from 'react';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Main from './components/Main/Main';
import Section from './components/Section/Section';

import './App.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <Main>
        <Sidebar />
        <Section>
          Stuff
        </Section>
      </Main>
    </div>
  );
}

export default App;
