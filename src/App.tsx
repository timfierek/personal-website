import React from 'react';
import './App.css';
import Landing from './components/Landing';
import MainContent from './components/MainContent';

function App() {
  const [displayLanding, setDisplayLanding] = React.useState(true)

  const showHideLanding = () => {
    setDisplayLanding(prevVal => (!prevVal))
  }

  return (
    <div className="App">
      {displayLanding &&
        <Landing handleClick={showHideLanding} />
      }

      {!displayLanding &&
        <MainContent navigateHome={showHideLanding} />
      }
    </div>
  )
}

export default App;
