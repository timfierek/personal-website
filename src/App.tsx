import React from 'react';
import './App.css';
import Landing from './components/Landing';
import Header from './components/Header';
import MainContent from './components/MainContent';

function App() {
  const [showLanding, setShowLanding] = React.useState(true);

  function toggleLanding() {
    setShowLanding(prevVal => (!prevVal))
  }

  return (
    <div className="App">
      
      {showLanding && <Landing handleClick={toggleLanding}/>}
      {!showLanding && 
        <div className="body">
          <Header navigateHome={toggleLanding}/>
          <MainContent/>
        </div>
      }

    </div>
  );
}

export default App;
