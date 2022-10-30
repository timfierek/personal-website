import React from 'react';
import './App.css';
import Landing from './components/Landing';
import MainContent from './components/MainContent';

function App() {
  const [showLanding, setShowLanding] = React.useState(false);

  function toggleLanding() {
    setShowLanding(prevVal => (!prevVal))
  }

  return (
    <div className="App">
      {showLanding && <Landing handleClick={toggleLanding}/>}
      
      {!showLanding && 
        <div className="body">
          <MainContent navigateHome={toggleLanding}/>
        </div>
      }

    </div>
  );
}

export default App;
