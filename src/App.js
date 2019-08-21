import React from 'react';
import Header from './components/Header/Header';
import SelectPlayers from './pages/SelectPlayers/SelectPlayers';

function App() {
  return (
    <div className={'flex flex-column'}>
      <Header />
      <SelectPlayers/>
    </div>
  );
}

export default App;
