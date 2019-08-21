import React from 'react';
import Header from './components/Header/Header';
import SelectPlayers from './pages/SelectPlayers/SelectPlayers';
import Popular from './pages/Popular/Popular'

function App() {
  return (
    <div className={'flex flex-column'}>
      <Header />
      <Popular/>
    </div>
  );
}

export default App;
