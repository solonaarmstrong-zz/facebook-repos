import React from 'react';
import Link from './components/Link/Link';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <p className="App-header__name">
          <Link url="http://www.solonaarmstrong.com">Solona</Link>
        </p>
        <p>Facebook projects on GitHub</p>
      </header>
    </div>
  );
}

export default App;
