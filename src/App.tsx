import React from 'react';
import { Provider } from 'react-redux';
import store from './ts/store/store';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Main from './components/Main/Main';
import Section from './components/Section/Section';

import './App.css';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <Header />
        <Main>
          <Sidebar />
          <Section>
            Stuff
          </Section>
        </Main>
      </div>
    </Provider>
  );
}

export default App;
